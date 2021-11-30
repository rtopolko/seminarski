import React,{useContext} from 'react'
import { PrikazIkone } from '../../utility/PrikazIkone';
import { IkoneContext} from '../../context'

export default function ChatPorukeDesno({ msg }) {
    const { uzmiSveIkone } = useContext(IkoneContext);
    
    return (
        
             <div className="desno">            
                <div className="poruke_desno">
                      <span>{msg.poslanePoruke}</span>
                </div>
                <div className="korisnik_desno">
                      <span>{msg.korisnikSalje.korisnikIme}</span><br />
                </div>
                 <div className="ikona_desno">
                                <span><img src={PrikazIkone(msg.korisnikSalje.ikona, uzmiSveIkone)} alt="Ikona" height="45" title="Ikona"/></span>
                </div>
            </div>
        
    )
}
