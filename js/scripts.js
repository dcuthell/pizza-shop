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
    this.pastOrders.push(this.currentOrder[0]);
    this.currentOrder.pop();
  }
}

Pizza.prototype.calcPrice = function(){
  var price = 10.00;
  if(this.size === "medium"){
    price += 3.50;
  }
  if(this.size === "large"){
    price += 8.00;
  }
  price += (this.toppings.length * 2.00);
  return price;
}

//UI
$(document).ready(function(){
  store = new Store();
  $("#newOrder").click(function(){
    $("#openScreen").hide();
    $("#orderForm").show();
  });
  $("#finishOrder").click(function(){
    $("#orderForm").hide();
    $("#customerInfo").show();
    var size = $("input:radio[name=size]:checked").val();
    var toppings = [];
    $("input:checkbox:checked").map(function(){
      toppings.push($(this).val());
    });
    $("input:checkbox:checked").prop('checked', false);
    var thisPie = new Pizza(size, toppings, "defaultCustomer");
    store.addToOrder(thisPie);
  });
  $("#placeOrder").click(function(){
    var name = $("input#customerName").val();
    var output = "";
    for(i = 0; i < store.currentOrder.length; i++){
      store.currentOrder[i].customer = name;
      output += "<li>" + store.currentOrder[i].size + " pie: Price - $" + store.currentOrder[i].calcPrice() + "</li>";
    }
    $("#orderList").html(output);
    store.storeOrders();
    $("#orderSummary").show();
    $("#customerInfo").hide();
  });
  $("#morePizza").click(function(){
    $("#customerInfo").hide();
    $("#orderForm").show();
  });
  $("#oldOrders").click(function(){
    $("#openScreen").hide();
    $("#orderForm").show();
  });
});
