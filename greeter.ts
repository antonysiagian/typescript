class Student{
	
	fullName: string;

	constructor(public firstName, public lastName){
		this.fullName = firstName + " " + lastName;
	}

}

interface Person {
	firstName: string, 
	lastName: string;
}

function greeter(person: Person){
  return "Hello, " + person.firstName;
}

var user = new Student("Antony", "Ganteng");

document.body.innerHTML = greeter(user);

