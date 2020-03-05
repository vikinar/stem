import React, {useState} from 'react'
import {Helmet} from 'react-helmet'
import { Route, Switch, Link, BrowserRouter as Router, useParams } from 'react-router-dom'
import './Category.scss'

// Declaring assets/img path
const pathToAssets = require.context('assets/img');

const categoryItems = {
    category: [
        {
            path: 'math',
            name: 'Մաթեմատիկա',
            description: '',
            items: [
                {
                    name: 'Հանրահաշիվ',
                    description: 'Morbi aliquam posuere velit et iaculis. Vestibulum varius nibh diam, et efficitur leo ultricies in. Curabitur leo urna, tincidunt quis lectus in, consequat fermentum enim. Integer at luctus libero. Sed eleifend arcu tellus, et interdum risus tempus eu. Nullam quis urna blandit, viverra velit ut, ornare neque. Cras non facilisis sem.',
                    bg: './algebra.webp',
                    noWebp: './algebra.jpg',
                    labR: 'algebra'
                },
                {
                    name: 'Հանրահաշիվ',
                    description: 'Morbi aliquam posuere velit et iaculis.',
                    bg: './algebra.webp',
                    noWebp: './algebra.jpg'
                },
                {
                    name: 'Հանրահաշիվ',
                    description: 'Morbi aliquam posuere velit et iaculis. Vestibulum varius nibh diam, et efficitur leo ultricies in. Curabitur leo urna, tincidunt quis lectus in, consequat fermentum enim. Integer at luctus libero. Sed eleifend arcu tellus, et interdum risus tempus eu. Nullam quis urna blandit, viverra velit ut, ornare neque. Cras non facilisis sem.',
                    bg: './algebra.webp',
                    noWebp: './algebra.jpg'
                },
                {
                    name: 'Հանրահաշիվ',
                    description: 'Morbi aliquam posuere velit et iaculis. Vestibulum varius nibh diam, et efficitur leo ultricies in. Curabitur leo urna, tincidunt quis lectus in, consequat fermentum enim. Integer at luctus libero. Sed eleifend arcu tellus, et interdum risus tempus eu. Nullam quis urna blandit, viverra velit ut, ornare neque. Cras non facilisis sem.',
                    bg: './algebra.webp',
                    noWebp: './algebra.jpg'
                }
            ]
        },
        {
            path: 'physics',
            name: 'Ֆիզիկա',
            items: [],
            description: '',
        },
        {
            path: 'chemistry',
            name: 'Քիմիա',
            items: [],
            description: '',
        },
        {
            path: 'biology',
            name: 'Կենսաբանություն',
            items: [],
            description: '',
        },
        {
            path: 'computer-science',
            name: 'Կենսաբանություն',
            items: [],
            description: '',
        },
        {
            path: 'earth-science',
            name: 'Բնագիտություն',
            items: [],
            description: '',
        },
    ]
}

const Category = (props) => {
    let { category } = useParams()

    const itemList = categoryItems.category.find(({ path }) => path === category)

    return (
        <main style = {{backgroundColor: `${props.bg}`}}>
        <Helmet>
            <title>{itemList.name}</title>
            <meta name="description" content= {itemList.description} />
        </Helmet>
            <section className='category'>
                <section className="category__header" style = {{background: props.itemBg, color: props.itemTitle}}>
                    <h1>{itemList.name}</h1>
                </section>
                <section className="category__content">
                    <div className="container">
                        {itemList.items.length !== 0 ? itemList.items.map((item, index) => (
                        <section className = 'item' key = {index} style = {{animationDelay: `${index/4}s`, background: props.itemBg}}> 
                            <div className="item__img">
                                <picture>
                                    <source srcSet = {pathToAssets(item.noWebp)}/>
                                    <img src = {pathToAssets(item.bg)} alt={item.name}/>
                                </picture>
                            </div>
                            <div className="item__content">
                            <Link style={{color: "white", textDecoration: "none"}} to = {`/${category}/${item.labR}`}>
                            <h2 style = {{color: props.itemTitle}}> {item.name} </h2>
                            </Link>
                                
                                <p style = {{color: props.color}}> {item.description.length >= 155 ? `${item.description.substring(0, 155)}...` : item.description} </p>
                            </div>
                        </section>
                        )
                    ) : <div className="no-content"> <h1>No Content here, we are working on this</h1> </div>
                    }
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Category