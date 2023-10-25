// var toggleButton = document.getElementById("toggleButton3");
// var hiddenText = document.getElementById("hiddenText3");

// var toggleButton = document.getElementById("toggleButton1");
// var hiddenText = document.getElementById("hiddenTex1t");

// var toggleButton = document.getElementById("toggleButton2");
// var hiddenText = document.getElementById("hiddenText2");

// var toggleButton = document.getElementById("toggleButton4");
// var hiddenText = document.getElementById("hiddenText4");


// toggleButton1.addEventListener("click", function() {
//     toggleContent(hiddenText1);
// });

// toggleButton2.addEventListener("click", function() {
//     toggleContent(hiddenText2);
// });

// toggleButton3.addEventListener("click", function() {
//     toggleContent(hiddenText3);
// });

// toggleButton3.addEventListener("click", function() {
//     toggleContent(hiddenText4);
// });

// function toggleContent(element) {
//     if (element.classList.contains("vertical-hide")) {
//         element.classList.remove("vertical-hide");
//     } else {
//         element.classList.add("vertical-hide");
//     }
// }



var toggleButton = document.getElementsByClassName("button-common");
console.log(toggleButton.length)
for (var i = 1; i < toggleButton.length; ++i) {
    var item = toggleButton[i];  
    item.addEventListener("click", function() {
        var hiddenText = document.getElementById("hiddenText"+ i);
        hiddenText.classList.toggle('vertical-hide')
    })
}


toggleButton1.addEventListener("click", function() {
    toggleContent(hiddenText1);
});

toggleButton2.addEventListener("click", function() {
    toggleContent(hiddenText2);
});

toggleButton3.addEventListener("click", function() {
    toggleContent(hiddenText3);
});

toggleButton4.addEventListener("click", function() {
    toggleContent(hiddenText4);
});
toggleButton4.addEventListener("click", function() {
    toggleContent(hiddenText5);
});

function toggleContent(element) {
    if (element.classList.contains("vertical-hide")) {
        element.classList.remove("vertical-hide");
    } else {
        element.classList.add("vertical-hide");
    }
}
