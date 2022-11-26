import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --background-body: #f0f8ff;
        --auxiliary-color-text-: #6495ed;
        --span-texts-color: #0000005c;
        --focus-input-color: #32e9ff;
        --border-grey-color: #acacac78;
        --p-color: #00008b;
        --background-div: #fff;
    }
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;

        font-family: arial;
    }
    body {
        background-color: var(--background-body);
        
        button {
            cursor: pointer;
        }
        a {
            text-decoration: none;
        }
    }
    h1, h2, h3 {
        font-size: 20px;
        font-weight: bold;
    }
    span {
        font-weight: 100;
        color: var(--span-texts-color);
    }
    ul, li, ol {
        list-style: none;
    }
    p {
        color: var(--p-color);
        font-size: 15px;
    }
    .errors {
        color: red;
    }
`;
