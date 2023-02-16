import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { MapBox, MapsTitle, Wrapper } from "./Maps.style";

function Maps() {

    const initialPosition = {
        lat: -19.912998,
        lng: -43.940933
    }

    return (
        <Wrapper>

            <MapsTitle>MAPA DE MINAS GERAIS</MapsTitle>

            <MapBox>
                <MapContainer center={initialPosition} zoom={8} scrollWheelZoom={true} style={{ minHeight: "30vw", minWidth: "100%" }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                        position={initialPosition}
                    >
                        <Popup>
                            <span >Belo Horizonte</span>
                        </Popup>
                    </Marker>
                </MapContainer>
            </MapBox>

        </Wrapper>
    )
}


export default Maps;