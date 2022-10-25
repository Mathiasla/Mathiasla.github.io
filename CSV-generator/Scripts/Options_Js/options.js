var select = document.getElementById("selectSize");
var options = ["XS","S", "M", "L", "XL", "XXL","3XL","4XL","5XL","36", "37","38","39","40","41","42","43","44","45","46","47","48","37/38","39/40","41/42","43/44","45/46","47/48"];

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.add(el);
}
var select = document.getElementById("selectColor");
var options = ["sort","hvid","black", "white", "green", "navy", "dark grey","orange","yellow","beige","dark blue", "lime", "denim blue","sand","bergundy","violet","mocca","light blue","turkis", "azure", "royale blue", "red", "koks", "bottlegreen", "silver grey"];

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.add(el);
}

