function inputFieldNumber(isIncrease){
     const caseNumberField = document.getElementById("input-field");
     const caseNumberString = caseNumberField.value;
     const previesNumber = parseInt(caseNumberString);
     let newCaseNumber;
     if(isIncrease === true){
          newCaseNumber = previesNumber + 1;
     }else{
          newCaseNumber = previesNumber - 1;
     }
     caseNumberField.value= newCaseNumber
     return newCaseNumber;
};
function caseTottalPrice(newCaseNumber){
     const caseTottalPrice = newCaseNumber * 59;

     const caseTottalElement = document.getElementById("case-totta");
     caseTottalElement.innerText = caseTottalPrice;
     
};
// phone
function phoneCost(newPhoneNumber){
     const phonePrice = newPhoneNumber * 1219;
     const phoneElement = document.getElementById("phone-tottal");
     phoneElement.innerText = phonePrice;
     return phonePrice;
};

function tottalFoneNumber(isIncrease){
     const inputFlieds = document.getElementById("input-fields");
     const previesNumber = inputFlieds.value; 
     if(isIncrease == true){
          newPhoneNumber = parseInt(previesNumber) + 1;
     }else{
          newPhoneNumber = parseInt(previesNumber) - 1;
     }
     inputFlieds.value = newPhoneNumber;
     return newPhoneNumber;
};

// 03
function getTexElementById(elementId){
     const element = document.getElementById(elementId);
     const elementString = element.innerText;
     const curentElement = parseInt(elementString);
       
      return curentElement;
}
function calculateSub(){
     const curentPhoneTottal = getTexElementById("phone-tottal");
     const curentCaseTottal =  getTexElementById("case-totta");
     const subTotal = curentPhoneTottal + curentCaseTottal;

     setElementById('sub-tottals',subTotal);
     // 
     const taxAmountstring =( subTotal * 0.1).toFixed(2);
     const taxAmount = parseFloat(taxAmountstring);

     setElementById('tax',taxAmount);
     const fainalAmount = taxAmount + subTotal;
     setElementById('fainal',fainalAmount);

}
function setElementById(elimentId,value){
     const sub = document.getElementById(elimentId);
     sub.innerText = value;
}