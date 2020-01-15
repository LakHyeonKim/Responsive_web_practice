import Api from '@/services/Api'

const BASE_URL = 'https://lab.ssafy.com/api/v4'

export default {
	getRepos(userName, token) {
		return Api(BASE_URL, token).get(`/users/${userName}/projects`)
	},
	getCommits(fullName, token) {
		let d = new Date()
		d.setMonth(d.getMonth() - 1)

		return Api(BASE_URL, token).get(`/projects/${fullName}/repository/commits?since=${d.toISOString()}`)
	}
}