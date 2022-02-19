function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}
function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}
function updateTotal(fieldId, amount) {
    const totalTag = document.getElementById(fieldId);
    const previousTotalInText = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalInText);
    const newTotal = previousTotal + amount;
    totalTag.innerText = newTotal;
}
//Balance update ডিপোজিট বাটন এবং উইথড্র  বাটন এ ক্লিক করে এখন ব্যালেন্স থেকে কম বেশি করব
function updateBalance(amount, isAdd) {
    const balanceTag = document.getElementById('balance-total');
    const balanceInText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceInText);
    let newBalance;
    if (isAdd == true) {
        newBalance = previousBalance + amount;
    }
    else {
        newBalance = previousBalance - amount;
    }
    balanceTag.innerText = newBalance;
}
document.getElementById('deposit-button').addEventListener('click',
    function () {
        // console.log('depositClick')
        const amount = getInputValue('deposit-input');
        // console.log(amount);
        if (amount > 0) {
            updateTotal('deposit-total', amount);
            updateBalance(amount, true);
        }
    });

// ei bar Withdraw er pala
document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('withdraw-button chacking')
    const amount = getInputValue('withdraw-input');
    // console.log(amount);
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
})
