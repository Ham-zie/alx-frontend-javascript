// Define an interface named Teacher
interface Teacher {
    // These two attributes should only be modifiable when a Teacher is first initialized
    readonly firstName: string;
    readonly lastName: string;
    // This attribute should always be defined
    fullTimeEmployee: boolean;
    // This attribute is optional
    yearsOfExperience?: number;
    // This attribute should always be defined
    location: string;
    // Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute
    [key: string]: any;
  }
  
  // Create a teacher
  let teacher1: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "Paris",
    contract: false // This is an extra attribute that is not specified in the interface
  };
  
  // Try to modify the first name of the teacher (this should cause an error)
  teacher1.firstName = "Jane"; // Error: Cannot assign to 'firstName' because it is a read-only property.
  // Define an interface named Teacher
interface Teacher {
    // These two attributes should only be modifiable when a Teacher is first initialized
    readonly firstName: string;
    readonly lastName: string;
    // This attribute should always be defined
    fullTimeEmployee: boolean;
    // This attribute is optional
    yearsOfExperience?: number;
    // This attribute should always be defined
    location: string;
    // Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute
    [key: string]: any;
  }
  
  // Define an interface named Directors that extends Teacher
  interface Directors extends Teacher {
    // It requires an attribute named numberOfReports(number)
    numberOfReports: number;
  }
  
  // Create a director
  let director1: Directors = {
    firstName: "Jane",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: "London",
    contract: true, // This is an extra attribute that is not specified in the interface
    numberOfReports: 5 // This is a required attribute for directors
  };
  // Write a function printTeacher
function printTeacher(firstName: string, lastName: string): string {
    // It returns the first letter of the firstName and the full lastName
    return firstName[0] + ". " + lastName;
  }
  
  // Write an interface for the function named printTeacherFunction
  interface printTeacherFunction {
    // It accepts two arguments firstName and lastName
    (firstName: string, lastName: string): string;
  }
  
  // Assign the function to a variable that matches the interface
  let printTeacherVar: printTeacherFunction = printTeacher;
  
  // Example: printTeacher("John", "Doe") -> J. Doe
  console.log(printTeacherVar("John", "Doe")); // J. Doe
  