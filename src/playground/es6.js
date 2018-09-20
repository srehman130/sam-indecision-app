class Vehicle {
    constructor(make = 'Unknown', year = '2006') {
        this.make = make;
        this.year = year;
    }
    vehicleDescription() {
        return `The make of this vehicle is ${this.make} and the year is ${this.year}.`;
    }
};


class Car extends Vehicle {
    constructor(make, year, type = 'default') {
        super(make, year);
        this.type = type;
    }
    hasType() {
        return !!this.type;
    }
    vehicleDescription() {
        if (this.hasType()) {
            return `${super.vehicleDescription()} Type is ${this.type}.`;
        }
        else {
           return super.vehicleDescription();
        }
    }
}

class Bus extends Vehicle {
    constructor(make, year, capacity) {
        super(make, year);
        this.capacity = capacity;
    }

    hasCapacity() {
        return !!this.capacity;
    };

    vehicleDescription() {
        if (this.hasCapacity()) {
            return `${super.vehicleDescription()} Capacity is ${this.capacity}.`;
        }
        else
        return super.vehicleDescription();
    }
};



const myCar = new Car();
console.log(myCar.vehicleDescription());
const otherCar = new Car('BMW', '2018', 'Car');
console.log(otherCar.vehicleDescription());
const myBus = new Bus('Default make', 'Default year', '48')
const otherBus = new Bus(undefined, undefined, '40');
console.log(myBus.vehicleDescription());
console.log(otherBus.vehicleDescription());
