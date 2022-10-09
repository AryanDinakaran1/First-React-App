import React, { useState } from "react";

function searchBar(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const goSearch = () => {
        props.callback({
            name: name,
            price: price,
            type: type,
            brand: brand,
        });
    }

    return(
        <div>
            <h2>Search for an Item</h2>
            <form>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <input type="text" name="type" value={type} onChange={(e) => setType(e.target.value)} />
                <input type="text" name="brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
                <button type="button" onClick={() => goSearch()}>Search</button>
            </form>

            <p>Name  : {name}</p>
            <p>Price : {price}</p>
            <p>Type  : {type}</p>
            <p>Brand : {brand}</p>

        </div>
    );
}

export default searchBar;