let userEmail = document.getElementById('user_email');
let menu = document.getElementById('menu').options;


const coffeeURL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/";
let orderEmail = document.getElementById('check_order_email');
let checkOrderButton = document.getElementById('check_order-button')


// displays all orders
fetch(coffeeURL)
.then((resp) => resp.json())
.then(function(orders) {
    let allOrders = document.getElementById('all_orders')

    Object.keys(orders).map(e => {

        
        let eachOrder = `
        <div>${orders[e].emailAddress}</div>
        <div>${orders[e].coffee}</div>
        `
        allOrders.insertAdjacentHTML('beforeend',eachOrder)
    })
})




// Display the requested email's order

orderInfoButton.addEventListener('click', function() {
    let customerEmail = orderEmail.value

    const COFFEE_ORDERS_BY_EMAIL_URL = `http://dc-coffeerun.herokuapp.com/api/coffeeorders/${customerEmail}`

    fetch(COFFEE_ORDERS_BY_EMAIL_URL)
    .then(function(order) {
        console.log(order)
        return order.json();
    })
    .then(function(email) {
        let checkOrderContainer = document.getElementById('check_order-container');

        let orderInformation = 
            `<div>${email.emailAddress}</div>
            <div>${email.coffee}</div>
            <label>Delete Order: <label>
            <input id="delete-order"  type="submit" value="Delete" />
            `
            
        checkOrderContainer.innerHTML = orderInformation  

        
        // deletes the called order
        let deleteOrder = document.getElementById('delete_order')
            
        deleteOrder.addEventListener('click', function() {
            fetch(coffeeURL, {
                method: 'DELETE'
            });
            checkOrderContainer.innerHTML = "";
            console.log(coffeeURL)
        });

    })  

});





let submitButton = document.getElementById('submit-button');

// Submits the new order to the json
submitButton.addEventListener('click', function() {
    let correctCoffee = menu[menu.selectedIndex].text;
    let orderEmail = createOrderEmailInput.value;
    console.log(correctCoffee)
    console.log(orderEmail);
    fetch(coffeeURL, {  
        method: 'POST',  
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            emailAddress: orderEmail,
            coffee: correctCoffee
        })
    })
});
