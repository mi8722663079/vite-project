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
    return(
        <>
        <main>
            <div className="text">
                <ul>
                    {items.map((item)=>(
                            <>
                            <li key={item.id}>
                                {item}
                            </li>
                            </>
                        )
                    }
                </ul>
            </div>
        </main>
        </>
    )
}