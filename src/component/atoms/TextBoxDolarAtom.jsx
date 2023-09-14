import {InputGroup, Form} from "react-bootstrap"

const TextBoxDollarAtom = ({name}) => {
    return (
        <>
            <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control name={name}/>
            </InputGroup>
        </>
    )
}

export default TextBoxDollarAtom