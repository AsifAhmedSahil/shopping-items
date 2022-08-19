function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementById(elementId, value){
    const  subTotal = document.getElementById(elementId);
    subTotal.innerText = value;
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById("phone-total")
    const currentCaseTotal = getTextElementValueById("case-total")

    const currentTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementById("sub-total",currentTotal);

    // tax set
    const taxAmountString = (currentTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString)
    setTextElementById("tax-amount",taxAmount)

    const finalTotal = currentTotal + taxAmount;
    setTextElementById("final-total",finalTotal)

    
}