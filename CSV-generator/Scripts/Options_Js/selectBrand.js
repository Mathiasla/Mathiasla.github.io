var select = document.getElementById("selectBrand");
var options = ["2.Be","Birkenstock","HKSDK", "Greiff", "Shoes for crews", "Skechers Pro", "Oliver Harvey","Tee Jays","IQ Sox","ROCK CHEF","The Organic Company","Reebok", "Solid Gear","Pinewood Outdoor tøj","SCIPPS - Australsk outdoor","Stuff","Kentaur","Ledlenser","BLÅKLÄDER", "Treksta", "Gateway1", "KAYA & KATO", "SUPERDRY", "Monitor", "New Balance","Bekina", "Bjerregaard","Vismo", "Grisport", "james & Nicholson", "HEROCK Workwear", "Airtox", "Chaud devant", "Boswell", "Segers", "Imagewear.dk", "Mozo sko", "BUJUTSU", "NORDIC", "Snickers Workwear", "Brynje", "Carhartt", "Deerhunter", "Elka", "OXYPAS", "Safety jogger", "F.Engel", "Sanita", "Sika", "Jalas", "Victorinox", "Zwilling", "Elten", "Dunlop","Mascot", "NYBO", "Toe Guard", "Dunderdon", "Logotryk", "Broderi", "James Harvest", "ID" ];

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.add(el);
}