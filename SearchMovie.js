import React from "react";

export default function SearchMovie(){
    return (

        <form className="form">
            <label className="label" htmlfor="query">Movie Name</label>
            <input className="input" type="text" name="query" 
            placeholder="i.e. Jurrasic park"></input>
            <button className="button" type="submit">Search</button>
        </form>

    )
} 