const chai = require('chai');
const expect = chai.expect;

const Customer = require('../src/Customer');
const Treehouse = require('../src/Treehouse');

describe('Customer Class', function () {

  it('should be a function', function () {
    expect(Customer).to.be.a('function');
  });

  it('it should be an instance of Customer', function () {
    const customer = new Customer();
    expect(customer).to.be.an.instanceof(Customer);
  });

  it('should store a customer\'s budget', function () {
    const customer = new Customer(300);
    expect(customer.budget).to.equal(300);
  });

  it('should default to have no treehouses booked', function () {
    const customer = new Customer(300);
    expect(customer.bookings).to.deep.equal([]);
  });

  it('should check if the customer has enough money to book a treehouse', function () {
    const customer = new Customer(300);
    let treehouse = new Treehouse(150, 2, 1, 'Aurora, CO');
    expect(customer.checkBudget(treehouse)).to.equal(true);
  });

  it('should check if the customer does not have enough money to book a treehouse', function () {
    const customer = new Customer(100);
    const treehouse = new Treehouse(150, 2, 1, 'Aurora, CO');
    expect(customer.checkBudget(treehouse)).to.equal(false);
  });

  it('should be able to book a treehouse if within budget', function () {
    const customer = new Customer(200);
    const treehouse = new Treehouse(150, 2, 1, 'Aurora, CO');
    customer.bookTreehouse(treehouse);
    expect(customer.bookings.length).to.equal(1);
  });

  it('when a treehouse is booked customer budget decreases to a new amount', function () {
    const customer = new Customer(200);
    const treehouse = new Treehouse(150, 2, 1, 'Aurora, CO');
    customer.bookTreehouse(treehouse);
    expect(customer.budget).to.equal(50);
  });

  it('when a treehouse is booked, the treehouse should be marked as booked', function () {
    const customer = new Customer(200);
    const treehouse = new Treehouse(150, 2, 1, 'Aurora, CO');
    customer.bookTreehouse(treehouse);
    expect(treehouse.isBooked).to.equal(true);
  });

  it('should see an apologetic message if a treehouse is not booked', function () {
    const customer = new Customer(50);
    const treehouse = new Treehouse(150, 2, 1, 'Aurora, CO');
    customer.bookTreehouse(treehouse);
    expect(customer.bookTreehouse(treehouse)).to.equal(`We apologize for not being able to complete your booking. We do not see that you have the funds available to book.`);
  });
});
