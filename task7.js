let arr = ["прохожу", "курс", 7 , 0 , 88, 73, 99, 0.36, null, undefined];

let zeros=0;
let strs=0;
let nulls=0;
let countables=0;
let uncountables=0;

for (i = 0; i<arr.length; i++) {
  if( arr[i]==0){
    zeros++;
  }else if(arr[i] == "string"){
  strs++;
  }else if(arr[i]==null){
    nulls++
  }else if(arr[i] % 2 === 0){
    countables++
  }else{
    uncountables++
  }
}

alert(`нулей - ${zeros} \n строк - ${strs} \n null - ${nulls} \n четных - ${countables} \n нечетных - ${uncountables}`)