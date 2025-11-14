'use strict';

import { Subscriber } from "./Subscriber.js";

const daniel = new Subscriber(
  1234,
  'Daniel Zhang',
  'danZ',
  'dan@714.com',
  ['My Coding Page', 'FPS Training Page'],
  ['CS2 Group', 'Valorant Group'],
  true
);

console.log(daniel.getInfo()); 