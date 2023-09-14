import React from "react";

import RadioBoxAtom from "../atoms/RadioBoxAtom";
import LabelAtom from "../atoms/LabelAtom";

const RadioBoxMolecule = ({name, label, item}) => {
    return (
        <div>
            <LabelAtom name={name} title={label}></LabelAtom>
            <RadioBoxAtom name={name} item={item}></RadioBoxAtom>
        </div>
    )
}

export default RadioBoxMolecule