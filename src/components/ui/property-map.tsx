"use client";

import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Property } from "@/types";
import { formatCompactPrice, parsePrice } from "@/lib/utils";

function makeIcon(label: string, active: boolean) {
  return L.divIcon({
    className: "",
    html: `<div style="
      background:${active ? "#2B2D42" : "#A78BDB"};
      color:#fff;
      font-family:'DM Sans',sans-serif;
      font-size:12px;
      font-weight:600;
      padding:6px 12px;
      border-radius:999px;
      white-space:nowrap;
      box-shadow:0 4px 14px rgba(43,45,66,0.25);
      border:2px solid #fff;
      transform:translate(-50%,-50%);
      transition:background 0.2s;
    ">${label}</div>`,
    iconSize: [0, 0],
  });
}

function FitBounds({ properties }: { properties: Property[] }) {
  const map = useMap();

  useEffect(() => {
    const pts = properties
      .filter((p) => p.coordinates)
      .map((p) => [p.coordinates!.lat, p.coordinates!.lng] as [number, number]);

    if (pts.length === 0) return;
    if (pts.length === 1) {
      map.setView(pts[0], 13, { animate: true });
      return;
    }
    map.fitBounds(L.latLngBounds(pts), { padding: [60, 60], animate: true });
  }, [properties, map]);

  return null;
}

interface Props {
  properties: Property[];
  activeId?: string | null;
  onMarkerClick?: (id: string) => void;
}

export default function PropertyMap({ properties, activeId, onMarkerClick }: Props) {
  const withCoords = useMemo(
    () => properties.filter((p) => p.coordinates),
    [properties]
  );

  return (
    <MapContainer
      center={[7.5, 5.0]}
      zoom={6}
      scrollWheelZoom
      className="h-full w-full rounded-3xl"
      style={{ background: "#FAFBFF" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      <FitBounds properties={withCoords} />

      {withCoords.map((p) => (
        <Marker
          key={p.id}
          position={[p.coordinates!.lat, p.coordinates!.lng]}
          icon={makeIcon(formatCompactPrice(parsePrice(p.price)), activeId === p.id)}
          eventHandlers={{ click: () => onMarkerClick?.(p.id) }}
        >
          <Popup>
            <span className="font-semibold">{p.title}</span>
            <br />
            {p.location}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}