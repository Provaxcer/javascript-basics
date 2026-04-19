function searchAPI(query) {
  console.log("Searching for:", query);
}

const debouncedSearch = debounce(searchAPI, 500);

// Attach to input
document.querySelector("input").addEventListener("keyup", function() {
  debouncedSearch(this.value);
});