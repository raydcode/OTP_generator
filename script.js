const OTP = document.querySelectorAll('.count');

const generateBtn = document.querySelector('.generator');

console.log(OTP);

const randomNumber = () => {
  const number = Math.floor(Math.random() * 10000).toString();
  const textarea = document.createElement('textarea');
  document.body.appendChild(textarea);
  textarea.style.visibility = 'hidden';
  if (number.length > 3) {
    textarea.innerHTML = number;
    for (let i = 0; i < OTP.length; i++) {
      OTP[i].innerHTML = number[i];
    }
    textarea.select();

    document.execCommand('copy');
  }
};

generateBtn.addEventListener('click', randomNumber);

randomNumber();
