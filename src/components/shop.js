import frame1 from '../assets/images/IMAGE(19).png';
import frame2 from '../assets/images/IMAGE(20).png';
import frame3 from '../assets/images/IMAGE(21).png';
import arrow from '../assets/images/IMAGE(22).png';

import '../assets/styles/shop.css';
            <p>shop</p>

export default function Shop() {
    return(
        <div className="shop">
            <h2>In a rush<br /> Shop ready designs here</h2>
            <div className="shop__row">
                <div className="shop__column">
                    <img src={frame1} />
                    <p>Ergonomic Frozen Pants</p>
                    <p>In et consequ</p>
                </div>
                <div className="shop__column">
                    <img src={frame2}/>
                    <p>Handmade Fresh Bike</p>
                    <p>Qui in facere</p>
                </div>
                <div className="shop__column">
                    <img src={frame3}/>
                    <p>Small Soft Pizza</p>
                    <p>Aspernatur expli</p>
                </div>
            </div>
            <button>View all products <img src={arrow} /></button>
        </div>
    )
}