import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function Municipality() {
    const params = useParams();

    const [loading, setLoading] = useState<boolean>(false);

    const databases = ['secex', 'sc', 'hedu', 'cnes_professional', 'cnes_bed']

    useEffect(() => {
        if (!params) return;

        setLoading(true);

        databases.forEach(async (database, index) => {
            await fetchData(database);

            if (index === databases.length - 1) {
                setLoading(false);
            }
        });
    }, [params])

    async function fetchData(database: string) {
        await fetch(`http://api.dataviva.info/metadata/municipality/?municipality=${params.cityId}`)
            .then((res) => {
                if (res.status === 200 && res.ok) {
                    return res.json();
                } else {
                    return false
                }
            }).then((res: any) => {
                console.log(database, res)
                return;
            }).catch((error) => {
                return;
            })
    }

    return (
        <>
            {true ? (
                <CircularProgress color='secondary'/>
            )
                :
            (
                "Carregou!!!"
            )}
        </>
    )
}

export default Municipality;