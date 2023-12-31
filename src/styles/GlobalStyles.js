import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
:root {
  /* Indigo */
  --color-brand-50: #eef2ff;
  --blue:rgb(59, 130, 246);
 --green:rgb(22, 163, 74);
  --red:rgb(239, 68, 68);
 --yellow:rgb(234, 179, 8);
 --pink:rgb(219, 39, 119);
 --cyan:rgb(20, 184, 166);
 --orange:rgb(249, 115, 22);
 --purple:rgb(139, 92, 246);
 --dark-gray:#44403c;
 --lightGray:#78716c;
 --darkWhite:#fafaf9;
  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family :'Coiny','sans-serif';
  color: var(--darkWhite);
  padding: 10px;
  font-size: 1.8rem;
background-color: #292524;
}

button,
textarea,
select {
  font: inherit;
  color: inherit;
}



/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

}

`;


export default GlobalStyles;