/**
 * Created by ever on 2020/8/16.
 */
import React, {Fragment, useEffect, useState} from 'react'
import axios from 'axios'
import useHackerNewsApi from './useHackerNewsApi'

export default function App() {
  const [query, setQuery] = useState('redux')

  const {data, isError, isLoading, doFetch} = useHackerNewsApi('http://hn.algolia.com/api/v1/search?query=redux',{hits:[]})

  return (
    <Fragment>
      <form onSubmit={e=>{
        doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`)
        e.preventDefault()
      }}>
        <input type='text' value={query} onChange={e => setQuery(e.target.value)}/>
        <button type='submit'>Search</button>
      </form>
      {isError && <div>Something went wrong ...</div>}
      {
        isLoading ? (<div>Loading...</div>) : (
          <ul>
            {
              data.hits.map(item => (
                <li key={item.objectID}>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))
            }
          </ul>
        )
      }
    </Fragment>
  )
}
