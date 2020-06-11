let arrayNum = [];

function adding(x, y) {
    switchX = 0;
    switchM = 0;
    switchD = 0;
    return  (x + y);
}

function minus(x, y) {
    switchX = 0;
    switchP = 0;
    switchD = 0;
    return (x - y);
}

function multiply(x, y) {
    switchM = 0;
    switchP = 0;
    switchD = 0;
    return (x * y);
}

function divide(x, y) {
    if(y === 0) {
        return "ERROR!";
    }
    switchX = 0;
    switchP = 0;
    switchM = 0;
    return (x / y);
}  
 


let numberOne = document.getElementById("num1").addEventListener("click", function() {
    arrayNum.push(1);
    document.getElementById('textDisplay').innerText = arrayNum.join("");
});

let numberTwo = document.getElementById("num2").addEventListener("click", function() {
    arrayNum.push(2);
    document.getElementById('textDisplay').innerText = arrayNum.join("");
});

let numberThree = document.getElementById("num3").addEventListener("click", function() {
    arrayNum.push(3);
    document.getElementById('textDisplay').innerText = arrayNum.join("");
});

let numberFour = document.getElementById("num4").addEventListener("click", function() {
    arrayNum.push(4);
    document.getElementById('textDisplay').innerText = arrayNum.join("");
});

let numberFive = document.getElementById("num5").addEventListener("click", function() {
    arrayNum.push(5);
    document.getElementById('textDisplay').innerText = arrayNum.join("");
});

let numberSix = document.getElementById("num6").addEventListener("click", function() {
    arrayNum.push(6);
    document.getElementById('textDisplay').innerText = arrayNum.join("");
});

let numberSeven = document.getElementById("num7").addEventListener("click", function() {
    arrayNum.push(7);
    document.getElementById('textDisplay').innerText = arrayNum.join("");
});

let numberEight = document.getElementById("num8").addEventListener("click", function() {
    arrayNum.push(8);
    document.getElementById('textDisplay').innerText = arrayNum.join("");
});

let numberNine = document.getElementById("num9").addEventListener("click", function() {
    arrayNum.push(9);
    document.getElementById('textDisplay').innerText = arrayNum.join("");
});

let numberZero = document.getElementById("num0").addEventListener("click", function() {
    arrayNum.push(0);
    document.getElementById('textDisplay').innerText = arrayNum.join("");
});

let numberDot = document.getElementById("numDot").addEventListener("click", function() {
    arrayNum.push('.');
    document.getElementById('textDisplay').innerText = arrayNum.join("");
});



// let convertStrNum = function() {
//     converted = Number(arrayNum.join(""));
//     return converted;
// }

let result = '';
let converted = '';
let nummer = '';

function operate() {
    converted = Number(arrayNum.join(""));
    return arrayNum=[];  
};

let switchX = 0;
let switchP = 0;
let switchM = 0;
let switchD = 0;

let timeButton = document.getElementById('timesBtn').addEventListener("click", function() {
    operate();
    switchX = 1;
    
})
let plusButton = document.getElementById('plusBtn').addEventListener("click", function() {
    operate();
    switchP = 1;
})
let minusButton = document.getElementById('minusBtn').addEventListener("click", function() {
    operate();
    switchM = 1;
})
let divideButton = document.getElementById('divideBtn').addEventListener("click", function() {
    operate();
    switchD = 1;
})

let randomFunction = function() {
        nummer = Number(arrayNum.join(""));
        if(switchX === 1) {return multiply(converted, nummer)};
        if(switchP === 1) {return adding(converted, nummer)};
        if(switchM === 1) {return minus(converted, nummer)};
        if(switchD === 1) {return divide(converted, nummer)};
};

let newNum= '';

let resultButton = document.getElementById("equal").addEventListener("click", function() {
    if(randomFunction() === undefined) {
        return converted;
    }
    randomFunction()
    newNum = randomFunction();
    arrayNum = [];
    arrayNum.push(newNum);
    switchX = 0;
    switchP = 0;
    switchM = 0;
    switchD = 0;
    return document.getElementById('textDisplay').innerText = arrayNum;
    
});

let clearButton = document.getElementById("clearBtn").addEventListener("click", function() {
    arrayNum = [];
    newSmt = 0;
    converted = '';
    nummer = '';
    switchX = 0;
    switchP = 0;
    switchM = 0;
    switchD = 0;
    document.getElementById('textDisplay').innerText= 0;
    
});

let delButton = document.getElementById("backDel").addEventListener("click", function() {
    arrayNum.splice(-1, 1);
    let arrToNum = Number(arrayNum.join(""));

    document.getElementById('textDisplay').innerText= arrToNum;

})
