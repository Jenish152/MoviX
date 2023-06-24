/* eslint-disable no-unused-vars */

import { useState } from "react"
import ContentWrapper from "../../../component/contentWrapper/ContentWrapper"
import SwitchTabs from "../../../component/switchTabs/SwitchTabs"
import useFetch from "../../../hooks/useFetch";
import Carousal from "../../../component/carousal/Carousal";
const Trending = () => {
    const [endpoint,setEndpoint]=useState("day");
    const {data,loading}=useFetch(`/trending/all/${endpoint}`);
const onTabChange=(tab)=>{
    setEndpoint(tab==="Day"?"day" : "week");
}
  return (
    <div className="carousalSection">
        <ContentWrapper>
            <span className="carousalTitle">TRENDING</span>
            <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <ContentWrapper>
        <Carousal data={data?.results} loading={loading}/>
        </ContentWrapper>
    </div>
  )
}

export default Trending