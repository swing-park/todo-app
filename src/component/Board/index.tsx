import { useState } from "react";
import styled from "styled-components";
import { Card as ICard } from "types";
import Input from "./Input";
import Card from "./Card";

const BoardWrapper = styled.div`
  padding: 0px 30px;
  height: 300px;
`;

const BoardTitle = styled.div`
  font-size: 1.5rem;
  margin: 20px 0px;
`;

const CardList = styled.div`
  display: -webkit-box;
  gap: 10px;
  overflow: auto;
`;

const Board = () => {
  const [cards, setCards] = useState<ICard[]>([
    { id: `${Date.now()}`, isDone: false, title: "워킹온", content: "워킹온" },
    { id: `${Date.now() + 1}`, isDone: true, title: "완료", content: "완료" },
  ]);

  const createCard = (e: React.FormEvent<HTMLFormElement>, card: ICard) => {
    e.preventDefault();
    setCards([...cards, card]);
  };

  const deleteCard = (id: string) => {
    const updateCards = cards.filter((card) => card.id !== id);
    setCards(updateCards);
  };

  const updateCard = (id: string) => {
    const updateCards = cards.map((card) =>
      card.id !== id ? card : { ...card, isDone: !card.isDone }
    );
    setCards(updateCards);
  };

  return (
    <>
      <Input handleSubmit={createCard} />
      <BoardWrapper>
        <BoardTitle>Working 🔥</BoardTitle>
        <CardList>
          {cards
            .filter((card) => !card.isDone)
            .map((card) => (
              <Card
                key={card.id}
                id={card.id}
                isDone={card.isDone}
                title={card.title}
                content={card.content}
                handleDelete={deleteCard}
                handleUpdate={updateCard}
              />
            ))}
        </CardList>
      </BoardWrapper>
      <BoardWrapper>
        <BoardTitle>Done 🫡</BoardTitle>
        <CardList>
          {cards
            .filter((card) => card.isDone)
            .map((card) => (
              <Card
                key={card.id}
                id={card.id}
                isDone={card.isDone}
                title={card.title}
                content={card.content}
                handleDelete={deleteCard}
                handleUpdate={updateCard}
              />
            ))}
        </CardList>
      </BoardWrapper>
    </>
  );
};

export default Board;
