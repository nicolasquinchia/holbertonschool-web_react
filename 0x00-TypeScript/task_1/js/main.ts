//------------------Task1----------------

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3);

//------------------Task2----------------

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

//------------------Task3----------------

interface printTeacherFunction {
    (firstName: string, lastName:string): String;
}

const printTeacher: printTeacherFunction = function(firstName: string, lastName: string) {
    return firstName[0] + ". " + lastName;
}

console.log(printTeacher(director1.firstName, director1.lastName));

//------------------Task4----------------

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface StudentClassConstructorInterface {
    new(firstName: string, lastName: string): StudentClassInterface;
}

let stdClass: StudentClassConstructorInterface;
stdClass = class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return "Currently working";
    }
    displayName(): string {
        return this.firstName;
    }
}

const newStudent = new stdClass("Doom", "Slayer");
console.log(newStudent.firstName);
console.log(newStudent.lastName);
console.log(newStudent.workOnHomework());
console.log(newStudent.displayName());
