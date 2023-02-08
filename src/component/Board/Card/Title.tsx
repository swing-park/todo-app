import styled from "styled-components";

interface Props {
  title: string;
}

const STitle = styled.div`
  font-size: 1.5rem;
  margin: 10px 0px;
`;

const Title = ({ title }: Props) => {
  return title.length >= 10 ? (
    <STitle>{title.slice(0, 10) + "..."}</STitle>
  ) : (
    <STitle>{title}</STitle>
  );
};

export default Title;
