import React,{useContext} from 'react'
import { PrikazIkone } from '../../utility/PrikazIkone';
import { IkoneContext, ChatContext,KorisnikContext } from '../../context';
import { PORUKE } from '../../const/NaziviPoruke';
import '../../CSS/chatKorisnici.css';
import ScrollableFeed from 'react-scrollable-feed'

export default function ChatKorisnici() {
    
    const { zapamtiKorisnike } = useContext(ChatContext);
    const { uzmiSveIkone } = useContext(IkoneContext);
    const { korisnikLogout } = useContext(KorisnikContext);

    return (
        <div>
            <div>
             <div className='gumb'><button className="odjava_gumb" onClick={korisnikLogout}>LOGOUT</button></div>
                <div className="naslov">{PORUKE.NASLOV_ZAPAMTI}</div>
                </div>
            <div className='forma_korisnici_prijavljeni'>
                <ScrollableFeed>
            {zapamtiKorisnike.map((trenutniKorisnici) => {
               
                return (
                   
                    <div key={trenutniKorisnici.id} className="zapamti">
                         
                        <div className="ikona"> <span><img src={PrikazIkone(trenutniKorisnici.clientData.ikona,uzmiSveIkone)} alt="Ikona" height="35" title="Ikona"/></span></div>
                        <div className="korisnik"> <span>{trenutniKorisnici.clientData.korisnikIme}</span></div>
                        
                    </div>
                                               
                )
                                   
            })
            }
            </ScrollableFeed>
             </div>
        </div>
    )

}
