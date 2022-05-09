$("#searchButton").click(function () {
  let inputAuthor = $("#authorBar").val();
  let inputTerm = $("#searchBar").val();

  let URL = `https://www.googleapis.com/books/v1/volumes?q=${inputTerm}+inauthor:${inputAuthor}`;

  console.log(URL);

  fetch(URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.items[0].volumeInfo.title);
      data.items.forEach((book) => {
        console.log(book);
        /*
        $(".bookResults").append("<div class='volume'>");
        $(".bookResults").append(`<img src=${book.volumeInfo.imageLinks.thumbnail}/>`);
        $(".bookResults").append(`<p>${book.volumeInfo.title}</p>`);
        $(".bookResults").append("</div>");
        */
        $(".bookResults").append(`<div class='volume'>
        <img src=${book.volumeInfo.imageLinks.thumbnail}/ >
        <p class="sans-serif">${book.volumeInfo.title}</p>
        </div>
        `);
      });
    });
});
