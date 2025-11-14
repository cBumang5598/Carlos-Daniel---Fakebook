'use strict';

import { User } from "./User.js";

class Subscriber extends User {
  #pages;
  #groups;
  #canMonetize = false;

  constructor(id, name, userName, email, pages, groups, canMonetize){
    super(id, name, userName, email);
    this.#pages = pages;
    this.#groups = groups;
    this.#canMonetize = canMonetize;
  }

  get pages() { return this.#pages; }
  get groups() { return this.#groups; }
  get monetize() { return this.#canMonetize; }

  getInfo(){
    let subsinfo = `${super.getInfo()} `;
    return subsinfo;
  }
}
