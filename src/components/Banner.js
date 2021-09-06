import React from 'react'


function Banner({children, title, para}) {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <br />
            <p>{para}</p>
            {children}
            
        </div>
    )
}

export default Banner
