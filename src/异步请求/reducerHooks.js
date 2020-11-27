/**
 * Created by ever on 2020/8/16.
 */
import React, {useEffect, useReducer, useState} from 'react'
import axios from 'axios'
const dataFetchReducer = (state, action)=>{
  switch (action.type){
    case 'FETCH_INIT':
      return{...state, isLoading:false, isError:false}
    case 'FETCH_SUCCESS':
      return {...state,isLoading: false,isError: false, data:action.payload}
    case 'FETCH_FAILURE':
      return {...state,isError:true,isLoading: false}
    default:
      throw new Error()
  }
};

const  useDataApi=(initialUrl, initialData)=> {
  const [url, setUrl] = useState(initialUrl)
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading:false,
    isError:false,
    data:initialData
  })
  useEffect(()=>{
    let didCancel = false;
    (async ()=>{
      dispatch({type: 'FETCH_INIT'})

      try{
        const result = await axios(url)
        if(!didCancel){
          dispatch({type:'FETCH_SUCCESS', payload:result.data})
        }
      }catch (e){
        if(!didCancel){
          dispatch({type:'FETCH_FAILURE'})
        }
      }
    })()
    return()=>{
      didCancel=true
    }
  },[url])

  const doFetch = url=>{
    setUrl(url)
  }

  return {...state, doFetch}
}
