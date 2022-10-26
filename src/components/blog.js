import arrow from '../assets/images/IMAGE(22).png';
import post1 from '../assets/images/IMAGE(23).png';
import post2 from '../assets/images/IMAGE(24).png';
import post3 from '../assets/images/IMAGE(25).png';

import '../assets/styles/blog.css'

export default function Blog() {
    return (
        <div className="blog">
            <p>blog</p>
            <div className="blog__post">
                <h2>Words On Design, Tech & Other Things I Love</h2>
                <button>Explore all posts <img src={arrow}/></button>
            </div>
            <div className="blog__row">
                <img src={post1}/>
                <div className='blog__text'>
                    <p>Design • 6 Oct, 2021</p>
                    <h3>On our obsession with circles</h3>
                    <p>Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet. Nulla facilisi.</p>
                </div>
                <button>View post <img src={arrow}/></button>
            </div>
            <div className="blog__row">
                <img src={post2} />
                <div className='blog__text'>
                    <p>Design • 6 Oct, 2021</p>
                    <h3>From bullet points to Yayoi Kusama— On our obsession with circles</h3>
                    <p>Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet. Nulla facilisi.</p>
                </div>
                <button>View post <img src={arrow}/></button>
            </div>
            <div className="blog__row">
                <img src={post3}/>
                <div className='blog__text'>
                    <p>Design • 6 Oct, 2021</p>
                    <h3>It's a jungle out there for gig workers</h3>
                    <p>Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet. Nulla facilisi.</p>
                </div>
                <button>View post <img src={arrow}/></button>
            </div>  
        </div>
    )
}