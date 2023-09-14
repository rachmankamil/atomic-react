import React from "react";

import TextBoxMolecule from "../molecules/TextBoxMolecule";
import RadioBoxMolecule from "../molecules/RadioBoxMolecule";
import ButtonAtom from "../atoms/ButtonAtom";

const FormProductOrganism = () => {
    const buttonStyle = {
        backgroundColor: "blue",
        color: "#0D6EFD",
        borderRadius: "5px"
    }

    return (
        <>
            <h4>Detail Product</h4>
            <TextBoxMolecule name="product_name" label="Product Name"></TextBoxMolecule>
            <TextBoxMolecule name="product_category" label="Product Category"></TextBoxMolecule>
            <RadioBoxMolecule name="product_freshness" label="Product Freshness" item={["Brand New", "Second Hand", "reFurbished"]}></RadioBoxMolecule>
            <div>
                <ButtonAtom text="submit" style={buttonStyle}></ButtonAtom>
            </div>
        </>
    )
}

export default FormProductOrganism