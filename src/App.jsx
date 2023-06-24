import { useEffect } from "react"
import { fetchDataFromApi } from "./utils/api"
import {useDispatch } from "react-redux";
import { getApiConfiguration,getGenres } from "./store/homeSlice";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import PageNotFound from "./pages/404/PageNotFound";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import  Explore  from "./pages/explore/Explore";
import SearchResult from "./pages/searchResult/SearchResult";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  //using this hook we can call action like getapiconfiguration this action set home page url etc..
  const dispatch=useDispatch();
  //use selector use for use the home slice data get home object that declare in store.js
  // const {url}=useSelector((state)=>state.home);
  useEffect(()=>{
    fetchApiConfig();
    genresCall();
  },[]);
  const fetchApiConfig=()=>{
    fetchDataFromApi("/configuration").then((res)=>{
      const url={
        backdrop:res.images.secure_base_url+"original",
        poster:res.images.secure_base_url+"original",
        profile:res.images.secure_base_url+"original",
      }
      dispatch(getApiConfiguration(url));
      console.log(res);
    });
  }
  const genresCall=async()=>{
    let promises=[]
    let endPoint=["tv","movie"]
    let allGenres={}
    endPoint.forEach((url)=>{
       promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })
    const data=await Promise.all(promises);
    data.map(({genres})=>{
      return genres.map((item)=>(
        allGenres[item.id]=item
      ))
    });
    dispatch(getGenres(allGenres)); 
  }
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:mediaType/:id" element={<Detail/>}/>
      <Route path="/search/:query" element={<SearchResult/>}/>
      <Route path="/explore/:mediaType" element={<Explore/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
