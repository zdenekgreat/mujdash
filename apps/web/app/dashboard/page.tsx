"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@repo/ui/components/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Jméno musí mít alespoň 2 znaky.",
  }),
  email: z.string().email({
    message: "Zadejte platný email.",
  }),
});

export default function DashboardPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    alert(`Odesláno!\nJméno: ${values.username}\nEmail: ${values.email}`);
    form.reset();
  }

  return (
    <div className="space-y-8 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-primary">Přehled</h2>
      </div>

      {/* GRID SYSTÉM: 1 sloupec na mobilu, 2 na tabletu, 3 na velkém desktopu */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
        
        {/* Formulář - zabírá na desktopu více místa (lg:col-span-2) */}
        <Card className="lg:col-span-2 shadow-sm border-border/60">
          <CardHeader>
            <CardTitle>Rychlé přidání uživatele</CardTitle>
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
                        <FormLabel>Uživatelské jméno</FormLabel>
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
                  <Button type="submit" className="w-full md:w-auto px-8">
                    Vytvořit uživatele
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Statistiky - boční panel */}
        <Card className="shadow-sm border-border/60 bg-muted/20 border-dashed flex flex-col items-center justify-center p-8 text-center">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg text-muted-foreground">Systémový stav</h3>
            <p className="text-sm text-muted-foreground/80">
              Všechny systémy běží v pořádku. Připojeno k API.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}