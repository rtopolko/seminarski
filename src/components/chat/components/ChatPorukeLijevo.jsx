import React,{useContext} from 'react'
import { PrikazIkone } from '../../utility/PrikazIkone';
import { IkoneContext} from '../../context'

export default function ChatPorukeLijevo({ msg }) {
    const { uzmiSveIkone } = useContext(IkoneContext);
    
    return (
    
          <div className="lijevo">
              <div className="ikona_lijevo">
                   <span><img src={PrikazIkone(msg.korisnikSalje.ikona, uzmiSveIkone)} alt="Ikona" height="45" title="Ikona"/></span>
              </div>
              <div className="korisnik_lijevo">
                   <p>{msg.korisnikSalje.korisnikIme}</p>
              </div>
              <div className="poruka_lijevo">                            
                     {msg.poslanePoruke}
              </div>
          </div>
      
    )
}
