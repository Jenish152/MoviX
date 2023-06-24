/* eslint-disable react/prop-types */
import Carousel from "../../../component/carousal/Carousal";
import useFetch from "../../../hooks/useFetch";


const Recommendation = ({ mediaType, id }) => {
    const { data, loading } = useFetch(`/${mediaType}/${id}/recommendations`);

    const title = mediaType === "tv" ? "Recommendation TV Shows" : "Recommendation Movies";

    return (
        <Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;