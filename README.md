# Frontend Mentor - Advice generator app solution

This is a solution provided for **Walker Alfaro Trelles** to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

The main challenges were:

- Update the request with the API 
- Add glow to a button 
- Change Divider image responsively

### Screenshot

![]()

### Links

- [Solution URL](https://your-solution-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Javascript Vanilla
- Flexbox
- Mobile-first workflow

### What I learned

Making requests to an API, updating it generating a random number as ID-advice

```javascript
function randomNum() {
    return parseInt(Math.random() * 224);
}
```

This random number is added to the request URL

```javascript
const id = randomNum();
const url = `https://api.adviceslip.com/advice/${id}`;
```

## Author

- Website - [My Github](https://github.com/WalkerAlfaro)
- Frontend Mentor - [@walkeralfaro](https://www.frontendmentor.io/profile/WalkerAlfaro)
