import logo from '../assets/images/IMAGE(1).png'
import image from '../assets/images/IMAGE(2).png'
import '../assets/styles/intro.css'
import award from '../assets/images/IMAGE(3).png'

export default function Intro() {
    return (
        <div className="intro">
            <div className="intro__info">
                <h1>I design digital products that make an impact.</h1>
                <p>Hi! I’m Alex, a product designer based in Oakland. I create user-friendly interfaces for fast-growing startups.</p>
                <button>Hire me!<img src={logo}/> </button>
                <div className='intro__awards'>
                    <img src={award}/>
                    <div className='awards__column'>
                        <p>Independent Of The Year</p>
                        <p>Annual Awards 2020 • awwwards.com</p>
                    </div>
                </div>
            </div>
            <div className='intro__image'>
                <img src={image}/>
            </div>
        </div>
    );
}