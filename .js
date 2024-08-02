let searchInputE1 = document.getElementById("searchInput");
let searchResultsE1 = document.getElementById("searchResults");

function createandappendbook(book) {
    let {
        title,
        imageLink,
        author
    } = book;
    let bookcard = document.createElement("img");
    bookcard.src = imageLink;
    searchResultsE1.appendChild(bookcard);
    let bookauthor = document.createElement("p");
    bookauthor.textContent = author;
    searchResultsE1.appendChild(bookauthor);

}

function displayresults(search) {
    for (let book of search) {
        createandappendbook(book);
    }
}

function callbackfun(event) {
    if (event.key === "Enter") {
        let searchword = searchInputE1.value;
        let url = "https://apis.ccbp.in/book-store?title=" + searchword;
        let options = {
            method: "GET",
        };
        fetch(url, options).then(function(response) {
            return response.json();
        }).then(function(jsondata) {

            displayresults(jsondata.search_results);
        });
    }
}
searchInputE1.addEventListener("keydown", callbackfun);
