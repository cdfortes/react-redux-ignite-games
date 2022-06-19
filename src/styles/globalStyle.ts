import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
      --purple: #8284FA;
      --purple-dark: #5e60ce;
      --blue: #4ea8de;
      --blue-dark: #1e6f9f;


      --white: white;
      --gray-100: #f2f2f2;
      --gray-200: #d9d9d9;
      --gray-300: #808080;
      --gray-400: #333333;
      --gray-500: #262626;
      --gray-600: #1a1a1a;
      --gray-700: #0d0d0d;

      --danger: #E25858;
    }


    *{
      margin: 0;
      padding:0;
      box-sizing: border-box;
    }

    body {
      background: var(--gray-600);
      color: var(--gray-300);
      line-height: 1.25rem;
      -webkit-font-smoothing: antialiased;
    }

    body{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: var(--gray-400);
    }

    h3{
        font-size: 1.3rem;
        color: var(--gray-400);
        padding: 1.5rem 0rem;
    }

    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: var(--gray-300);;
    }

    a{
        text-decoration: none;
        color: var(--gray-400);
    }

    img{
        display: block;
    }

    input{
        font-weight: 700;
        font-family: "Montserrat", sans-serif;
    }
`

export default GlobalStyles
