import React, { useContext } from "react";
import HistoryContext from "../../context/HistoryContext";
import "./LastSearches.css";
import LastSearchItem from "./LastSearchItem";

const LastSearchs = () => {
  const { historyState } = useContext(HistoryContext);

  const orderedList = historyState.reverse();

  const max10ItemsList = orderedList.slice(0, 10);

  const renderdedListItems = max10ItemsList.map((item) => (
    <>
      <LastSearchItem
        url={item.url}
        searchTerm={item.searchTerm}
        searchDate={item.searchDate}
      />
    </>
  ));
  return (
    <div className="lastsearches">
      <h1 className="lastsearches__title">Últimas búsquedas</h1>
      <div className="lastsearches__itemsContainer">
        {historyState.length > 0 ? (
          renderdedListItems
        ) : (
          <p style={{ padding: "1rem" }}>
            Aún no has realizado ninguna búsqueda
          </p>
        )}
      </div>
    </div>
  );
};

export default LastSearchs;
