function TriaangleCalculateArea(){
    
    const  triangleInputFlied = document.getElementById('t-base');
    const triangleBaseText = triangleInputFlied.value;
    const base = parseFloat(triangleBaseText);
    // console.log(base);

    const  triangleInputFliedHight = document.getElementById('t-hight');
    const triangleHightText = triangleInputFliedHight.value;
    const hight = parseFloat(triangleHightText);
    // console.log(hight);

    const area = 0.5* base*hight;
    console.log(area);

    const triangleArea = document.getElementById('traiangle-area');
    triangleArea.innerText = area;
}