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

// Explicitní definice typu, aby TS v buildu mlčel
type UserFromDb = {
  id: string;
  name: string;
  email: string;
};

const formSchema = z.object({
  username: z.string().min(2, "Jméno je moc krátké"),
  email: z.string().email("Neplatný email"),
});

export default function DashboardPage() {
  const utils = trpc.useUtils();
  const { data: users, isLoading, isFetching } = trpc.getUsers.useQuery();

  const createUser = trpc.createUser.useMutation({
    onSuccess: () => {
      utils.getUsers.invalidate();
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
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        {isFetching && <RefreshCw className="h-4 w-4 animate-spin" />}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>Přidat uživatele</CardTitle></CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl><Input placeholder="Jméno" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl><Input placeholder="Email" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" disabled={createUser.isPending}>
                  {createUser.isPending ? "Ukládám..." : "Uložit"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Data z DB</CardTitle></CardHeader>
          <CardContent>
            {isLoading ? <Loader2 className="animate-spin" /> : (
              <div className="space-y-2">
                {/* Tady jsme přidali (u: UserFromDb), což zaručí průchod buildem */}
                {users?.map((u: UserFromDb) => (
                  <div key={u.id} className="text-sm border-b pb-1">
                    <div className="font-bold">{u.name}</div>
                    <div className="text-muted-foreground">{u.email}</div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}