import { useState } from 'react'
import {
  ListGroup,
  Form,
  Row,
  Col,
  Button
} from 'react-bootstrap'

import '../css/Items.css'


const Items = ({ item, onClickEdit, onClickRemove }) => {
    let [ isDisable, setIsDisable ] = useState(true)

    const handleButtonsView = () => {
        setIsDisable(!isDisable)        
    }

    const handleUpdate = () => {
        onClickEdit(item)
        handleButtonsView()
    }

    const handleRemove = () => {
        onClickRemove(item)
    }

    const updateItem = (newName) => {
       item.name = newName
    }

    return (
        <ListGroup.Item>
            <Row>
                <Col xs={12} md={9} className="pt-2">
                <Form.Control 
                    type="text" 
                    placeholder=""
                    defaultValue={item.name}
                    plaintext={ isDisable }
                    readOnly={ isDisable }
                    onChange={ (event) => updateItem(event.target.value)  }
                />
                </Col>

                <Col xs={12} md={3} className="text-right">
                    { isDisable &&
                        <div>
                            <Button 
                                variant="dark" 
                                className="mr-2"
                                onClick={() => handleButtonsView()}
                            >
                                <i className="fas fa-edit"></i>
                            </Button>
                            <Button 
                                variant="danger"
                                onClick={() => handleRemove()}
                            >
                                <i className="fas fa-trash-alt"></i>
                            </Button>
                        </div>

                    || !isDisable &&

                        <div>
                            <Button 
                                variant="success"
                                className="mr-2"
                                onClick={() => handleUpdate(item)}
                            >
                                <i className="fas fa-save"></i>
                            </Button>
                            <Button 
                                variant="info"
                                onClick={() => handleButtonsView()}
                            >
                                <i className="fas fa-times"></i>
                            </Button>
                        </div>
                    }
                </Col>
            </Row>
        </ListGroup.Item>
    )
}

export default Items