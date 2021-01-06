function a(name, name1) {
    console.log('hello ' + name + ' ' + name1);
}

const tim = {name: 'Tim'};

const b = a.bind(tim);

b();

a.apply(tim, ['tim', 'you']);
a.call(tim, 'Tim', 'You');

const arry = [1, 2, 3, 4, 5];

// const result = Math.max.apply(null, arry);
const result = Math.max(...arry);
console.log(result);