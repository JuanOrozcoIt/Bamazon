'use strict';
function BamazonCustomer(){
  this.initDependencies();
  this.establishConn();
}
BamazonCustomer.prototype.initDependencies = function () {
  this.inquirer = require('inquirer');
  this.mysql = require('mysql');
};
BamazonCustomer.prototype.establishConn = function () {
  this.connection = this.mysql.createConnection({
    host: "localhost",
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "",
    database: "Bamazon"
  });
  this.connection.connect(function(err){
    if(err) throw new Error("Could not establish connection: " + err);
    this.displayAll();
  }.bind(this))
};
BamazonCustomer.prototype.displayAll = function () {
  var query = "SELECT * FROM products";
  this.connection.query(query, function(err, resp) {
    console.log(this.buildTable(resp));
  }.bind(this))
};
BamazonCustomer.prototype.buildTable = function (data) {
  // Discover the greatest length of each cell by row
  this.cellLen = {
    item_id: 0,
    product_name: 0,
    department_name: 0,
    price: 0,
    stock_quantity: 0
  };
  data.forEach(function(item){
    for (var prop in this.cellLen){
      if(this.cellLen.hasOwnProperty(prop)){
        this.cellLen[prop] = Math.max(parseInt(this.cellLen[prop]), (String(item[prop]).length + 3));
      }
    }
  }.bind(this));

  var tableString = this.stringPad("| ID", "item_id")
      + this.stringPad("| Product Name", "product_name")
      + this.stringPad("| Department", "department_name")
      + this.stringPad("| Price", "price")
      + this.stringPad("| Quantity", "stock_quantity") + " |\n";
  data.forEach(function (item) {
    for(var prop in item){
      if(item.hasOwnProperty(prop)){
        tableString += this.stringPad("| " + item[prop], prop);
      }else{
        tableString += this.stringPad("| N/A", prop);
      }
    }
    tableString += " |\n";
  }.bind(this));
  return tableString;
};
BamazonCustomer.prototype.stringPad = function (str, key) {
  var string = String(str);
  var stringLength = string.length;
  var totalLength = parseInt(this.cellLen[key]);

  if (stringLength > totalLength){
    this.cellLen[key] = stringLength;
    totalLength = parseInt(this.cellLen[key]);
  }
  return string + " ".repeat(parseInt(totalLength) - stringLength);
};
BamazonCustomer.prototype.endSession = function () {
  this.connection.end();
};
// Start run
new BamazonCustomer();