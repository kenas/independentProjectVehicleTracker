// const data  = require('./data.js');
import data from './data.js';
class werhouse {

    constructor (data) {
        this.data = data;
        this.gate = '';
        this.row = '';
        this.sn;
    }

    search = (sn) => {

        let result = '';
        const data = this.data;


        result = data.filter((num => num.sn === sn));
        this.sn = result[0].sn;
        this.gete = result[0].gate;

       return result.length > 0 ? result : "Sorry";
    }

    getGate = (sn) => {

        let vehicle;

        vehicle = this.data.filter((num => num.sn === sn));

        const {gate, row, position} = vehicle[0];
      
       
        return this.gate = this.data.filter((vehicle) => vehicle.gate === gate);
        
    }

    getFuealLevel = () => {

        let vehicle;

        return vehicle = this.data.filter((vehicle) => 
            (typeof vehicle.fuelLevel === 'number' && vehicle.fuelLevel < 45 || vehicle.fuelLevel === "low")
        );

    }

    // Get all vehicles in a row that gate is = to by giveen gate by user
    getRowsByGate = (something) => {
        let vehicle;

        vehicle = this.data.filter((vehicle) => vehicle.gate === something);

        return vehicle.length >=1 ? vehicle : "Sorry, the giveen gate number does not exist!, please try again";

    }
}

const t = new werhouse(data);
// console.log(t.search('DFG00028'));

// console.log(t.getGate('DFG00028'));

console.log(t.getRowsByGate(3));
console.log(t.row)
// console.log(t.row)

