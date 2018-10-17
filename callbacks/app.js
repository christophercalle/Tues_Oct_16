

function greet(passedValue) {
  passedValue("John")
}

function sayHello(name) {
  console.log("Say Hello to " + name)
}

//greet(sayHello)
/*
greet(function(name){
  console.log("Say Hello to " + name)
}) */




const MOVIES_URL = "http://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa"

function getAllMovies(completion) {

  //let movies = []

  $.get(MOVIES_URL,function(data){

    // call the passed in callback function
    completion(data)

    //movies = data
    //console.log(movies)
  })

  //return movies

}

/*
function moviesDownloaded(movies) {
  console.log(movies)
}*/

//getAllMovies(moviesDownloaded)

getAllMovies(function(movies){
  console.log(movies)
})



//let movies = getAllMovies()
//console.log(movies)
