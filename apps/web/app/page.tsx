import { redirect } from "next/navigation";

export default function Home() {
  // Okamžitě přesměruj na dashboard
  redirect("/dashboard");
}