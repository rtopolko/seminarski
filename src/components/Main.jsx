import React,{useState,useContext} from 'react'
import Logiranje from './login/Logiranje'
import SCALEDRONE from './const/Postavke'
import {KorisnikContext,LogiraniKorisnikContext} from './context'
import ChatRoom from './chat/ChatRoom';

export default function Body() {

    const [korisnik, setKorisnik] = useState("");
    const [drone, setDrone] = useState(null);
  
    const { podaciLogiranogKorisnika, odjava } = useContext(LogiraniKorisnikContext)

    const podaciKorisnika = (korisnikIme, ikona) => {
        
        if (korisnikIme) {
            const drone = new window.Scaledrone(SCALEDRONE.CHANNEL_ID, {
                data: { korisnikIme, ikona }
            });

            if (!korisnik) {
                drone.on(SCALEDRONE.OPEN, () => {
                    setDrone(drone);
                    setKorisnik({ id: drone.clientId, korisnikIme, ikona });
                    podaciLogiranogKorisnika(korisnikIme, ikona);
                })
            }            
        }
    }

      const korisnikLogout = () =>{
        drone.close();
        setDrone(null);
        setKorisnik(null);
        odjava(null);
    }
    
    return (
        
        <div>
            <KorisnikContext.Provider value={{ korisnik, drone, podaciKorisnika, korisnikLogout}}>
                        {!korisnik && <Logiranje />}
                        {korisnik && <ChatRoom />}
            </KorisnikContext.Provider>
        </div>
    )
}
