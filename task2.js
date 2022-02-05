let x = prompt("Введите символ: ");
if (typeof +x === "number" && !isNaN(x)){
  alert("это число");
}else if(x == "true" || x == "false"){
  alert("это логический тип");
}else if(typeof x === "string"){
  alert("это строка");
}else{
  alert("Тип x не определён");
}