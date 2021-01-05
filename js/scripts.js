
var elNameForm = document.querySelector(`.js-movie-name-form`);
var elNameInput = document.querySelector(`.movie-name-input`);
var elNameList = document.querySelector(`.movie-name-list`);
var elTemplate = document.querySelector(`.movie-template`).content;

var fragmentName = document.createDocumentFragment();

var elGenreForm = document.querySelector(`.js-movie-genre-form`);
var elGenreInput = document.querySelector(`.movie-genre-input`);
var elGenreList = document.querySelector(`.movie-genre-list`);

var fragmentGenre = document.createDocumentFragment();


var elYearForm = document.querySelector(`.js-movie-year-form`);
var elYearInput = document.querySelector(`.movie-year-input`);
var elYearList = document.querySelector(`.movie-year-list`);

var fragmentYear = document.createDocumentFragment();



elNameForm.addEventListener(`submit`, function(evt) {
  evt.preventDefault();

elNameList.innerHTML = ``;
  var kinolarNames = kinolar.filter(function (kino){
    return kino.title.includes(elNameInput.value);
  });

  console.log(kinolarNames);

  kinolarNames.forEach (function(movi) {
    var elNameItem = elTemplate.cloneNode(true);

    elNameItem.querySelector(`.movie-name`).textContent = movi.title;
    elNameItem.querySelector(`.movie-genre`).textContent = movi.genres;
    elNameItem.querySelector(`.movie-year`).textContent = movi.year;

    fragmentName.appendChild(elNameItem);
  });

  elNameList.appendChild(fragmentName);

});



elGenreForm.addEventListener(`submit`, function(evt) {
  evt.preventDefault();

elGenreList.innerHTML = ``;
  var kinolarGenre = kinolar.filter(function (kino){
    return kino.genres.includes(elGenreInput.value);
  });

  console.log(kinolarGenre);

  kinolarGenre.forEach (function(movi) {
    var elGenreItem = elTemplate.cloneNode(true);

    elGenreItem.querySelector(`.movie-name`).textContent = movi.title;
    elGenreItem.querySelector(`.movie-genre`).textContent = movi.genres;
    elGenreItem.querySelector(`.movie-year`).textContent = movi.year;

    fragmentGenre.appendChild(elGenreItem);
  });

  elGenreList.appendChild(fragmentGenre);

});



elYearForm.addEventListener(`submit`, function(evt) {
  evt.preventDefault();

elYearList.innerHTML = ``;
  var kinolarYear = kinolar.filter(function (kino){
    return kino.year === Number(elYearInput.value);
  });

  console.log(kinolarYear);

  kinolarYear.forEach (function(movi) {
    var elYearItem = elTemplate.cloneNode(true);

    elYearItem.querySelector(`.movie-name`).textContent = movi.title;
    elYearItem.querySelector(`.movie-genre`).textContent = movi.genres;
    elYearItem.querySelector(`.movie-year`).textContent = movi.year;

    fragmentYear.appendChild(elYearItem);
  });

  elYearList.appendChild(fragmentYear);

});


{/* <li>
<h3>Nmae: <span class="movie-name">Titanic</span></h3>
<p>Genre: <span class="movie-genre">fantastic</span></p>
<p>Year: <span class="movie-year">1998</span></p>
</li> */}





// console.log(kinolarNames);

// var kinolarYili = kinolar.filter(function (kino){
//   return kino.year === 2010;
// });

// console.log(kinolarYili);

// var kinolarJanri = kinolar.filter(function (kino){
//   return kino.genres === comedy;
// });

// console.log(kinolarJanri);