
function emailSubmit() {
    const popup = document.getElementById('popUp');
    popup.classList.remove('popNone');
    popup.classList.add('popShow');
    clearValues();
}

function clearValues(){
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactName').value = '';
    document.getElementById('contactSubject').value = '';
    clearTextArea();
}

function clearTextArea() {
    const textArea = document.getElementById('contactText');
    textArea.value = '';
}

function closeEmailPopup() {
    const popup = document.getElementById('popUp');
    popup.classList.add('popNone');
    popup.classList.remove('popShow');
}