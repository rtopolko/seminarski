import React from 'react'
import { PORUKE } from '../../const/NaziviPoruke';
import "../../CSS/ikonaKorisnika.css";

export default function IkonaKorisnik({staviIkonu,sveIkone}) {

    return (
        <div className="forma_Ikona">
            <div className="naslov_Odabir">{PORUKE.ODABERI}</div>

            <div className="polozaj_Ikona">
                        {             
                    sveIkone.map((item) =>
                        <div key={item.id}>
                            <img src={item.image} alt="Moja_Ikona" height="50px" title="Moja ikona"/>                  
                                <input className="polozaj_Chbx"
                                    type="checkbox"
                                    value={item.id}
                                    id={item.id}
                                    name={item.id}
                                    checked={item.select}
                                    onChange={()=>staviIkonu(item.id)}
                                />
                        
                         </div>     
                        )}
                </div>
        </div>
      
    )
}
