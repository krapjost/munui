import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';

function getTouchPos ( touches, firstIdx, secondIdx) {
    const x1 = touches[firstIdx].x;
    const y1 = touches[firstIdx].y;
    const x2 = touches[secondIdx].x;
    const y2 = touches[secondIdx].y;
    return [x1, y1, x2, y2];
};

const sketch = ( p5 ) => {

    p5.setup = () => {
	p5.createCanvas(p5.windowWidth, p5.windowHeight);
	p5.background(255);
    };

    let touched = false;
    let circleSize = 0;

    p5.draw = () => {

	if ( touched ) {
	    circleSize += 5;
	} else {
	    circleSize = 0;
	};

	if ( p5.touches.length ) {
	    for ( let i = 0; i < p5.touches.length; i++ ) {
		if ( p5.touches.length === 1 ) {
		    p5.circle( p5.touches[0].x, p5.touches[0].y, circleSize);
		} else if ( p5.touches.length === 3 ) {
		    p5.line( ...getTouchPos(p5.touches, 0, 1)); 
		    p5.line( ...getTouchPos(p5.touches, 1, 2));
		    p5.line( ...getTouchPos(p5.touches, 0, 2)); 
		} else {
		    p5.line( ...getTouchPos(p5.touches, 0, 1));
		};
	    };
	};

    };

    p5.touchStarted = () => {
	touched = true;
	return false;
    };

    p5.touchEnded = () => {
	touched = false;
	return false;
    };

};

export default function SketchBook() {
    
    return (
	<ReactP5Wrapper sketch={sketch} />
    );
};
