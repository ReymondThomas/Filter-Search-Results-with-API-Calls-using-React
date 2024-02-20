import React, { useState } from 'react'
import "./Search.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
function Search() {
    const [input, setInput] = useState("");
    const [users, setUsers] = useState([]);
    const handleChange = (value) => {
        setInput(value);
        getData(value);
    }

    const getData = (value) => fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then((json) => {
            const results = json.filter((user) => {
                return value && user && user.name && user.name.toLowerCase().includes(value);
            });
            setUsers(results);
        })
    const handleClick = (value) => {
        alert(`You Clicked ${value.name}`);
    }
    return (
        <div className="main">
            <h1>Search Results With API Calls</h1>
            <div className="search-input">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" /><input type="text" onChange={(e) => handleChange(e.target.value)} value={input} placeholder="Enter to search..." />
            </div>
            <div className="results">
                {users.map((data, index) => (
                    <p onClick={() => handleClick(data)} key={index}>{data.name}</p>
                ))}
            </div>
        </div>
    )
}

export default Search