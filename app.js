// add number
function get(num) {
    var input = document.getElementById('input').value += num;
    //console.log(input)
}

//equal button for calculate
function equal() {
    var input = document.getElementById('input').value = eval(document.getElementById('input').value);
  
}

// ac buttton clean
function cleanin(e) {
    var input = document.getElementById('input').value = '';


}

//del 
function backspace() {
    var input1 = document.getElementById('input').value;
    document.getElementById('input').value = input1.substring(0, input1.length - 1);

}


// function per(){
//     var input1 = document.getElementById('input').value ;
//     input = (input1.length*100)
// }


