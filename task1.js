let num = + prompt ("Введите число: ");
if (typeof num === "number" && num % 2 === 0){
  alert("Вы ввели четное число");
}else if(typeof num === "number" && num % 1 === 0){
  alert("Вы ввели нечетное число");
}else if(num.isNan){
  alert("не число");
}else{
  alert("Упс, кажется, вы ошиблись");
}


