import React from 'react'
import ContentWrapp from '../../../components/contentWrapper/ContentWrapp'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import { useState } from 'react'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'
function Trending() {
       const [endpoint,setEndpoint]=useState("day")
       const {data ,loading}=useFetch(`/trending/all/${endpoint}`);
      const onTabChange=(tab)=>{
           
setEndpoint(tab==="Day" ? "day" : "week");


      };


  return (
   <div className="carouselSection">
    <ContentWrapp>
     <span className="carouselTitle">Trending</span>
     <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange}/>
    </ContentWrapp>
    <Carousel data={data?.results} loading={loading}/>
   </div>
  )
}

export default Trending