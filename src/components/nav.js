import logo from '../assets/images/IMAGE.png'
import '../assets/styles/nav.css'

export default function Nav() {
    return (
        <div className='nav'>
            <img src={logo} />
            <nav className='nav__body'>
                <a>Work</a>
                <a>About</a>
                <a>Shop</a>
                <a>Blog</a>
                <a>Contact</a>
            </nav>
            <div className='nav__cart-block'>
                <a>Cart (0)</a>
            </div>
        </div>
    );
}