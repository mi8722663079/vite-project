import { useState } from "react";
export default function Main(){

    const [items,setItems]= useState([
    {
        id: 1,
        checked: false,
        item:"item1"
    },
    {
        id: 2,
        checked: false,
        item:"item2"
    },
    {
        id: 3,
        checked: false,
        item:"item3"
    }]);
    function handleCheck(id){
    const change = items.map(item =>
        item.id === id ?
        {...item,checked: !item.checked}:
        item);
        setItems(change);
    }
    function handleDelete(id){
        setItems(items.filter(item => item.id !== id));
    }
    return(
        <>
        <main>
            {items.length ?(
            <div className="text">
                <ul>
                {items.map(item => (
                    <>
                    <li className="item" key={item.id}>
                        <input type="checkbox"
                        checked={item.checked}
                        onChange={() => handleCheck(item.id)}
                        />
                        {item.item}
                        <label htmlFor="item"></label>
                        <button
                        className="fa-solid fa-trash"
                        onClick={()=> handleDelete(item.id)}
                        ></button>
                    </li>
                    </>
                ))}
                </ul>
            </div>
            ): (<p>Your List is Empty</p>)}
        </main>
        </>
    )
}