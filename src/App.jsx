import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo.jsx";
import Heading from "./components/Heading.jsx";
import Popups from "./components/Popups.jsx";
import Counter from "./components/Counter.jsx";

function App() {

  const [popupOpen, setPopupOpen] = useState(false);

  function togglePopup() {
    setPopupOpen(true);
    console.log("toggled")
  }



  return (
    <>
    <Counter />
      <Heading title="Nat's List" 
      />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => {
          setPopupOpen(true)
        }}>Add to do</button>
      </div>
      <Todo task="learn react"
      togglePopup={togglePopup} />
      <Todo task="land a junior job"
      togglePopup={togglePopup} />
      <Todo task="earn $200,000+"
      togglePopup={togglePopup} />

      {popupOpen && (
        <Popups
          greeting="Are you sure?"
          description="ABSOLUTELY"
          cancel="cancel"
        />
      )}
    </>
  );
}

export default App;
