//Set of number mading up hex number
const  hexValueComponent = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

//Targetting elements
const clickBtn = document.getElementById('click-btn');
const colorFormat = document.getElementById('color-format');

clickBtn.addEventListener('click', () => {
     const hexvalue = RandomNumber();
    document.body.style.backgroundColor = hexvalue;
    colorFormat.innerHTML =  hexvalue ;
})

 function RandomNumber() {
     let value ="#"
      for( let i = 0 ; i < 6 ; i++){
        value += hexValueComponent[Math.floor(Math.random()*hexValueComponent.length)];
      }
      return value;
 }