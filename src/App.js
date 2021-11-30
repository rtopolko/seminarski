import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import LogiraniKorisnikContext from "./components/context/LogiraniKorisnikContext";
import IkoneContext from "./components/context/IkoneContext";
import "./App.css";

function App() {
  const [logiraniKorisnik, setLogiraniKorisnik] = useState("");
  const [ikonaKorisnikaID, setIkonaKorisnikaID] = useState("");
  const [uzmiSveIkone, setSveIkona] = useState([]);

  const staviSveIkone = (sveIkone) => {
    setSveIkona(sveIkone);
  };

  const podaciLogiranogKorisnika = (korisnikIme, ikona) => {
    setLogiraniKorisnik(korisnikIme);
    setIkonaKorisnikaID(ikona);
  };

  const odjava = (korisnikIme) => {
    setLogiraniKorisnik(korisnikIme);
  };

  return (
    <div>
      <LogiraniKorisnikContext.Provider
        value={{
          logiraniKorisnik,
          ikonaKorisnikaID,
          podaciLogiranogKorisnika,
          odjava,
        }}
      >
        <IkoneContext.Provider value={{ uzmiSveIkone, staviSveIkone }}>
              <header className='header'>
                <Header />
              </header>
              <main className='main'>
                <Main />
              </main>
        </IkoneContext.Provider>
        </LogiraniKorisnikContext.Provider>
            <footer className='footer'>
              <Footer />
            </footer>
    </div>
  );
}

export default App;
