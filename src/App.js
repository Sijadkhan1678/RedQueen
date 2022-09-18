import React,{useEffect,useRef} from 'react';
import './App.css';

const App = () => {
  
  const queenAlice = useRef('');
  const background1 = useRef('')
  const background2 = useRef('')
  const foreground1 = useRef('')
  const foreground2 = useRef('')
  
  useEffect(()=> {
const  sceneryFrames = [
  { transform: 'translateX(100%)' },
  { transform: 'translateX(-100%)' }   
];
 const sceneryTimingBackground = {
    duration: 36000,
    iterations: Infinity
};

var sceneryTimingForeground = {
  duration: 12000,
  iterations: Infinity
};

// background1 animation
const background1Motion = background1.current.animate(sceneryFrames,sceneryTimingBackground)

// background2 animation
const background2Motion = background2.current.animate(sceneryFrames,sceneryTimingBackground)

  // foreground1 animation 
const foreground1Motion = foreground1.current.animate(sceneryFrames,sceneryTimingForeground)
const foreground2Motion = foreground2.current.animate(sceneryFrames,sceneryTimingForeground)

// queen and alice  frames
const queenAliceFrames = [
  { transform: 'translateY(0)' },
  { transform: 'translateY(-100%)' }   
];

// queen andAlice Time defined
const queenAliceTiming = {
  easing: 'steps(7, end)',
  direction: "reverse",
  duration: 600,
  playbackRate: 1,
  iterations: Infinity
}

// here applied animation on queen and alice
 const queenAliceMotion = queenAlice.current.animate(queenAliceFrames,queenAliceTiming)
 
  // background and foreground array
 const sceneries = [background1Motion, background2Motion, foreground1Motion, foreground2Motion];

  const controlBackgroundPlayback = () => {
    
  if (queenAliceMotion.playbackRate < .8) {
    sceneries.forEach( (anim) => {
      anim.playbackRate = queenAliceMotion.playbackRate/2 * -1;
      
    });
  } else if (queenAliceMotion.playbackRate > 1.2) {
    sceneries.forEach( (anim) => {
      anim.playbackRate = queenAliceMotion.playbackRate/2;
    });
  } else {
    sceneries.forEach( (anim) => {
      anim.playbackRate = 0;    
    });
  }   
}

setInterval( function() {
  /* Set decay */
  if (queenAliceMotion.playbackRate > .4) {
    queenAliceMotion.playbackRate  *= 0.8 ;  console.log(queenAliceMotion.playbackRate)
  } 
  controlBackgroundPlayback();
}, 1000);


var goFaster = () => {
  /* But you can speed them up by giving the screen a click or a tap. */
  queenAliceMotion.playbackRate *= 1.3;
  controlBackgroundPlayback();
}
  
  document.addEventListener('click',goFaster)
  
  },[])
  
  return (
<div className="wrapper">
  <div className="sky"></div>
  <div className="earth">
    <div id="queenAlice">
      <img ref={queenAlice} id="red-queen_and_alice_sprite"
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" 
      alt="Alice and Red Queen ." />
      
    
      </div>
      </div>
      
<div ref={foreground1} className="scenery" id="foreground1">
    <img className="palm3" 
    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
    
    alt="palm3" /> 
  
  </div>
  <div ref={foreground2}  className="scenery" id="foreground2">  
    <img className="bush"
  
         src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" 
         alt="bush " />
    <img className="w-rook-upright"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" 
     alt="w_rook_upright" />
  </div>
  
  <div ref={background1} className="scenery" id="background1">
    <img className="r-pawn-upright"
    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
    alt="r_pawn_upright" />
    <img className="w-rook" 
    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
    alt="w_rook" />
   <img className="palm1" 
    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" 
    alt="palm1" />
    
  </div>
  
 <div ref={background2} className="scenery" id="background2">
  <img className="r-pawn" 
    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
    alt=" r_pawn" /> 
<img className="r-knight" 
     src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
     alt="r_knight " /> 
    <img className="palm2" 
       src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
         alt="palm2 " />
  
    </div>
    
  </div>

  );
}

export default App;
