import { useState } from "react";
import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Card } from "types";

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, newCard: Card) => void;
}

const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ced4da;
  border-radius: 10px;

  width: 100%;
  padding: 40px 0px;
`;

const SInput = styled(TextField)`
  margin: 0px 10px;
`;

const Input = ({ handleSubmit }: Props) => {
  const [newCard, setNewCard] = useState<Card>({
    id: "",
    isDone: false,
    title: "",
    content: "",
  });

  const handleChange = (id: string, text: string) => {
    id === "title"
      ? setNewCard({ ...newCard, title: text })
      : setNewCard({ ...newCard, content: text });
  };

  return (
    <Container
      onSubmit={(e) =>
        handleSubmit(e, {
          id: `${Date.now()}`,
          isDone: newCard.isDone,
          title: newCard.title,
          content: newCard.content,
        })
      }
    >
      <SInput
        id="title"
        type="text"
        onChange={(e) => handleChange("title", e.target.value)}
        autoFocus
        variant="outlined"
        label="제목"
        required
      />
      <SInput
        id="content"
        type="text"
        onChange={(e) => handleChange("content", e.target.value)}
        variant="outlined"
        label="내용"
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="success"
        size="large"
        startIcon={<Add />}
      >
        추가하기
      </Button>
    </Container>
  );
};

export default Input;
