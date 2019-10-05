import axios from 'axios'

// When we have a token,  send it at every request
const setAuthToken = token => {
  axios.defaults.headers.post['Content-Type'] = 'application/json'

  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token
  } else {
    delete axios.defaults.headers.common['x-auth-token']
  }
}

export default setAuthToken
