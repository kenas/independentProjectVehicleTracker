class warehouse {

    constructor (data) {
        this.data = data;
        this.gate = '';
        this.row = '';
        this.sn;
        this.category = [];
    }

    search = (sn) => {

        let result = '';
        const data = this.data;


        result = data.filter((num => num.sn === sn));
        this.sn = result[0].sn;
        this.gate = result[0].gate;

        this.getRowsByGate();

       // return result.length > 0 ? result : "Sorry";
    }

    getGate = (sn) => {

        let vehicle;

        vehicle = this.data.filter((num => num.sn === sn));

        const {gate, row, position} = vehicle[0];

      
        return this.gate = this.data.filter((vehicle) => vehicle.gate === gate);
        
    }


    // Get all vehicles in that fuel level <= 45
    getFuealLevel = () => {
    
        return this.data.filter((vehicle) =>  
            (typeof vehicle.fuelLevel === 'number' && vehicle.fuelLevel <= 45)
        );  
    }

    // Get all vehicles in a row that gate is === to by giveen gate by user
    getRowsByGate = () => {
        let vehicle;

        vehicle = this.data.filter((vehicle) => vehicle.gate === this.gate);

        return vehicle.length >=1 ? vehicle : "Sorry, the giveen gate number does not exist!, please try again";

    }

    //Get all vehicles that  have low coolant level low
    getCoolantLevel = () => {
        return this.data.filter((vehicle) =>
            (typeof vehicle.coolantLevel === 'string' && vehicle.coolantLevel === 'Low')
        );
    }

    //Get all vehicles that have recovery === true
    getRecovery = () => {
        return vehicle = this.data.filter((vehicle) => vehicle.recovery === 1);
    }

    //Get all vehicles that have any another issues
    getIssues = () => {
        return this.data.filter((vehicle) => vehicle.issues);
    }

    getAllUIC = () => {
        return this.category = this.data.map(c => c.category);
    }

    //Get all vehicles by category 
    getVehiclesByCatgotyUIC = () => {

        let vehicles = this.data;

        vehicles.reduce((acc, vehicle) => {
            const cat = vehicle.category;

        if(!acc[cat]) {
            acc[cat] = [];
        } 
            acc[cat].push(vehicle);
            return acc;
      }, {}) 
      
    }

}

export default warehouse;

// fuelLevel.forEach((vehicle) => {
//     console.log(`${vehicle.sn} has fuel level of ${vehicle.fuelLevel} at the gate ${vehicle.gate} and row ${vehicle.row} position ${vehicle.position}`);
// });


