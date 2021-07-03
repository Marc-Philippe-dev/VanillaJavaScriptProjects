//Targetting Elements
const clickBtn = document.getElementById('click-btn');
const colorFormat = document.getElementById('color-format');

clickBtn.addEventListener('click', () => {
    const randomValue = RgbaValueGenerator();
    document.body.style.backgroundColor = 'Rgba('+randomValue+')';
    colorFormat.innerHTML = 'Rgba('+randomValue+')';
})

function RgbaValueGenerator(){
    let value ='';
    for(let i = 0 ; i < 3 ; i++){
        value += Math.floor(Math.random()*255)+",";
    }
    value = value.substr(0,value.length-1);
    return value;
}

 