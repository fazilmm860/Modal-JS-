'use strict';
const model = document.querySelector('.model');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);
for (let i = 0; i < btnShowModal.length; i++)
    console.log(btnShowModal[i].textContent);