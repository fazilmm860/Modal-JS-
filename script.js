'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);
const openModal = function () {

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
}
const clossModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
}
for (let i = 0; i < btnShowModal.length; i++)
    btnShowModal[i].addEventListener('click', openModal);



btnCloseModel.addEventListener('click', clossModal)
overlay.addEventListener('click', clossModal);


document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {

        clossModal();


    }
})