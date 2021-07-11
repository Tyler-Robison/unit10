function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    };
}

/////////////////

let favoriteNumber = 42;

const instructor = {
    firstName: 'Colt',
    [favoriteNumber]: "That is my favorite!"
}

/////////////////

const instructor2 = {
    firstName: "Colt",
    sayHi() {
        return 'Hi!';
    },
    sayBye() {
        return this.firstName + ' says bye!'
    }
}

/////////////////

function creatAnimal(species, verb, noise){
    return {
        species,
        verb() {
            return verb;
        },
        [verb]() {
            return noise;
        }
    };
}