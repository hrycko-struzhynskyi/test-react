import React from "react";
import { useEffect } from "react";

function About() {
    let dragObj,dragFlag = false;
    const maxSquare = 10;   

    function onMouseDown(event) {
        dragFlag = true
        dragObj = event.target
    }

    useEffect(
        () => {
            console.log('i');

            window.addEventListener('mouseup', event => {
                if (dragFlag) {
                    const leftOffset = document.getElementById('squares-container').getBoundingClientRect().left;
                    if (event.clientX > Math.floor(window.innerWidth/2)) {
                        dragObj.style.left = (event.clientX - leftOffset) + "px";
                        dragObj.classList.toggle("right");
                    }
                    //Math.floor(window.innerWidth/2);
                    dragObj = null;
                    dragFlag = false
                }
              });
        }, []
    );
    
    const items = []

    for (let i = 1; i <= maxSquare; i++) {
        items.push(<div className="square" onMouseDown={onMouseDown} style={{top: (i-1)*50 + 'px'}}>{i}</div>)
    }  


    return (
        <div className="about">
            <div className="container">
                <h1 className="font-weight-light">Squares</h1>
                <div className="place-container">
                    <div className="squares-container" id="squares-container">
                        {items}
                    </div>
                    <div className="left-part part-container"></div>
                    <div className="right-part part-container"></div>
                </div>
            </div>
        </div>
    );
}

export default About;