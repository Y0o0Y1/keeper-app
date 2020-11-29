import React from "react"

const date = new Date();
let currentYear = date.getFullYear();


function footer (){
   return (
    <footer>
        <p> `Copyright ⓒ   ${currentYear}`</p>
    </footer>

   ) 
}

export default footer;