$("#searchButton").click(function(){
  
  let inputYear = $("#yearBar").val();
  let inputTerm = $("#searchBar").val();
  
  let URL = `http://www.omdbapi.com/?apikey=8e9ded79&y=${inputYear}&s=${inputTerm}`;

  console.log(inputYear);
  console.log(inputTerm);
  
  fetch(URL)
        .then(function(response) {
            return response.json();
  })
        .then(function(data) {
            console.log(data);
        });
});
