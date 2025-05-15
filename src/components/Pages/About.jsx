import {useEffect} from "react";
import React, { useState } from 'react';
import Modal from "../Modaloverlay/Modal";
const About = ()=>{
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    useEffect(()=>{
        console.log("hello");
    })
    return (
        <>
            <h3>This is the About page</h3>
            <button id="feature">Feature</button>
            <h1>Modal Overlay Example</h1>
              <button id="modalbtn" onClick={openModal}>Open Modal</button>
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                  <h2 id="heading">Modal Title</h2>
                  <p id="para">This is the modal content!</p>
              </Modal>
        </>


    )
}
export default About;