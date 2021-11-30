import React, { useState } from 'react';
import {NAZIV, PORUKE}  from '../../const/NaziviPoruke';
import '../../CSS/noviKorisnik.css';

export default function NoviKorisnik(props) {
    
    const [noviKorisnik, setNoviKorisnik] = useState("");
    const [error, setError] = useState("");

    const staviNoviKorisnik = (e) => {
        e.preventDefault();
        setNoviKorisnik(e.target.value);
    }

    const saljiKorisnika = () => {

        if (!noviKorisnik || !noviKorisnik.replace(/\s/g, "").length) {
            setError(PORUKE.GRESKA_KORISNIK);
        } else {
             setError(null);
            props.staviNoviKorisnik(noviKorisnik);
            setNoviKorisnik("");
        }
       
    }

    return (
        <form className="forma">
                 <div className="pozadina"> 

                    <div className="logiranje_box "> 
                        <div className="greska">{error}</div>                    
                            <input className="input_logiranje" type="text" placeholder={NAZIV.KORISNIK} value={noviKorisnik} onChange={staviNoviKorisnik} ></input>                                                
                            <button type="button" className="button_logiranje" onClick={saljiKorisnika}>OK</button>
                       
                    </div> 

                 </div>   
        </form>
 )
}
