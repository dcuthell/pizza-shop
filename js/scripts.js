//Business Logic
//Constructors
function Store(){
  this.currentOrder = [];
  this.pastOrders = [];
}

function Pizza(size, toppings, customer){
  this.size = size;
  this.toppings = toppings;
  this.customer = customer;
}

function Customer(name){
  this.name = name;
}

//Prototypes
Store.prototype.addToOrder = function(pizza){
  this.currentOrder.push(pizza);
}

Store.prototype.storeOrders = function(){
  while(this.currentOrder[0] !== undefined){
    this.pastOrder.push(this.currentOrder[0]);
    this.currentOrder.pop();
  }
}

//UI
$(document).ready(function(){

});
