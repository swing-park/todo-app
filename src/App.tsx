import styled from "styled-components";
import { StyledEngineProvider } from "@mui/material";
import { GlobalStyle } from "styles";
import { Header, Board } from "component";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 10px 0px;

  border-radius: 50px;

  background-color: #fff;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

  max-width: 1200px;
  min-width: 800px;
`;

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Header />
          <Board />
        </Container>
      </Wrapper>
    </StyledEngineProvider>
  );
};

export default App;
