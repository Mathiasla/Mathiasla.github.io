var array = new Array();
  
function insert(val){
    array[array.length]=val;
}
  function show() {
    var string="<b> All Element of the Array : </br>";
    for(i = 0; i < array.length; i++) {
        string = string+array[i]+"<br>";
    }
    if(array.length > 0 )
    document.getElementById('myDiv').innerHTML = string;

  }
  console.log(array)