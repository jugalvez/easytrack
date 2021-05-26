import { useState, useEffect } from 'react';
const axios = require('axios').default;
const baseUrl = "https://60a5f153c0c1fd00175f4c70.mockapi.io/"

export const useGetApi = (url) => {
	const [ response, setResponse ] = useState([])
	const [ refetchIndex, setRefetchIndex ] = useState(0)

	const executeCall = async (url) => {
		if (url !== '')
			try {
				let response = await axios.get(`${baseUrl}${url}`)
				return response.data
			} catch(er) {
				console.log("error", er)
			}
	}

	const refetch = () => setRefetchIndex((prevRefetchIndex) => prevRefetchIndex + 1)

	useEffect(() => {
		
		executeCall(url).then((data) => { setResponse(data) })

	}, [ url, refetchIndex ])

	return [ response, executeCall, refetch ]
}

export const usePostApi = (url, data) => {
	const [ responsePost, setResponse ] = useState(null)

	useEffect(() => {
		if (url !== '')
			axios.post(`${baseUrl}${url}`, data)
				.then(function ({data}) {
					setResponse(data)
				})
				.catch(function (error) {
					console.log(error);
				})
	}, [url, data])

	return [ responsePost ]
} 

export const usePutApi = (url, data) => {
	const [ response, setResponse ] = useState(null)

	useEffect(() => {
		if (url !== '')
			axios.put(`${baseUrl}${url}`, data)
				.then(function ({data}) {
					setResponse(data)
				})
				.catch(function (error) {
					console.log(error);
				})
	}, [url, data])

	return response
}

export const useDeleteApi = (url) => {
	const [ responseDelete, setResponse ] = useState(null)

	const executeCall = async (url) => {
		if (url !== '') {
			try {
				let response = await axios.delete(`${baseUrl}${url}`)
				return response.data
			} catch (err) {
				console.log("error", err)
			}
		}		
	}

	useEffect(() => {

		executeCall(url).then((data) => { setResponse(data) })

	}, [ url ])

	return [ responseDelete, executeCall ]
} 