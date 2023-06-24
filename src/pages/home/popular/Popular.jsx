import{ useState } from "react";
import Carousal from "../../../component/carousal/Carousal";
import ContentWrapper from "../../../component/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../component/switchTabs/SwitchTabs";


import useFetch from "../../../hooks/useFetch";

const Popular = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/popular`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carousalSection">
        <ContentWrapper>
            <span className="carousalTitle">Whats Popular</span>
            <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <ContentWrapper>
        <Carousal data={data?.results} loading={loading} endpoint={endpoint}/>
        </ContentWrapper>
    </div>
       
    );
};

export default Popular;