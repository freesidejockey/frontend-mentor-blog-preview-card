# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwindcss](https://tailwindcss.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

#### Setting up a new project

- Setup a new react project with the following command:

```bash
pnpm create next-app@latest {project-name}
```

- Copy [this CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/) into the glboals.css file.

  - Remove the margin 0 section
  - Add this BEFORE the tailwind import

- Remove all the extra code in `page.tsx`

- Delete the default favicon and add the new one in `src/app`. Name it `icon.png`

- Create any customer colors you need to in the `global.css` file

- Import relevant fonts in the `layout.tsx` file

- I generally also set the title in the `layout.tsx` file at this point

- Finally, I plain copy any relevant css and html that came from a source such as frontend mentor directly.

The above steps can reliably get me to the point where I am ready to begin styling using html and tailwindcss.

#### Additional Learnings

- How to use absolute vs relative positioning (to some extent at least)
- Using flexbox to arrange elements horizontally

### Continued development

- Component uses absolute positioning to create the background div. This is not responsive. I need to find an improvement to this method as it is not acceptable.

## Author

- Website - [FreesideJockey](https://freesidejockey.com/)
- Frontend Mentor - [@freesidejockey](https://www.frontendmentor.io/profile/freesidejockey)
- Twitter - [@freesidecoding](https://x.com/freesidecoding)
