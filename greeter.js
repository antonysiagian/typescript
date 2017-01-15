var Student = (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName;
}
var user = new Student("Antony", "Ganteng");
document.body.innerHTML = greeter(user);
