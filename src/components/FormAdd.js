import { useState } from 'react';
import {
  Form,
  Col,
  Button
} from 'react-bootstrap'


const FormAdd = ({ onClickAdd }) => {
    const [ itemName, setItemName ] = useState('')

    const handleAddBtn = () => {
        onClickAdd(itemName)
    }

    return (
        <Form.Row>
            <Col xs={12} md={9} className="mb-1">
                <Form.Control 
                    type="text" 
                    onChange={(event) => setItemName(event.target.value)} />
            </Col>
            <Col xs={12} md={3}>
                <Button 
                    variant="primary"
                    type="button"
                    block
                    onClick={() => handleAddBtn()}
                >
                    Agregar
                </Button>
            </Col>
        </Form.Row>
    )
}

export default FormAdd