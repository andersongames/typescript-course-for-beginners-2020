// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
// // const person = {
//     name: 'Anderson',
//     age: 25,
//     hobbies: ['Gaming', 'Shooting'],
//     role: [2, 'developer'] // Tuple
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 'ADMIN', READ_ONLY = 5, AUTHOR };

const person = {
    name: 'Anderson',
    age: 25,
    hobbies: ['Gaming', 'Shooting'],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Gaming'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); !!! ERROR !!!
}

if (person.role === Role.AUTHOR) {
    console.log('is author');
}