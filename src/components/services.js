import '../assets/styles/services.css'

import icon1 from '../assets/images/IMAGE(13).png';
import icon2 from '../assets/images/IMAGE(14).png';
import icon3 from '../assets/images/IMAGE(15).png';
import icon4 from '../assets/images/IMAGE(16).png';

export default function Services() {
    return(
        <div className="services">
            <p>services</p>
            <div className="services__row">
                <div className="services__column">
                    <h2>Pushing the boundaries of your potential</h2>
                    <img src={icon3} />
                    <h3>Memorabilia</h3>
                    <p>Choose from easy, affordable options for merch like custom tees and sets of pins.</p>
                </div>
                <div className="services__column">
                    <img src={icon1} />
                    <h3>Branding</h3>
                    <p>Refresh your logo, revamp your website, and even your letterhead— develop a cohesive aesthetic for your brand.</p>
                    <img src={icon4} />
                    <h3>Visual Aids</h3>
                    <p>Make your point more convincingly with branded flyers, slides, catalogues, infographics.</p>
                </div>
                <div className="services__column">
                    <img src={icon2} />
                    <h3>Packaging</h3>
                    <p>Rethink labels, boxes, signage, and everything that'll help your product make a great first impression.</p>
                    <button>Start a project</button>
                </div>
            </div>
        </div>
    )
}