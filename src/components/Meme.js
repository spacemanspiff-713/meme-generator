import React from "react"
import memesData from "../meme-data.js"


export default function Meme(){
    // console.log(memes)
    let memeList = memesData.data.memes
    let memeDisplay = []
    for(let i = 0; i < memeList.length; i++){
        memeDisplay.push(<li>{memeList[i].name}</li>)
    }
    let rando = Math.floor(Math.random() * memeList.length)
    let memeImg = memeList[rando].url
    return (
        <div className="container">
                <div className="form--inputs">
                    <input type="text" name="first_input" placeholder="Enter the first text" />
                    <input type="text" name="second_input" placeholder="Enter the second text" />
                </div>
                <div className="form--button">
                    <button>Get A New Meme Image</button>
                </div>
                <section className="memeSection">
                <div className="memeImageWapper" style={{
                    backgroundImage: `url(${memeImg})`, 
                    }}>
                    {/* <img src={memeImg} /> */}
                </div>
                </section>
                
        </div>
    )
}