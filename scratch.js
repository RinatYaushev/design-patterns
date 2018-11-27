class Cart {
    constructor () {
        this.items = [];
        this.totalCost = 0;
    }

    addItem(item) {
        if (!(item.name && item.price)) {
            console.log('Bad item');
            return;
        }
        this.items.push(item);
        console.log('Item ' + item.name + ' added.');
    };

    buyItems() {
        if (this.items.length > 0) {
            this.items.length = 0;
            this.totalCost = 0;
            console.log('Thank you for your purchase');
        } else {
            console.log('Your cart is empty');
        }
    };

    getTotalCost() {
        if (this.items.length > 0) {
            this.items.forEach((item) => this.totalCost += item.price);
            console.log('Your total is ' + this.totalCost);
        } else {
            console.log('Your cart is empty');
        }
    };
}

class Product {
    constructor (product) {
        return product;
    }
}

class Book {
    constructor (book) {
        return book;
    }
}

class BookAdapter {
    constructor(book) {
        if (book.cost) {
            book.price = book.cost;
            delete book.cost;
        }
        return book;
    }
}

const cart = new Cart();

const product = new Product({
    name: 'Product 1',
    price: 10
});

const product2 = new Product({
    name: 'Product 2',
    price: 40
});

const book = new Book({
    name: 'Book 1',
    cost: 25
});

const book2 = new Book({
    name: 'Book 2'
});

const adaptedBook = new BookAdapter(book);
const adaptedBook2 = new BookAdapter(book2);

cart.addItem(product);
cart.addItem(product2);
cart.addItem(adaptedBook);
cart.addItem(adaptedBook2);
cart.getTotalCost();
console.log(cart);
cart.buyItems();
console.log(cart);
