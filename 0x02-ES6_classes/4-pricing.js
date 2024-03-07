// Import the Currency class from '3-currency.js'
import Currency from './3-currency.js';

class Pricing {
  // Constructor with amount and currency parameters
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter for the amount
  get amount() {
    return this._amount;
  }

  // Setter for the amount
  set amount(newAmount) {
    this._amount = newAmount;
  }

  // Getter for the currency
  get currency() {
    return this._currency;
  }

  // Setter for the currency
  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  // Method to display the full price in the requested format
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert the price given an amount and a conversion rate
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;
