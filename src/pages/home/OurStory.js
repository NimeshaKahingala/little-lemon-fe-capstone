import React from "react";
import chefAImg from '../../assets/Mario and Adrian A.jpg';
import chefBImg from '../../assets/Mario and Adrian b.jpg';
import './OurStory.scss';

function OurStory() {
    return <section className="section-our-story container">
        <h1 className="title">Little Lemon</h1>
        <h3 className="sub-title">Chicago</h3>
        <div className="content-inner">
            <div>
                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
            <div>
                <img className="image img-chef" src={chefAImg}></img>
                <img className="image img-chef-bottom" src={chefBImg}></img>
            </div>
        </div>

    </section>
}

export default OurStory;