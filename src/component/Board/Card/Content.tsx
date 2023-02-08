import styled from "styled-components";

interface Props {
  content: string;
}

const SContent = styled.div`
  margin: 10px 0px;
`;

const Content = ({ content }: Props) => {
  return content.length >= 15 ? (
    <SContent>{content.slice(0, 15) + "..."}</SContent>
  ) : (
    <SContent>{content}</SContent>
  );
};

export default Content;
