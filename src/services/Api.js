import axios from 'axios'

export default (baseURL, token) => {
	return axios.create({
		baseURL: baseURL,
		withCredentials: false,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'PRIVATE-TOKEN': token
		}
	})
}