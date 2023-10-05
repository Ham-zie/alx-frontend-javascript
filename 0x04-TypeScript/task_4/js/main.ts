// Import the Subject and Teacher interfaces
import { Subject, Teacher } from "./interface";

// Create and export a constant cpp for Cpp Subjects
export const cpp: Subject = {
  name: "C++",
  getRequirements(): string {
    return "C++ is a language for the Gods";
  },
  getAvailableTeacher(): string {
    if (this.teacher.experienceTeachingC > 0) {
      return `Available Teacher: ${this.teacher.firstName}`;
    } else {
      return "No available teacher";
    }
  },
  teacher: undefined
};

// Create and export a constant java for Java Subjects
export const java: Subject = {
  name: "Java",
  getRequirements(): string {
    return "Java is a popular language";
  },
  getAvailableTeacher(): string {
    if (this.teacher.experienceTeachingC > 0) {
      return `Available Teacher: ${this.teacher.firstName}`;
    } else {
      return "No available teacher";
    }
  },
  teacher: undefined
};

// Create and export a constant react for React Subjects
export const react: Subject = {
  name: "React",
  getRequirements(): string {
    return "React is a framework for web development";
  },
  getAvailableTeacher(): string {
    if (this.teacher.experienceTeachingC > 0) {
      return `Available Teacher: ${this.teacher.firstName}`;
    } else {
      return "No available teacher";
    }
  },
  teacher: undefined
};

// Create and export one Teacher object cTeacher with experienceTeachingC = 10
export const cTeacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "New York",
  experienceTeachingC: 10
};

// For Cpp subject, log to the console C++, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher and print the strings they return
console.log("C++");
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject, log to the console Java, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher, and print the strings they return
console.log("Java");
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject, log to the console React, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher, and print the strings they return
console.log("React");
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
