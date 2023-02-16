import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { MapBox, MapsTitle, Wrapper } from "./Maps.style";
//@ts-ignore
import Geocode from "react-geocode";
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

Geocode.setApiKey("AIzaSyCh7lTqZXMQHjLu5xU3ij8stjfCax7fA0o");
Geocode.setLanguage("pt-br");
Geocode.setRegion("br");
Geocode.setLocationType("ROOFTOP");

function Maps() {

    const params = useParams();
    const [location, setLocation] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);
    const mapRef = useRef<any>();

    useEffect(() => {
        Geocode.fromAddress(params.cityName).then(
            (response: any) => {

                const { lat, lng } = response.results[0].geometry.location;

                let geoLocation = {
                    lat: lat,
                    lng: lng
                }

                setLocation(geoLocation)
            }
        ).finally(() => {
            setLoading(false);
        });
    }, [])

    return (
        <Wrapper>

            <MapsTitle>MAPA DE {params.cityName}</MapsTitle>

            {
                loading ?
                    <>

                    </> :
                    (

                        <MapBox>
                            <MapContainer
                                center={location}
                                zoom={params.cityName == "Minas Gerais" ? 5 : 15}
                                scrollWheelZoom={true}
                                style={{ minHeight: "30vw", minWidth: "100%" }}
                                ref={mapRef}
                            >
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker
                                    position={location}
                                >
                                    <Popup>
                                        <span >{params.cityName}</span>
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </MapBox>
                    )}
        </Wrapper>
    )
}


export default Maps;