import { useEffect, useState, useContext } from 'react'
import {
  Form,
  Card,
  ListGroup
} from 'react-bootstrap'
import { useGetApi, usePostApi, usePutApi, useDeleteApi } from '../customHooks/ApiService'
import ProfileContext from '../context/ProfileContext'

import Items from '../components/Items'
import FormAdd from '../components/FormAdd'

import '../css/ToDo.css'


const ToDo = () => {
    const [ profile, setProfile ] = useContext(ProfileContext)
    const [ response, executeCall, refetch ] = useGetApi(`users/${profile.id}/todo`)
    const [ items, setItems ] = useState([])
    const [ itemToAdd, setItemToAdd ] = useState({'url': '', 'data': {'name': null}})
    const [ itemToEdit, setItemToEdit ] = useState({'url': '', 'item': null})
    const [ urlToDelete, setUrlToDelete ] = useState('')

    const [ responsePost ] = usePostApi(itemToAdd.url, itemToAdd.data)
    usePutApi(itemToEdit.url, itemToEdit.item)
    const [ responseDelete ] = useDeleteApi(urlToDelete)

    // Trigger the add action
    const handleAdd = (name) => {
        const url = `users/${profile.id}/todo`
        setItemToAdd({ 'url': url, 'data': {'name': name }})
    }

    // Trigger the edit action
    const handleEdit = (item) => {
        const url = `users/${profile.id}/todo/${item.id}`
        setItemToEdit({ 'url': url, 'item': item })
    }

    // Trigger the remove action
    const handleRemove = (item) => {
        const url = `users/${profile.id}/todo/${item.id}`
        setUrlToDelete(url)
    }

    useEffect(() => {
        const items = response && response.map(
            item => <Items 
                        item={item} 
                        key={item.id}                        
                        onClickEdit={handleEdit}
                        onClickRemove={handleRemove} 
                    /> 
        )

        setItems(items)
    }, [ response ])

    useEffect(() => {
        if (responseDelete)
            refetch()
    }, [ responseDelete ])

    useEffect(() => {
        if (responsePost)
            refetch()
    }, [ responsePost ])


    return (
        <div>
          <Card className="mx-auto ToDo-card">
            <Card.Header>List</Card.Header>
            <Card.Body>
                <Form>
                    <FormAdd onClickAdd={handleAdd} />
                </Form>

                <ListGroup variant="flush" className="mt-3">
                    { items }
                </ListGroup>
            </Card.Body>
          </Card>
    </div>
    )
}

export default ToDo