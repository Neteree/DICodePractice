import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddProperty.css";

const AddProperty = () => {
  const [title, setTitle] = useState("");
  const [askingPrice, setAskingPrice] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [img, setImg] = useState("");

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const properties = {
      title,
      askingPrice,
      description,
      address,
      img,
    };

    fetch("http://localhost:5001/properties", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(properties),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <h1>Add a new property</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="askingPrice">Asking Price</label>
        <input
          type="text"
          id="askingPrice"
          value={askingPrice}
          required
          onChange={(e) => setAskingPrice(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={address}
          required
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="img">Image URL</label>
        <input
          type="text"
          id="img"
          value={img}
          required
          onChange={(e) => setImg(e.target.value)}
        />

        <button>Submit</button>
      </form>
    </>
  );
};

export default AddProperty;
