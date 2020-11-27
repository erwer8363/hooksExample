/**
 * Created by ever on 2020/8/16.
 */
import {useEffect, useState} from 'react'
import axios from 'axios'
export default function useHackerNewsApi(initialUrl,initialData) {
  const [data, setData] = useState(initialData)
  const [url, setUrl] = useState(initialUrl)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  useEffect(()=>{
    (async ()=>{
      setIsError(false)
      setIsLoading(false)
      try{
        const result = await axios(url)
        setData(result.data)
      }catch (e){
        setIsError(true)
      }
      setIsLoading(false)
    })()
  },[url])

  const doFetch = (url)=>{
    setUrl(url)
  }
    return {data, isLoading, isError, doFetch}
}
