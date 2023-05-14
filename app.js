const section = document.querySelector('#section');
const btnRandomColor = document.querySelector('#btnRandomColor');

const colorPalette = {
    red: '#ff001b',
    green: '#0cee35',
    blue: '#00d4ff',
    white: '#ffffff',
    purple: '5d00ff'
}

const convertObjToArray = (obj) => {
    const array = [];
    for(const key in obj){
        array.push(obj[key])
    }
    return array;
}
const randomNumber = (list) => {
    let largo = list.length;
    
    return Math.floor((Math.random()*largo)) ;
}
const selectRandomColor = (listColor, randomNumber) =>{
    return listColor[randomNumber];
}

const paramsSelectRandomColor = {

}

const handleRandomColor = () =>{
    
    paramsSelectRandomColor.listColor = convertObjToArray(colorPalette);
    console.log('paramsSelectRandomColor.listColor: ', paramsSelectRandomColor.listColor);
    paramsSelectRandomColor.random = randomNumber(paramsSelectRandomColor.listColor);
    console.log('paramsSelectRandomColor.random: ', paramsSelectRandomColor.random);
    

    section.style.background = selectRandomColor(paramsSelectRandomColor.listColor, paramsSelectRandomColor.random);
}

btnRandomColor.addEventListener('click', () => handleRandomColor());
