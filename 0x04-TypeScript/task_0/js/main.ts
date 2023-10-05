// Define an interface named Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  let student1: Student = {
    firstName: "Alice",
    lastName: "Smith",
    age: 20,
    location: "New York"
  };
  
  let student2: Student = {
    firstName: "Bob",
    lastName: "Jones",
    age: 21,
    location: "London"
  };
  
  // Create an array named studentsList containing the two students
  let studentsList: Student[] = [student1, student2];
  
  // Get a reference to the HTML element where the table will be rendered
  let container = document.getElementById("container");
  
  // Create a table element
  let table = document.createElement("table");
  
  // Create a table header row
  let headerRow = document.createElement("tr");
  
  // Create two table header cells
  let headerCell1 = document.createElement("th");
  let headerCell2 = document.createElement("th");
  
  // Set the text content of the header cells
  headerCell1.textContent = "First Name";
  headerCell2.textContent = "Location";
  
  // Append the header cells to the header row
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  
  // Append the header row to the table
  table.appendChild(headerRow);
  
  // Loop through the studentsList array
  for (let student of studentsList) {
    // Create a table data row for each student
    let dataRow = document.createElement("tr");
  
    // Create two table data cells for each student
    let dataCell1 = document.createElement("td");
    let dataCell2 = document.createElement("td");
  
    // Set the text content of the data cells to the first name and location of the student
    dataCell1.textContent = student.firstName;
    dataCell2.textContent = student.location;
  
    // Append the data cells to the data row
    dataRow.appendChild(dataCell1);
    dataRow.appendChild(dataCell2);
  
    // Append the data row to the table
    table.appendChild(dataRow);
  }
  
  // Append the table to the container element
  container.appendChild(table);
  