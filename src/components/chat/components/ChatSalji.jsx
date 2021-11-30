import React,{useContext,useState} from 'react'
import {ChatContext } from '../../context'
import '../../CSS/salji.css';

export default function ChatSalji() {

   const {saljiPoruku}=useContext(ChatContext)
    const [novaPoruka, setNovaPoruka] = useState("");

    function sendMessage(e) {
        e.preventDefault();
         if (novaPoruka && novaPoruka.replace(/\s/g, "").length > 0) {
      saljiPoruku(novaPoruka);
      setNovaPoruka("");
    }
}

    return (
        <div className="box">
            <form onSubmit={sendMessage}>               
                <input className="input_box" type="text" placeholder="Upiši poruku ..." onChange={(e) => setNovaPoruka(e.target.value)} value={novaPoruka}></input>
                  <button className="button_box" >OK</button> 
                             
            </form>
        </div>
    )
}
