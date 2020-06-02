"use strict";

let numberOfFilms;

function start() {
    do {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        let a;
        do {
            a = prompt('Фильм(?', '');
        } while (!a || a == '' || a.length > 50);
        let b;
        do {
            b = prompt('оценка', '');
        } while (b != null || b == '' || b.length > 50);
        personalMovieDB.movies[a] = b;
    }
}

rememberMyFilms();

function detectPersonalLevel() {
if (personalMovieDB.count < 10) {
    console.log('Довольно мало');
} else if (personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >=30) {
    console.log('Вы киноман');
} else{
    console.log('Ошибка');
}
}

detectPersonalLevel();

function writeYourGenres() {
    for(let i=1; i<=3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();

function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDb(personalMovieDB.privat);
