const tabLinks = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-contents');
const closeTab = document.querySelector('.fa-xmark');
const openTab = document.querySelector('.fa-bars');
const sideMenu = document.getElementById('side-menu');

function opentab(tabname) {
    for(tablink of tabLinks) {
        tablink.classList.remove("active-link");

    }

    for(tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

closeTab.addEventListener('click', () => {
    sideMenu.style.right = '-200px'
});

openTab.addEventListener('click', () => {
    sideMenu.style.right = '0';
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwcLvnN9ND026I58cR9PmGN_lnT8GErLl10YK7KoEENEqEPdi7idX6RpcaZkfefRaGv/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.querySelector('#msg');
  
  form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function(){
          msg.innerHTML = ""
        }, 5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  });