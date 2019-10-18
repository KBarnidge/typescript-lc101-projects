import { Payload } from './Payload'
import { Cargo } from './Cargo'
import { Astronaut } from './Astronaut'

export class Rocket implements Payload {
    massKg: number;
    name: string;
    totalCapacityKg : number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name : string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg
    };

    sumMass (items: Payload []): number {
        let total: number = 0;
        for (let i = 0; i < items.length; i++) {
          total += items[i].massKg;
        };
        return total;
    };

    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    };
    
    addCargo(cargo: Cargo){
        let test = this.canAdd(cargo)
        if (test === true) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    };

    addAstronaut(astronaut: Astronaut) {
        let test = this.canAdd(astronaut)
        if (test === true) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }   
    };

};

