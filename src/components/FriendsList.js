import Friend from "./Friend";
import "./FriendsList.css";
import { useState, useEffect } from "react";

const FriendsList = ({
  friends,
  toggleOpen,
  openAdd,
  handleSelection,
  handleDelete,
  selected,
  isListSmall,
}) => {
  const [visibleFriends, setVisibleFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setVisibleFriends(friends.slice(0, 6));
  }, [friends]);

  const loadMoreFriends = () => {
    setIsLoading(true);

    setTimeout(() => {
      const nextFriends = visibleFriends.length + 4;
      setVisibleFriends(friends.slice(0, nextFriends));
      setIsLoading(false);
    }, 500);
  };

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 4 && !isLoading) {
      console.log("end");
      loadMoreFriends();
    }
  };

  return (
    <div className={isListSmall ? " friends smaller" : "friends"}>
      <div className="friendsList" onScroll={handleScroll}>
        {visibleFriends.map((friend) => (
          <Friend
            friend={friend}
            handleSelection={handleSelection}
            key={friend.id}
            handleDelete={handleDelete}
            selected={selected}
          />
        ))}
      </div>
      <div className="btnAddFriend">
        {!openAdd && !selected && (
          <button className="btn" onClick={toggleOpen}>
            Add friend
          </button>
        )}
      </div>
    </div>
  );
};

export default FriendsList;
