// get the menu div
const currentMenuDiv = document.getElementById('current-menu');
// make an a-tag to go in the div
const menuLink = document.createElement('a');
// assign href, link text and class to a-tag
menuLink.className = "button";
// output the a-tag to the div:
currentMenuDiv.appendChild(menuLink);

// instantiate the Date class:
const dt = new Date();
let hr = dt.getHours();
let min = dt.getMinutes();

// declare vars to hold the href and text, the values 
// of which will be set dynamically in an if-else
let menuHref = "";
let menuText = "";

// hr = 10;
// min = 30;
// set the href and text based on current hour
// from 12:01 to 10:29 show the breakfast menu
// at 10:30, switch to lunch menu
if(hr < 11) {
    if(hr == 10) { // check for min
        if(min < 30) {
            menuHref = "breakfast.html";
            menuText = "Breakfast Menu"; 
        } else { // it's between 10:30 - 10:59
            menuHref = "lunch.html";
            menuText = "Lunch Menu"; 
        }
    } else { // hr is less than 11 and not 10, so must be 9 or less
        menuHref = "breakfast.html";
        menuText = "Breakfast Menu"; 
    }
// from 11:00  to 14:59, show lunch menu
} else if(hr < 15) {
    menuHref = "lunch.html";
    menuText = "Lunch Menu";
} else { // at 15:00 switch to dinner menu
    menuHref = "dinner.html";
    menuText = "Dinner Menu";
}

// assign the variables to href and text:
menuLink.href = menuHref;
menuLink.textContent = menuText;