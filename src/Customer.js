const Treehouse = require('../src/Treehouse');

class Customer {
  constructor (budget) {
    this.budget = budget;
    this.bookings = [];
  }

  checkBudget (treehouse) {
    if (this.budget >= treehouse.price) {
      return true;
    }

    return false;
  }

  bookTreehouse (treehouse) {
    if (this.checkBudget(treehouse)) {
      this.bookings.push(treehouse);
      this.budget = this.budget -= treehouse.price;
      treehouse.isBooked = true;
      return true;
    }
    return `We apologize for not being able to complete your booking. We do not see that you have the funds available to book.`;
  }
}

module.exports = Customer;
