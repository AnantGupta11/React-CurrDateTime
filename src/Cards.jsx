import React from 'react';

function Card(props){
    return(<>
            <div className="cards">
                <div className="card">
                <img src={props.imgsrc}
                alt="myPic" 
                className="card_img" 
                />
                <div className="card_info">
                    <span className="card_category"> A Netflix orginal Series</span>
                    <h3 className="card_title">DARK</h3>
                    <a href="https://www.netflix.com/in/title/80100172" target="_blank">
                    <button> Watch Now</button>
                    </a>
                </div>
                </div>
            </div>
        </>
    );
    
}

export default Card;
