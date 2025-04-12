import data from './data.js';
import warehouse from './whereHouse.js';

const vehicle = new warehouse(data);
const sn = "TAO00001";
console.log(vehicle.search(sn));
console.log(vehicle.getRowsByGate());
// console.log(vehicle.row)
