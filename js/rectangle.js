function rectangle(){
    const rectangleWidhtInput = document.getElementById('ret-width');
    const rectangleValue = rectangleWidhtInput.value;
    const rectangleHeight = parseFloat(rectangleValue);
    // console.log(rectangleHeight);

    const rectangleLenghtIput = document.getElementById('ret-length');
    const rectangleLenghtValu = rectangleLenghtIput.value;
    const rectangleLenght = parseFloat(rectangleLenghtValu);
    // console.log(rectangleLenght);

    const area = rectangleHeight*rectangleLenght;
    // console.log(area);

    const rectangleArea = document.getElementById('recangle-area');
    rectangleArea.innerText = area;
    console.log(rectangleArea);

}