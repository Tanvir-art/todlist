import React, { useState } from 'react';
import "./style.css";

const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);
    const addItem =()=>{
        if(!inputData){
            alert("FIll the Data");
        }else{
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData,
            };
            setItems([...items, myNewInputData]);
            setInputData("");
        }
    }

    const deleteItem = (index) =>{
        const updatedItem = items.filter((curElem) => {
            return curElem.id !==index;
        });
        setItems(updatedItem);
    }


    const removeAll = () =>{
        setItems([]);
    }
  return (
    <>
      <div className="main-div">
        <div className="child-div">
            <figure>
                <img src="./images/todo.svg" alt="todologo" />
                <figcaption>Add your List Here</figcaption>
            </figure>
            <div className="addItems">
                <input type="text"  placeholder='✍️ Add Item' className='form-control' value={inputData } onChange={(event) => setInputData(event.target.value)}/>
                <i className='fa fa-plus add-btn' onClick={addItem}></i>
            </div>

        {/* {show contetn} */}

            <div className="showItems">
                {
                    items.map((curElem)=>{
                        return(
                            <div className="eachItem" key={curElem.id}>
                            <h3>{curElem.name}</h3>
                            <div className="todo-btn">
                            <i className='far fa-trash-alt add-btn' onClick={()=> deleteItem(curElem.id)}></i>
                            </div>
                        </div>
                        );
                    })
                }

            </div>
 {/* {show contetn} */}

            <div className="showItems">
                <button className='btn effect04' data-sm-link-text = "Remove All" onClick={removeAll}> <span>CHECK LIST</span> </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Todo;
