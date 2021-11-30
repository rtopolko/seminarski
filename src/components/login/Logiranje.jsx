import React, { useState, useContext,useEffect} from 'react';
import { NoviKorisniki, IkonaKorisnik } from "./components";
import {KorisnikContext,IkoneContext} from '../context'
import IKONE from '../const/MojaIkona'

export default function Logiranje() {

    const [korisnikIme, setKorisnikIme] = useState("");
    const [ikona, setIkona] = useState("");
    const [sveUpisaneIkone, setSveIkona] = useState([]);

    const { podaciKorisnika } = useContext(KorisnikContext);
    const { staviSveIkone } = useContext(IkoneContext);
    
    //kod logiranja stavljam sve ikone:
    useEffect(() => {
       setSveIkona(IKONE);
        podaciKorisnika(korisnikIme, ikona);
       staviSveIkone(sveUpisaneIkone);
        },[ikona])// eslint-disable-line react-hooks/exhaustive-deps

const noviKorisnik = (noviKorisnik) => {
    setKorisnikIme(noviKorisnik);
  };

  const izabranaIkona = (mojaIkona) => {
      setIkona(mojaIkona);
    };

    return (
        <div>
            {!korisnikIme && <NoviKorisniki staviNoviKorisnik={noviKorisnik} />}
            {korisnikIme && <IkonaKorisnik sveIkone={sveUpisaneIkone} staviIkonu={izabranaIkona} />}
        </div>
    )
}
