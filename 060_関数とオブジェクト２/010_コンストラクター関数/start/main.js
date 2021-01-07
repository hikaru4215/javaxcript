function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hello = function() {
        console.log('hello' + this.name)
    }
}

// Person.prototype.hello = function() {
//     console.log('hello' + this.name)
// }

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 20);
const sun = new Person('Sun', 17);
console.log(bob);
console.log(tom);
console.log(sun);

bob.hello();
tom.hello();
sun.hello();