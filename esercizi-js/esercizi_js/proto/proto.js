"use strict";

function Student(name, age) {
    this.name = name;
    this.age = age;
    /*
    this.sayName = function() {
        console.log("Ciao sono " + this.name);
    }
    */
}
Student.prototype.university = "Tor Vergata";
Student.prototype.sayName = function() {
    console.log("Ciao sono " + this.name);
}

let pippo = new Student("pippo", 20);
let pluto = new Student("pluto", 10);
let topolino = new Student("topolino", 15);

pippo.sayName();
pluto.sayName();
topolino.sayName();