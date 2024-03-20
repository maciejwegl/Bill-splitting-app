import { useState } from "react";
import "./App.css";
import Bill from "./components/Bill";
import FriendsList from "./components/FriendsList";
import NewFriend from "./components/NewFriend";
import DataFriends from "./components/DataFriends";

function App() {
  const [friends, setFriends] = useState(DataFriends);
  const [selected, setSelected] = useState(null);
  const [openAdd, setOpenAdd] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isListSmall, setIsListSmall] = useState(false);

  console.log(selected);

  const toggleOpen = () => {
    setSelected(null);
    if (!selected) setIsListSmall(!isListSmall);
    setOpenAdd((show) => !show);
  };

  const handleDelete = (id) => {
    if (isDisabled) {
      setFriends((prevFriends) =>
        prevFriends.filter((friend) => friend.id !== id)
      );
    } else {
      return;
    }
  };

  const addFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setOpenAdd(!openAdd);
    setIsListSmall(false);
  };

  const handleSelection = (friend) => {
    if (openAdd) return;
    setIsListSmall(!isListSmall);
    setSelected((cur) => (cur?.id === friend.id ? null : friend));
    setOpenAdd(false);
  };

  const splitBill = (value) => {
    if (isListSmall) {
      setIsListSmall(!isListSmall);
    }

    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selected.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    console.log(friends);

    setSelected(null);
  };

  return (
    <div className="App">
      <FriendsList
        friends={friends}
        toggleOpen={toggleOpen}
        openAdd={openAdd}
        handleSelection={handleSelection}
        handleDelete={handleDelete}
        selected={selected}
        isListSmall={isListSmall}
      />

      {openAdd && (
        <NewFriend
          openAdd={openAdd}
          setOpenAdd={setOpenAdd}
          toggleOpen={toggleOpen}
          onAddFriend={addFriend}
        />
      )}

      {selected && (
        <Bill
          selected={selected}
          setIsDisabled={setIsDisabled}
          isDisabled={isDisabled}
          splitBill={splitBill}
        />
      )}
    </div>
  );
}

export default App;
