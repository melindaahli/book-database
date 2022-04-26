$("#searchButton").click(function () {
  let inputYear = $("#yearBar").val();
  let inputTerm = $("#searchBar").val();

  let URL = `http://www.omdbapi.com/?apikey=8e9ded79&y=${inputYear}&s=${inputTerm}`;

  if () then ()
  console.log(URL);
  
  fetch(URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      data.forEach(function (movie) {
        $(".movieResults").html(`<h3>${movie.search.title}</h3>`);
      });
    });
  
});
