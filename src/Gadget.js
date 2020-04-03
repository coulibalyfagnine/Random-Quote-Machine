import React from 'react'
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'tachyons';
const Gadget = () => {

    return(

        <div id="wrapper">
            <div id="quote-box">
                <div class="quote-text">
                <i class="fa fa-quote-left"> </i><span id="text">Life isn’t about getting and having, it’s about giving and being.</span>
                </div>
                <div class="quote-author">
                - <span id="author"> Alas Coulby</span>
                </div>
                <div class="buttons">
                <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank">
                <FontAwesomeIcon className="icon" icon={['fab', 'twitter']} />
                </a>
                <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
                <FontAwesomeIcon className="icon" icon={['fab', 'tumblr']} />
                </a>
                <button class="button" id="new-quote">New quote</button>
                </div>
            </div>
            <div class="footer"> by <a href="https://codepen.io/hezag/">Alas Coulby</a></div>
        </div>

    );


}


export default Gadget;