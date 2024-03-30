import { Helmet } from "react-helmet-async";
import kidsBanner from '../../assets/Banner/kidsBanner.png'

const Kids = () => {
    return (
        <div>
            <Helmet>
                <title>Fashion | Kids</title>
            </Helmet>
          
            <div className='pb-12'>
                <img src={kidsBanner} className='w-full md:h-[70vh] rounded-lg ' alt="banner" />
            </div>
        </div>
    );
};

export default Kids;