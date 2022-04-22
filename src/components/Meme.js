import React from "react"

export default function Meme(){
    function darken(){
        console.log("clicked")
    }
    return (
        <div className="container">
            <form>
                <div className="form--inputs">
                    <input type="text" name="first_input" placeholder="Enter the first text" />
                    <input type="text" name="second_input" placeholder="Enter the second text" />
                </div>
                <div className="form--button">
                    <button onClick={darken}>Get A New Meme Image</button>
                </div>
               
            </form>
        </div>
    )
}