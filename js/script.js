/*
popNone
popShow
popOverflow
*/


function emailSubmit() {
    const popup = document.getElementById('popUp');
    popup.classList.remove('popNone');
    popup.classList.add('popShow');
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactName').value = '';
    document.getElementById('contactSubject').value = '';
    document.getElementById('contactText').value = '';
}

function closeEmailPopup() {
    const popup = document.getElementById('popUp');
    popup.classList.add('popNone');
    popup.classList.remove('popShow');
}