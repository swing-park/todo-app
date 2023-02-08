import { DefaultTheme, createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    box-sizing : border-box;
  }
  
  body {
    background: linear-gradient(to bottom right, blue, skyblue) no-repeat;
    background-size: cover;
    color: ${(props) => props.theme.color};
  }

  a {
    text-decoration : none;
    color:inherit;
  }
`;

export const theme: DefaultTheme = {
  color: "#111",
  backgroundColor: "#fff",
};
