

// var elem;
// var newInput;
const inputCounter = 0
//Create a new input field when entering final field available
function selectedInput(elem){
    var inputCountTotal = document.getElementsByTagName('input').length
    // console.log('SelectedInput-TotalInputs: ', inputCountTotal)
    if(elem.id==inputCountTotal){
        newInput = document.createElement('input');
        newInput.setAttribute("type", "text")
        newInput.id=inputCountTotal+1
        newInput.setAttribute("onclick", "selectedInput(this)");
        newInput.setAttribute("onblur", "shotTotal()")
        document.getElementById('scoreInput').appendChild(newInput)
        // console.log('SelectedInput-TotalInputs: '&inputCountTotal)
        shotTotal();
    }else{
        shotTotal();
    }
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
    // console.log(numShots)
    var shotTotalEl = document.getElementById('shot-total-value')
    shotTotalEl.innerHTML=numShots


    // 10 Streak
    let result = "";
    let counter = 1;
    console.log(inputValArr)
    for (let i = 0; i<inputValArr.length; i++){
        if (inputValArr[i]=== inputValArr[i + 1]){
            counter ++
        }
        console.log("10 streak results: ", result);
    }
}