//ex 0
let car = {
    brand: '',
    color: '',
    numberOfKilometers: 0,

    //metoda powinna zwracać informacje o samochodzie (kolor, markę i liczbę przejechanych kilometrów)
    // -- zwracać czy printować? --
    printCarInfo: function() {
        let result = 'kolor: ' + this.color + ', marka: ' + this.brand + ', przejechane km: ' + this.numberOfKilometers;
        console.log(result);
        return result;
    },
    drive: function(km) {
        this.numberOfKilometers += km;
    }
};

//ex 1
car.checkDates = [];
car.addCheck = function(date) {
    this.checkDates.push(date);
};
car.getChecks = function() { 
    return this.checkDates
};