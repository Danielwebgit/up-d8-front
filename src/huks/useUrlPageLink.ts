import { RootState } from './../redux/store/index';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios'

interface UrlSearch {
  url : string
}

export default function useUrlPageLink (urlPage: any) {

  const [newData, setUrls] = useState();

  function fetchData(paramsUrl: any) {

    axios.get(urlPage).then((res => res.data)).then(paramsUrl)
    
  }

  return {
    fetchData,
    newData
  }
} 