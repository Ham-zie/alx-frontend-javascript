// Create the DirectorInterface interface with the 3 expected methods
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  // Create the TeacherInterface interface with the 3 expected methods
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Create a class Director that will implement DirectorInterface
  class Director implements DirectorInterface {
    // workFromHome should return the string Working from home
    workFromHome(): string {
      return "Working from home";
    }
  
    // getCoffeeBreak should return the string Getting a coffee break
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
  
    // workDirectorTasks should return the string Getting to director tasks
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }
  // Create a function createEmployee with the following requirements
function createEmployee(salary: number | string): Director | Teacher {
    // It can return either a Director or a Teacher instance
    // It accepts 1 argument: salary (either number or string)
    
    // Convert salary to a number if it is a string
    if (typeof salary === "string") {
      salary = parseInt(salary);
    }
  
    // If salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director
    if (typeof salary === "number" && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
  
  // Create a class Teacher that will implement TeacherInterface
  class Teacher implements TeacherInterface {
    // workFromHome should return the string Cannot work from home
    workFromHome(): string {
      return "Cannot work from home";
    }
  
    // getCoffeeBreak should return the string Cannot have a break
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
  
    // workTeacherTasks should return the string Getting to work
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
  
  // Create a function createEmployee with the following requirements
  function createEmployee(salary: number | string): Director | Teacher {
    // It can return either a Director or a Teacher instance
    // It accepts 1 argument: salary (either number or string)
    
    // Convert salary to a number if it is a string
    if (typeof salary === "string") {
      salary = parseInt(salary);
    }
  
    // Write a function isDirector
function isDirector(employee: Director | Teacher): employee is Director {
    // It will be used as a type predicate and if the employee is a director
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
  // Write a function executeWork
  function executeWork(employee: Director | Teacher): string {
    // It accepts employee as an argument
    // If the employee is a Director, it will call workDirectorTasks
    if (isDirector(employee)) {
      return employee.workDirectorTasks();
    }
    // If the employee is a Teacher, it will call workTeacherTasks
    else {
      return employee.workTeacherTasks();
    }
  }
  