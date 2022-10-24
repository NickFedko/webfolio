import review from '../assets/images/IMAGE(4).png';
import logo1 from '../assets/images/IMAGE(5).png';
import logo2 from '../assets/images/IMAGE(6).png';
import logo3 from '../assets/images/IMAGE(7).png';
import '../assets/styles/about.css'

export default function About() {
    return (
        <div className="about">
            <div className="about__heading">
                <p>About</p>
                <h2>Trusted by the fastest growing digital startups</h2>
            </div>
            <div className="about__row">
                 <div className="about__column">
                    <p>Working with Alex was interesting. 
                        He went above and beyond what 
                        I've asking for and provided such an amazing design for my mobile application.
                    </p>
                    <div className="about__review">
                        <img src={review}/>
                        <div className="review__column">
                            <p>Steve McQuillen</p>
                            <p>CEO @ Vencortex</p>
                        </div>
                    </div>
                 </div>
                 <div className="about__column">
                    <p>7+</p>
                    <p>Years of experience</p>
                    <img src={logo1}/>
                 </div>
                 <div className="about__column">
                    <p>50+</p>
                    <p>Projects completed</p>
                    <img src={logo2} />
                 </div>
                 <div className="about__column">
                    <p>30+</p>
                    <p>Happy clients</p>
                    <img src={logo3} />
                 </div>
            </div>
        </div>
    )
}