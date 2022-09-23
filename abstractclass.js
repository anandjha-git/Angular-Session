"use strict";
class EmployeeInfo {
    constructor(name) {
        this.name = name;
    }
    sName() {
        return `${this.name}`;
    }
}
//let emp=new EmployeeInfo("Ajinkya");
class FullTimeEmployee extends EmployeeInfo {
    constructor(name, salary) {
        super(name);
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
let emp1 = new FullTimeEmployee("Anil", 50000);
console.log(emp1.sName() + " " + emp1.getSalary());
