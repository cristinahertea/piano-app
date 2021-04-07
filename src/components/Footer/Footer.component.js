import React from 'react'

const Footer = ({data}) => {
    return (
        <div>
            {data.map(element => {
                return (<div>
                    <div>{element.name}</div>
                    <div>{element.varsta}</div>
                    <div>HELLO!</div>
                </div>)
            })}
        </div>
    )
}

export default Footer
