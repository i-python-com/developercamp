import axios from 'axios'

// When we have a token,  send it at every request
const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token
  } else {
    delete axios.defaults.headers.common['x-auth-token']
  }
}

export default setAuthToken
