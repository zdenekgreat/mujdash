"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@repo/ui/components/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// 1. Definice Schématu (Validace)
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Jméno musí mít alespoň 2 znaky.",
  }),
  email: z.string().email({
    message: "Zadejte platný email.",
  }),
});

export default function DashboardPage() {
  // 2. Setup formuláře
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  // 3. Funkce po odeslání
  function onSubmit(values: z.infer<typeof formSchema>) {
    alert(`Odesláno!\nJméno: ${values.username}\nEmail: ${values.email}`);
    form.reset();
  }

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-bold text-primary">Dashboard</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* LEVÝ PANEL - Formulář */}
        <Card>
          <CardHeader>
            <CardTitle>Rychlé přidání uživatele</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                
                {/* Pole: Username */}
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Uživatelské jméno</FormLabel>
                      <FormControl>
                        <Input placeholder="Jan Novák" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Pole: Email */}
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

                <Button type="submit" className="w-full">Vytvořit uživatele</Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* PRAVÝ PANEL - Jen pro ukázku layoutu */}
        <Card className="flex items-center justify-center bg-muted/20 border-dashed">
          <p className="text-muted-foreground">Zde budou grafy...</p>
        </Card>
      </div>
    </div>
  );
}