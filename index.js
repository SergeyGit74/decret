 let amount = document.querySelector('.inp');
 let button = document.querySelector('button');
 let div = document.querySelector('.text');

 let gender = document.querySelector('.gender');
 let name = document.querySelector('.name');

 let genderout = document.querySelector('.genderout');
 let nameout = document.querySelector('.nameout');

  let summa = button.onclick =  () => {
    let sum = (amount.value)/730*140;
    div.innerHTML = "Сумма декретных:" + (sum.toFixed(0) + "тыс.руб");
 };
 
let btn = gender.addEventListener('click', ()=> {
    genderout.innerHTML = 'Мальчик';
});

let btn1 = name.addEventListener('click', ()=> {
  nameout.innerHTML = 'Марк';
});
