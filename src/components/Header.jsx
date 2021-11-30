import React, { useContext } from 'react'
import {IkoneContext,LogiraniKorisnikContext} from './context'
import { PrikazIkone } from './utility/PrikazIkone';
import { PORUKE } from './const/NaziviPoruke';
import './CSS/header.css'

export default function Header() {

    const { logiraniKorisnik, ikonaKorisnikaID } = useContext(LogiraniKorisnikContext);
    const { uzmiSveIkone } = useContext(IkoneContext);
  
    return (
        <div>
            {logiraniKorisnik &&
                <div>           
                     <div className="logo_programa">
                        <span><img src={PrikazIkone(ikonaKorisnikaID, uzmiSveIkone)} alt="Ikona" height="64" title="Ikona korisnika"/></span>
                    </div>    
                <div className="naslov_app"><span>{PORUKE.LOGIRANI_KORISNIK}  {logiraniKorisnik}</span></div>
            </div>
            }
             {!logiraniKorisnik &&
                <div>
            
                    <div className="logo_programa">
                        <img src="ikone/Chat.png" alt="algebra_logo" height="64pxpx" title="Ikona aplikacije"/>
                    </div>    
              
                
                    <div className="naslov_app"><p>CHAT APPLIKACIJA</p>
                    </div>
               
                </div>
            }
        </div>
    )
}
