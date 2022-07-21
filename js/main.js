//экран
const out = document.querySelector ('.input'); 
console.log (out);
//плюс
const doPlas = document.querySelector ('.submit-p');
console.log (doPlas);
//минус
const doRavno = document.querySelector ('.submit-r');
console.log (doRavno);

//кнопки
const text0 = document.querySelector ('.text0');
console.log (text0);
const text1 = document.querySelector ('.text1');
console.log (text1);
const text2 = document.querySelector ('.text2');
console.log (text2);
const text3 = document.querySelector ('.text3');
console.log (text3);
const text4 = document.querySelector ('.text4');
console.log (text4);
const text5 = document.querySelector ('.text5');
console.log (text5);
const text6 = document.querySelector ('.text6');
console.log (text6);
const text7 = document.querySelector ('.text7');
console.log (text7);
const text8 = document.querySelector ('.text8');
console.log (text8);
const text9 = document.querySelector ('.text9');
console.log (text9);


let a = ''; //1 число
let b = '';//2 число
let opereytion = '';// операция
finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9'];
const action = ['-','+']

//функция очищения
function clearAll (){
  let a = ''; //1 число
  let b = '';//2 число
  let opereytion = '';// операция
  finish = false;
  out.value = 0;
}

//сброс
const sbros = document.querySelector ('.reset');
console.log (sbros);
sbros.addEventListener('click',clearAll);

const btnDown = document.querySelector('.grid-body');
btnDown.addEventListener('click',(ev)=>{
  if(!ev.target.classList.contains('.buttons'))return;//нажата не кнопка в диве
  if(ev.target.classList.contains('.reset')) return; //нажата кнопка сброс для нее отдельная ф-я

  out.value = '';
  //значение в кнопке
  const key = Event.srcElement.textContent;
  console.log(key);
  //
  if(digit.includes(key)){
    if(b === '' && opereytion === ''){
      a+=key;
      console.log(a,b,opereytion);
      out.value = a;
    } else if(a!==''&& b!== ''&& finish){
      b = key;
      finish = false;
      out.value = b;
    } else{
      b+=key;
      out.value = a;
    }
    console.log(a,b,opereytion);
    return;
  };
  if(action.includes(key)){
    opereytion = key;
    out.value = opereytion;
    console.log(a,b,opereytion);
    return;
  }
  //ravno
  if(key === '='){
    if(b ==='') b=a;
    switch (opereytion) {
      case '+':
        a = (+a)+(+b);
        break;
      case '-':
        a = a - b;
        break;
    }
    finish = true;
    out.value = a;
    console.log(a,b,opereytion);
  }
});
