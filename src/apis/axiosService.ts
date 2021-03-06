import axios, { AxiosInstance } from 'axios'

const axiosClient: AxiosInstance = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
})

class axiosService {
  async get(headers: any, url: string, params: any): Promise<any> {
    // console.log('headers', headers, 'url', url, 'params', params)
    return await axiosClient.get(url, {
      headers: headers,
      params: params,
    })
  }
}

export default new axiosService()
