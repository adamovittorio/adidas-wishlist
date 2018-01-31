import { injectGlobal } from 'styled-components';

const theme = {
  primary: 'mediumseagreen',
  secondary: 'palevioletred',
};

export const globalStyle = injectGlobal`
  html {
    height: 100%;
    padding: 0px;
    margin: 0px;
    overflow-y: hidden;
    background-color: papayawhip;
  }
  body {
    height: 100%;
    padding: 0px;
    margin: 0px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  }
  #root {
    height: 100%;
    padding: 0px;
    margin: 0px;
  }
`;

export default theme;
