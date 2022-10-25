// ********** Multiple Combine *********

// Name + size + multiple Color
function combineMultipleValuesNameSizeMultipleColor(){
    var value1 = document.getElementById("name").value;
    var value2 = document.getElementById("selectSize").value;

    const multipleValues = ["Green","Blue","Black","Grey","White","Navy"];
    let variabel = [];
    
    // Loop igennem variabel1 array, for at sætte nye værdier.
    for(i = 0; i < multipleValues.length; i++) {
        var combinedValue1 = value1+"-"+multipleValues[i]+"-"+value2;
        variabel.push(combinedValue1);
    }
    // returnere loopet array
    return variabel;
}
// Name + Color + multiple Size

function combineMultipleValuesNameColorMultipleSize(){
    var value1 = document.getElementById("name").value;
    var value2 = document.getElementById("selectColor").value;

    const multipleValues = ["XL","L","XXL","M","S","XS"];
    let variabel = [];
    
    // Loop igennem variabel1 array, for at sætte nye værdier.
    for(i = 0; i < multipleValues.length; i++) {
        var combinedValue1 = value1+"-"+value2+"-"+multipleValues[i];
        variabel.push(combinedValue1);
    }
    // returnere loopet array
    return variabel;
}
// Name + Multiple Color

function combineMultipleValuesNameMultipleColor(){
    var value1 = document.getElementById("name").value;

    const multipleValues = ["Green","Blue","Black","Grey","White","Navy"];
    let variabel = [];
    
    // Loop igennem variabel1 array, for at sætte nye værdier.
    for(i = 0; i < multipleValues.length; i++) {
        var combinedValue1 = value1+"-"+multipleValues[i];
        variabel.push(combinedValue1);
    }
    // returnere loopet array
    return variabel;
}
// Name + Multiple Size
function combineMultipleValuesNameMultipleSize(){
    var value1 = document.getElementById("name").value;

    const multipleValues = ["XL","L","XXL","M","S","XS"];
    let variabel = [];
    
    // Loop igennem variabel1 array, for at sætte nye værdier.
    for(i = 0; i < multipleValues.length; i++) {
        var combinedValue1 = value1+"-"+multipleValues[i];
        variabel.push(combinedValue1);
    }
    // returnere loopet array
    return variabel;
}
// Sku + Color + Multiple Size
function combineMultipleValuesSKUColorMultipleSize(){
    var value1 = document.getElementById("sku").value;
    var value2 = document.getElementById("selectColor").value;

    const multipleValues = ["XL","L","XXL","M","S","XS"];
    let variabel = [];
    
    // Loop igennem variabel1 array, for at sætte nye værdier.
    for(i = 0; i < multipleValues.length; i++) {
        var combinedValue1 = value1+"-"+value2+"-"+multipleValues[i];
        variabel.push(combinedValue1);
    }
    // returnere loopet array
    return variabel;
}
// Sku + size + Multiple color
function combineMultipleValuesSKUSizeMultipleColor(){
    var value1 = document.getElementById("sku").value;
    var value2 = document.getElementById("selectSize").value;


    const multipleValues = ["Green","Blue","Black","Grey","White","Navy"];
    let variabel = [];
    
    // Loop igennem variabel1 array, for at sætte nye værdier.
    for(i = 0; i < multipleValues.length; i++) {
        var combinedValue1 = value1+"-"+value2+"-"+multipleValues[i];
        variabel.push(combinedValue1);
    }
    // returnere loopet array
    return variabel;
}

// Sku + Multiple size
function combineMultipleValuesSKUMultipleSize(){
    var value1 = document.getElementById("sku").value;

    const multipleValues = ["XL","L","XXL","M","S","XS"];
    let variabel = [];
    
    // Loop igennem variabel1 array, for at sætte nye værdier.
    for(i = 0; i < multipleValues.length; i++) {
        var combinedValue1 = value1+"-"+multipleValues[i];
        variabel.push(combinedValue1);
    }
    // returnere loopet array
    return variabel;
}
// Sku + Multiple Color
function combineMultipleValuesSKUMultipleColor(){
    var value1 = document.getElementById("sku").value;

    const multipleValues = ["Green","Blue","Black","Grey","White","Navy"];
    let variabel = [];
    
    // Loop igennem variabel1 array, for at sætte nye værdier.
    for(i = 0; i < multipleValues.length; i++) {
        var combinedValue1 = value1+"-"+multipleValues[i];
        variabel.push(combinedValue1);
    }
    // returnere loopet array
    return variabel;
}
// EAN Size + Multiple Color
function combineMultipleValuesEANSizeMultipleColor(){
    var value1 = document.getElementById("ean").value;
    var value2 = document.getElementById("selectSize").value;

    const multipleValues = ["Green","Blue","Black","Grey","White","Navy"];
    let variabel = [];
    
    // Loop igennem variabel1 array, for at sætte nye værdier.
    for(i = 0; i < multipleValues.length; i++) {
        var combinedValue1 = "ean="+value1+", size="+value2+", color="+multipleValues[i];
        variabel.push(combinedValue1);
    }
    // returnere loopet array
    return variabel;
}
// EAN Color + Multiple Size
function combineMultipleValuesEANColorMultipleSize(){
    var value1 = document.getElementById("ean").value;
    var value2 = document.getElementById("selectColor").value;

    const multipleValues = ["XL","L","XXL","M","S","XS"];
    let variabel = [];
    
    // Loop igennem variabel1 array, for at sætte nye værdier.
    for(i = 0; i < multipleValues.length; i++) {
        var combinedValue1 = value1+"-"+value2+"-"+multipleValues[i];
        variabel.push(combinedValue1);
    }
    // returnere loopet array
    return variabel;
}
// EAN + Multiple Color
function combineMultipleValuesEANMultipleColor(){
    var value1 = document.getElementById("ean").value;

    const multipleValues = ["Green","Blue","Black","Grey","White","Navy"];
    let variabel = [];
    
    // Loop igennem variabel1 array, for at sætte nye værdier.
    for(i = 0; i < multipleValues.length; i++) {
        var combinedValue1 = value1+"-"+multipleValues[i];
        variabel.push(combinedValue1);
    }
    // returnere loopet array
    return variabel;
}
// EAN + Multiple Size 
function combineMultipleValuesEANMultipleSize(){
    var value1 = document.getElementById("ean").value;

    const multipleValues = ["XL","L","XXL","M","S","XS"];
    let variabel = [];
    
    // Loop igennem variabel1 array, for at sætte nye værdier.
    for(i = 0; i < multipleValues.length; i++) {
        var combinedValue1 = value1+"-"+multipleValues[i];
        variabel.push(combinedValue1);
    }
    // returnere loopet array
    return variabel;
}

// ******* Single Combine **********
// Combine : Name + Color + Size
function combineVariableName(){
    var value1 = document.getElementById("name").value;
    var value2 = document.getElementById("selectColor").value;
    var value3 = document.getElementById("selectSize").value;

    let variabel = [];

    var combinedValue = value1+"-"+value2+"-"+value3;
        variabel.push(combinedValue);

    return variabel;
}
// Combine : Name + Color
function combineVariableNameColor(){
    var value1 = document.getElementById("name").value;
    var value2 = document.getElementById("selectColor").value;

    let variabel = [];

    var combinedValue = value1+"-"+value2;
        variabel.push(combinedValue);

    return variabel;
}
// Combine : Name + Size
function combineVariableNameSize(){
    var value1 = document.getElementById("name").value;
    var value2 = document.getElementById("selectSize").value;

    let variabel = [];

    var combinedValue = value1+"-"+value2;
        variabel.push(combinedValue);

    return variabel;
}
// Combine : Sku + Farve + Size
function combineVariableSKU(){
    var value1 = document.getElementById("sku").value;
    var value2 = document.getElementById("selectColor").value;
    var value3 = document.getElementById("selectSize").value;

    let variabel = [];

    var combinedValue = "sku="+value1+",color="+value2+", size="+value3+"|";
        variabel.push(combinedValue);

    return variabel;
}
// Combine : Sku + Size
function combineVariableSKUSize(){
    var value1 = document.getElementById("sku").value;
    var value2 = document.getElementById("selectSize").value;

    let variabel = [];

    var combinedValue = "sku="+value1+",size="+value2+"|";
        variabel.push(combinedValue);

    return variabel;
}
// Combine : Sku + Color
function combineVariableSKUColor(){
    var value1 = document.getElementById("sku").value;
    var value2 = document.getElementById("selectColor").value;

    let variabel = [];

    var combinedValue = "sku="+value1+",color="+value2+"|";
        variabel.push(combinedValue);

    return variabel;
}
// Combine : EAN + Color + Size
function combineVariableEAN(){
    var value1 = document.getElementById("ean").value;
    var value2 = document.getElementById("selectColor").value;
    var value3 = document.getElementById("selectSize").value;

    let variabel = [];

    var combinedValue = "ean="+value1+", color="+value2+", size="+value3;
        variabel.push(combinedValue);

    return variabel;
}
// Combine : EAN + Color
function combineVariableEANColor(){
    var value1 = document.getElementById("ean").value;
    var value2 = document.getElementById("selectColor").value;

    let variabel = [];

    var combinedValue = "ean="+value1+",color="+value2;
        variabel.push(combinedValue);

    return variabel;
}
// Combine : EAN + Size
function combineVariableEANSize(){
    var value1 = document.getElementById("ean").value;
    var value2 = document.getElementById("selectSize").value;

    let variabel = [];

    var combinedValue = "ean="+value1+",size="+value2;
        variabel.push(combinedValue);

    return variabel;
}



// Combine : EAN + Color + Brand
function combineVariableEANColorBrand(){
    var value1 = document.getElementById("ean").value;
    var value2 = document.getElementById("selectColor").value;
    var value3 = document.getElementById("selectBrand").value;

    let variabel = [];

    var combinedValue = "ean="+value1+",color="+value2+", brand="+value3+",";
        variabel.push(combinedValue);

    return variabel;
}
function combineVariableEANSizeBrand(){
    var value1 = document.getElementById("ean").value;
    var value2 = document.getElementById("selectSize").value;
    var value3 = document.getElementById("selectBrand").value;

    let variabel = [];

    var combinedValue = "ean="+value1+",size="+value2+", brand="+value3+",";
        variabel.push(combinedValue);

    return variabel;
}

// Combine : Sku + Farve + Size (SKU)
function combineVariableSKUSKU(){
    var value1 = document.getElementById("sku").value;
    var value2 = document.getElementById("selectColor").value;
    var value3 = document.getElementById("selectSize").value;

    let variabel = [];

    var combinedValue = value1+"-"+value2+"-"+value3;
        variabel.push(combinedValue);

    return variabel;
}
// Combine : Sku + Size (SKU)
function combineVariableSKUSizeSKU(){
    var value1 = document.getElementById("sku").value;
    var value2 = document.getElementById("selectSize").value;

    let variabel = [];

    var combinedValue = value1+"-"+value2;
        variabel.push(combinedValue);

    return variabel;
}
// Combine : Sku + Color (sku)
function combineVariableSKUColorSKU(){
    var value1 = document.getElementById("sku").value;
    var value2 = document.getElementById("selectColor").value;

    let variabel = [];

    var combinedValue = value1+"-"+value2;
        variabel.push(combinedValue);

    return variabel;
}

// Combine : EAN + Size + Brand + Product_cost
function combineVariableEANSizeBrandProductCost(){
    var value1 = document.getElementById("ean").value;
    var value2 = document.getElementById("selectSize").value;
    var value3 = document.getElementById("selectBrand").value;
    var value4 = document.getElementById("selectProductCost").value;

    let variabel = [];

    var combinedValue = "ean="+value1+",size="+value2+", brand="+value3+",product_cost="+value4+",";
        variabel.push(combinedValue);

    return variabel;
}
// Combine : EAN + Color + Brand + Product_cost
function combineVariableEANColorBrandProductCost(){
    var value1 = document.getElementById("ean").value;
    var value2 = document.getElementById("selectColor").value;
    var value3 = document.getElementById("selectBrand").value;
    var value4 = document.getElementById("selectProductCost").value;

    let variabel = [];

    var combinedValue = "ean="+value1+",color="+value2+", brand="+value3+",product_cost="+value4+",";
        variabel.push(combinedValue);

    return variabel;
}
// Combine : EAN + Color + Size + Brand + Product_cost
function combineVariableEANSizeColorBrandProductCost(){
    var value1 = document.getElementById("ean").value;
    var value2 = document.getElementById("selectColor").value;
    var value3 = document.getElementById("selectSize").value;
    var value4 = document.getElementById("selectBrand").value;
    var value5 = document.getElementById("selectProductCost").value;

    let variabel = [];

    var combinedValue = "ean="+value1+",color="+value2+", size="+value3+",brand="+value4+", product_cost="+value5+",";
        variabel.push(combinedValue);

    return variabel;
}

// Additional_variation_ label : Color 

function combineAdditionalVariationLabelColor(){
    var value2 = document.getElementById("selectColor").value;

    const multipleValues = ["XL","L","XXL","M","S","XS"];
    let variabel = [];
    
    // Loop igennem variabel1 array, for at sætte nye værdier.
    for(i = 0; i < multipleValues.length; i++) {
        var combinedValue1 = value1+"-"+value2+"-"+multipleValues[i];
        variabel.push(combinedValue1);
    }
    // returnere loopet array
    return variabel;
}
// Additional_variation_ label : Size 

function combineAdditionalVariationLabelSize(){
    var value2 = document.getElementById("selectSize").value;

    const multipleValues = ["XL","L","XXL","M","S","XS"];
    let variabel = [];
    
    // Loop igennem variabel1 array, for at sætte nye værdier.
    for(i = 0; i < multipleValues.length; i++) {
        var combinedValue1 = value1+"-"+value2+"-"+multipleValues[i];
        variabel.push(combinedValue1);
    }
    // returnere loopet array
    return variabel;
}