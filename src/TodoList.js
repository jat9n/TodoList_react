import React, { useState } from "react";
import useFocus from "./customHooks/useFocus";
import useInput from "./customHooks/useInput";

const TodoList = () => {
  const [input, setInput, customInput, resetInput] = useInput("");

  const [items, setItems] = useState([]);

  const [toggleEdit, setToggleEdit] = useState(true);

  const [editedItem, setEditedItem] = useState(null);

  const addItems = () => {
    if (!input) {
    } else if (input && !toggleEdit) {
      setItems(
        items.map((element) => {
          if (element.id === editedItem) {
            return { ...element, name: input };
          }
          return element;
        })
      );
      setToggleEdit(true);

      resetInput();

      setEditedItem(null);
    } else {
      const eachItem = { id: items.length, name: input };
      setItems([...items, eachItem]);
      resetInput();
    }
  };

  const editItem = (id) => {
    let newEditItem = items.find((element) => {
      return element.id === id;
    });

    setToggleEdit(false);

    customInput(newEditItem.name);

    setEditedItem(id);
  };

  const delItem = (id) => {
    const updatedItems = items.filter((element) => {
      return element.id !== id;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <div className="main-div">
        <h1> TODO LIST</h1>
        <br />
        <div className="addItems">
          <input
            type="text"
            placeholder="enter task here"
            value={input}
            onChange={setInput}
            ref={useFocus()}
          />
          {toggleEdit ? (
            <button onClick={addItems}>+</button>
          ) : (
            <button onClick={addItems}>Edit</button>
          )}
        </div>
        <br />

        <div className="itemList">
          {items.map((element) => {
            return (
              <div className="eachItems" key={element.id}>
                <h3>{element.name}</h3>
                <button onClick={() => delItem(element.id)}>done!</button>
                <button onClick={() => editItem(element.id)}>Edit!</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TodoList;
