

import React from "react"


export default function Button (props:{text:string}) {

    

    return (

        <button className="bg-blue-900 text-white font-semibold text-sm mt-5 px-2 py-2 rounded-lg hover:bg-blue-600 hover:scale-105 duration-300"> {props.text}
        

        </button>




    )

}