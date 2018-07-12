# Dodging the Trap: An Anecdote Illustrating Some Common Programming Mistakes, and How to Avoid Them
July 11th, 2018

If you want the TL:DR, skip to the next header.

A few days ago, I decided to add an animation to my image hosting project (MANGAD), to spruce up the visuals a bit. I was inspired by an animation from the [Tumblr signup page](tumblr.com) that pops up images. On the way there, I made a few mistakes that I feel are pretty common pitfalls for new programmers like myself, so I want to spend some time to explain how these traps manifest, and how to avoid them.

![text](https://i.imgur.com/FeHhZjU.png)![text](https://i.imgur.com/W0sreFC.png)![text](https://i.imgur.com/2cDU39F.png)

The animation looked pretty simple; scale the image up to its maximum size, and apply the animation in a "staggered" sequence to every element in the list (which apparently, is a pretty common technique in animation - more on this [here](https://css-tricks.com/repeatable-staggered-animation-three-ways-sass-gsap-web-animations-api/)).

I thought to myself; "Why not take this as an opportunity to learn something new?" (This was my first mistake. There is nothing wrong with learning new things, but i'll explain why it was a mistake later on.)

After a cursory Google search, I came up with AnimeJS, a JS animation package with premade functions (and super pretty documentation!) Why bother to write code from scratch? Surely, this would make my life easier, right? (This was my second mistake.) So I spent about an hour reading the documentation, trying to understand how the package worked. During that time, I was thinking excitedly about how AnimeJS was going to open me up to a broader skillset in visual design.

But wait! I needed to make sure I could actually get the animation that I wanted before I downloaded the package and tried to import it within my app.js (This was my third mistake.) So I opened up a codepen and spent another hour tooling around.

[animeJS demo](https://codepen.io/grantnathanielbrown/pen/oyVoME)

Awesome! Now, all I had to do was download and import the package in my app.js.

Except... it wasn't working. Argh, why not?

With MEHN apps, (excluding all the boilerplate) the way I had learned to implement packages involved 2 steps;

``` javascript
const anime = require('animejs');
// later on
app.use(anime());
```

with the view engine on the app being set to handlebars. This methodology worked for EVERY other package I was using for the project. So why didn't it work? Was it because I had to perform some kind of additional step like app.use(anime.initialize())? Did I need to require the package on a different page? Was AnimeJS not designed to integrate with express / handlebars? AnimeJS works by turning anime() javascript functions into css, so maybe I had to link the script directly in the handlebars view?

After chasing rabbits on Google and Stack Overflow for about 2 hours, I realized it was beyond my capabilities to get this thing to work. So, back to square one. I was so frustrated! I started thinking irrationally. "Maybe I should learn SCSS to implement this. No, that's stupid. Ah, screw it, I'll just wait until my brother gets home and then he can help me!"

Wait a minute. Why didn't I just use vanilla JS to get this animation to work in the first place?

So I spent about 30 minutes, and did the animation with vanilla JS. It was easier than I thought it would be.

[staggered animation demo](https://codepen.io/grantnathanielbrown/pen/WyqbZV?editors=1011)

Hooray! Another 15 minutes and I pushed the changes to my site. Case closed. Still, I couldn't help but feel I had wasted a good portion of my day. Hence, I decided writing a blog post would help me elucidate some of my mistakes, to myself and others.

## What I Learned

### 1. I was too fixated on turning a coding challenge into a learning experience.

I made the decision to spend time on animations because I wanted to place more of an emphasis on the frontend design of my sites. From that principle, I declared that I would master AnimeJS as an animation tool. But I should have been more comfortable with just using a technique I was already acquainted with.

Revisiting a familiar concept or practice will often reveal something new or unexpected. When I was writing the animation with vanilla JS, I realized that there were some aspects of simple CSS animations that I hadn't yet mastered; for example, getting animations to stick permanently (which can be done with     -webkit-animation-fill-mode: forwards;) or delaying animations until the rest of the page has loaded fully (something I have yet to explore).

### 2. Learning the basics of a new thing is good. Learning the intricacies of a common practice is even better.

Many of my friends who are experienced programmers stress the importance of mastering the fundamentals. There are a million reasons to try and master only a few things, but here are 2 big ones.

- You will become more valuable to an employer if you are great at 2 or 3 common languages / frameworks, as opposed to being competent in 5 or 6. Companies want you to improve as an employee in the long term,so proving you can conquer a new language up to a point of relevancy if need be(as opposed to learning how to log "Hello World" in 10 languages, or utilize tons of obscure methods) will make you a more desirable candidate. Companies will also have a preferred technology stack anyways.

- It's more useful to learn about a practice or method that is more ubiquitous. My knowledge of CSS animations could potentially be useful in any web development project, as opposed to knowledge of AnimeJS, an uncommon package that might not be usable as often.

### 3. Don't put the cart before the horse.

I was so fixated on using AnimeJS to solve my problems, that I developed tunnel vision. Not only did I fail to plan out what I was doing, I also forgot to ask the basic questions of "Can I use this in my technology stack?" and "Is there an easier / better way to do this?". I also fell prey to [sunk cost fallacy](https://en.wikipedia.org/wiki/Sunk_cost), spending hours of time on my initial plan, as opposed to abandoning it and trying to find an alternate route to the finish line (which was much quicker.)

## In Conclusion

It's important to spend a lot of time planning the necessary steps in the process of implementing new code. In addition, you should consider how your present challenges impact your growth and development as a coder.
