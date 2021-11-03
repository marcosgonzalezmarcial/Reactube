import React, { useContext } from "react";
import StateContext from "../../context/StateContext";
import "./LastSearches.css";
import LastSearchItem from "./LastSearchItem";

const LastSearches = () => {
  const { state } = useContext(StateContext);

  const orderedList = state.searchHistory.reverse();

  const max10ItemsList = orderedList.slice(0, 10);

  /////// ESTILOS ÚLTIMO ITEM  /////////////
  // const listLen = max10ItemsList.length;
  // row.map((rank, i) => {
  //   if (rowLen === i + 1) {
  //     // last one
  //   } else {
  //     // not last one
  //   }
  // });

  const renderdedListItems = max10ItemsList.map((item) => {
    if (item) {
      return (
        <>
          <LastSearchItem
            url={item.url}
            searchTerm={item.searchTerm}
            searchDate={item.searchDate}
            key={item.url}
          />
        </>
      );
    }
    return null;
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
