import React from 'react'

import "./Argos.css"

function Argos({argos}) {

    return (
        <div className="card">
            <h3>{argos.argo_name}</h3>
        </div>
    )
}

export default Argos
