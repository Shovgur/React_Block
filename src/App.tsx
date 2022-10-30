import React, {useEffect, useState} from "react";

//@ts-ignore
import styles from "./App.module.css";
import { CardsListType } from "./Constants/@types";
// import SignIn from "./Pages/SignIn";
// import SignUp from "./Pages/SignUp";
import Card from "./Components/Card";
import { CardSize } from "./Components/Card/Card";
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
      {/*<Card card={MOCK_CARD} size={CardSize.Small} />*/}
      <CardsList cardsList={cardsList} />
    </div>
    )
  );
};

export default App;