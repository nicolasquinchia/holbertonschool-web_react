interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {firstName: "Monica", lastName: "Ortiz", age: 27, location: "Medellin"};
const student2: Student = {firstName: "Doom", lastName: "Slayer", age: 28, location:"Hell"};

const studentsList: Student[] = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const tbl: HTMLTableElement = document.createElement("table");
var tblBody: HTMLTableSectionElement = document.createElement("tbody");

studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = tblBody.insertRow(0);
    const cellName: HTMLTableCellElement = row.insertCell(0);
    const cellLoca: HTMLTableCellElement = row.insertCell(1);
    cellName.innerHTML = student.firstName;
    cellLoca.innerHTML = student.location;
});

tbl.append(tblBody);
body.append(tbl);
