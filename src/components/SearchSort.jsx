import React, { useState } from "react";

export default function ProductList() {
    const [products] = useState([
        { id: 1, name: "Laptop", price: 800, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSeAa1u040jBV8j3DYSmd6RxcNNBwZkmxeEaCMqUkDxCpDEsWvaeEuDsMVMHhbn2aCbrfM05SSDfBoOpoIdbUPZLhursnGlBfj4tDE0XLRv2I54fNGHJX4o" },
        { id: 2, name: "Smartphone", price: 500, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4yMmDzCyyN8_sluWE6W-FC9BrdrZ1RzzavTDLFqcGjz7-mO9CmQkFMnq9RutXVEUAnaGGW3uL2T9rY8I9tHUSVLKjUnCkyUIBL6YTnoPTFha7ZfiOmV5XYw&usqp=CAE" },
        { id: 3, name: "EarBuds", price: 150, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT50avM99-DqTcx3BxPYolptdGYgwBwUrLU4achjhyGz2xbvL-Jjyi0ZNQ89Y6foRCIyBFybRqFQirUYq38gZ8QsSZ5UQdBK8iFAZuVYOj9lMdi-P4e44pYqQ&usqp=CAE" },
        { id: 4, name: "Smartwatch", price: 250, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTIUb62U_0nlYzJyU2SiTg-QQC0YKBduO7ic2AEXt8wHdaJi-5LgJTVCXifeJKqjjZaVlxNYd678DHG7azunNA6URC4uIXIPUrrT0VwkeRrfCW6Bwqn6sXAlQ&usqp=CAE" },
        { id: 5, name: "Tablet", price: 100, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSnf2YxoLd3etdNQdURFuPrplyRd-O67Pr4ok53u3kjPuuPBzDXxZrWrBWoS46vkGpjMsp4IaAL14Kks12dBRYrJF-tsPhzMw" }
    ]);

    const [search, setSearch] = useState("");
    const [sortOption, setSortOption] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    const sortedProducts = [...filteredProducts];
    if (sortOption === "Alphabetically, A-Z") {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "Price, Low to High") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price, High to Low") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-3">Searching - Sorting</h2>

            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search product..."
                value={search}
                onChange={handleSearch}
            />

            <select className="form-select mb-3" value={sortOption} onChange={handleSortChange}>
                <option value="">Sort by</option>
                <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
                <option value="Price, Low to High">Price, Low to High</option>
                <option value="Price, High to Low">Price, High to Low</option>
            </select>

            <div className="row ">
                {sortedProducts.length > 0 ? (
                    sortedProducts.map((product) => (
                        <div key={product.id} className="col-md-2 mx-auto mb-4">
                            <div className="card">
                                <img src={product.image} className="card-img-top" alt={product.name} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">${product.price}</p>
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No products found</p>
                )}
            </div>
        </div>
    );
}
