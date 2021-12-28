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

  it('should store a price', function () {
    const treehouse = new Treehouse(150);
    expect(treehouse.price).to.equal(150);
  });

  it('should store a price point with a default of an empty string', function () {
    const treehouse = new Treehouse(150);
    expect(treehouse.pricePoint).to.equal('');
  });

  it('should store the number of bedrooms', function () {
    const treehouse = new Treehouse(150, 2);
    expect(treehouse.bedrooms).to.equal(2);
  });

  it('should store the number of bathrooms', function () {
    const treehouse = new Treehouse(150, 2, 1);
    expect(treehouse.bathrooms).to.equal(1);
  });

  it('should store a location', function () {
    const treehouse = new Treehouse(150, 2, 1, 'Aurora, CO');
    expect(treehouse.location).to.equal('Aurora, CO');
  });

  it('should default to the property is not booked', function () {
    const treehouse = new Treehouse(150, 2, 1, 'Aurora, CO');
    expect(treehouse.isBooked).to.equal(false);
  });
});

describe('Treehouse methods', function () {

  it('should be able to calculate a reduction in price', function () {
    const treehouse = new Treehouse(150, 2, 1, 'Aurora, CO');
    expect(treehouse.priceReduction(10)).to.equal(135);
  });

  it('should update the price point when less than 100', function () {
    const treehouse = new Treehouse(90, 2, 1, 'Aurora, CO');
    expect(treehouse.updatePricePoint()).to.equal('$');
  });

  it('should update the price point when more than 100 but less than 200', function () {
    const treehouse = new Treehouse(150, 2, 1, 'Aurora, CO');
    expect(treehouse.updatePricePoint()).to.equal('$$');
  });

  it('should update the price point when price is over 200', function () {
    const treehouse = new Treehouse(250, 2, 1, 'Aurora, CO');
    expect(treehouse.updatePricePoint()).to.equal('$$$');
  });
});
