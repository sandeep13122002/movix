import React from 'react'
import ContentWrapp from '../../../components/contentWrapper/ContentWrapp'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import { useState } from 'react'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'
function Popular() {
       const [endpoint,setEndpoint]=useState("movie")
       const {data ,loading}=useFetch(`/${endpoint}/popular`);
      const onTabChange=(tab)=>{
           
setEndpoint(tab==="Movies" ? "movie" : "tv");


      };


  return (
   <div className="carouselSection">
    <ContentWrapp>
     <span className="carouselTitle">What's Popular</span>
     <SwitchTabs data={["Movies","TV Shows"]} onTabChange={onTabChange}/>
    </ContentWrapp>
    <Carousel data={data?.results} loading={loading}/>
   </div>
  )
}

export default Popular