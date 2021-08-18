# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](#). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

This challenge was to build out this Huddle Landing Page and get it looking as close to the design as possible.

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![]()

### Links

- Solution URL: [Github](https://github.com/FlexAgrume/fm-huddle-landing-page)
- Live Site URL: [Vercel](https://fm-huddle-landing-page-flexagrume.vercel.app/)

## My process

### Built with

- Mobile-first workflow
- Component-driven development
- BEM - Block Element Modifier
- Module bundler (Webpack)
- Template language (EJS - Embedded JavaScript templating)
- PostCSS (Autoprefixer)
- SASS
- Flexbox
- CSS Grid

### What I learned

Using webpack for this challenge was clearly not necessary, I would even say that I made it more difficult for myself. I used this module grouper because I wanted to put my newly acquired knowledge into practice on a simple project.

This challenge was an opportunity to discover :

- Webpack

```js
module.exports = {
    entry: path.resolve('./src/index.js'),
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve('./dist'),
        clean: true
    },
};
```

- CSS Grid Layout

```css
.container {
    display: grid;
    grid-template-columns: 1.25fr 1fr;
    grid-template-rows: repeat(3, max-content);
}
```

- How to create a container properly with automatic margins

```css
:root {
    --container-padding: 20px;
    --container-width: calc(100% - var(--container-padding) * 2);
    --container-max-width: 1000px;
}

.container {
    width: var(--container-width);
    max-width: var(--container-max-width);
    margin-left: auto;
    margin-right: auto;
}
```

- Embed JavaScript templating

```html
<header>
    <%= require('./components/logo/logo.ejs')() %>
</header>

```

### Useful resources

- [CSS-Trick](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Grafikart - Create a container (French content)](https://grafikart.fr/tutoriels/conteneur-css-1233)
- [Grafikart - display: grid; (French content)](https://grafikart.fr/tutoriels/grid-css-1002)
- [Webpack](https://webpack.js.org/configuration/)
- [Webpack - Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/)
- [Browserslist](https://github.com/browserslist/browserslist)
- [PostCSS - Autoprefixer](https://github.com/postcss/autoprefixer)
- [Embed JavaScript templating](https://ejs.co/)

### Issues found with webpack
- [HMR/Live Reloading broken](https://github.com/webpack/webpack-dev-server/issues/2758)
- [Error: Universal Chunk Loading is not implemented yet](https://github.com/webpack/webpack/issues/11660)

## Author

- Frontend Mentor - [@flexagrume](https://www.frontendmentor.io/profile/flexagrume)
- Twitter - [@flexagrume](https://www.twitter.com/flexagrume)