![logo](https://i.imgur.com/sy3aUK6.png)

<p align="center">Fallmart is an online shopping platform built with the MERN (MongoDB, Express.js, React, Node.js) stack, providing a convenient and user-friendly shopping experience thats much better than Walmart and completely free.</p>

___
## Project Description
Discover a world of personal and household goods in one seamless e-commerce experience! This application is built using the MERN stack (MongoDB, Express.js, React, Node.js). This project allows users to use the app as a guest or sign up as a registered user. Users can navigate the homepage and narrow a search via departments and then by subcategory or with the search bar. Signed up users can favorite items that are added to a favorites list. All users can add items to cart, delete items, and check out an order. 

A GA DonnaFrances cohort creation.
![homepage](https://i.imgur.com/ryQEcOj.png)


___
## Table of Contents
- [Deployed Link]()
- [Overview](#overview)
- [Trello Board](https://trello.com/b/UEHNvPzS/walmart)
- [Pitch Dec](https://docs.google.com/presentation/d/1zLbUtjdnLn8FDhdMuW9853M0LjZK9JoiMzNT_CNWAtQ/edit#slide=id.p)
- [Features](#features)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Acknowledgements](#acknowledgements)
- [Notes](#notes)
___
## Overview
<h5 align="center">No one has 20/20 foresight</h5>

ERD Comparison from project beginning to finished product.

As with all projects, our final product deviated slightly from its origin structure. Seen below are the first ERD we created as a basis for the project to be built off, and the last ERD is a representation of our final working models.

![Original ERD](https://i.imgur.com/Rzzsms6.jpg)

![Final working ERD](https://i.imgur.com/s4IvamP.png)

<p align="center">We went two directions with the style and feel of our app. We created both a true to form versio of Walmart and an artistic depiction of the name, fallmart. Our end product shares inspiration from both versions. </p>

+ [Landing Page](https://i.imgur.com/0oyudGJ.png)

+ [Land Page 2](https://i.imgur.com/FYvydkW.png)

## Features
1. User Authentication 
2. Create a user
3. Add items to cart
4. Favorite lists
5. Product catelog
6. Search via search bar or department list modal
7. Make "purchase"
8. Product reviews
9. Benefit program sign up via phone number for discount codes
10. Order History
11. Sign out
12. Responsive design

## Usage
+ A user can use the app as signed in user or guest
+ To find items, search eith either
    - Search Bar
    - Department and Subcategory modal
+ Add items to cart
+ Check-out
+ Signed Up registered users can: 
    - Add items to a favorite list
    - Enter into the benefit program 
    - View previous orders
    - Leave product reviews

## Technologies Used 
+ In the frontend
    - React 
    - CSS 
        * flex
        * grid
    - React Router for navigation 
+ In the backend
    - Node.js with Express 
    - MongoDB
    - Mongoose
    - JSON Web Token (JWT)
    - Bcrypt
+ Deployed on
    - DigitalOcean

## Prerequisites 
*Only necessary if app is NOT deployed* Otherwise, you should have these packages downloaded locally on your machine: 
+ Node
+ nodemon

## Installation
To set up fallmart locally, follow the steps below. 
1. Clone this repository and then copy the SSH key.
2. In the terminal, type `git clone` followed by the SSH key
3. `cd Walmart-MERN-APP` then `cd fallmart`
4. `code .`
Install your server dependencies
5. Set your .env file and create private mongo URI along with a [hashed](https://emn178.github.io/online-tools/sha256.html) secret
6. `npm i` to install all packages
7. Start the app and run `npm run dev`

## How To Contribute
We welcome contributions to make fallmart even better! If you would like to contribute please fork the repository, create a new feature branch and make the improvements! When youre done, please create a pull request with a detailed description of your changes and why you think it will improve the app. 

## Acknowledgements
Jun Min Baek,
Joe Cruz,
Jose Monagas, 
Jefrey Zavala,
Andre Ransom, 
Graehm Fazio, 
Max Ohnenyi,
Sri Rao 

## Notes
Some notable future improvement is the relationship between the seed.js and modals. We found a cheat and hardcoded the products imergy together in the seed. A best practice approach would be to loop over the products. 





