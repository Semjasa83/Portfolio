
function emailSubmit() {
    //const popup = document.getElementById('popUp');
    //popup.classList.remove('popNone');
    //popup.classList.add('popShow');
    clearValues();
}

function clearValues(){
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactName').value = '';
    document.getElementById('contactSubject').value = '';
    clearTextArea();
}

function clearTextArea() {
    document.getElementById('contactText').value = '';
}

function closeEmailPopup() {
    const popup = document.getElementById('popUp');
    popup.classList.add('popNone');
    popup.classList.remove('popShow');
}