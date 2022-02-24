import React from "react"
import ButtonEmail from "../images/ButtonEmail.png"
import ButtonLinkedIn from "../images/ButtonLinkedIn.png"

export default function Main() {
    return (
        <main>
            <p className="name">Naing Phyo Oo</p>
            <p className="title">Software Developer</p>
            <div>
                <a href="mailto:naingphyo@alumni.ubc.ca">
                    <img src={ButtonEmail}
                    className="emailButton"/>
                </a>
                <a href="https://www.linkedin.com/in/naingphyo/">
                    <img src={ButtonLinkedIn} 
                    className="linkedinButton"/>
                </a>
            </div>
            <div className="content">
                <p className="sub-title">About</p>
                <p className="paragraph"> I am a Software Engineer with strong passion for coding 
                and willingness to learn new things. I have extensive experience in developing 
                software application with modern programming languages like Java, Javascript and more. 
                By doing multiple group projects in school and past jobs, I am able to collaborate 
                effectively with any team members to work toward certain goals.</p>
                <p className="sub-title">Background</p>
                <p className="paragraph"> I have a Bachelor of Science in Computer Science from 
                University of British Columbia and have over 3 years of experience in Software Development. </p>
            </div>
        </main>
    )
}