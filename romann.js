const convertBtn=document.getElementById("convert-btn");
const numberInput=document.getElementById("number");
const romanOutput=document.getElementById("output");

convertBtn.addEventListener("click",()=>{
  let numVal=parseInt(numberInput.value);
  romanConvert(numVal);
});

function romanConvert(numVal){
  const arabicNum=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const romanNum=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  output.textContent="";

  if (!numVal){
    output.textContent="Please enter a valid number";
    return;
  }
  
  if (numVal<0){
    output.textContent="Please enter a number greater than or equal to 1";
    return;
  }

  if (numVal>=4000){
    output.textContent="Please enter a number less than or equal to 3999";
    return;
  }

  for (let i=0;i<arabicNum.length;i++){
    while (numVal>=arabicNum[i]){
      output.textContent+=romanNum[i];
      numVal-=arabicNum[i];
    }
  }
  return output.textContent;
  }
  

