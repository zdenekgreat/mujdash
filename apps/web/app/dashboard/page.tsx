"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@repo/ui/components/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { trpc } from "@/lib/trpc"; // Import tRPC klienta
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2, { message: "Jméno je krátké." }),
  email: z.string().email({ message: "Neplatný email." }),
});

export default function DashboardPage() {
  const utils = trpc.useUtils(); // Pro aktualizaci dat po uložení
  
  // 1. Dotaz na data z DB
  const { data: users, isLoading } = trpc.getUsers.useQuery();

  // 2. Mutace pro uložení do DB
  const createUser = trpc.createUser.useMutation({
    onSuccess: () => {
      utils.getUsers.invalidate(); // Znovu načte seznam uživatelů po úspěchu
      form.reset();
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", email: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    createUser.mutate({
      name: values.username,
      email: values.email,
    });
  }

  return (
    <div className="space-y-8 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-primary">Live Dashboard</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
        <Card className="lg:col-span-2 shadow-sm border-border/60">
          <CardHeader>
            <CardTitle>Nový uživatel (Uloží se do PostgreSQL)</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Jméno</FormLabel>
                        <FormControl>
                          <Input placeholder="Jan Novák" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="jan@firma.cz" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-end pt-2">
                  <Button type="submit" disabled={createUser.isPending} className="w-full md:w-auto px-8">
                    {createUser.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Uložit do databáze
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-border/60 bg-muted/10 p-6">
          <h3 className="font-semibold mb-4">Poslední přidaní:</h3>
          {isLoading ? (
            <Loader2 className="h-6 w-6 animate-spin mx-auto" />
          ) : (
            <ul className="space-y-2">
              {users?.slice(0, 5).map((user) => (
                <li key={user.id} className="text-sm border-b pb-2">
                  <span className="font-medium">{user.name}</span>
                  <br />
                  <span className="text-muted-foreground text-xs">{user.email}</span>
                </li>
              ))}
              {users?.length === 0 && <li className="text-muted-foreground text-sm italic">Žádná data v DB.</li>}
            </ul>
          )}
        </Card>
      </div>
    </div>
  );
}