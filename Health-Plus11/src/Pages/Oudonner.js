

import React, { useState, useEffect } from "react";
import Input from '../Components/ui/input';
import Button from '../Components/ui/button';
import Card, { CardHeader, CardTitle, CardContent } from '../Components/ui/card';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './Oudonner.css';

export default function Oudonner() {
  const [city, setCity] = useState("");
  const [donationCenters, setDonationCenters] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const cities = ["Marrakech", "Casablanca", "Rabat"];

  useEffect(() => {
    if (city.length >= 2) {
      const filteredSuggestions = cities.filter((c) =>
        c.toLowerCase().startsWith(city.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      if (filteredSuggestions.length === 1) {
        handleSearch(filteredSuggestions[0]);
      }
    } else {
      setSuggestions([]);
      setDonationCenters([]);
    }
  }, [city]);

  const handleSearch = (searchCity = city) => {
    let centers = [];
    if (searchCity.toLowerCase() === "marrakech") {
      centers = [
        {
          name: "Centre de don de sang de Marrakech",
          address: "123 Rue des Orangers, Marrakech",
          phone: "05 24 44 55 66",
          hours: {
            weekdays: "9h - 17h",
            saturday: "9h - 13h",
          },
        },
        {
          name: "Hôpital Militaire Avicenne",
          address: "456 Boulevard Mohammed VI, Marrakech",
          phone: "05 24 33 22 11",
          hours: {
            weekdays: "8h - 16h",
            saturday: "8h - 12h",
          },
        },
        {
          name: "Centre de Don de Sang Al Moutawakil",
          address: "789 Avenue Hassan II, Marrakech",
          phone: "05 24 55 66 77",
          hours: {
            weekdays: "9h - 17h",
            saturday: "9h - 13h",
          },
        },
        {
          name: "Hôpital Universitaire de Marrakech",
          address: "321 Rue Abou Bakr Al Siddik, Marrakech",
          phone: "05 24 44 22 33",
          hours: {
            weekdays: "8h - 16h",
            saturday: "8h - 12h",
          },
        }
        
      ];
    } else if (searchCity.toLowerCase() === "casablanca") {
      centers = [
        {
          name: "Centre de don de sang de Casablanca",
          address: "789 Rue Allal Ben Abdallah, Casablanca",
          phone: "05 22 11 33 44",
          hours: {
            weekdays: "10h - 18h",
            saturday: "10h - 14h",
          },
        },
        {
          name: "Hôpital Ibn Rochd",
          address: "321 Boulevard Abdelmoumen, Casablanca",
          phone: "05 22 23 44 55",
          hours: {
            weekdays: "8h - 16h",
            saturday: "8h - 12h",
          },
        },
        {
          name: "Centre de Don de Sang Hassan II",
          address: "456 Rue des Almohades, Casablanca",
          phone: "05 22 33 44 66",
          hours: {
            weekdays: "9h - 17h",
            saturday: "9h - 13h",
          },
        },
        {
          name: "Hôpital Bichat",
          address: "789 Avenue de l'Armée Royale, Casablanca",
          phone: "05 22 44 55 77",
          hours: {
            weekdays: "8h - 16h",
            saturday: "8h - 12h",
          },
        }
        
      ];
    } else if (searchCity.toLowerCase() === "rabat") {
      centers = [
        {
          name: "Centre de don de sang de Rabat",
          address: "159 Avenue Mohammed V, Rabat",
          phone: "05 37 66 77 88",
          hours: {
            weekdays: "9h - 17h",
            saturday: "9h - 13h",
          },
        },
        {
          name: "Hôpital Militaire d'Instruction Mohammed V",
          address: "753 Rue Oued Fès, Rabat",
          phone: "05 37 77 88 99",
          hours: {
            weekdays: "8h - 16h",
            saturday: "8h - 12h",
          },
        },
        {
          name: "Centre de Don de Sang Al Amal",
          address: "321 Rue Moulay Ismail, Rabat",
          phone: "05 37 55 66 77",
          hours: {
            weekdays: "9h - 17h",
            saturday: "9h - 13h",
          },
        },
        {
          name: "Hôpital des Spécialités",
          address: "456 Avenue Hassan II, Rabat",
          phone: "05 37 44 55 88",
          hours: {
            weekdays: "8h - 16h",
            saturday: "8h - 12h",
          },
        }
        
      ];
    } else {
      centers = [];
    }
    setDonationCenters(centers);
  };

  return (
    <div>
      <Navbar />
      <div className="search-section">
        <h1> Trouvez un centre de don de sang </h1>
        <p> Entrez votre adresse pour trouver les centres de don de sang les plus proches. </p>
        <div className="search-container">
          <Input
            id="city"
            type="text"
            placeholder="Entrez votre adresse"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="input"
          />
          <Button onClick={() => handleSearch(city)} className="button">Rechercher</Button>
        </div>
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSearch(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="results-section">
        {donationCenters.length > 0 ? (
          <div className="cards-container">
            {donationCenters.map((center, index) => (
              <Card key={index} className="card">
                <CardHeader className="card-header">
                  <CardTitle className="card-title">{center.name}</CardTitle>
                </CardHeader>
                <CardContent className="card-content">
                  <div className="address">
                    <MapPinIcon className="icon" />
                    {center.address}
                  </div>
                  <div className="phone">
                    <PhoneIcon className="icon" />
                    {center.phone}
                  </div>
                  <div className="hours">
                    <strong>Horaires :</strong>
                    <div>{center.hours.weekdays} (Lundi - Vendredi)</div>
                    <div>{center.hours.saturday} (Samedi)</div>
                  </div>
                  <Button className="appointment-button">Prendre rendez-vous</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">Aucun centre de don de sang trouvé.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
