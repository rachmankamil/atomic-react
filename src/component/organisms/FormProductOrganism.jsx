import React, {useEffect, useReducer, useState} from "react";

import TextBoxMolecule from "../molecules/TextBoxMolecule";
import RadioBoxMolecule from "../molecules/RadioBoxMolecule";
import ButtonAtom from "../atoms/ButtonAtom/ButtonAtom";
import ModalMolecule from "../molecules/ModalMolecule";

import axios from "axios";

function reducer(state, action){
    switch (action.type) {
        case 'INCREMENT':
            return {count : state.count +1, name: state.name}
    
        case 'DECREMENT':
            return {count : state.count -1, name: state.name}

        case 'CHANGENAME':
            let newName = ""
            if (state.name == "Rangga") {
                newName ="Kamil"
            } else {
                newName ="Rangga"
            }
            return {name: newName, count: state.count}

        default:
            return state
    }
}

const FormProductOrganism = () => {
    const buttonStyle = {
        backgroundColor: "blue",
        color: "#0D6EFD",
        borderRadius: "5px"
    }

    const [state, dispatch] = useReducer(reducer, {count : 0, name : "Kamil"})

    const [productForm, setProductForm] = useState({
        name: "",
        category: "",
        color: "",
        freshness:""
    })

    const [greeting, setGreeting] = useState("")
    const [data, setData] = useState([{
        color: "white",
        wheels: 4,
        awd: true,
        fuel: 110,
        fc: 11.5
    }])

    useEffect(()=>{
        setGreeting("Hello, "+state.name)

    },[state.name])

    const addData = ()=>{
        let newData = {
            color: "black",
            wheels: 4,
            awd: true,
            fuel: 110,
            fc: 11.5
        }

        setData([...data, newData])

        console.log(data);
    }

    const insertProduct = () => {
        axios
            .post("https://63206412e3bdd81d8ef940ed.mockapi.io/api/v1/product", productForm, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            .then((response)=>{
                if (response.status == 201){
                    alert("Sukses menambahkan data!")
                }
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    return (
        <>
            <h4>{greeting}. Detail Product {state.count}</h4>
            <div>
                <TextBoxMolecule name="product_name" label="Product Name" onChange={(val)=>{
                    setProductForm({name:val.target.value, 
                    category:productForm.category,
                    color:productForm.color})
                    }}></TextBoxMolecule>
                <TextBoxMolecule name="product_category" label="Product Category" onChange={(val)=>{
                    setProductForm({name:productForm.name, 
                        category:val.target.value,
                        color:productForm.color})
                    }}></TextBoxMolecule>
                <TextBoxMolecule name="product_color" label="Product Color" onChange={(val)=>{
                    setProductForm({name:productForm.name, 
                        category:productForm.category,
                        color:val.target.value})}}></TextBoxMolecule>
                <RadioBoxMolecule name="product_freshness" label="Product Freshness" item={["Brand New", "Second Hand", "reFurbished"]}></RadioBoxMolecule>
                <ButtonAtom text="submit" onClick={insertProduct} />
            </div>
            <div>
                <ButtonAtom text="change name" style={buttonStyle} onClick={()=>{ dispatch({type: 'CHANGENAME'}) }}></ButtonAtom>
                <ButtonAtom text="count +" style={buttonStyle} onClick={()=>{ dispatch({type: 'INCREMENT'}) }}></ButtonAtom>
                <ButtonAtom text="count -" style={buttonStyle} onClick={()=>{ dispatch({type: 'DECREMENT'}) }}></ButtonAtom>
            </div>
            <div>
                <ModalMolecule buttonShow="Show Modal" buttonLeft="Cancel" buttonRight="OK" title="Delete Data" onclick={addData}>Are you really want to delete this data?</ModalMolecule>
            </div>
        </>
    )
}

export default FormProductOrganism