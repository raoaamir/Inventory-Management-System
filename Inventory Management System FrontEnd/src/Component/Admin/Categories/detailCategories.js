import * as React from "react";
import { DataGridPro } from "@mui/x-data-grid-pro";

const rows = [
  {
    hierarchy: ["Aamir"],
    subCategoryName: "Keyboard",
    VendorName: "Taj Group",
    Quantity: 500,
    QuantityAssigned: 35,
    QuantityUnassigned: 30,
    QuantityFaulty: 4,
    Action: "View",
    id: 1
  },
  {
    hierarchy: ["Aamir", "Robert"],
    subCategoryName: "Cable",
    VendorName: "Taj Group",
    Quantity: 500,
    QuantityAssigned: 35,
    QuantityUnassigned: 30,
    QuantityFaulty: 4,
    Action: "View",
    id: 2
  },
  {
    hierarchy: ["Aamir", "Karen"],
    subCategoryName: "Adaptor",
    VendorName: "Taj Group",
    Quantity: 500,
    QuantityAssigned: 35,
    QuantityUnassigned: 30,
    QuantityFaulty: 4,
    Action: "View",
    id: 3
  },
  {
    hierarchy: ["Aamir", "Nancy"],
    subCategoryName: "CD",
    VendorName: "Taj Group",
    Quantity: 500,
    QuantityAssigned: 35,
    QuantityUnassigned: 30,
    QuantityFaulty: 4,
    Action: "View",
    id: 4
  },
  {
    hierarchy: ["Aamir", "Daniel"],
    subCategoryName: "Pin Drive",
    VendorName: "Taj Group",
    Quantity: 500,
    QuantityAssigned: 35,
    QuantityUnassigned: 30,
    QuantityFaulty: 4,
    Action: "View",
    id: 5
  }
];
const columns = [
  { field: "subCategoryName", headerName: "subCategory Name", width: 200 },
  { field: "VendorName", headerName: "Vendor Name", width: 150 },
  { field: "Quantity", headerName: "Quantity", width: 150 },
  { field: "QuantityAssigned", headerName: "Quantity Assigned", width: 150 },
  {
    field: "QuantityUnassigned",
    headerName: "Quantity Unassigned",
    width: 150
  },
  { field: "QuantityFaulty", headerName: "QuantityFaulty", width: 150 },
  { field: "Action", headerName: "Action", width: 150 }
];

const getTreeDataPath = (row) => row.hierarchy;

export default function TreeDataSimple() {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGridPro
        treeData
        rows={rows}
        columns={columns}
        getTreeDataPath={getTreeDataPath}
      />
    </div>
  );
}