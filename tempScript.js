function arryFilter(scoreArray){
    // var values=['10.1', '1.1', '8.1', '10.2', '12.1', '10.8']
    // var query = '10'

    const re = RegExp(/10/i)
    const matches = scoreArray.filter( v => v.match(re)).sort().reverse()
    console.log(matches);
    
}

arryFilter(['10.1', '1.1', '8.1', '10.2', '12.1', '10.8']);