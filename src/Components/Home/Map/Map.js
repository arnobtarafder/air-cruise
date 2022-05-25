import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"
import Leaflet from "leaflet"

let DefaultIcon = Leaflet.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
})

Leaflet.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
	const center = [24.70300714748863, 90.36966291202745];
	const dhaka = [23.81, 90.41];
	const sylhet = [24.89, 91.86];
	const rangpur = [25.985869, 88.573484];
	const khulna = [22.687086, 89.650238];
	const mymensingh = [24.728405, 90.409063];
	const chittagong = [22.35, 91.78];


	return (
		<div className="z-[-100] mb-0 overflow-x-hidden">
			<MapContainer
				center={center}
				zoomControl={false}
				zoom={6}
				style={{ width: "100vw", height: "50vh" }}
				scrollWheelZoom={false}
			>
				<TileLayer
					url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}@2x.jpg?key=jJQ2Gut7FQMdZetXTlG1"
					attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
				/>
				<Marker position={center}>
					<Popup>"Center Office"</Popup>
				</Marker>
				<Marker position={dhaka}>
					<Popup>
						Dhaka Head Office
					</Popup>
				</Marker>
				<Marker position={sylhet}>
					<Popup>
						Sylhet Regional Office
					</Popup>
				</Marker>
				<Marker position={chittagong}>
					<Popup>
						Chittagong Regional Office
					</Popup>
				</Marker>
				<Marker position={rangpur}>
					<Popup>
						Dhaka Head Office
					</Popup>
				</Marker>
				<Marker position={khulna}>
					<Popup>
						Sylhet Regional Office
					</Popup>
				</Marker>
				<Marker position={mymensingh}>
					<Popup>
						Chittagong Regional Office
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	)
}

export default Map
