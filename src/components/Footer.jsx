import React from 'react';
import { POLAZNIK } from "./const/NaziviPoruke";
import './CSS/footer.css';

export default function Foother() {
    return (
    <div className="footer_1">   

          <div className="logo_algebra">
            <img src="ikone/algebra-logo.png" alt="algebra_logo" height="70px" title="Logo Algebra"/>
          </div>
        
          <div className="polaznik">
             <div className="logo_polaznik">
                <img src="ikone/polaznik_1.png" alt="algebra_logo" height="50px" title="Logo polaznika"/>           
              </div>
              <div className="upisani_text">
                  <p><strong>{POLAZNIK.SEMINARSKI}</strong> {POLAZNIK.SEMINARSKI_NAZIV}</p>
                  <p><strong>{POLAZNIK.NAZIV_POLAZNIKA}</strong>{POLAZNIK.POLAZNIK}</p>
                  <p><strong>{POLAZNIK.SMJER}</strong> {POLAZNIK.NAZIV_SMJERA}</p>
                  <p><strong>{POLAZNIK.NAZIV_GODINA}</strong>{POLAZNIK.SKOLSKA_GODINA}</p>
              </div>

          </div>
         
      </div>
        
   

    )
}
