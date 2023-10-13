import React from 'react';
import Form from 'react-bootstrap/Form';

const FileUpload = ({onChange, label}) => {
    return (
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control type="file" onChange={onChange} />
        </Form.Group>
    )
}

export default FileUpload;