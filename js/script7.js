function multiplyTable(){
    
    let number = document.getElementById('num').value
    let showResult = '';
    for(let i = 1; i <= 12; i++){
        showResult = showResult + number + 'x' + i + '=' + (number * i) +'<br>'

    }

    document.getElementById('show').innerHTML = showResult
    //console.log(i*num);
}