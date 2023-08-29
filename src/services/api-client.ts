import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '3772a46c41c44d34940ce8b14e0e1d79',
  },
})
