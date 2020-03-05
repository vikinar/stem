import React, {Component} from 'react'
import Nav from '../nav/Nav'
import './Home.scss'
import glogo from '../../assets/img/google-play.webp'
import Popup from 'reactjs-popup'

export default class Home extends Component{
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
            fullName: '',
            avatar: '',
            dark: false,
            bg: '',
            color: ''
        }
    }

    makeLoginRequest = (event) => {
        event.preventDefault();
        const url = `https://www.avc-agbu.org/edu/login/token.php?service=moodle_mobile_app&username=${this.state.text}&password=${this.state.password}`;
        this.setState({ loading: true });
        fetch('https://www.avc-agbu.org/edu/login/index.php', {
            //	mode: 'no-cors',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json'
                        },
                        body: `username=${this.state.text}&password=${this.state.password}`
                        })
        fetch(url).then(client => client.json())
            .then(response => {
                this.setState({ token: response.token });
                fetch(`https://www.avc-agbu.org/edu/webservice/rest/server.php?moodlewsrestformat=json&wstoken=${this.state.token}&wsfunction=core_webservice_get_site_info`)
                    .then(user => user.json())
                    .then(async id => {
                        this.setState({
                            userId: id.userid,
                            fullName: id.fullname,
                            avatar: id.userpictureurl
                        });
                        // eslint-disable-next-line no-unused-expressions
                        this.state.userId ? this.setState({ isLogin: true }) : this.state.isLogin;
                        localStorage.setItem('userId', JSON.stringify(this.state.userId));
                        localStorage.setItem('token', JSON.stringify(this.state.token));
                        localStorage.setItem('fullname', JSON.stringify(this.state.fullName));
                        localStorage.setItem('avatar', JSON.stringify(this.state.avatar));
                        fetch(`https://www.avc-agbu.org/edu/webservice/rest/server.php?moodlewsrestformat=json&wstoken=${this.state.token}&wsfunction=core_enrol_get_users_courses&userid=${this.state.userId}`)
                            .then(course => course.json())
                            .then(courseList => this.setState({
                                data: courseList
                            }))
                    })
            })
    }

    render(){
        return (
            <div className = 'home' style = {{backgroundColor: this.props.bg}}>
                <main className = 'main'>
                        <section className = 'poster'>
                            <div>
                                <h2 className="poster__title">Science</h2>
                                <button className="poster__action">Watch DEMO</button>
                            </div>
                        </section>
                </main>
            </div>
        )
    }
}
