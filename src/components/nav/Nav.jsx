import React, {Component} from 'react'
import './Nav.scss'
import { ReactComponent as Profile} from './profile.svg'

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
            render: true
        }
    }

    
    
    nav = [
        {
            category: 'Բնագիտություն',
            route: '/earth-science'
        },
        {
            category: 'Ֆիզիկա',
            route: '/physics'
        },
        {
            category: 'Քիմիա',
            route: '/chemistry'
        },
        {
            category: 'Կենսաբանություն',
            route: '/biology'
        },
        {
            category: 'Մաթեմատիկա',
            route: '/math'
        },
    ];

    componentDidMount(){
        if(localStorage.getItem("avatar") !== null){
            fetch('https://www.avc-agbu.org/edu/login/index.php', {
                  //	mode: 'no-cors',
                          method: 'POST',
                          headers: {
                              'Content-Type': 'application/x-www-form-urlencoded',
                              'Accept': 'application/json'
                          },
                          body: `username=${this.state.text}&password=${this.state.password}`
                      }).then(() => {
                          console.log('Logged in to moodle');
                      }).catch((err) => {
                          console.log('Failed to SSO login to moodle');
                          console.log(err);
                      }).finally(() => {
                          return true;
                      })
        }
    }

    render() {
        return (
            <nav className= {'nav'}>
                <div className="user">
                    <div className="user__img">
                       {
                            localStorage.getItem("avatar") !== null ?  <img className="avatar" alt="user" src = {localStorage.getItem("avatar").replace(/"/g,'')}/> : <Profile/>
                        }
                    </div>
                    <h2>{
                            localStorage.getItem("fullname") !== null ? localStorage.getItem("fullname").replace(/"/g, "") : 'Հյուր'
                        }</h2>
                </div>
                <ul className = 'nav__ul'>
                    {this.nav.map((i) =>  <li className = 'nav__li' key = {i.category}>{i.category}</li>)}
                </ul>
            </nav>
        )
    }
}
