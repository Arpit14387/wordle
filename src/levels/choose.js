import {Link} from "react-router-dom"

export default function Choose()
{
    return(
            
        <div className="center">
            {/* <div ><iframe src="https://giphy.com/embed/2nPc818FUkiYKhtP5j" width="100%" height="100%"  frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/words-word-game-wordle-2nPc818FUkiYKhtP5j"></a></p> */}
            {/* <p className="diflev">Difficulty</p> */}
            <ul className="ul1">
                <li>
            <as className="title1">
            <input className="titl2" id="a1" type="text" value="G" readOnly maxLength="1"   />
            <input className="titl2" id="a0" type="text" value="U" readOnly  maxLength="1"   />
            <input className="titl2" id="a2" type="text" value="E" readOnly maxLength="1"   />
            <input className="titl2" id="a9" type="text" value="S" readOnly maxLength="1"   />
            <input className="titl2" id="a2" type="text" value="S" readOnly maxLength="1"   />
            
            </as>

            </li>
            <br/>
            <li>
            <as className="title2">
            <input className="titl2" id="a1" type="text" value="T" readOnly maxLength="1"   />
            <input className="titl2" id="a0" type="text" value="H" readOnly  maxLength="1"   />
            <input className="titl2" id="a2" type="text" value="E" readOnly maxLength="1"   />
            </as>
            </li>
<br/>
<li>
            <as className="title3">
            <input className="titl2" id="a1" type="text" value="W" readOnly maxLength="1"   />
            <input className="titl2" id="a2" type="text" value="O" readOnly  maxLength="1"   />
            <input className="titl2" id="a2" type="text" value="R" readOnly maxLength="1"   />
            <input className="titl2" id="a9" type="text" value="D" readOnly maxLength="1"   />
            
            
            </as>
            </li>
            </ul>
            <ul className="ul2">
                <li>
                <Link to="/easy" className="butt2 esy">EASY</Link>
                <p>(5 letters 6 chances)</p>
            

            {/* <button className="titl2" id="a1" type="text" value="E" readOnly maxLength="1">E</button> */}
                </li>

                <li>
                <Link to="/medium" className="butt2 med">MEDIUM</Link>
                <p>(5 letters 5 chances)</p>
                
                </li>
                <Link to="/hard" className="butt2 hrd">HARD</Link>
                <p>(6 letters 5 chances, plus a surprise)</p>
                <li>
                
                </li>
            </ul>
            
           
            
        </div>
    )
}