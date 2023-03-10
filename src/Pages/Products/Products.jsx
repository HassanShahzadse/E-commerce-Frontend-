import React, { useEffect, useState } from "react";
import Card from "../../Component/Card/Card";
import "./Products.css";
import { Link, useParams } from "react-router-dom";
import { getAllProducts, getProductsByCategory } from "../../utils/Services/api";

function Products() {
  let { id } = useParams();
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    if (id) {
      getProductsByCategory(id).then((response) => {
        const res = response.data;
        setItem(res);
        setSearch(res);
      });
    } else {
      getAllProducts().then((response) => {
        const res = response.data;
        setItem(res);
        setSearch(res);
      });
    }
  }, [id]);

  const handleSearch = (e) => {
    const inputName = e.target.value;
    const searchName = item.filter((param) => {
      return param.title.toLowerCase().includes(inputName.toLowerCase());
    });
    setSearch(searchName);
  };

  const handleMinSort = () => {
    let sorted = [...item].sort((p1, p2) =>
      p1.price > p2.price ? 1 : p1.price < p2.price ? -1 : 0
    );
    setSearch(sorted);
  };

  const handleMaxSort = () => {
    let sorted = [...item].sort((p1, p2) =>
      p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0
    );
    setSearch(sorted);
  };

  const handleNameSort = () => {
    let sorted = [...item].sort((p1, p2) =>
      p1.title > p2.title ? 1 : p1.title < p2.title ? -1 : 0
    );
    setSearch(sorted);
  };

    return (
        <>
        <div>
          <input type="text" placeholder="Search Item" onChange={handleSearch}/>
        </div>
        <div>
            <button onClick={handleMinSort}>Sort by Price(Asc)</button>
            <button onClick={handleMaxSort}>Sort by Price(Des)</button>
            <button onClick={handleNameSort}>Sort by Name</button>
        </div>
      <div className="itemcard">
        {search.map((param,index)=>(
            <Card
            key={index}
            id={param.id}
            price={param.price}
            title={param.title}
            image={param.image}
            category={param.category}
            description={param.description}
            />
        ))}
      </div>
      </>
    );
  }
  
  export default Products;
