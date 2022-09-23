"use strict";
class Employee {
    constructor(code, name) {
        this.empcode = 0;
        this.empName = "";
        this.department = "Accounts";
        this.empName = name;
        this.empcode = code;
        this.department = "abc";
    }
    display() {
        //this.department="Sales";
        console.log("empcode=" + this.empcode);
        console.log("empname=" + this.empName);
        console.log("department" + this.department);
    }
}
let emp = new Employee(101, "Swati");
emp.display();
//emp.department="sales";
//emp.empcode=123;
emp.display();
