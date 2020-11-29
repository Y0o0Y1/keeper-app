import React from "react"
import Header from "./header"
import Footer from "./footer"
import Note from "./note"
import Notes from "../notes"

function app (){
    return (
        <div>
        <Header />
        {Notes.map((note)=>{
            return <Note
                title = {note.title}
                content = {note.content}
            />
        })}     
        <Footer/> 
        </div>
    )
}

export default app;