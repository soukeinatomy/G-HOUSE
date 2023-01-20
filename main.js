
//all
const cards = document.querySelectorAll('.card');
const searchButton = document.querySelector('#search-button');
const searchInput = document.querySelector('#search-input');

//MARCELINE BIO AND STATUS
cards.forEach(card => {
    const bioButton = card.querySelector('.bio-button');
    const statusButton = card.querySelector('.status-button');
    const bioText = card.querySelector('.bio1-text');
    const statusText = card.querySelector('.status1-text');
  
    bioButton.addEventListener('click', () => {
      bioText.innerHTML = "Marceline is a mean vampire";
      bioText.style.display = "block";
      setTimeout(() => {
        bioText.style.display = "none";
      }, 5000);
    });
  
    statusButton.addEventListener('click', () => {
      statusText.innerHTML = "This character is currently alive.";
      statusText.style.display = "block";
      setTimeout(() => {
        statusText.style.display = "none";
      }, 5000);
    });
  });
  
  //KING ICE BIO AND STATUS
  
  cards.forEach(card => {
    const bioButton = card.querySelector('.bio-button');
    const statusButton = card.querySelector('.status-button');
    const bioText = card.querySelector('.bio2-text');
    const statusText = card.querySelector('.status2-text');
    
  bioButton.addEventListener('click', () => {
    bioText.innerHTML = "Hello";
    bioText.style.display = "block";
    setTimeout(() => {
    bioText.style.display = "none";
    }, 5000);
    });
    
  statusButton.addEventListener('click', () => {
    statusText.innerHTML = "This character is currently alive.";
    statusText.style.display = "block";
    setTimeout(() => {
    statusText.style.display = "none";
    }, 5000);
    });
    });
  
    //BMO BIO AND STATUS
  
  cards.forEach(card => {
      const bioButton = card.querySelector('.bio-button');
      const statusButton = card.querySelector('.status-button');
      const bioText = card.querySelector('.bio3-text');
      const statusText = card.querySelector('.status3-text');
        
  bioButton.addEventListener('click', () => {
      bioText.innerHTML = "Hello";
      bioText.style.display = "block";
      setTimeout(() => {
      bioText.style.display = "none";
      }, 5000);
      });
        
  statusButton.addEventListener('click', () => {
      statusText.innerHTML = "This character is currently alive.";
      statusText.style.display = "block";
      setTimeout(() => {
      statusText.style.display = "none";
      }, 5000);
      });
      });
  
    // FINN BIO AND STATUS
  
    cards.forEach(card => {
      const bioButton = card.querySelector('.bio-button');
      const statusButton = card.querySelector('.status-button');
      const bioText = card.querySelector('.bio4-text');
      const statusText = card.querySelector('.status4-text');
        
  bioButton.addEventListener('click', () => {
      bioText.innerHTML = "Hello";
      bioText.style.display = "block";
      setTimeout(() => {
      bioText.style.display = "none";
      }, 5000);
      });
        
  statusButton.addEventListener('click', () => {
      statusText.innerHTML = "This character is currently alive.";
      statusText.style.display = "block";
      setTimeout(() => {
      statusText.style.display = "none";
      }, 5000);
      });
      });
  
    //JAKE BIO AND STATUS
  
  cards.forEach(card => {
      const bioButton = card.querySelector('.bio-button');
      const statusButton = card.querySelector('.status-button');
      const bioText = card.querySelector('.bio5-text');
      const statusText = card.querySelector('.status5-text');
        
  bioButton.addEventListener('click', () => {
      bioText.innerHTML = "Hello";
      bioText.style.display = "block";
      setTimeout(() => {
      bioText.style.display = "none";
      }, 5000);
      });
        
  statusButton.addEventListener('click', () => {
      statusText.innerHTML = "This character is currently alive.";
      statusText.style.display = "block";
      setTimeout(() => {
      statusText.style.display = "none";
      }, 5000);
      });
      });
  
    //BUBBLE GUM PRINCESS BIO AND STATUS
  
  cards.forEach(card => {
      const bioButton = card.querySelector('.bio-button');
      const statusButton = card.querySelector('.status-button');
      const bioText = card.querySelector('.bio6-text');
      const statusText = card.querySelector('.status6-text');
        
  bioButton.addEventListener('click', () => {
      bioText.innerHTML = "Hello";
      bioText.style.display = "block";
      setTimeout(() => {
      bioText.style.display = "none";
      }, 5000);
      });
        
      statusButton.addEventListener('click', () => {
      statusText.innerHTML = "This character is currently alive.";
      statusText.style.display = "block";
      setTimeout(() => {
      statusText.style.display = "none";
      }, 5000);
      });
      });

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
