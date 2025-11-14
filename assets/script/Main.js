'use strict';

import { Subscriber } from "./Subscriber.js";

const daniel = new Subscriber(
  1234,
  'Daniel Zhang',
  'danZ',
  'dan@714.com',
  ['My Coding Page'],
  ['MITT Group'],
  true
);

const profilebtn = document.getElementById('profile-btn');
const modal = document.getElementById('modal');
const closebtn = document.getElementById('modal-close');
const modalbody = document.getElementById('modal-body');
const modalcontent = document.getElementById('modal-content');

profilebtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  modalcontent.classList.remove('hidden');
  closebtn.classList.remove('hidden');
  modalbody.innerHTML = daniel.getInfo();
})

closebtn.addEventListener('click', () =>{
  modal.classList.add('hidden');
  modalcontent.classList.add('hidden');
  closebtn.classList.add('hidden');
})

modal.addEventListener('click',(edge) =>{
  if(edge.target === modal)modal.classList.add('hidden');
  if(edge.target === modal)modalcontent.classList.add('hidden');
  if(edge.target === modal)closebtn.classList.add('hidden');
})