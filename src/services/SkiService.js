/**
 * The apiClient is responisble for the connection with the database.
 */

import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  getSkiInfo() {
    return apiClient.get('categories')
  }
}
