'use strict';

import { Subscriber } from "./Subscriber.js";
import { Post } from "./Post.js";

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

function clearPostBox() {
  document.getElementById("post-text").value = "";
  document.getElementById("image-upload").value = "";
}

function createPost() {
  const posttext = document.getElementById('post-text').value;
  const postimage = document.getElementById('image-upload').files[0];
  const posts = document.querySelector('.new-post');

  const newpost = new Post(posttext, postimage);
  // const postdata = newpost.getPost();
  const box = document.createElement("div");
  box.classList.add("post-box");
  console.log(newpost.text);

  box.innerHTML = `
    <p>${newpost.text}</p>
    <p>${newpost.date}</p>
    ${newpost.image ? `<img src="${URL.createObjectURL(newpost.image)}">` : ""}
  `;
  posts.appendChild(box);

  clearPostBox();
}


const postbtn = document.getElementById('post-btn');
postbtn.addEventListener('click', createPost); 

const inputimage = document.getElementById('image-upload');
const imagename = document.getElementById('file-name');

inputimage.addEventListener('change', () => {
  if (inputimage.files.length > 0){
    imagename.innerHTML = inputimage.files[0].name;
  } else {
    imagename.innerHTML = '';
  }
})