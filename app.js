
// Define UI Vars
const wigTitle = document.getElementById('wig-title');
const wigForm = document.querySelector('#wig-form');
const leadForm = document.querySelector('#lead-form');
const lagForm = document.querySelector('#lag-form');
const wigInput = document.getElementById('wig');
const leadInput = document.getElementById('lead');
const lagInput = document.getElementById('lag');
const leadList = document.getElementById('lead-list');
const lagList = document.getElementById('lag-list');

// Init UI
const uiLead = new UI(leadList);
const uiLag = new UI(lagList);
const uiWig =new UI(wigTitle);

loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // DOM Load event
  document.addEventListener('DOMContentLoaded', loadData);
  // Change Wig
  wigForm.addEventListener('submit', changeWig);
  // Add Lead behavior
  leadForm.addEventListener('submit', addLead);
  // Remove Lead behavior
  leadList.addEventListener('click', removeLead)
  //
  lagForm.addEventListener('submit', addLag);
  // Remove Lag result
  lagList.addEventListener('click', removeLag)
}

// Get Data from LS
function loadData() {
  uiLead.displayList();
  uiLag.displayList();
  let wig;
    if(localStorage.getItem('Wig') === null){
        wig = 'Please set your Wig';
      } else {
        wig = localStorage.getItem('Wig');
      }
      wigTitle.textContent = 'Your W.I.G: ' + wig;        
}

// Change Wig
function changeWig(e) {
  if (wigInput.value === ''){
    alert('Please add your Wild Important Goal');
  } else {
    if(confirm('Are you sure?')) {
      wigTitle.textContent = 'Your W.I.G: ' + wigInput.value;
      localStorage.setItem('Wig', wigInput.value);
      wigInput.value ='';
    }
  }
  
  e.preventDefault();
}

// Add Lead behavior
function addLead(e) {
  e.preventDefault();
  if(leadInput.value === '') {
    alert('Add a lead behavior');
  } else {
    uiLead.displayItem(leadInput.value);

    // Store in LS 
    uiLead.storage.storeItem(leadInput.value);

    // Clear input
    leadInput.value = '';
  }
}

// Remove Lead behavior
function removeLead(e) {
  uiLead.removeItem(e);
}

// Add Lag result
function addLag(e) {
  e.preventDefault();
  if(lagInput.value === '') {
    alert('Add a lag result');
  } else {
    uiLag.displayItem(lagInput.value);

    // Store in LS 
    uiLag.storage.storeItem(lagInput.value);

    // Clear input
    lagInput.value = '';
  }

  e.preventDefault();
}

// Remove Lead behavior
function removeLag(e) {
  uiLag.removeItem(e);
}

const showJoke = document.getElementById('show-joke');
const testJoke = document.getElementById('test-joke');
const url = `https://v2.jokeapi.dev/joke/Programming?type=single`;
const showQuote = document.getElementById('show-quote');
const showAuthor = document.getElementById('show-author');
const testQuote = document.getElementById('test-quote');
const url2 = `http://api.quotable.io/random`;

let addJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => showJoke.textContent = `${item.joke}`)
}

let addQuote = () => {
    fetch(url2)
    .then(data => data.json())
    .then(item => {
      showQuote.textContent = `${item.content}` 
      showAuthor.textContent = `${item.author}`
    })
}
testJoke.addEventListener('click', addJoke);
addJoke();
testQuote.addEventListener('click', addQuote);
addQuote();