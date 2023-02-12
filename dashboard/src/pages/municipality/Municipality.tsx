import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { CityTitle, ContetentContainer, LoadingContainer, LoadingElement, LoadingText, Wrapper } from './Municipality.style';

function Municipality() {
    const params = useParams();

    const [loading, setLoading] = useState<boolean>(true);
    const [backgroundImage, setBackgroundImage] = useState<string>("");

    const database = ['secex', 'sc', 'hedu', 'cnes_professional', 'cnes_bed']

    useEffect(() => {
        if (!params) return;

        fetchData();

    }, [params])

    function fetchData() {

        fetch("https://api.pexels.com/v1/search?query=nature?orientation=landscape&color=13223A&per_page=30")
            .then((res) => {
                if (res.status === 200 && res.ok) {
                    return res.json();
                } else {
                    return false
                }
            }).then((res: any) => {
                setBackgroundImage(res.photos[Math.floor(Math.random() * (29) + 1)].src.original);
            })

        Promise.all(database.map(data => fetch(`http://api.dataviva.info/${data}/municipality/?municipality=${params.cityId}`)))
            .then(resp => Promise.all(resp.map(r => r.json())))
            .then(result => {
                console.log(database, result);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <Wrapper>
            {
                loading ?
                    (
                        <LoadingContainer>
                            <LoadingElement size={80} />
                            <LoadingText>Carregando...</LoadingText>
                        </LoadingContainer>
                    ) :
                    (
                        <ContetentContainer style={{ backgroundImage: `url('${backgroundImage}')` }}>
                            <CityTitle>{params.cityName}</CityTitle>
                        </ContetentContainer>
                    )
            }
        </Wrapper>
    )
}

export default Municipality;