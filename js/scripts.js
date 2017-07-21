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

function Customer(name, address){
  if(name === ""){
    this.name = "Default Customer"
  }else{
    this.name = name;
  }
  if(address === ""){
    this.address = "Takeout Order"
  }else{
    this.address = address;
  }
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
    $("label").removeClass('active');
    $("input:radio[name=size]:checked").prop('checked', false);
    $("input:radio[name=size][value=small]").prop('checked', true);
    $("#defaultSize").addClass('active');
    $("input:checkbox:checked").prop('checked', false);
    var thisPie = new Pizza(size, toppings, "defaultCustomer");
    store.addToOrder(thisPie);
  });

  $("#placeOrder").click(function(){
    var output = "";
    for(i = 0; i < store.currentOrder.length; i++){
      store.currentOrder[i].customer = new Customer($("input#customerName").val(), $("input#customerAddress").val());
      output += "<li>" + store.currentOrder[i].size + " pie: Price - $" + store.currentOrder[i].calcPrice() + "</li>";
    }
    $("input#customerName").val("");
    $("input#customerAddress").val("");
    $("#orderList").html(output);
    store.storeOrders();
    $("#orderSummary").show();
    $("#customerInfo").hide();
  });
  $("#morePizza").click(function(){
    $("#customerInfo").hide();
    $("#orderForm").show();
  });
  $("#goBack1").click(function(){
    $("#orderSummary").hide();
    $("#openScreen").show();
  });
  $("#oldOrders").click(function(){
    $("#openScreen").hide();
    $("#pastOrders").show();
    var output = "";
    for(i = 0; i < store.pastOrders.length; i++){
      var theseToppings = "";
      for(j = 0; j < store.pastOrders[i].toppings.length; j++){
        theseToppings += store.pastOrders[i].toppings[j] + ", ";
      }
      if(theseToppings === ""){
        theseToppings = "no toppings ";
      }
      output += "<li>" + store.pastOrders[i].customer.name + " ordered a " + store.pastOrders[i].size + " size pie with " + theseToppings + "for a total of: $" +store.pastOrders[i].calcPrice();
      if(store.pastOrders[i].customer.address === "Takeout Order"){
        output += "<br>Order for Takeout</li>";
      }else{
        output += "<br>Order delivered to: " + store.pastOrders[i].customer.address + "</li>";
      }
    }
    $("#pastOrderList").html(output);
  });
  $("#goBack2").click(function(){
    $("#pastOrders").hide();
    $("#openScreen").show();
  });
});
