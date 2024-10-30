
// let buttonColor = document.getElementById('change');
// let bodyColor = document.getElementById('body');
//    buttonColor = bodyColor;

// buttonColor.addEventListener("click", bttn);

// function bttn(){
//     let newColors = ["red", "blue", "pink", "grey", "purple" ];
//     for (i=0; i>=newColors.indexOf(0); i++) {
//          let value = newColors[i]

//     };
//        buttonColor.style.backgroundColor =value
    
//     }

//     bttn()




let buttonColor = document.getElementById('change');
let bodyColor = document.getElementById('body');
   buttonColor = bodyColor;

   let newColors = ["white","red", "blue", "purple", "grey", "green" ];

   let zeroIndex = 0;

buttonColor.addEventListener("click", bttn);


function bttn(){


    buttonColor.style.backgroundColor = newColors[zeroIndex];

    zeroIndex++;

    if (zeroIndex >= newColors.length) {
              zeroIndex= 0;
              
          }
 document.getElementById("change").innerHTML = 'Change to ' + newColors[zeroIndex]
 }

    bttn()