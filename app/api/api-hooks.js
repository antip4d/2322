import { useEffect, useState } from 'react'
import { getNormalizedGamesDataByCategory, isResponseOk } from './api-utils'

export const useGetDataByCategory = (endpoint, category) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await getNormalizedGamesDataByCategory(endpoint, category)


      if (isResponseOk(response)) {
        setData(response)
      } else {
        // handle error
      }
    }

    fetchData()
  }, [])

  return data
};
