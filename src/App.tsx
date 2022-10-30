//@ts-ignore
import styles from "./App.module.css";
import React, {useEffect, useState} from "react";
import { CardsListType } from "./Constants/@types";
import CardsList from "./Components/CardList";

const MOCK_CARD = {
  id: 0,
  image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  text: "Тут будет какое-то описание поста",
  date: "2021-12-12",
  lesson_num: 0,
  title: "А вот тут будет заголовок",
  author: 0,
};

const MOCK_CARDS_LIST = [
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
];

const App = () => {
  const [cardsList, setCardsList] = useState<CardsListType | null>(null)

  useEffect(() => {
    setCardsList(MOCK_CARDS_LIST)
  }, [])

  return (
    cardsList && (
      <div className={styles.container}>      
      <CardsList cardsList={cardsList} />
    </div>
    )
  );
};

export default App;