import arrow from '../assets/images/IMAGE(26).png';
import frame from '../assets/images/IMAGE(27).png';

import '../assets/styles/info.css'

export default function Info() {
    return (
        <div className="info">
            <div className="info__block">
                <h2>Work</h2>
                <p>Favorite projects, award-winning campaigns and more.</p>
                <button>View all <img src={arrow} /></button>
            </div>
            <div className="info__block" >
                <h2>About</h2>
                <p>My journey, career highlights and everything else you need to know.</p>
                <button>Get to know me <img src={arrow} /></button>
            </div>
        </div>
    )
}