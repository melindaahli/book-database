$("#searchButton").click(function () {
  
  let inputTerm = $("#searchBar").val();
  let inputAuthor = $("#authorBar").val();

  let URL = `https://www.googleapis.com/books/v1/volumes?q=${inputTerm}+intitle:${inputTerm}+inauthor:${inputAuthor}&maxResults=20`;
  
if (inputTerm === "") {
    URL = `https://www.googleapis.com/books/v1/volumes?inauthor:${inputAuthor}`;
  } else if (inputAuthor === "") {
    URL = `https://www.googleapis.com/books/v1/volumes?q=${inputTerm}+intitle:${inputTerm}&maxResults=40`;
  } else {
    
  }

  $(".bookresults").html("");
  console.log(URL);  
  
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
  <p>${reviewTitle}    [${reviewRating}/10]</p>
  <p>${reviewContent}</p>
  </div>`);
  
  $("#reviewTitle").val('');
  $("#reviewRating").val('');
  $("#reviewContent").val('');
});