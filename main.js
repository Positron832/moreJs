'strict mode';
let myHeading = "document.querySelector('h1');

let myName = prompt('Enter your username');
localStorage.setItem('name', myName);
myHeading.textContent = 'Yo wassup' + myName;
