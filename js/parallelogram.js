function parallelogram(){
    const inputFiled = parallelogramId('parallelogram-base');
    const inputheight = parallelogramId('parallelogram-height');
    
    const area = inputFiled*inputheight;
    // console.log(area);
    const showArea = document.getElementById('paral-area');
    showArea.innerText = area;
    console.log(showArea);

}

function parallelogramId(inputFiled){
    const parallelogramInput = document.getElementById(inputFiled);
     
    const parallelogramValu = parallelogramInput.value;
    const parallelogramChangevalu = parseFloat(parallelogramValu);
    return parallelogramChangevalu;
}