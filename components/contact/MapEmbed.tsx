"use client";

import { useMemo } from "react";
import { Card } from "@/components/ui/card";
import { COMPANY_INFO } from "@/lib/constants";

export function MapEmbed() {
  const apiKey = ""; // You would add your Google Maps API key here
  
  const mapSrc = useMemo(() => {
    const { lat, lng } = COMPANY_INFO.location.coordinates;
    const baseUrl = "https://www.google.com/maps/embed/v1/place";
    
    // If you have an API key, use it. Otherwise, use a static image as fallback
    if (apiKey) {
      return `${baseUrl}?key=${apiKey}&q=${lat},${lng}&zoom=15`;
    }
    
    // Return a fallback static map using Google Maps iframe with place name
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.5!2d-118.2437!3d34.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1617734567890!5m2!1sen!2sus`;
  }, [apiKey]);

  return (
    <Card className="overflow-hidden border-none shadow-md h-full">
      <iframe
        src={mapSrc}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        title="Excel Academy Location"
        className="w-full h-full min-h-[400px]"
      />
    </Card>
  );
}