"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@repo/ui/components/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { trpc } from "@/lib/trpc";
import { Loader2, RefreshCw } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2, "Jméno je moc krátké"),
  email: z.string().email("Neplatný email"),
});

export default function DashboardPage() {
  const utils = trpc.useUtils();
  
  // Dotaz na data
  const { data: users, isLoading, isFetching } = trpc.getUsers.useQuery();

  // Funkce pro zápis
  const createUser = trpc.createUser.useMutation({
    onSuccess: () => {
      utils.getUsers.invalidate(); // Zneplatní stará data a načte nová
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
    <div className="space-y-8 w-full p-2">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-primary">Live DB Dashboard</h2>
        {isFetching && <RefreshCw className="h-4 w-4 animate-spin text-muted-foreground" />}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
        {/* FORMULÁŘ */}
        <Card className="lg:col-span-2 shadow-sm border-border/60">
          <CardHeader>
            <CardTitle>Napsat do PostgreSQL</CardTitle>
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
                        <FormControl><Input placeholder="Pavel Novotný" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl><Input placeholder="pavel@firma.cz" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" disabled={createUser.isPending} className="w-full md:w-auto px-8">
                  {createUser.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Uložit navždy
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* LIST */}
        <Card className="shadow-sm border-border/60">
          <CardHeader>
            <CardTitle>Data z Cloudu</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center p-4"><Loader2 className="h-6 w-6 animate-spin" /></div>
            ) : (
              <div className="space-y-4">
                {users?.map((u) => (
                  <div key={u.id} className="flex flex-col border-b pb-2 last:border-0">
                    <span className="font-bold text-sm">{u.name}</span>
                    <span className="text-xs text-muted-foreground">{u.email}</span>
                  </div>
                ))}
                {users?.length === 0 && <p className="text-sm italic text-center text-muted-foreground">V DB zatím nikdo není.</p>}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}