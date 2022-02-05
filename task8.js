let myMap = new Map;

myMap.set(1, "apple");
myMap.set(2, "orange");
myMap.set(3, "apricot");
myMap.set(4, "cherry");
myMap.set(5, "strawberry");

myMap.forEach(function (key, value){
  console.log(`Ключ = ${key}, значение = ${value}`);
});