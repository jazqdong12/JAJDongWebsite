import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";

import {
  FaBed,
  FaBath,
  FaCar,
  FaRulerHorizontal,
  FaMapPin,
  FaExpand,
} from "react-icons/fa";
import Slideshow from "./Slideshow";
import "./ModelPage.css";
import { useState } from "react";

interface ModelPageProps {
  title: string;
  description: string;
  bed: string;
  bath: string;
  car: string;
  sqft: string;
  readyAddresses: { address: string; lat: number; lng: number }[];
  pendingAddresses: {
    date: string;
    address: string;
    lat: number;
    lng: number;
  }[];
  pendingSaleAddresses: string[];
  images: string[];
  floor?: string;
}

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY;

const ModelPage = ({
  title,
  description,
  bed,
  bath,
  car,
  sqft,
  readyAddresses,
  pendingAddresses,
  pendingSaleAddresses,
  images,
  floor,
}: ModelPageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePosition, setActivePosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [mapCenter, setMapCenter] = useState({
    lat: 26.595465063657485,
    lng: -81.69551437425794,
  });
  const handleMarkerClick = (location: {
    address: string;
    lat: number;
    lng: number;
    date?: string;
  }) => {
    setActivePosition({ lat: location.lat, lng: location.lng });
    setSelectedAddress(location.address);
    setSelectedDate(location.date || "");
    setMapCenter({ lat: location.lat, lng: location.lng });
  };

  const handleMapClick = () => {
    setActivePosition(null);
  };
  return (
    <div className="model-container">
      <div className="model-content">
        {/* Model Info */}
        <div className="flex-model-info">
          <div className="model-info">
            <h1>{title}</h1>
            <p>{description}</p>

            <div className="card-meta-list">
              <div className="meta-item">
                <FaBed />
                <span className="meta-text">{bed}</span>
              </div>
              <div className="meta-item">
                <FaBath />
                <span className="meta-text">{bath}</span>
              </div>
              <div className="meta-item">
                <FaCar />
                <span className="meta-text">{car}</span>
              </div>
              <div className="meta-item">
                <FaRulerHorizontal />
                <span className="meta-text">{sqft}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Floor Plan*/}
        <div className="flex-floor">
          {floor && (
            <>
              <div className="floor-plan" onClick={() => setIsModalOpen(true)}>
                <img src={floor} alt="Floor Plan" id="floorplan" />
                <FaExpand className="expand-icon" />
              </div>

              {isModalOpen && (
                <div
                  className="modal-overlay"
                  onClick={() => setIsModalOpen(false)}
                >
                  <div
                    className="modal-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="modal-header">
                      <button
                        className="close-modal-button"
                        onClick={() => setIsModalOpen(false)}
                      >
                        &times;
                      </button>
                      <button
                        className="download-button"
                        onClick={() => {
                          const link = document.createElement("a");
                          link.href = floor;
                          link.download = "floorplan";
                          link.click();
                        }}
                      >
                        Download Floor Plan
                      </button>
                    </div>
                    <img
                      src={floor}
                      alt="Floor Plan"
                      className="modal-floorplan"
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        {/* Slideshow */}
        <div className="flex-slideshow">
          <Slideshow images={images} clamp={"60vh, 80vw, 80vh"} />
        </div>
        <div className="flex-listings-and-map">
          {/* Available Listings*/}
          <div className="flex-listings">
            <h2>Available Addresses</h2>
            <div className="instruction">
              {" "}
              Click on an address to view it on Google Maps
            </div>
            <div className="listings-box">
              {/* Move-In Ready */}
              {readyAddresses.length > 0 && (
                <>
                  <h3>Move-In Ready</h3>
                  <ul>
                    {readyAddresses.map((location, index) => (
                      <li
                        key={index}
                        onClick={() => handleMarkerClick(location)}
                        className="clickable-address"
                      >
                        <FaMapPin className="fa-map-pin" />
                        <span className="notranslate">{location.address}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Pending Completion Section */}
              {pendingAddresses.length > 0 && (
                <>
                  <h3>Pending Completion</h3>
                  <ul>
                    {Object.entries(
                      pendingAddresses.reduce(
                        (
                          acc: {
                            [date: string]: {
                              address: string;
                              lat: number;
                              lng: number;
                            }[];
                          },
                          { date, address, lat, lng }
                        ) => {
                          if (!acc[date]) {
                            acc[date] = [];
                          }
                          acc[date].push({ address, lat, lng });
                          return acc;
                        },
                        {}
                      )
                    ).map(([date, locations]) => (
                      <li key={date}>
                        {date}
                        <ul>
                          {locations.map((location, index) => (
                            <li
                              key={index}
                              onClick={() => handleMarkerClick(location)}
                              className="clickable-address"
                            >
                              <FaMapPin className="fa-map-pin" />
                              <span className="notranslate">
                                {location.address}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Pending Sale Section */}
              {pendingSaleAddresses.length > 0 && (
                <>
                  <h3>Pending Sale</h3>
                  <ul>
                    {pendingSaleAddresses.map((address, index) => (
                      <li key={index} className="pending-address">
                        <FaMapPin className="fa-map-pin" />
                        <span className="notranslate">{address}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
          {/* Map*/}
          <div className="map-container">
            <APIProvider apiKey={apiKey || ""}>
              <Map
                defaultCenter={mapCenter} // Use defaultCenter instead of center
                defaultZoom={13} // Initial zoom level
                gestureHandling={"cooperative"}
                zoomControl={true}
                fullscreenControl={false}
                scaleControl={false}
                streetViewControl={false}
                onClick={handleMapClick}
                minZoom={10}
                maxZoom={18}
                onCameraChanged={(e) => {
                  if (e?.map) {
                    const newCenter = e.map.getCenter();
                    if (newCenter) {
                      setMapCenter({
                        lat: newCenter.lat(),
                        lng: newCenter.lng(),
                      });
                    }
                  }
                }}
              >
                {readyAddresses.map((location, index) => (
                  <Marker
                    key={`ready-${index}`}
                    position={{ lat: location.lat, lng: location.lng }}
                    onClick={() => handleMarkerClick(location)}
                  />
                ))}
                {pendingAddresses.map((location, index) => (
                  <Marker
                    key={`ready-${index}`}
                    position={{ lat: location.lat, lng: location.lng }}
                    onClick={() => handleMarkerClick(location)}
                  />
                ))}

                {activePosition && (
                  <InfoWindow
                    position={activePosition}
                    onCloseClick={handleMapClick}
                    pixelOffset={[0, -50]}
                  >
                    <p>{selectedAddress}</p>
                    {selectedDate && <p>Estimate: {selectedDate}</p>}
                  </InfoWindow>
                )}
              </Map>
            </APIProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelPage;
