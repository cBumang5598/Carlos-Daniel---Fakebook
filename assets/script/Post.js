'use strict';

export class Post {
  #text;
  #image;
  #date;

  constructor(text, image){
    this.#text = text;
    this.#image = image;
    this.#date = new Date();
  }
  set text(text) { this.#text = text; }
  set image(image) { this.#image = image; }

  get text() { return this.#text; }
  get image() { return this.#image; }
  get date() {
  const options = {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }
  return this.#date.toLocaleString('en-ca', options);
}

  // getPostText() {
  //   return 
  //     this.#text;
  //   ;
  // }
}