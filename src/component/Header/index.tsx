import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 10px;
  margin: 20px 0px;

  font-size: 3rem;
`;

const Text = styled.div`
  font-family: "Unbounded", cursive;
  background: linear-gradient(to right, blue, skyblue);
  color: transparent;
  -webkit-background-clip: text;
`;

const Header = () => {
  return (
    <Container>
      <Text>Swing's TODOLIST</Text>
    </Container>
  );
};

export default Header;
