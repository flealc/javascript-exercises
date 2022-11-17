const findTheOldest = function(people) {
    let person = undefined;
    let age = 0;

    function find(currentPerson) {

        let currentAge = undefined;
        if (currentPerson.yearOfDeath === undefined) {
            let now = new Date(Date()).getFullYear();
            currentAge = now - currentPerson.yearOfBirth;
            if (currentAge > age) {
                age = currentAge;
                person = currentPerson;
            }
        }
        else {
            currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
            if (currentAge > age) {
                age = currentAge;
                person = currentPerson;
            }
        }

    }
    people.forEach(currentPerson => find(currentPerson));
    return person;
};



// Do not edit below this line
module.exports = findTheOldest;
