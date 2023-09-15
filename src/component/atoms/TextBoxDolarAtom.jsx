import {InputGroup, Form} from "react-bootstrap"

const TextBoxDollarAtom = (props) => {
    return (
        <>
            <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control {...props}/>
            </InputGroup>
        </>
    )
}

export default TextBoxDollarAtom