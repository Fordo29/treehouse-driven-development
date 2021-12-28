const chai = require('chai');
const expect = chai.expect;

const Customer = require('../src/Customer');
const Treehouse = require('../src/Treehouse');

describe('Customer Class', function () {

  it.skip('should be a function', function () {
    expect(Customer).to.be.a('function');
  });

  it.skip('it should be an instance of Customer', function () {
    const customer = new Customer();
    expect(customer).to.be.an.instanceof(Customer);
  });

  it.skip('should store a customer\'s budget', function () {
    const customer = new Customer(300);
    expect(customer.budget).to.equal(300);
  });

  it.skip('should default to have no treehouses booked', function () {
    const customer = new Customer(300);
    expect(customer.bookings).to.equal([]);
  });

  it.skip('should check if the customer has enough money to book a treehouse', function () {
    const customer = new Customer(300);
    const treehouse = new Treehouse(150, 2, 1, 'Aurora, CO');
    expect(customer.checkBudget()).to.equal(true);
  });

  it.skip('should check if the customer does not have enough money to book a treehouse', function () {
    const customer = new Customer(100);
    const treehouse = new Treehouse(150, 2, 1, 'Aurora, CO');
    expect(customer.checkBudget()).to.equal(false);
  });

  // it.skip('should be able to book a treehouse if within budget', function () {
  //   const customer = new Customer(100);
  //   const treehouse = new Treehouse(150, 2, 1, 'Aurora, CO');
  //   expect(customer.bookTreehouse()).to.equal(false);
  // })
});
