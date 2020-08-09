import React from 'react'
import './style.css'

export const Queen = () => {
    return (
        <div className="container">
      <div className="sky"></div>
      
      <div className="earth">
        <div className="alice">
            <img className="alicesprite"
                //  ref={aliceSprite} 
                 src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" alt=" " />
        </div>
      </div>
      
      <div className="scenery"
           id="foreground"
        //    ref={foreground}
      >
        <img id="treefore"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
            alt=" "
        />
      </div>

      <div className="scenery background1"
        //    ref={background}
      >
        <img className="pawn"
             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" alt=" " />
        <img className="pawn2"
             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" alt=" " />
        <img className="treeback"
             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" alt=" " />
        <img id="w_rook" 
             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
      </div>
    </div>
    )
}


export default Queen;
