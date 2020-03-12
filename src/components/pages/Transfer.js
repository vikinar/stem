import React, { useState, Fragment } from 'react'
import { useParams, Link } from 'react-router-dom'

import '../../sass/pages/transfer.scss'

const transferData = [
    {
        path: 'algebra',
        name: 'Հանրահաշիվ',
        lab: true,
        route: 'algebraLab'
    }
]


const Transfer = (props) => {

    const { transfer } = useParams()

    let transferList = transferData.find( ({path}) => path === transfer )

    return (
        <main>
            <section className = 'category'>
            <section className='category'>
                <section className="category__header" style = {{background: props.itemBg, color: props.itemTitle}}>
                    <h1>{transferList.name}</h1>
                </section>
                <section className="category__content">
                    <div className="container">
                        <div className = 'container__transfer__poster'>
                            <h2 className="container__transfer__poster--title">
                                This place is reserved for photo or video material.
                            </h2>
                        </div>
                        {transferList.lab ? <Link style = {{width: '100%'}} to = {`${transferList.path}/${transferList.route}`}><button className = 'container__submitBtn'>View lab</button></Link>: null}
                        <article className="container__content">
                            <p>
                                Հանրահաշիվ (Algebra (արաբերեն "al-jabr", բառացիորեն նշանակում է "անջատված մասերի վերամիավորում")[1]) մաթեմատիկայի ծավալուն մասերից մեկն է, ինչպես թվերի տեսությունը, երկրաչափությունը և մաթանալիզը, հանրահաշիվը, ընդհանուր առմամբ, մաթեմատիկական սիմվոլների և դրանց վրա սահմանված կանոնների ուսումնասիրությունն է[2]։ Այն համարյա ողջ մաթեմատիկայի կապող թելն է[3]։ Այն ներառում է ամեն ինչ, սկսած տարրական հավասարումների լուծումներից մինչև այնպիսի աբստրակտ հասկացություններ, ինչպիսիք են խմբերը, օղակները և դաշտերը։ Հանրահաշվի ավելի հիմնական մասերը կոչվում են տարրական հանրահաշիվ, ավելի աբստրակտ մասերը՝ աբստրակտ հանրահաշիվ կամ ժամանակակից հանրահաշիվ։ Տարրական հանրահաշիվը կարևոր է համարվում մաթեմատիկայի ցանկացած ուսումնասիրության համար, կարևոր գիտության, կամ ճարտարագիտության, ինչպես նաև բժշկության և տնտեսագիտության համար։ Աբստրակտ հանրահաշիվը բարձրագույն մաթեմատիկայի հիմնական բնագավառն է, որն ուսումնասիրվում է պրոֆեսիոնալ մաթեմատիկոսների կողմից։
                            </p>
                        </article>
                    </div>
                </section>
            </section>
            </section>
        </main>
    )
}

export default Transfer
