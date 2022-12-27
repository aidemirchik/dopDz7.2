class Worker {
    constructor(name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
}

class Fworker extends Worker {
    constructor(name, surname, rate, days){
        super(name, surname, rate, days);
    }

    getFullName() {
        return `И.Ф.: ${this.name + ' ' + this.surname}`
    }

    getSalary() {
        return this.rate * this.days;
    }  

    
}

class Tworker extends Worker {
    constructor(name, surname, rate, days){
        super(name, surname, rate, days);
    }

    getFullName() {
        return `И.Ф.: ${this.name + ' ' + this.surname}`
    }

    getSalary() {
        return this.rate * this.days;
    }  
}

class Both {
    getBothSalary() {
        return fworker.getSalary() + tworker.getSalary();
    }
} 

const fworker = new Fworker('Демиклион', 'Афингендин', 1200, 63);
const tworker = new Tworker('Mike', 'Beight', 980, 74);
const both = new Both()

console.log(fworker.getFullName());
console.log(`В день: ${fworker.rate}$`); 
console.log(`Проработанные дни: ${fworker.days}`); 
console.log(`Зарплата: ${fworker.getSalary()}$`);

console.log('');

console.log(tworker.getFullName());
console.log(`В день: ${tworker.rate}$`); 
console.log(`Проработанные дни: ${tworker.days}`); 
console.log(`Зарплата: ${tworker.getSalary()}$`);

console.log('');

console.log(`Σ двух зарплат: ${both.getBothSalary()}$`);