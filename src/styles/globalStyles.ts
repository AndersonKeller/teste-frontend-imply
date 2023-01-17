import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    --color-primary100:#5d6070;
    --color-secundary100:#07a5b1;
    --font-color:#7a7a7a;
    --color-white: #ffffff;

    --color-negative: #cc0000;



}
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
}
button{
    cursor: pointer;
    border: none;
    border-radius: 8px;
}
body{
    background-color: var(--color-primary100);
   
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 500px;
    margin: 0 auto;
}

.titleColor{
    color: var(--color-secundary100);
    font-weight: 600;
}
.textColor{
    color: var(--font-color);
    font-weight: 500;
    line-height: 26px;
}
.textFooter{
    color: var(--color-white);
    margin-top: 16px;
    line-height: 22px;
    font-weight: 400;
    max-width: 440px;
    padding: 16px;
}

`;
export default GlobalStyles;
