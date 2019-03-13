

function changeStyle(){
   
    let color = document.getElementById('inputColor').value
    document.getElementsByClassName('itemm')[inputRow()].style.backgroundColor = color;
   
}


function inputRow(){
    let count = document.getElementById('countt').value;
  
    let n = count-1;
    return n;

}
