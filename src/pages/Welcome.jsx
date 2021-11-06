import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Argos from "../components/Argos.jsx"
import "./Welcome.css";

function Welcome(props) {
    const [argos, setArgos] = useState([]);
    const [postArgos, setPostArgos] = useState("");

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/argos`)
        .then((res) => res.data)
        .then((data) => setArgos(data))
    },[argos])
   
    const postArgo = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/argos`, {
            argo_name: postArgos
        })
        .then((res) => {console.log(res)})
        .catch((err) => {console.error(err)})
    }
   
   
    return (
        <div main-container>
            <Header/>

                <div>
                    <h2>Ajouter un(e) Argonaute</h2>
                        <form class="new-member-form">
                            <label for="name">Nom de l&apos;Argonaute</label>
                            <input id="name" name="name" type="text" onChange={(e)=>setPostArgos(e.target.value)} placeholder="Charalampos" />
                            <button onClick={postArgo} type="submit">Envoyer</button>
                        </form>
  
                    <h2>Membres de l'équipage</h2>
                        <section class="member-list">
                            <div class="member-item">
                                {argos.map((argos) => (
                                    <div key={argos.id} className="argos">
                                        <Argos argos={argos}/>
                                    </div>
                                 ))}
                            </div>
                        </section>
                </div>

            <Footer/>
        </div>
    )
}

export default Welcome
