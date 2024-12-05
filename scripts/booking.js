/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35;
let daysSelected = 0;

const monButton = document.getElementById('monday');
const tueButton = document.getElementById('tuesday');
const wedButton = document.getElementById('wednesday');
const thuButton = document.getElementById('thursday');
const friButton = document.getElementById('friday');
const clearButton = document.getElementById('clear-button');
const halfButton = document.getElementById('half');
const fullButton = document.getElementById('full');
const calculatedCostElement = document.getElementById('calculated-cost');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function toggleButton(btn) {
    if (!btn.classList.contains('clicked')) {
        btn.classList.add('clicked');
        daysSelected++;
    } else {
        btn.classList.remove('clicked');
        daysSelected--;
    }
    calculateCost();
}

monButton.addEventListener('click', function() {
    toggleButton(monButton);
});
tueButton.addEventListener('click', function() {
    toggleButton(tueButton);
});
wedButton.addEventListener('click', function() {
    toggleButton(wedButton);
});
thuButton.addEventListener('click', function() {
    toggleButton(thuButton);
});
friButton.addEventListener('click', function() {
    toggleButton(friButton);
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener('click', function() {
    const daysButton = [monButton, tueButton, wedButton, thuButton, friButton];
    daysButton.forEach(function(btn) {
        btn.classList.remove('clicked');
    });
    daysSelected = 0;
    dailyRate = 35;
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    calculateCost();
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfButton.addEventListener('click', function() {
    dailyRate = 20;
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    calculateCost();
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullButton.addEventListener('click', function() {
    dailyRate = 35;
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    calculateCost();
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
    calculatedCostElement.innerHTML = daysSelected * dailyRate;
}

