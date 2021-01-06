window.name = 'John';


const person = {
    name: 'Tom',
    hello() {
        const a = () => console.log('Bye ' + this.name);
        console.log('Hello ' + this.name);
        a();
    }
}
// person.hello();

function b() {
    const a = () => console.group('Bye ' + this.name);
    a();
}

b();

