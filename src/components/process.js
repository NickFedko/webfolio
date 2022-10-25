import arrow from '../assets/images/IMAGE(18).png';
import '../assets/styles/process.css'

export default function Process() {
    return (
        <div className="process">
            <p>process</p>
            <div className="process__text">
                <h2>Getting started is easy.</h2>
                <p>I've developed a structure that saves time (and money) while making the most of our interactions.</p>
            </div>
            <div className="process__row">
                <div className="process__column">    
                    <p>[1] <img src={arrow} /></p>
                    <h3>Listen</h3>
                    <p>I get to know you and your company, your goals and expectations.</p>
                </div>
                <div className="process__column">    
                    <p>[2] <img src={arrow} /></p>
                    <h3>Ideate</h3>
                    <p>I create a couple of pitches based on the project brief and goals.</p>
                </div><div className="process__column">    
                    <p>[3]</p>
                    <h3>Execute</h3>
                    <p>I work on the approved plan while keeping you in the loop until we have a finished project.</p>
                </div>
            </div>
        </div>
    )
}