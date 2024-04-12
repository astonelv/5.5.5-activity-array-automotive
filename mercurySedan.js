const { Vehicle } = require("./vehicleBaseClass");

let v = new Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    checkService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }

    start() {
        if (this.fuel > 0) {            
            console.log("engine is running.");
            return this.started = true
        } else {
            console.log("No Gas :(");
            return this.started = false;
        }
    }

    loadPassenger(num) {
        if (this.passenger < this.maximumPassengers) {
            if ((num + this.passenger) <= this.maximumPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " not have enough space to take all passengers.");

            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }


}

let myCar = new Car('mercury', 'Sedan', '2002', 'white', '50000')
myCar.start()
myCar.loadPassenger()
myCar.stop()
myCar.checkService()

console.log(myCar)


