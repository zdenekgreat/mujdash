"use client";

import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

// 1. POVINNÉ IMPORTY STYLŮ (Legacy mode - nejspolehlivější)
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

// Registrace modulů
ModuleRegistry.registerModules([ AllCommunityModule ]);

interface HeavyTableProps {
  rowData: any[];
  columnDefs: any[];
}

export const HeavyTable = ({ rowData, columnDefs }: HeavyTableProps) => {
  return (
    // 2. OPRAVA: Použijeme "style" pro výšku a šířku.
    // Třída "ag-theme-quartz" zajistí vzhled.
    <div 
      className="ag-theme-quartz" 
      style={{ height: '500px', width: '100%' }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        
        // 3. DŮLEŽITÉ: Zde NEPOSÍLÁME 'theme={...}'
        // Necháme to na CSS třídě nahoře, to funguje vždy.

        pagination={true}
        paginationPageSize={20}
        paginationPageSizeSelector={[20, 50, 100]}
      />
    </div>
  );
};