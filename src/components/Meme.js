import React from "react"

export default function Meme(){
    return (
        <div class="container">
            <form>
                <div class="form--inputs">
                    <input type="text" name="first_input" placeholder="Enter the first text" />
                    <input type="text" name="second_input" placeholder="Enter the second text" />
                </div>
                <div class="form--button">
                    <button>Get A New Meme Image</button>
                </div>
               
            </form>
        </div>
    )
}