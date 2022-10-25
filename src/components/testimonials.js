import starf from '../assets/images/Vector.png';
import reviewer1 from '../assets/images/IMAGE(4).png';
import reviewer2 from '../assets/images/IMAGE(17).png';

import '../assets/styles/testimonials.css'

export default function Testimonials() {
    const star = <img src={starf} />

    return (
        <div className="testimonials">
            <p>Testimonials</p>
            <h2>Hear it directly from my clients.</h2>
            <div className="testimonials__row">
                <div className="testimonials__review">
                    <div className='review__row'>{star}{star}{star}{star}{star}</div>
                    <h3>Highly professional</h3>
                    <p>Alex was in control throughout the project. 
                       They delivered on the promised deadlines and we love the work they did!
                    </p>
                    <div className="review__reviewer">
                        <img src={reviewer1} />
                        <div className="review__column">
                            <p>Steve McQuillen</p>
                            <p>Marketing Manager, Vowels</p>
                        </div>
                    </div>
                </div>
                <div className="testimonials__review">
                    <div className='review__row'>{star}{star}{star}{star}{star}</div>
                    <h3>Creative and fearless</h3>
                    <p>Working with Alex was interesting. 
                       He went above and beyond what I've asking for and provided such an amazing design for my mobile application.
                    </p>
                    <div className="review__reviewer">
                        <img src={reviewer2} />
                        <div className="review__column">
                            <p>Rebecca Smith</p>
                            <p>CEO, Consonants</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='testimonials__row'>
                <button>←</button>
                <button>→</button>
            </div>
        </div>
    )
}