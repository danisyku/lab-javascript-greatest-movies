// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies)  {

    let directors = movies.map((movie) => {
        return movie.director

    })
    
    return directors;

}




// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
	return movies.filter((ele) => {
		return ele.director == `Steven Spielberg` && ele.genre.includes(`Drama`);
	}).length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(movies) {
	if (movies.length === 0) return 0;
	console.log(movies);
	let sum = movies.reduce((acc, value) => {
		console.log(acc, value);
		return acc + (value.rate || 0);
		// return value.rate ? acc + value.rate : acc + 0;
		// return value.rate == undefined || value.rate == '' ? acc + 0 : acc + value.rate;
	}, 0);
	console.log(sum);
	return Number((sum / movies.length).toFixed(2));
}



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (movies){
    let dramaMovies = movies.filter((ele)=> {
        return movie.genre.includes("Drama")

    })

    return ratesAvarage(dramaMovies)

}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
	let copy = [...array];

	copy.sort((a, b) => {
		
		return (a.year - b.year) || (a.title.localeCompare(b.title))
	})
	return copy
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
	let newArr = [...arr];
	newArr.sort(function(a,b){
		return (a.title.localeCompare(b.title))
		
	})
	console.log(newArr)

	let firstTwenty = newArr.slice(0,20).map((a  )=>{
		console.log(a)
		return a.title
		
	})
	return	firstTwenty;
}






// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
//hours to minutes
function turnHoursToMinutes(movies){
    return movies.map(function(movie){
        return movie ;
    }).map(function(movie){
        const durationMovie = movie.duration.split("");

        let hours= 0;
        let minutes = 0;

        if (duration.length===2){
            hours = durationmMvie[0]|| "0";
            minutes= durationMovie[1];

            hours.replace(/[a-z]/g,"");
            minutes.replace(/[a-z/g, "

        } else {
            minutes.duration[0];
            minutes.replace(/[a-z]/g, "");
        }
        movies.duration = parseInt(hours)* 60 +parseInt(minuts);

        return  movie;
    })







// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(){
}
