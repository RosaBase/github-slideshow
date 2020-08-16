/*
let car = {
make: 'Toyota Carib',
    model: '74511',
    year: '1999',

    getPrice: function() {
        return 400000000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model)
    }

}
car.printDescription();
console.log(car.make);
*/

let carLot = [

    {
        year: '2015',
        make: 'Toyota Raum',
        model: '4538223'
    },
    {
        year: '2009',
        make: 'Benz',
        model: 'w83576223'
    }


];

function check() {

    for (let i = 0; i < carLot.length; i++) {
        console.log(carLot[i].make);
        console.log(carLot[i].model);
        console.log(carLot[i].year);
    };

}

console.log(check());