$("#searchButton").click(function () {
  let inputAuthor = $("#authorBar").val();
  let inputTerm = $("#searchBar").val();

  let URL = `https://www.googleapis.com/books/v1/volumes?q=${inputTerm}+inauthor:${inputAuthor}`;
  console.log(URL);

  $(".bookresults").html("");

  fetch(URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.items.forEach((book) => {
        $(".bookResults").append(`<div class='volume'>
        <a href="">
        <img src=${book.volumeInfo.imageLinks.thumbnail}/>
        </a>
        <p class="sans-serif">${book.volumeInfo.title}</p>
        </div>
        `);
      });
    });
});

$("#submitB").click(function(){
  let reviewTitle = $("#reviewTitle").val();
  let reviewRating = $("#reviewRating").val();
  let reviewContent = $("#reviewContent").val();
  
  $(".userReviews").append(`<div class="aReview">
  <p>${reviewTitle}</p>
  <p>${reviewRating}/10</p>
  <p>${reviewContent}</p>
  </div>`);
});