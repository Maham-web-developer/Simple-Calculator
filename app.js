let result = document.getElementById('result');

function display(number) {
    result.value += number;
}
function calculate() {
    let finalNumber = result.value;
   let  finalResult = eval(finalNumber)
   result.value = finalResult
}
function clrs(){
    result.value="";
}
function del() {
    result.value = result.value.slice(0,-1);
}
