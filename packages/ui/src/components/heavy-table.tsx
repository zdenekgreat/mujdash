"use client";

import { AgGridReact } from 'ag-grid-react';
import { useState } from 'react';

// 1. NOVÉ IMPORTY PRO v33+ (Žádné CSS soubory!)
import { 
  ModuleRegistry, 
  AllCommunityModule, 
  themeQuartz // <--- Nový způsob stylování
} from 'ag-grid-community'; 

// 2. Registrace modulů
ModuleRegistry.registerModules([ AllCommunityModule ]);

interface HeavyTableProps {
  rowData: any[];
  columnDefs: any[];
}

export const HeavyTable = ({ rowData, columnDefs }: HeavyTableProps) => {
  return (
    // Zde už NEMUSÍ BÝT class "ag-theme-quartz", stačí jen rozměry
    <div className="h-[500px] w-full font-sans">
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        
        // 3. PŘEDÁNÍ TÉMATU PŘES PROP
        theme={themeQuartz}

        pagination={true}
        paginationPageSize={20}
        paginationPageSizeSelector={[20, 50, 100]}
      />
    </div>
  );
};