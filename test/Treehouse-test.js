const chai = require('chai');
const expect = chai.expect;

const Treehouse = require('../src/Treehouse');

describe('Treehouse properties', function () {

  it('should be a function', function () {
    expect(Treehouse).to.be.a('function');
  });

  it('it should be an instance of Treehouse', function () {
    const treehouse = new Treehouse();
    expect(treehouse).to.be.an.instanceof(Treehouse);
  });

  it.skip('should store a price', function () {
    const treehouse = new Treehouse(150);
    expect(treehouse.price).to.equal(150);
  });

  it.skip('should store a price point with a default of an empty string', function () {
    const treehouse = new Treehouse(150);
    expect(treehouse.pricePoint).to.equal('');
  });

  it.skip('should store the number of bedrooms', function () {
    const treehouse = new Treehouse(150, 2);
    expect(treehouse.bedrooms).to.equal(2);
  });

  it.skip('should store the number of bathrooms', function () {
    const treehouse = new Treehouse(150, 2, 1);
    expect(treehouse.bathrooms).to.equal(1);
  });

  it.skip('should store a location', function () {
    const treehouse = new Treehouse(150, 2, 1, 'Aurora, CO');
    expect(treehouse.location).to.equal('Aurora, CO');
  });

  it.skip('should default to the property is not booked', function () {
    const treehouse = new Treehouse(150, 2, 1, 'Aurora, CO');
    expect(treehouse.isBooked).to.equal(false);
  });
});
