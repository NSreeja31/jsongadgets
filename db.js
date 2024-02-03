import React, { useState, useEffect } from "react";

function Products(){

    const [items, setItem] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/products')
        .then((response)=> response.json())
        .then((data) => setItem(data))
        .catch((error)=> console.error('Error fetching data:', error));
    },[]);

    return (
        <div>
          <h2>Products Page</h2>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <div>
                    <div>
                        <img src={item.img} alt={item.title} />
                    </div>
                    <div>
                        <p>{item.desciption}</p>
                    </div>
                    <div>
                        <div>
                            <h3>{item.title}</h3>
                            <h3>{item.price}</h3>
                        </div>
                        <div>
                            <i class="fa-solid fa-pen"></i>
                            <i class="fa-solid fa-trash"></i>
                        </div>
                    </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )
}

export default Products;
