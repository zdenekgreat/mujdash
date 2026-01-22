"use client";

import { HeavyTable } from "@repo/ui/components/heavy-table";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card";

// Generátor náhodných dat (5000 řádků)
const generateData = (count: number) => {
  const data = [];
  const roles = ["Admin", "User", "Editor", "Viewer"];
  const statuses = ["Active", "Pending", "Banned"];

  for (let i = 0; i < count; i++) {
    data.push({
      id: i + 1,
      name: `Uživatel ${i + 1}`,
      email: `uzivatel${i + 1}@firma.cz`,
      role: roles[Math.floor(Math.random() * roles.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      sales: Math.floor(Math.random() * 100000),
      lastLogin: new Date().toLocaleDateString(),
    });
  }
  return data;
};

const rowData = generateData(5000);

// Definice sloupců pro AG Grid
const columnDefs = [
  { field: "id", headerName: "ID", width: 80, sortable: true, filter: true },
  { field: "name", headerName: "Jméno", flex: 1, sortable: true, filter: true },
  { field: "email", headerName: "Email", flex: 1, sortable: true, filter: true },
  { field: "role", headerName: "Role", width: 120, sortable: true, filter: true },
  { 
    field: "status", 
    headerName: "Status", 
    width: 120, 
    cellRenderer: (params: any) => {
        return params.value === "Active" 
            ? <span className="text-green-600 font-bold">Active</span> 
            : <span className="text-gray-500">{params.value}</span>
    }
  },
  { 
    field: "sales", 
    headerName: "Prodeje (Kč)", 
    sortable: true, 
    filter: "agNumberColumnFilter" 
  },
];

export default function GridPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Heavy Data Grid</h2>
        <p className="text-muted-foreground">
          AG Grid s 5000 řádky. Zkuste řadit, filtrovat nebo měnit stránky. Je to okamžité.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Enterprise Dataset</CardTitle>
        </CardHeader>
        <CardContent>
          <HeavyTable rowData={rowData} columnDefs={columnDefs} />
        </CardContent>
      </Card>
    </div>
  );
}