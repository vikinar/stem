import React, {Component} from 'react'
import './Nav.scss'
import { ReactComponent as Profile} from './profile.svg'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import {Category} from '../category/Category'

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            password: '',
            courseId: null,
            loading: false,
            token: null,
            userId: null,
            isLogin: false,
            bodyTextColor: '#014d87',
            data: [],
            render: true,
            nav: this.nav
        }
    }

    nav = [
        {
            category: 'Բնագիտություն',
            route: 'earth-science'
        },
        {
            category: 'Ֆիզիկա',
            route: 'physics'
        },
        {
            category: 'Քիմիա',
            route: 'chemistry'
        },
        {
            category: 'Կենսաբանություն',
            route: 'biology'
        },
        {
            category: 'Համակարգչային գիտություն',
            route: 'computer-science'
          },
        {
            category: 'Մաթեմատիկա',
            route: 'math'
        },
    ];

    render() {
        return (
            <nav className= {`nav nav-mobile ${this.props.toggleClass}`} style={{backgroundColor: this.props.navBg}}>
                <section className="user" style={{backgroundColor: this.props.bg}}>
                    
                    <div className="user__img">
                    <div className="user__img--o">
                       {
                            localStorage.getItem("avatar") !== null ?  <img className="avatar" alt="user" src = {localStorage.getItem("avatar").replace(/"/g,'')}/> : <Profile/>
                        }
                        </div>
                    </div>
                    <h2>{
                            localStorage.getItem("fullname") !== null ? localStorage.getItem("fullname").replace(/"/g, "") : 'Հյուր'
                        }
                    </h2>
                    
                    <button className={'switch'} onClick = {this.props.switch}> <div className = "switch__circle"></div> Switch to Dark Mode</button>
                </section>
                
                <ul className = 'nav__ul nav-mobile__ul'>
                    <li className = 'nav__li nav-mobile__li'>
                    <Link style={{color: "white", textDecoration: "none"}} to = {`/`} onClick = {this.props.toggle}>
                                Գլխավոր
                    </Link>
                    </li>
                    {this.state.nav.map((i) =>  <li className = 'nav__li nav-mobile__li' key = {i.category}>
                            <Link style={{color: "white", textDecoration: "none"}} to = {`/${i.route}`} onClick = {this.props.toggle}>
                                {i.category}
                            </Link>
                        </li>)}
                </ul>
            </nav>
        )
    }
}
