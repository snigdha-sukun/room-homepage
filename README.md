# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![Screenshot of the Room homepage solution](./screenshot.gif)

### Links

- Solution URL: [Github](https://github.com/snigdha-sukun/room-homepage)
- Live Site URL: [Vercel](https://room-homepage-omega-two.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- Animation

### What I learned

I learned how to create underline hover effect for nav items:

```scss
@mixin nav-hover-effect {
    display: inline-block;
    position: relative;
    text-align: center;

    &::after {
        display: block;
        width: 2rem;
        content: '';
        border-bottom: solid 3px v.$white;
        transform: scaleX(0);
        margin: auto;
        @include transition(transform, 250ms, ease-in-out);
    }

    &:hover::after {
        transform: scaleX(1);
    }
}
```

I learned how to create a mobile view animated navbar:

```scss
@mixin position_fixed($opacity: 0, $visibility: hidden) {
    position: fixed;
    opacity: $opacity;
    visibility: $visibility;
}

@mixin mobile-nav {
    @include c.mobile {
        width: 100%;
        left: 0;
        top: 0;
        z-index: 10;
        background-color: v.$white;
        color: v.$black;
        padding-top: 60px;
        @include padding_all(1rem);
        transform: translateY(-100%);
        @include position_fixed($opacity: 0, $visibility: hidden);
        @include transition(all, 0.5s, ease-in-out);
    }
}

nav {
    @include u.mobile-nav;

    &.active {
        @include u.position_fixed(1, visible);
        transform: translateY(0);
    }
}
```

I learned about `prefers-reduced-motion`:

```scss
@mixin no-animation {
    @media (prefers-reduced-motion: reduce) {
        @content;
    }
}
```

I learned how to add sliding transitions to a block and also about `pointer-events`:

```scss
.hero__slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    pointer-events: none;

    .hero__image {
        transform: translateX(-100%);
        @include u.transition(opacity, 1s, ease-out);

        @include u.no-animation {
            transition: none;
        }
    }

    .hero__content {
        transform: translateX(100%);
        @include u.transition(opacity, 1s, ease-out);

        @include u.no-animation {
            transition: none;
        }

        @include u.padding_all(6rem);

        p {
            @include u.padding_y(1rem);
        }

        button {
            @include u.text-style(uppercase, 0.8rem);
            color: v.$black;
            @include u.transition(color, 0.3s, ease);

            &:hover {
                color: v.$dark-gray;
            }
        }

        @include c.mobile {
            @include u.padding_all(2.5rem);
        }
    }
}

.active {
    opacity: 1;
    position: relative;
    @include u.transition(opacity, 1s, ease-in);
    pointer-events: auto;

    @include u.no-animation {
        transition: none;
    }

    .hero__content,
    .hero__image {
        transform: translateX(0);
        @include u.transition(all, 1s, ease-in);

        @include u.no-animation {
            transition: none;
        }

        @include c.mobile {
            @include u.transition(opacity, 1s, ease-in);

            @include u.no-animation {
                transition: none;
            }
        }
    }
}
```

I learned how to add tying animation to a text:

```scss
.footer__content {
    @include u.padding_all(3rem);
    @include c.display-flex($justify: center, $direction: column);

    h2 {
        @include u.text-style(uppercase, 0.5rem);
        overflow: hidden;
        border-right: .15em solid v.$very-dark-gray;
        white-space: nowrap;
        display: inline-block;
        margin: 0 auto;
        animation: typing 15s steps(20, end) infinite, blink-caret .75s step-end infinite;

        @include u.no-animation {
            animation: none;
        }
    }

    p {
        @include u.padding_y(1rem);
    }

    @include c.mobile {
        @include u.padding_all(1rem);
    }
}

/* The typing effect */
@keyframes typing {

    from,
    to {
        max-width: 0
    }

    50% {
        max-width: 100%
    }
}

/* The typewriter cursor effect */
@keyframes blink-caret {

    from,
    to {
        border-color: transparent
    }

    50% {
        border-color: v.$very-dark-gray;
    }
}
```

### Continued development

I want to continue learning & practice different CSS methodologies using SCSS and animations.

### Useful resources

- [CSS letter-spacing Property](https://www.w3schools.com/cssref/pr_text_letter-spacing.php) - This helped me with learning about `letter-spacing` property which was useful in styling the button & footer heading.
- [Hover effect : expand bottom border](https://stackoverflow.com/a/28623513) - This helped me in adding hover effect to the nav items with transitions.
- [Typewriter Effect](https://css-tricks.com/snippets/css/typewriter-effect/) - This helped me in animating my footer with some infinite animations
- [CSS Text Animations: 40 Creative Examples to Try](https://prismic.io/blog/css-text-animations) - This was an amzing article on different types of text effects we can create using CSS.
- [Typing effect after button press](https://stackoverflow.com/questions/58425514/typing-effect-after-button-press) - This was also a good example that I wish to try in my mext project.
- [Sliding div](https://jsfiddle.net/qjwqL236/1/) - Good reference for adding sliding effect to a block

## Author

- Frontend Mentor - [@snigdha-sukun](https://www.frontendmentor.io/profile/snigdha-sukun)
