import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    --color-primary100:#5d6070;
    --color-secundary100:#07a5b1;
    --font-color:#7a7a7a;
    --color-white: #ffffff;


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
    border-radius: 4px;
}
body{
    background-color: var(--color-primary100);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
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

`;
export default GlobalStyles;
