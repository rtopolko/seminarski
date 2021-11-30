import React,{useContext,useEffect,useState} from 'react'
import SCALEDRONE, { MEMBERS,MEMBER_JOIN,MEMBER_LEAVE,MESSAGE,ERROR } from '../const/Postavke';
import {KorisnikContext,ChatContext} from '../context'
import {ChatKorisnici,ChatSalji,ChatPoruke} from './components/'
import {PORUKE}  from '../const/NaziviPoruke'
import '../CSS/chatRoom.css'

export default function ChatRoom() {

    const { korisnik, drone } = useContext(KorisnikContext)
    const [svePoruke, setSvePoruke] = useState([]);
    const [zapamtiKorisnike, setZapamtiKorisnike] = useState([]);

     useEffect(() => {
        if (korisnik) {
            postavkeSobe(drone);
         }
     }, [])// eslint-disable-line react-hooks/exhaustive-deps
    
    function postavkeSobe(scaledrone) {

         scaledrone.on(ERROR, (error) => console.error(error));

        const soba = scaledrone.subscribe(SCALEDRONE.SCALEDRONE_ROOM);

        soba.on(MEMBERS, function (zapamti) {
            setZapamtiKorisnike([...zapamti])
        });

        soba.on(MEMBER_JOIN, function (noviKorisnik) {
            
            setZapamtiKorisnike(function (trenutniKorisnici) {
                return [...trenutniKorisnici, noviKorisnik]
            });

            setSvePoruke((trenutniKorisnici) => {
                return [
                    ...trenutniKorisnici,
                    {
                        porukaPridruzi: PORUKE.NOVI_KORISNIK,
                        id: Math.random(),
                        type: MEMBER_JOIN,
                        korisnikNovi: {
                            korisnikIme: noviKorisnik.clientData.korisnikIme,
                            ikona: noviKorisnik.clientData.ikona,
                        }
                    }
                ]
            })
        });

       
        soba.on(MEMBER_LEAVE, function (napustiliChet) {
    
      setZapamtiKorisnike((trenutniKorisnici) => {
        return trenutniKorisnici.filter((trenutniKorisnik) => trenutniKorisnik.id !== napustiliChet.id);
      });
    
      setSvePoruke((trenutniKorisnici) => {
        return [
          ...trenutniKorisnici,
          {
            porukaNapustio:PORUKE.NAPUSTIO_KORISNIK,
            id: Math.random(),
            type: MEMBER_LEAVE,
            korisnikNapustio: {
              korisnikIme: napustiliChet.clientData.korisnikIme,
              ikona: napustiliChet.clientData.ikona,
            },
          },
        ];
      });
    });

            soba.on(MESSAGE, (poruke) => {
                setSvePoruke((trenutnePoruke) => {
               
                    return [
                        ...trenutnePoruke,
                        {
                            poslanePoruke: poruke.data.message,
                            id: poruke.id,
                            type: MESSAGE,
                            korisnikSalje: {
                                id: poruke.member.id,
                                korisnikIme: poruke.member.clientData.korisnikIme,
                                ikona:poruke.member.clientData.ikona,
                            }
                        }
                    ]
                })
            })

        }
    
    function saljiPoruku(message) {
        drone.publish({
            room: SCALEDRONE.SCALEDRONE_ROOM,
            message:{message}
        })
    }

    return (
        <div className="forma_chat">
            <ChatContext.Provider value={{
                saljiPoruku,
                 svePoruke,
                zapamtiKorisnike               
            }}>
                 
                <div className="poruke"><ChatPoruke /></div>                              
                <div className="naChatu"><ChatKorisnici/></div>
                <div className="upisPoruke"><ChatSalji /></div> 
            </ChatContext.Provider>
        </div>
    )
}
