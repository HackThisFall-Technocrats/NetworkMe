import React, { useState, useEffect } from "react";
import axios from "axios";
import QRCode from "react-qr-code";

const QRCodeGenerator = ({ url }) => {
  return (
    <div>
      <h2>QR Code</h2>
      <QRCode value={url} />
    </div>
  );
};

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/api/v1/tours");
        setEvents(response.data.data.tours);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <h1 style={{ color: "#3C3AB1", marginBottom: "10px" }}>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      {events.map((event) => (
        <div
          key={event.id}
          className="event-card"
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            margin: "20px 0",
          }}
        >
          <h1
            className="event-title"
            style={{ color: "#3C3AB1", fontSize: "24px", marginBottom: "10px" }}
          >
            {event.Name}
          </h1>
          <h2
            className="venue"
            style={{ color: "#555", fontSize: "18px", marginBottom: "10px" }}
          >
            Venue: {event.venue}
          </h2>
          <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
            <svg
              class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <p>{event.message}</p>
          </blockquote>

          <p style={{ color: "#555", marginBottom: "8px" }}>
            Start Date: {new Date(event.startDateTime).toLocaleString()}
          </p>
          <p style={{ color: "#555", marginBottom: "15px" }}>
            End Date: {new Date(event.endDateTime).toLocaleString()}
          </p>
          <QRCodeGenerator url={event._id} />
          <h3
            className="section-title"
            style={{
              color: "#3C3AB1",
              fontSize: "20px",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            Attendees:
          </h3>
          <ul className="list">
            {event.volunteers.map((volunteer) => (
              <li
                key={volunteer._id}
                style={{ color: "#333", marginBottom: "8px" }}
              >
                <strong>Name:</strong> {volunteer.name},{" "}
                <strong>Designation:</strong> {volunteer.designation},{" "}
                <strong>Social Media:</strong> {volunteer.socialMediaUrl}
              </li>
            ))}
          </ul>
          <h3
            className="section-title"
            style={{
              color: "#3C3AB1",
              fontSize: "20px",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            Volunteers:
          </h3>
          <ul className="list">
            {event.volunteers.map((volunteer) => (
              <li
                key={volunteer._id}
                style={{ color: "#333", marginBottom: "8px" }}
              >
                <strong>Name:</strong> {volunteer.name},{" "}
                <strong>Designation:</strong> {volunteer.designation},{" "}
                <strong>Social Media:</strong> {volunteer.socialMediaUrl}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default EventPage;
