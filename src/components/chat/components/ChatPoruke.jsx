import React,{useEffect,useRef,useContext} from 'react'
import { ChatContext,KorisnikContext } from '../../context'
import { MEMBER_JOIN, MEMBER_LEAVE } from "../../const/Postavke"
import ChatPorukeLijevo from './ChatPorukeLijevo';
import ChatPorukeDesno from './ChatPorukeDesno';
import '../../CSS/chatPoruke.css';
import ScrollableFeed from 'react-scrollable-feed'


export default function ChatPoruke() {

  const { svePoruke } = useContext(ChatContext);
  const {korisnik } = useContext(KorisnikContext);

  return (
    <div className='forma_poruke'>
  <ScrollableFeed>
    
          {svePoruke.map((msg) => {
          
                if (msg.type === MEMBER_JOIN) {
                        return (
                            <div key={msg.id}>
                            <div className ="noviKorisnik">
                             <p>{msg.korisnikNovi.korisnikIme} {msg.porukaPridruzi}</p>
                            </div>
                            </div>
                        );
                } else if (msg.type === MEMBER_LEAVE) {
                        return (
                            <div key={msg.id}>
                            <div className="napustioKorisnik">
                            <span>{msg.korisnikNapustio.korisnikIme} {msg.porukaNapustio}</span>
                            </div>
                            </div>
                        );
                        
                } else {
                        return (
                          <div key={msg.id}>
                            {korisnik.id === msg.korisnikSalje.id
                              ? <ChatPorukeLijevo msg={msg}/>
                              :<ChatPorukeDesno msg={msg}/>
                            }
                            </div>
                        );
                        }
      })}
         </ScrollableFeed>
      </div>
  
  );
}
