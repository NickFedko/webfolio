import '../assets/styles/contact.css';

export default function Contact() {
    return(
        <div className="contact">
            <p>contact</p>
            <h2>Have something in mind? Let's connect</h2>
            <nav className="contact__nav">
                <a href="mailto:alexsmith@example.com">alexsmith@example.com</a>
                <div className="contact__column">
                    <a>Work</a>
                    <a>About</a>
                    <a>Shop</a>
                    <a>Blog</a>
                    <a>Contact</a>
                </div>
                <div className="contact__column">
                    <a>Twitter</a>
                    <a>LinkedIn</a>
                    <a>Behance</a>
                    <a>GitHub</a>
                    <a>Dribbble</a>
                </div>
            </nav>
        </div>
    )
}