 let amount = document.querySelector('.inp');
 let button = document.querySelector('button');
 let div = document.querySelector('.text')

  let summa = button.onclick =  () => {
    let sum = (amount.value)/730*140;
    div.innerHTML = "Сумма декретных:" + (sum.toFixed(0) + "тыс.руб");
 };
 
