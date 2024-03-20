import "./Friend.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleMinus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function Friend({ friend, handleSelection, handleDelete, selected }) {
  const isSelected = selected?.id === friend.id;

  return (
    <div className={isSelected ? "friend selected" : "friend"}>
      <div className="imgHolder">
        <img src={friend.image} alt="friend avatar"></img>
      </div>

      <div className="friendInfo">
        <h4>{friend.name}</h4>
        {friend.balance > 0 && (
          <p>
            {friend.name} owes you {friend.balance}
          </p>
        )}
        {friend.balance < 0 && (
          <p className="warning">
            You owe {friend.name} {Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      </div>
      <div className="btnHolder">
        <button
          className="icon iconSelect"
          onClick={() => handleSelection(friend)}
          // disabled={isSelected}
        >
          {isSelected ? (
            <FontAwesomeIcon icon={faCircleMinus} />
          ) : (
            <FontAwesomeIcon icon={faCircleCheck} />
          )}
        </button>

        {friend.balance === 0 && (
          <button
            className="icon iconDelete"
            onClick={() => handleDelete(friend.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Friend;
