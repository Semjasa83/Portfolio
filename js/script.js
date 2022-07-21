/*
popNone
popShow
popOverflow
*/


function emailSubmit() {
    const popup = document.getElementById('popUp');
    popup.classList.remove('popNone');
    popup.classList.add('popShow');
}

function closeEmailPopup() {
    const popup = document.getElementById('popUp');
    popup.classList.add('popNone');
    popup.classList.remove('popShow');
}