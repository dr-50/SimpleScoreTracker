const inputCounter = 0

//function for creating an array of all scores
function scoreArrayFunc(){
    var inputs = document.getElementsByTagName('input');
    var array = []; 
    for (var i=0; i<inputs.length; i++){
        array.push(inputs[i].value)
    }
    // return inputValArr;
// }

// Function for counting consecutive values in array
// function cntConsecutiveElements(){
    // 10 Streak
    let result = [];
    let counter = 1;

    // let array = scoreArrayFunc()
    
    //create an array with count of consecutive values
    for (let i = 0; i<array.length; i++){
        if (array[i]=== array[i + 1]){
            counter ++
        } else {
            result.push(array[i] +"." + counter);
            counter = 1
        }
        // console.log("results: ", result);
        // return result
        // arrayTenFilter(result)
    }
    
// }

//Function for filtering array to values of 10. Sort desc. Pass array result from cntConsecutiveElements function.
// function arrayTenFilter(scoreArray){
    // let consecCount = cntConsecutiveElements()
    
    const re = RegExp(/10/i)
    const allTenStreaks = result.filter( v => v.match(re)).sort().reverse()
    let tenStreaks = []
    let tenStreakTracker = document.getElementById('ten-streak-tracker')

    //clear ol value to be updated 
    tenStreakTracker.innerHTML='';
    
    // return matches
    console.log('TenCount; ', allTenStreaks)
    for (i=0; i<allTenStreaks.length; i++){
        let topTenStreaksDec= allTenStreaks[i].toString().indexOf(".");
        let tenStreakValue = allTenStreaks[i].toString().substring(topTenStreaksDec+1);
        tenStreaks.push(tenStreakValue)
    }
    
    for (i=0; i<tenStreaks.length; i++){
        var li = document.createElement('li');
        li.innerText = tenStreaks[i];
        tenStreakTracker.appendChild(li);
    }
    // let topTenStreaksDec = allTenStreaks.toString().indexOf(".")
    // let topTenStreaks = allTenStreaks.toString().substring(topTenStreaksDec+1);
    // console.log(topTenStreaks)
}

//Create new input number field
function newInputCreate(inputCountTotal){
    newInput = document.createElement('input');
    newInput.setAttribute("type", "number")
    newInput.id=inputCountTotal+1
    // newInput.setAttribute("onclick", "clickIn(this)");
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

    // var consecCount = cntConsecutiveElements(inputValArr)
}

function scrollToBottom(){
    var scoreIn = document.getElementById('scoreInput');
    // var output = document.querySelector('#output');
    scoreIn.scrollTo(0, scoreIn.scrollHeight)
    // console.log(scoreIn.scrollHeight)
}

function colorEmpty(inputTotalCount){
    var inputs = document.getElementsByTagName('input');

    for(i=0; i<inputs.length; i++){
        if(inputs[i].value !== ""){
            inputs[i].style.backgroundColor = "";
            // console.log("blank ", inputs.id)
        }
        else {
            inputs[i].style.backgroundColor = "lightpink"
            // console.log("value ", inputs.id)
        }
    }

}

//Function for click into input fields
function clickOut(el){
    //get total number of inputs on screen
    var inputCountTotal = document.getElementsByTagName('input').length
    //update shot total
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
    scrollToBottom();
}
