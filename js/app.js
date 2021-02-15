let popunLink = document.querySelector('.popup__link');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let popupBody = document.querySelector('.popup-body');

popunLink.onclick = function (event) {
    event.preventDefault ();
    popup.classList.add('opened');
};

popupClose.onclick = function (event) {
    event.preventDefault ();
    popup.classList.remove('opened');
};
