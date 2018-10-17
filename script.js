/************************* GET ALL ORDERS *******************************/
const coffeeURL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"

$("#showAll").click(function(){
    getAllOrders()
});


function getAllOrders() {

    $("#allOrders").empty();

    // Fetch coffee orders
    fetch(coffeeURL)
        .then(function(response){
            return response.json() 
        })
        .then(function(coffeeOrders){
    
            for (let order in coffeeOrders){
    
                let id = coffeeOrders[order]._id;
                let emailAddress = coffeeOrders[order].emailAddress;
                let coffee = coffeeOrders[order].coffee;
    
                displayItem = `<div id='divDisplayItem'>
                                <div class='divDisplayItemElement'>Id: ${id}</div>
                                <div class='divDisplayItemElement'>Email: <span class='emailAddress'>${emailAddress}</span></div>
                                <div class='divDisplayItemElement'>Order: ${coffee}</div>
                                <div class='divDisplayItemElement'>
                                <button id='btnRemoveOrder' onclick='RemoveOrder(this)'>Remove Order</button>
                                </div>
                                </div>`
    
                $("#allOrders").append(displayItem);
            }
        });
}

/************************* REMOVE ORDERS *******************************/
function RemoveOrder(sender) {

    let emailToRemove = $(sender).parent().parent().find('.emailAddress').text(); 

    let url = `http://dc-coffeerun.herokuapp.com/api/coffeeorders/${emailToRemove}`;
    
    fetch(url, {
        method: 'delete'
      }); 

    // Remove from list
    $(sender).parent().parent().remove();
}


$("#orderSearchButton").click(function(){
    let orderSearch = $("#orderSearch").val();
    let url = `http://dc-coffeerun.herokuapp.com/api/coffeeorders/${orderSearch}`;

    getOrderByEmail(url)
});

/************************* CHECK ORDERS BY EMAIL *******************************/
function getOrderByEmail(urlEmail) {

    $("#allOrders").empty();

    // Fetch coffee orders
    fetch(urlEmail)
        .then(function(response){
            return response.json() 
        })
        .then(function(coffeeOrders){

            let id = coffeeOrders.id;
            let emailAddress = coffeeOrders.emailAddress;
            let coffee = coffeeOrders.coffee;

            displayItem = `<div id='divDisplayItem'>
                                <div class='divDisplayItemElement'>Id: ${id}</div>
                                <div class='divDisplayItemElement'>Email: <span class='emailAddress'>${emailAddress}</span></div>
                                <div class='divDisplayItemElement'>Order: ${coffee}</div>
                                <div class='divDisplayItemElement'>
                                <button id='btnRemoveOrder' onclick='RemoveOrder(this)'>Remove Order</button>
                                </div>
                            </div>`
    
                $("#allOrders").append(displayItem);
        });
}


/************************* CREATE NEW ORDER *******************************/

$("#placeOrderButton").click(function(){
    let userEmail = $("#userEmail").val();
    let newOrder = $(".item").val();

    let url = `http://dc-coffeerun.herokuapp.com/api/coffeeorders/`;

    newOrder = { 
        emailAddress: userEmail,
        coffee: newOrder,
    }

    createNewOrder(url, newOrder)

    $("#userEmail").val("");
    $(".item").val();
});

function createNewOrder(postUrl, newOrder) {

    fetch(postUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newOrder)
      }) 

}
