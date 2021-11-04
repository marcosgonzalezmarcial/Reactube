import { Avatar, Button } from "@mui/material";
import moment from "moment";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import StateContext from "../../context/StateContext";
import "./LastSearches.css";
import LastSearchItem from "./LastSearchItem";

const LastSearches = () => {
  const { state, handleSubmit } = useContext(StateContext);
  const history = useHistory();

  const max10ItemsList = state.searchHistory.slice(-10).reverse();

  ///// ESTILOS ÚLTIMO ITEM  /////////////
  const listLen = max10ItemsList.length;
  const renderdedListItems = max10ItemsList.map((item, i) => {
    if (listLen === i + 1) {
      return (
        <div
          key={Math.random() + Date.now()}
          style={{ borderBottom: "none" }}
          className="lastsearches__item"
        >
          <div className="lastsearches__item__left">
            <div className="lastsearches__item__left__avatar">
              <Avatar src={item.url} />
            </div>
            <div className="lastsearches__item__left__text">
              <h4>{item.searchTerm}</h4>·
              <p>{moment(item.searchDate).fromNow()}</p>
            </div>
          </div>
          <div className="lastsearches__item__right">
            <Button
              className="lastsearches__item__right__button"
              size="medium"
              variant="contained"
              onClick={() => {
                handleSubmit(item.searchTerm);
                history.push("/home/search");
              }}
            >
              Cargar videos
            </Button>
          </div>
        </div>
      );
    } else {
      return (
        <LastSearchItem
          url={item.url}
          searchTerm={item.searchTerm}
          searchDate={item.searchDate}
          key={Math.random() + Date.now()}
        />
      );
    }
  });
  return (
    <div className="lastsearches">
      <h1 className="lastsearches__title">Últimas búsquedas</h1>
      <div className="lastsearches__itemsContainer">
        {state.searchHistory.length > 0 ? (
          renderdedListItems
        ) : (
          <p className="lastsearches__message">
            Aún no has realizado ninguna búsqueda
          </p>
        )}
      </div>
    </div>
  );
};

export default LastSearches;
