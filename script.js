const OTP = document.querySelectorAll('.count');

const generateBtn = document.querySelector('.generator');

console.log(OTP);

const randomNumber = () => {
  const number = Math.floor(Math.random()*10000).toString();
  console.log(number);
   if(number.length > 3){
     for(let i = 0; i < OTP.length; i++){
         OTP[i].innerHTML=number[i]
     }
   }
  

};

generateBtn.addEventListener('click', randomNumber);

randomNumber();
