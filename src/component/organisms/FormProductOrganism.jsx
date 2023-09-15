import React, {useEffect, useReducer, useState} from "react";

import TextBoxMolecule from "../molecules/TextBoxMolecule";
import RadioBoxMolecule from "../molecules/RadioBoxMolecule";
import ButtonAtom from "../atoms/ButtonAtom/ButtonAtom";
import ModalMolecule from "../molecules/ModalMolecule";

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

    return (
        <>
            <h4>{greeting}. Detail Product {state.count}</h4>
            <TextBoxMolecule name="product_name" label="Product Name" value={state.name}></TextBoxMolecule>
            <TextBoxMolecule name="product_category" label="Product Category" value="car"></TextBoxMolecule>
            <TextBoxMolecule name="product_color" label="Product Color" value={data.color}></TextBoxMolecule>
            <RadioBoxMolecule name="product_freshness" label="Product Freshness" item={["Brand New", "Second Hand", "reFurbished"]}></RadioBoxMolecule>
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