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
      data.items.volumeInfo.forEach(title){
        $(".bookResults").append(title);
      }
    });
});
