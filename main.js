
//all
const cards = document.querySelectorAll('.card');
const searchButton = document.querySelector('#search-button');
const searchInput = document.querySelector('#search-input');



//SEARCH BUTTON

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
 cards.forEach(card => {
    if (!card.querySelector('h2').innerHTML.toLowerCase().includes(searchTerm)) {
      card.style.display = "none";
    } else {
      card.style.display = "block";
    }
  });
});
