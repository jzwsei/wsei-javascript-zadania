//ex 0
function Basket() {
    this.products = [];
    this.sum = 0;
}

Basket.prototype.addProduct = function(name, price) {
    this.products.push({
        name: name,
        price: price
    });

    this.sum += price;
};

Basket.prototype.showBasket = function() {
    for (let item of this.products) {
        console.log(item.name + ' (' + item.price + ' zł)');
    }

    console.log('Do zapłaty: ' + this.sum);
};

