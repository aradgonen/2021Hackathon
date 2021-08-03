import Modal from "react-bootstrap/Modal";
import {Button, Dropdown} from "react-bootstrap"
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ResponsiveNeoGraph} from "../components/NeoGraph.js"

function U_Modal(){
    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }
    
}
export default U_Modal;