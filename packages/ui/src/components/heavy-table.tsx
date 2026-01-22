"use client";

import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

// 1. IMPORTY STYLŮ (Ponecháváme, jsou nejstabilnější pro layout)
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
    // 2. VYNUCENÍ VÝŠKY A ŠÍŘKY
    // Třída "ag-theme-quartz" aktivuje CSS téma, které importujeme výše
    <div 
      className="ag-theme-quartz" 
      style={{ height: '600px', width: '100%' }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        
        // 3. KLÍČOVÁ OPRAVA: Říkáme AG Gridu, aby používal CSS témata (v32 styl)
        // a nekombinoval to s novým Theming API. Tím zmizí Error #239.
        theme="legacy"

        pagination={true}
        paginationPageSize={20}
        paginationPageSizeSelector={[20, 50, 100]}
        
        // Zajištění, že se sloupce roztáhnou, pokud je místo
        autoSizeStrategy={{ type: 'fitGridWidth' }}
      />
    </div>
  );
};