import React, {Component} from 'react'
import glogo from '../../../assets/img/google-play.webp'
import './Footer.scss'

export default class Footer extends Component{
    render() {
        return (
            <footer className='footer' style = {{backgroundColor: this.props.bg, color: this.props.color}}>
                <p className='copy' style = {{color: this.props.color}}>&copy; 2019 AVC-AGBU</p>
                <div className="g-b">
                    <h3 className= 'g-b__title' style = {{color: this.props.color}}>Get AR Experience!</h3>
                    <picture>
                        {/* <source srcSet = {pathToAssets(item.noWebp)}/> */}
                        <img className= 'g-b__img' src= {glogo} alt="google-play"/>
                    </picture>
                </div>
            </footer>
        )
    }
}
