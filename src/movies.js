// The `movies` array from the file `src/data.js`.

const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrMovies) {
  const movieDirectors = arrMovies.map ((directoresGrua)=>{
    console.log(directoresGrua.director);
    return directoresGrua.director;
  })

  return movieDirectors;
}
getAllDirectors(movies);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrPrincipal) {
  const generoD = arrPrincipal.filter((elementMovie) => {
    let shallPass = elementMovie.director === 'Steven Spielberg' && elementMovie.genre.includes('Drama');
    return shallPass;
  })
  return generoD.length;
};
howManyMovies(movies)


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrayM) {

  let score = arrayM.filter ((scoreElement)=>{
    return scoreElement.score;
  })

  const media = score.reduce((sum, numElement) => {
    return sum += numElement;
  }, 0) / arrayM.length;

  return (media.toFixed(2) );
}

scoresAverage(movies)


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrayMov) {
  let newArrayOrder = [];

  let orderYear = arrayMov.sort((year1, year2) => {
    if (year1.year < year2.year){
      return -1;
    } else {
      return 1;
    }
    return newArrayOrder.push();
  });

  return newArrayOrder;
};

orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrayPelis) {
  let titulos = arrayPelis.sort((peli1, peli2) => {
    if(peli1.title < peli2.firstname) {
      return -1;
    } else if (peli1.title > peli2.firstname){
      return 1;
    }
    return 0;
  })

  return titulos;
}

orderAlphabetically(movies)

/////////////////////////////////***BONUS***/////////////////////////////////////

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
