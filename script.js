const inputCounter = 0

//function for creating an array of all scores
function scoreArrayFunc(){
    var inputs = document.getElementsByTagName('input');
    var array = []; 
    let result = [];
    let counter = 1;

    //create an array of all input values
    for (var i=0; i<inputs.length; i++){
        array.push(inputs[i].value)
    }

    //create an array with count of consecutive values
    for (let i = 0; i<array.length; i++){
        if (array[i]=== array[i + 1]){
            counter ++
        } else {
            result.push(array[i] +"." + counter);
            counter = 1
        }
    }
    
    //regex expression for finding values from array with scores of ten format of {score}.{streak} ex 10.3
    const re = RegExp(/10/i)
    const allTenStreaks = result.filter( v => v.match(re)).sort().reverse()
    let tenStreaks = []
    let tenStreakTracker = document.getElementById('ten-streak-tracker')

    //add logic for identifying current streak
    //

    //clear ol value to be updated 
    tenStreakTracker.innerHTML='';

    //create an array of just score streaks of 10 scores only 
    for (i=0; i<allTenStreaks.length; i++){
        let topTenStreaksDec= allTenStreaks[i].toString().indexOf(".");
        let tenStreakValue = allTenStreaks[i].toString().substring(topTenStreaksDec+1);
        tenStreaks.push(tenStreakValue)
    }

    //create an array of streaks from above array
    for (i=0; i<tenStreaks.length; i++){
        var li = document.createElement('li');
        li.innerText = tenStreaks[i];
        tenStreakTracker.appendChild(li);
    }
}

//Create new input number field
function newInputCreate(inputCountTotal){
    newInput = document.createElement('input');
    newInput.setAttribute("type", "number")
    newInput.id=inputCountTotal+1
    newInput.setAttribute("onblur", "clickOut(this)")
    document.getElementById('scoreInput').appendChild(newInput)
}

//Update the Shot Total
function shotTotal(){
    //Shot Total
    var inputs = document.getElementsByTagName('input');
    var inputValArr = []; 
    for (var i=0; i<inputs.length; i++){
        inputValArr.push(inputs[i].value)
    }
    var numShots = inputValArr.filter(Boolean).length;
    var shotTotalEl = document.getElementById('shot-total-value')
    shotTotalEl.innerHTML=numShots
}

function scrollToBottom(){
    var scoreIn = document.getElementById('scoreInput');
    scoreIn.scrollTo(0, scoreIn.scrollHeight)
}

function colorEmpty(inputTotalCount){
    var inputs = document.getElementsByTagName('input');

    for(i=0; i<inputs.length; i++){
        if(inputs[i].value !== ""){
            inputs[i].style.backgroundColor = "";
        }
        else {
            inputs[i].style.backgroundColor = "lightpink"
        }
    }

}
//function clear chart
function removeChart(){
    //Delete existing chart
myChart = document.getElementById('myChart')
barChart.removeChild(myChart)
newElChart = document.createElement('canvas')
newElChart.id='myChart'
barChart.appendChild(newElChart)
}

//function create chart
function newChart(){
let ctx = document.getElementById('myChart');
let barChart = document.getElementById('barChart');
let inputs = document.getElementsByTagName('input')
let scores = []





//array for scores
for (var i=0; i<inputs.length; i++){
    scores.push(inputs[i].value)
}
scores = scores.filter(Boolean)

//count of score values pushed into object
var scoreCounts = scores.reduce(function(obj, b) {
    obj[b] = ++obj[b] || 1;
    return obj;
}, {})

// console.log('Score Object: ', scoreCounts);
// console.log('Object Keys: ', Object.keys(scoreCounts))
// console.log('Object Values: ', Object.values(scoreCounts))


new Chart(ctx, {
type: 'bar',
data: {
  labels: Object.keys(scoreCounts),
  datasets: [{
    label: 'Count By Score',
    data: Object.values(scoreCounts),
    borderWidth: 1
  }]
},
options: {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
});


}

//Function for click into input fields
function clickOut(el){
    //get total number of inputs on screen
    var inputCountTotal = document.getElementsByTagName('input').length
    //update shot total on screen
    shotTotal()
    //Get consecutive 10 score count
    scoreArrayFunc()

    //create new input when selecting last available
    if(el.id==inputCountTotal){
        newInputCreate(inputCountTotal)
    }
    //highlight empty boxes
    colorEmpty(inputCountTotal); 
    //scroll to bottom of input div when entering new score
    if(el.id==inputCountTotal){
        scrollToBottom();
    }

    //remove chart
    removeChart()
    //new chart
    newChart()
}
