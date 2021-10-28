/**
 * Task 5
 */
console.log("Output Task 5");

interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface  {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof(salary) == 'number' && salary < 500) {
        return new Teacher;
    } else {
        return new Director;
    }
}

console.log(createEmployee(200).getCoffeeBreak());
console.log(createEmployee(1000).workFromHome());
console.log(createEmployee('$500').getCoffeeBreak());

/**
 * Task 6
 */
console.log("Output Task 6");

function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
    return employee.workFromHome() == "Working from home";
}

function executeWork(employee: DirectorInterface | TeacherInterface): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

/**
 * Task 7
 */
console.log("Output Task 7");

type Subjects = "Math" | "History";
function teachClass(todayClass: Subjects): string {
    if (todayClass == "Math") {
        return "Teaching Math";
    } else if (todayClass == "History") {
        return "Teaching History";
    }
}

console.log(teachClass('Math'));
console.log(teachClass('History'));