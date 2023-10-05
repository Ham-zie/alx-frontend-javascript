// Write an ambient file within task_3/js, named crud.d.ts containing the type declarations for each crud function. At the top of the file import RowID and RowElement from interface.ts.

// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from "./interface";

// Declare the type declarations for each crud function
declare function insertRow(row: RowElement): RowID;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID;

// In main.ts

// At the top of the file create a triple slash directive that includes all the dependencies from crud.d.ts
/// <reference path="./crud.d.ts" />

// Import the rowID type and rowElement from interface.ts
import { RowID, RowElement } from "./interface";

// Import everything from crud.js as CRUD
import * as CRUD from "./crud";

// Create an object called row with the type RowElement with the fields set to these values:
// firstName: Guillaume
// lastName: Salva
let row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

// Create a const variable named newRowID with the type RowID and assign the value the insertRow command.
const newRowID: RowID = CRUD.insertRow(row);

// Next, create a const variable named updatedRow with the type RowElement and update row with an age field set to 23
const updatedRow: RowElement = { ...row, age: 23 };

// Finally, call the updateRow and deleteRow commands.
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
