
// Fetch Library
const MOVIES_URL = "http://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa"

fetch(MOVIES_URL)
.then(function(response){
  console.log(response)
  return response.json() // json is a function of response object which returns json objects associated with the response
}).then(function(movies){
  console.log(movies)
})

// POSTING USING Fetch
const NEW_COFFEE_ORDER_URL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"


fetch(NEW_COFFEE_ORDER_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ // converting object to string
    emailAddress: 'Larry@gmail.com',
    coffee: 'Hot Regular Coffee',
  })
})


/*
// Promises

// get the image
// resize the image
// apply filter effect to the image
// save the image

let promise = new Promise(function(resolve,reject){

  // custom logic

  reject("Failed")

  resolve([1,3,4,5,6,7])
})

promise.then(function(value){
  console.log(value)
  return value + "Hello again"
}).then(function(value){
    console.log(value)
    return "some other value"
}).then(function(value){
    console.log("erereer")
    console.log(value)
}).catch(function(error){
  console.log(error)
}) */
