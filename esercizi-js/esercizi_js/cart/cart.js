let products = [
    {'name': 'Mela', 'price': 1.2},
    {'name': 'Pera', 'price': 0.5},
    {'name': 'Banana', 'price': 1.2},
    {'name': 'Ananas', 'price': 2.0},
];

let cart = {
    products: [],
    add: function(product) {
        this.products.push(product);
    },
    empty: function() {
        this.products = [];
    },
    get: function() {
        let sum = this.products.reduce((acc, product) => { 
            return product.price + acc; }, 0
        );  
        console.log(this.products);
        console.log(`La somma e' ${sum}`);
    }
};

//const refreshRate = 5000;
//setTimeout(() => location.reload(), refreshRate);