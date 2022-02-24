import React from "react"
import ProfilePic from "../images/profilepic.jpg"

export default function Navbar() {
    return (
        <div>
            <img src={ProfilePic} 
            alt = "Naing Phyo Oo"
            className="icon"/>
        </div>
    )
}