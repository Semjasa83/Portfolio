
function emailSubmit() {
    //const popup = document.getElementById('popUp');
    //popup.classList.remove('popNone');
    //popup.classList.add('popShow');
    clearValues();
}

function clearValues(){
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';
    document.getElementById('subject').value = '';
    clearTextArea();
}

function clearTextArea() {
    document.getElementById('message').value = '';
}

function closeEmailPopup() {
    const popup = document.getElementById('popUp');
    popup.classList.add('popNone');
    popup.classList.remove('popShow');
}