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

// Definice typu pro TS build
type UserFromDb = {
  id: string;
  name: string;
  email: string;
};

const formSchema = z.object({
  username: z.string().min(2, "Jméno musí mít aspoň 2 znaky"),
  email: z.string().email("Zadej platný email"),
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
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Moje Aplikace</h1>
        {isFetching && <RefreshCw className="animate-spin h-5 w-5 text-gray-400" />}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Přidat uživatele</CardTitle></CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                <Button type="submit" className="w-full" disabled={createUser.isPending}>
                  {createUser.isPending ? "Ukládám..." : "Uložit do DB"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Seznam z Neon DB</CardTitle></CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center"><Loader2 className="animate-spin" /></div>
            ) : (
              <div className="space-y-2">
                {users?.map((u: UserFromDb) => (
                  <div key={u.id} className="p-2 border-b last:border-0">
                    <div className="font-semibold text-sm">{u.name}</div>
                    <div className="text-xs text-gray-500">{u.email}</div>
                  </div>
                ))}
                {users?.length === 0 && <p className="text-gray-400 italic text-sm text-center">Žádná data.</p>}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}