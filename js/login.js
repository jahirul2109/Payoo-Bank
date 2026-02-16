const number = document.getElementById('account');
const pin = document.getElementById('pin');
/********Checiking Number************ */
function checkingNumber (number) {
    number.target.value = number.target.replace(/[^0-9]/g, "");
}
number.addEventListener('input',checkingNumber)

document.getElementById('form-btn').addEventListener('submit', (e)=> {
    e.preventDefault()
    const number = document.getElementById('account').value;
    const pin = document.getElementById('pin').value;
    const conVertedNumber = parseInt(number);
    const conVertedPin = parseInt(pin);
    if (number.length == 11 && (number[0]=== "0" && number[1] ==="1")) {
        if (conVertedPin === 1234) {
            window.location.href = "./home.html"
        } else {alert ("Wrong Pin")}
    } else {
        alert('Please Provid a valid number ')
    }

})