import React, { useState } from 'react';
import './Home.css';
import mulberryArt from '../FileFolders/mulberryArt';

const AddContentInFile = () => {
  const [img_link, setImg_Link] = useState("");
  const [title, setTitle] = useState("");
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [p3, setP3] = useState("");
  const [p4, setP4] = useState("");
  const [technical_details, setTechnicalDetails] = useState("");
  const [layout, setLayout] = useState("");
  const [Built_up_Area, setBuiltUpArea] = useState("");
  const [Deck_Area, setDeckArea] = useState("");
  const [Total_Area, setTotalArea] = useState("");
  const [Architectural_Style, setArchitecturalStyle] = useState("");
  const [Series, setSeries] = useState("");
  const [time, setTime] = useState("");
  const [Recommended_Size, setRecommendedSize] = useState("");
  const [Durability, setDurability] = useState("");
  const [Detail, setDetail] = useState("");

  const Add = (e) => {
    e.preventDefault();
    const content = {
      img_link,
      title,
      p1,
      p2,
      p3,
      p4,
      technical_details,
      layout,
      Built_up_Area,
      Deck_Area,
      Total_Area,
      Architectural_Style,
      Series,
      time,
      Recommended_Size,
      Durability,
      Detail,
    };

    // Push content into mulberryArt array
    mulberryArt.push(content);
    console.log("New content added to Mulberry Art:", mulberryArt);

    // Reset form fields
    setImg_Link("");
    setTitle("");
    setP1("");
    setP2("");
    setP3("");
    setP4("");
    setTechnicalDetails("");
    setLayout("");
    setBuiltUpArea("");
    setDeckArea("");
    setTotalArea("");
    setArchitecturalStyle("");
    setSeries("");
    setTime("");
    setRecommendedSize("");
    setDurability("");
    setDetail("");
  };

  return (
    <div
      style={{ backgroundColor: "#c1e3e0" }}
      className="container rounded py-3 px-5 my-5 align-items-center"
    >
      <h1 className="fontStyleSpecial">Mulberry Art</h1>
      <form onSubmit={Add} className="w-fit-content text-dark mx-auto">
        <label style={{ width: "12%", marginLeft: "4%" }}>Image:</label>
        <input
          type="text"
          className="m-2 p-2 w-75 rounded border-0 ps-4"
          value={img_link}
          onChange={(e) => setImg_Link(e.target.value)}
          placeholder="Enter the image link URL"
        />
        <br />
        <label style={{ width: "12%", marginLeft: "4%" }}>Title:</label>
        <input
          type="text"
          className="m-2 p-2 w-75 rounded border-0 ps-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the title"
        />
        <br />
        <label style={{ width: "12%", marginLeft: "4%" }}>Paragraph 1:</label>
        <input
          type="text"
          className="m-2 p-2 w-75 rounded border-0 ps-4"
          value={p1}
          onChange={(e) => setP1(e.target.value)}
          placeholder="Enter paragraph 1"
        />
        <br />
        <label style={{ width: "12%", marginLeft: "4%" }}>Paragraph 2:</label>
        <input
          type="text"
          className="m-2 p-2 w-75 rounded border-0 ps-4"
          value={p2}
          onChange={(e) => setP2(e.target.value)}
          placeholder="Enter paragraph 2"
        />
        <br />
        <label style={{ width: "12%", marginLeft: "4%" }}>Paragraph 3:</label>
        <input
          type="text"
          className="m-2 p-2 w-75 rounded border-0 ps-4"
          value={p3}
          onChange={(e) => setP3(e.target.value)}
          placeholder="Enter paragraph 3"
        />
        <br />
        <label style={{ width: "12%", marginLeft: "4%" }}>Paragraph 4:</label>
        <input
          type="text"
          className="m-2 p-2 w-75 rounded border-0 ps-4"
          value={p4}
          onChange={(e) => setP4(e.target.value)}
          placeholder="Enter paragraph 4"
        />
        <br />
        <label style={{ width: "12%", marginLeft: "4%" }}>Technical Image:</label>
        <input
          type="text"
          className="m-2 p-2 w-75 rounded border-0 ps-4"
          value={technical_details}
          onChange={(e) => setTechnicalDetails(e.target.value)}
          placeholder="Enter the technical image URL"
        />
        <br />
        <label style={{ width: "12%", marginLeft: "4%" }}>Layout:</label>
        <input
          type="text"
          className="m-2 p-2 w-75 rounded border-0 ps-4"
          value={layout}
          onChange={(e) => setLayout(e.target.value)}
          placeholder="Enter the layout (No. of rooms)"
        />
        <br />
        <label style={{ width: "12%", marginLeft: "4%" }}>Built-up Area:</label>
        <input
          type="text"
          className="m-2 p-2 w-75 rounded border-0 ps-4"
          value={Built_up_Area}
          onChange={(e) => setBuiltUpArea(e.target.value)}
          placeholder="Enter the built-up area"
        />
        <br />
        <label style={{ width: "12%", marginLeft: "4%" }}>Deck Area:</label>
        <input
          type="text"
          className="m-2 p-2 w-75 rounded border-0 ps-4"
          value={Deck_Area}
          onChange={(e) => setDeckArea(e.target.value)}
          placeholder="Enter the deck area"
        />
        <br />
        <label style={{ width: "12%", marginLeft: "4%" }}>Total Area:</label>
        <input
          type="text"
          className="m-2 p-2 w-75 rounded border-0 ps-4"
          value={Total_Area}
          onChange={(e) => setTotalArea(e.target.value)}
          placeholder="Enter the total area"
        />
        <br />
        <label style={{ width: "12%", marginLeft: "4%" }}>Architectural Style:</label>
        <input
          type="text"
          className="m-2 p-2 w-75 rounded border-0 ps-4"
          value={Architectural_Style}
          onChange={(e) => setArchitecturalStyle(e.target.value)}
          placeholder="Enter the architectural style"
        />
        <br />
        <label style={{ width: "12%", marginLeft: "4%" }}>Series:</label>
        <input
          type="text"
          className="m-2 p-2 w-75 rounded border-0 ps-4"
          value={Series}
          onChange={(e) => setSeries(e.target.value)}
          placeholder="Enter the series"
        />
        <br />
        <label style={{ width: "12%", marginLeft: "4%" }}>Time:</label>
        <input
          type="text"
          className="m-2 p-2 w-75 rounded border-0 ps-4"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter the time required"
        />
        <br />
        <label style={{ width: "12%", marginLeft: "4%" }}>Recommended Size:</label>
        <input
          type="text"
          className="m-2 p-2 w-75 rounded border-0 ps-4"
          value={Recommended_Size}
          onChange={(e) => setRecommendedSize(e.target.value)}
          placeholder="Enter the recommended size"
        />
        <br />
        <label style={{ width: "12%", marginLeft: "4%" }}>Durability:</label>
        <input
          type="text"
          className="m-2 p-2 w-75 rounded border-0 ps-4"
          value={Durability}
          onChange={(e) => setDurability(e.target.value)}
          placeholder="Enter the durability"
        />
        <br />
        <label style={{ width: "12%", marginLeft: "4%" }}>Details:</label>
        <input
          type="text"
          className="m-2 p-2 w-75 rounded border-0 ps-4"
          value={Detail}
          onChange={(e) => setDetail(e.target.value)}
          placeholder="Enter additional details"
        />
        <br />
       <div className="text-center py-1 my-2">
       <button type="submit" className="fs-5 button">
          Add Content
        </button>
       </div>
      </form>
    </div>
  );
};

export default AddContentInFile;
