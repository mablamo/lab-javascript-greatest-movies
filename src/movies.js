// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map((movie) => movie.director)
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenMovies = moviesArray.filter((movie) => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    })
    return stevenMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray == ''){
        return 0;
    }
    const average =
        moviesArray
            
            .filter((element) => element.score)
            .map((element) => element.score)
            .reduce((previousValue, currentValue) => previousValue + currentValue)
            
            let decimal = average / moviesArray.length
            return (Math.round(decimal * 100) / 100)
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray == ''){
        return 0;
    }
    const dramaMovies = 
    moviesArray
        .filter((element) => element.genre == "Drama")
        .map((element) => element.score)
    if (dramaMovies == ''){
        return 0;
    }
    let averageRate = dramaMovies.reduce((acc, rate)=> acc + rate) / dramaMovies.length
    return (Math.round(averageRate * 100) / 100)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    if (moviesArray == ''){
        return 0;
    }
    let sortedArray = structuredClone(moviesArray)
    sortedArray = sortedArray.sort((a,b) => {
        if(a.year - b.year !==0){
            return a.year - b.year
        } else {
                if (a.title > b.title) return 1; 
                if (a.title < b.title) return -1;
                if (a.title === b.title) return 0;
              }
    })
    return sortedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    if (moviesArray == ''){
        return 0;
    }
    let sortedArray = moviesArray.sort((a,b) =>{
        if (a.title > b.title) return 1; 
        if (a.title < b.title) return -1;
        if (a.title === b.title) return 0;
    })
    let moviesList =[]
    for (let i=0; i<sortedArray.length || i<20; i++) {
        moviesList.push(sortedArray[i])
    }
    return moviesList


    }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
