// Objeto literal

const natalia = {

    name: "Leandro",
    age: 20,

    cursosAprobados: [
        "Curso Definitivo de HTML Y CSS",
        "Curso Práctico de HTML Y CSS",
    ],

    aprobarCurso(cursoAprobado) {
        this.cursosAprobados.push(cursoAprobado);
    },

};

// Prototipos

function Student(name, age, cursosAprobados) {

    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

}

Student.prototype.aprobarCurso = function(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}



const juanita = new Student("Juanita Alejandra", 15, ["Java", "CSS", "JavaScript"]);

// Prototipos con la sintaxis de clases
class Student2 {

    constructor({ name, age, cursosAprobados = [], email }) {
        this.name = name;
        this.age = age;
        this.email = email
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }

}


const miguelito = new Student2({
    name: "Miguel",
    email: "mieguelito@test.com",
    age: 28,
});