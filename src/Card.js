import React, {Component} from 'react'
//import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'tachyons';

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {quote :[], 
                      currentQuote: '',
                      currentAuthor:'',
                      twitterHref : '',
                      tumblrHref: ''
                     }

    this.twitter = this.twitter.bind(this);        
    }

    componentDidMount(){
        
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(res => res.json())
    .then(res =>{ 
        this.setState({quote: res.quotes});
        let cursor = Math.floor(Math.random() * this.state.quote.length);
        this.setState({currentQuote:this.state.quote[cursor].quote,
                       currentAuthor: this.state.quote[cursor].author,
                       twitterHref: 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' 
                        + encodeURIComponent('"' + this.state.quote[cursor].quote + '" '
                        + this.state.quote[cursor].author) ,

                        tumblrHref: 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' 
                        + encodeURIComponent('"' + this.state.quote[cursor].quote + '" '
                        + this.state.quote[cursor].author)
                    });
    
    } );

    }

     

twitter(){
    console.log("you have cliecked on the twiter button ? ");
    console.log(this.state.quote[1].quote);
    // window.open("https://www.twitter.com/intent/tweet/")
}

tumblr = () =>{
    console.log("you have cliecked on the tumblr button ? ");
}

newQuote = () =>{
    let cursor = Math.floor(Math.random() * this.state.quote.length);
    this.setState({currentQuote:this.state.quote[cursor].quote, 
                   currentAuthor: this.state.quote[cursor].author,
                   twitterHref: 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' 
                   + encodeURIComponent('"' + this.state.quote[cursor].quote + '" '
                   + this.state.quote[cursor].author), 

                   tumblrHref: 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' 
                   + encodeURIComponent('"' + this.state.quote[cursor].quote + '" '
                   + this.state.quote[cursor].author)
     });
    
   
   
}
    render(){
        
        return(

            
            <div id="quote-box" >
            
                <div className='navy br3 pa2 grow shadow-5'>
                    <span id="text">{this.state.currentQuote}</span>
                </div>
                <div  className='quote-author tr navy'>
                    - <span id="author"> {this.state.currentAuthor}</span>
                </div>
                <div className='buttons tl'>

                    
                        <button className="button ma1" id="twitter-quote" onClick ={this.twitter} title="Post this quote on twitter!">
                            <a id="tweet-quote" href={this.state.twitterHref}>
                                <FontAwesomeIcon className="icon" icon={['fab', 'twitter']} />
                            </a>
                        </button>

                    
                    
                        <button className="button ma1" id="tumblr-quote"  onClick ={this.tumblr} title="Post this quote on tumblr!">
                            <a id="tumb-quote" href={this.state.tumblrHref}>
                                <FontAwesomeIcon className="icon" icon={['fab', 'tumblr']} />
                            </a>
                        </button>
                    
                    
                    
                    <button className="button" id="new-quote" onClick ={this.newQuote}>New quote</button>
                </div>

            <div className="footer"> by <a href="https://github.com/coulibalyfagnine">Fagniné</a></div>
        </div>

        );
    }

}


export default Card;