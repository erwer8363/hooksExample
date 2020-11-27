/**
 * Created by ever on 2020/8/29.
 */
import React, {useEffect, useRef, useState} from 'react'
import {getRandomId, isEmpty} from './utils'
import axios from 'axios'

export default () => {
  const requests = useRef({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    return () => {
      for (let key in requests.current) {
        // eslint-disable-next-line no-unused-expressions
        requests.hasOwnProperty(key) && requests[key]?.('cancel')
      }
    }
  }, [])
  return [
    async (config, showLoading = true) => {
      if (showLoading) {
        !loading && setLoading(true)
      }
      const _id = getRandomId()
      const promise = axios(
        Object.assign({}, config, {
          cancelToken: new axios.CancelToken(cancel => {
            Object.assign(requests.current, {
              [_id]: cancel,
            })
          }),
        }),
      )
      try {
        await promise
      } catch (e) {
      }

      delete requests.current[_id]
      if (isEmpty(requests.current)) {
        setLoading(false)
      }

      return promise
    },
    loading,
  ]
}
