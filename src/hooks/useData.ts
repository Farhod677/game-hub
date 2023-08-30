import { useEffect, useState } from 'react'
import { AxiosRequestConfig, CanceledError } from 'axios'
import apiClient from '../services/api-client'

interface FetchResponse<T> {
  count: number
  results: T[]
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const controller = new AbortController()
    setIsLoading(true)
    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then(({ data }) => {
        setIsLoading(false)
        setData(data.results)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setIsLoading(false)
      })

    return () => controller.abort()
  }, deps || [])

  return { data, error, isLoading }
}

export default useData
