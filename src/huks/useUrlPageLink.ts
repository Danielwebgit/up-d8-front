import { useState } from 'react';
interface UrlSearch {
  url : string
}

export default function useUrlPageLink (urlPage: any) {
  const [newData, setUrls] = useState();

  function fetchData() {
    
  }

  return {
    fetchData,
    newData
  }
} 