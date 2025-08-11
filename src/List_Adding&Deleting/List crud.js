import react from "react";
import { useState } from "react";




export default function Listuser() {
    const [items, setItems] = useState(["Apple", "Mango", "Orange", "Banana"])
    const [inputvalue, setInputvalue] = useState("")
    
    function handleDelete() {
        setItems(items.slice(0, -1));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const handleAddItem = () => {
        setItems((prevItems) => [...prevItems, inputvalue]);
        setInputvalue("")
    }
    return (
        <div className="Lists">
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}
                        <button onClick={() => handleDelete(items)}>Delete</button>
                    </li>
                ))}
            </ul>
            <br></br>
            <div className="Addinglist">
                <h1>Addingitemsinputfield</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enteritems.." value={inputvalue}
                        onChange={(e) => setInputvalue(e.target.value)}></input>
                    <button onClick={handleAddItem}>Add Item</button>
                </form>

            </div>

        </div>
    )
}