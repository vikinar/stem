import React, { useState, Fragment } from 'react'
import { useParams } from 'react-router-dom'

const transferData = [
    {
        path: 'algebra',
        name: 'Հանրահաշիվ',
        lab: true
    }
]


const Transfer = (props) => {

    const { transfer } = useParams()

    let transferList = transferData.find( ({path}) => path === transfer )

    return (
        <main>
            <section class = 'category'>
            <section className='category'>
                <section className="category__header" style = {{background: props.itemBg, color: props.itemTitle}}>
                    <h1>{transferList.name}</h1>
                </section>
                <section className="category__content">
                    <div className="container">
                        <div style = {{width: '100%', height: '30rem', background: 'red'}}></div>
                        {transferList.lab ? <button>View lab</button> : null}
                    </div>
                </section>
            </section>
            </section>
        </main>
    )
}

export default Transfer