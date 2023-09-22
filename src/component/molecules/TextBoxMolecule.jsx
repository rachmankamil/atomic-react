import React, { useState } from "react";

import TextBoxAtom from "../atoms/TextBoxAtom";
import LabelAtom from "../atoms/LabelAtom";

const TextBoxMolecule = ({name, label, value, onChange, refAlias, ...props}) => {

    return (
        <div>
            <LabelAtom name={name} title={label}></LabelAtom>
            <TextBoxAtom name={name} placeholder={label} value={value} refAlias={refAlias} onChange={onChange} {...props}></TextBoxAtom>
        </div>
    )
}

export default TextBoxMolecule