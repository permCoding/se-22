class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    valueOf = () => this.age;
    toString = () => `name: ${this.name}, age: ${this.age}`;
}


let students =  [
    new Student('Петров', 21),
    new Student('Сидоров', 19),
    new Student('Иванов', 22)
]

students.forEach(st => console.log(st.toString()));

console.log(students[0] > students[1]? 'старше': 'младше');

students.sort((a, b) => a.age - b.age);

students.forEach(st => console.log(st.toString()));
