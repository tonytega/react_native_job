import { useState,useEffect, } from "react";
import axios from "axios";
import {RAPID_API_KEY} from '@env'
// import RAPID_API_KEY from '@env'

import React from 'react'

// const rapidApiKey = process.env.REACT_APP_RAPID_API_KEY
const rapidApiKey = RAPID_API_KEY
console.log(rapidApiKey)

const useFecth = (endpoint,query) => {
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);
    
    // console.log(data)
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      const fetchData = async()=>{
        setIsLoading(true)
        
        try{
            const response = await axios.request(options);
    
            setData(response.data.data)
            // console.log(response.data.data)
            setIsLoading(false)
        }catch(error){
            setError(error)
            alert('There is an errr')
        }finally{
            setIsLoading(false)
        }
    }
    
    useEffect(()=>{
        fetchData(); 
    },[])
    
    const reFecth=()=>{
        setIsLoading(true);
        fetchData();
    }

    return {data,isLoading,error, reFecth};

}

export default useFecth