/* eslint-disable no-unused-vars */
import {useEffect, useState} from 'react'
import "./style.scss";
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from "react-redux";
import Img from "../../../component/lazyLoadImage/Img";
import ContentWrapper from '../../../component/contentwrapper/ContentWrapper';
const HeroBanner = () => {
  const [background,setBackground]=useState("");
  const [query,setQuery]=useState("");
  const navigate=useNavigate();
  const searchQueryHandler=(event)=>{
       console.log(event.key);
       if(event.key==="Enter" && query.length>0){
         navigate(`/search/${query}`);
       }
  }
  const {data,loading}=useFetch("/movie/upcoming");
  const {url}=useSelector((state)=>state.home);
  useEffect(()=>{
     const bg=url.backdrop+data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
     setBackground(bg);
  },[data])
  return (
    <div className="heroBanner">
      {!loading && <div className="backdrop-img">
        <Img className="lazy-load-image-background" src={background}/>
      </div>}
      <ContentWrapper>
        <div className="opacity-layer"></div>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies,Tv shows and people
             to discover.
             Explore now. 
          </span>
          <div className="searchInput">
            <input type="text"
            onKeyUp={searchQueryHandler}
            placeholder='Search for a movie or Tv Show...'
            onChange={(e)=>setQuery(e.target.value)} />
            <button >Search</button> 
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner