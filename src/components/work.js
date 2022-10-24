import frame1 from '../assets/images/IMAGE(8).png';
import frame2 from '../assets/images/IMAGE(9).png';
import frame3 from '../assets/images/IMAGE(10).png';
import frame4 from '../assets/images/IMAGE(11).png';
import frame5 from '../assets/images/IMAGE(12).png';

import '../assets/styles/work.css'

export default function Work() {
    return (
        <div className="work">
            <p>work</p>
            <h2>Bringing stellar results for every client.</h2>
            <div className='work__row'> 
                <div className="work__block">
                    <img src={frame1} />
                    <h3>Maize Website Design</h3>
                    <p>Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet. Nulla facilisi.</p>
                </div>
                <div className="work__block">
                    <img src={frame2} />
                    <h3>Datadash Product Design</h3>
                    <p>Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet. Nulla facilisi.</p>
                </div>
            </div>
            <div className="work__block">
                <img src={frame3} />
                <h3>Joggr Website Design</h3>
                <p>Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet. Nulla facilisi.</p>
            </div>
            <div className='work__row'>
                <div className="work__block">
                    <img src={frame4} />
                    <h3>Otsuka Pharmaceutical</h3>
                    <p>Partnering with healthcare researchers to improve patient communications and experience.</p>
                </div>
                <div className="work__block">
                    <img src={frame5} />
                    <h3>Origin UI/UX Design</h3>
                    <p>Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet. Nulla facilisi.</p>
                </div>
            </div>
            <a>view all projects</a>
        </div>  
    )
}