# Assignment #3: Fakebook
---

**This is a client-side web application built with Vanilla JavaScript (ES6+), HTML, and CSS to simulate core social media functionality, primarily focusing on user posting and profile management. It demonstrates modern front-end development principles, including Object-Oriented Programming (OOP) and dynamic DOM manipulation.**


## Features & Functionality
+ **Dynamic Post Creation**: Users can submit text and image content, which is instantly rendered into the feed without a server.

+ **OOP Structure**: The core logic is built on encapsulated classes (User, Subscriber, Post) using ES6 modules and inheritance.

+ **Profile Modal**: A responsive, dark-themed UI includes a modal component to display user details, managed via clean CSS positioning and JavaScript class toggling.
---

## Code Summary
+ **User.js / Subscriber.js**: Define the base user model and an extended model (Subscriber) to manage different account privileges and data through class inheritance.

+ **Post.js**: Encapsulates the data and timestamp for a single user-generated post.

+ **Main.js**: Serves as the application controller, handling all event listeners (post button, modal open/close) and coordinating the creation and rendering of new Post objects to the HTML feed.

+ **index.html & styles.css**: Provide the semantic structure and a dark-mode, responsive aesthetic for the application.
---

## Click [here](https://cbumang5598.github.io/Carlos-Daniel---Fakebook/) to go to the website.