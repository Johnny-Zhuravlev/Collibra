const popunLink = document.querySelector('.popup__link');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupBody = document.querySelector('.popup-body');


popunLink.onclick = function (event) {
    event.preventDefault ();
    popup.classList.add('opened');
};

popupClose.onclick = function (event) {
    event.preventDefault ();
    popup.classList.remove('opened');
};


const dataListPoints = document.querySelectorAll('.data-list__point');

for (let i=0; i < dataListPoints.length; i++) {
    dataListPoints[i].addEventListener('click', (event) => {
        let ListPointCurrent = event.target.parentElement.children;
        for(let j=0; j < ListPointCurrent.length; j++) {
            ListPointCurrent[j].classList.remove('active');
        }

        event.target.classList.add('active');
    });
}