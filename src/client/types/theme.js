import { injectGlobal } from 'styled-components';

const theme = {
  primary: 'black',
  secondary: 'silver',
  text: 'white',
};

export const globalStyle = injectGlobal`
  html {
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    background-color: white;
  }
  body {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  }
  #root {
    height: 100%;
    width: 100%;
    padding: 0px;
    margin: 0px;
  }
`;

export default theme;
