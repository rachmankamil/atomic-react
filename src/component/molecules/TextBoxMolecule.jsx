import React from "react";

import TextBoxAtom from "../atoms/TextBoxAtom";
import LabelAtom from "../atoms/LabelAtom";

const TextBoxMolecule = ({name, label}) => {
    return (
        <div>
            <LabelAtom name={name} title={label}></LabelAtom>
            <TextBoxAtom name={name} placeholder={label}></TextBoxAtom>
        </div>
    )
}

export default TextBoxMolecule