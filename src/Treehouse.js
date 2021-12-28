class Treehouse {
  constructor(price, bedrooms, bathrooms, location) {
    this.price = price;
    this.pricePoint = '';
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.location = location;
    this.isBooked = false;
  }

  priceReduction(reductionAmt) {
    return this.price = (this.price -= (this.price / reductionAmt));
  };

  updatePricePoint() {
    if (this.price <= 100) {
      return this.pricePoint = '$';
    } else if (this.price >= 200) {
      return this.pricePoint = '$$$';
    } else {
      return this.pricePoint = '$$';
    }
  }
}

module.exports = Treehouse;
