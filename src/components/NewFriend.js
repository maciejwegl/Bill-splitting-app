import "./NewFriend.css";
import { useState } from "react";

const NewFriend = ({ openAdd, setOpenAdd, toggleOpen, onAddFriend }) => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("https://i.pravatar.cc/48");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleImg = (e) => {
    setImg(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !img) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name: name,
      image: `${img}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);
    setName("");
    setImg("https://i.pravatar.cc/48");
  };

  return (
    <form className="newFriend" onSubmit={handleSubmit}>
      <div className="closeHolder">
        <button type="button" className="close" onClick={toggleOpen}>
          &times;
        </button>
      </div>
      <div className="newName">
        <span>👫</span>
        <label htmlFor="friend-name" aria-label="type friend name">
          Friend name
        </label>
        <input
          id="friend-name"
          type="text"
          placeholder="New name"
          value={name}
          onChange={handleName}
        />
      </div>
      <div className="newImg">
        <span>🖼️</span>
        <label htmlFor="img-url" aria-label="type avatar url">
          Image URL
        </label>
        <input
          id="img-url"
          type="text"
          placeholder="URL"
          value={img}
          onChange={handleImg}
        />
      </div>
      <div className="btnAddFriend">
        <button type="submit" className="btn">
          Add
        </button>
      </div>
    </form>
  );
};

export default NewFriend;
