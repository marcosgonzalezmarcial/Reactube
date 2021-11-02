import { Avatar, Button } from "@mui/material";
import moment from "moment";
import { useContext } from "react";
import { useHistory } from "react-router";
import StateContext from "../../context/StateContext";

const LastSearchItem = ({ url, searchTerm, searchDate }) => {
  const { handleSubmit } = useContext(StateContext);
  const history = useHistory();

  return (
    <div className="lastsearches__item">
      <div className="lastsearches__item__left">
        <div className="lastsearches__item__left__avatar">
          <Avatar src={url} />
        </div>
        <div className="lastsearches__item__left__text">
          <h4>{searchTerm}</h4>·<p>{moment(searchDate).fromNow()}</p>
        </div>
      </div>
      <div className="lastsearches__item__right">
        <Button
          className="lastsearches__item__right__button"
          size="medium"
          variant="contained"
          onClick={() => {
            handleSubmit(searchTerm);
            history.push("/home/search");
          }}
        >
          Cargar videos
        </Button>
      </div>
    </div>
  );
};

export default LastSearchItem;
