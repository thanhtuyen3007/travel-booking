import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DescTourPage from '~/components/DescTourPage/DescTourPage';
import dataTours from '~/data';
function DescTour() {
    const { title } = useParams();
    const [dataTour, setDataTour] = useState({});
    useEffect(() => {
        dataTours.map((data) => {
            if (data.title == title) {
                setDataTour(data);
            }
        });
    },[title]);

    return <DescTourPage data={dataTour} />;
}

export default DescTour;
