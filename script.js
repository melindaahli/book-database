let inputTerm;
let inputAuthor;
let URL = `https://www.googleapis.com/books/v1/volumes?q=${inputTerm}+intitle:${inputTerm}+inauthor:${inputAuthor}&maxResults=20`;

$("#searchButton").click(function () {
  inputTerm = $("#titleBar").val();
  inputAuthor = $("#authorBar").val();

  $(".bookresults").html("");

  if (inputTerm === "") {
    URL = `https://www.googleapis.com/books/v1/volumes?q=${inputAuthor}+inauthor:${inputAuthor}&maxResults=40`;
  } else if (inputAuthor === "") {
    URL = `https://www.googleapis.com/books/v1/volumes?q=${inputTerm}+intitle:${inputTerm}&maxResults=40`;
  } else {
    URL = `https://www.googleapis.com/books/v1/volumes?q=${inputTerm}+intitle:${inputTerm}+inauthor:${inputAuthor}&maxResults=20`;
  }

  console.log(URL);

  fetch(URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.items.forEach((book) => {
        $(".bookResults").append(`<div class='volume'>
        <a href="${book.}">
        <img src=${book.volumeInfo.imageLinks.thumbnail}/>
        </a>
        <p class="sans-serif">${book.volumeInfo.title}</p>
        </div>
        `);
      });
    });
  
  $("#titleBar").val("");
  $("#authorBar").val("");
  
});

$("#submitB").click(function () {
  let reviewTitle = $("#reviewTitle").val();
  let reviewRating = $("#reviewRating").val();
  let reviewContent = $("#reviewContent").val();

  $(".userReviews").append(`<div class="aReview">
  <p>${reviewTitle}    [${reviewRating}/10]</p>
  <p>${reviewContent}</p>
  </div>`);

  $("#reviewTitle").val("");
  $("#reviewRating").val("");
  $("#reviewContent").val("");
});
