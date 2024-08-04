// import React,{ useState } from "react";
// import Input from '../Components/ui/input'; 
// import Button from '../Components/ui/button';
// import Card, { CardHeader, CardTitle, CardContent } from '../Components/ui/card';
// import Navbar from '../Components/Navbar'; 
// import Footer from '../Components/Footer';
// import './Oudonner.css';

// export default function Oudonner() {
//   const [city, setCity] = useState("");
//   const [donationCenters, setDonationCenters] = useState([]);
  
//   const handleSearch = () => {
//     let centers = [];
//     if (city.toLowerCase() === "marrakech") {
//       centers = [
//         {
//           name: "Centre de don de sang de Marrakech",
//           address: "123 Rue des Orangers, Marrakech",
//           phone: "05 24 44 55 66",
//           coordinates: { lat: 31.6294, lng: -8.0186 },
//         },
//         {
//           name: "Hôpital Militaire Avicenne",
//           address: "456 Boulevard Mohammed VI, Marrakech",
//           phone: "05 24 33 22 11",
//           coordinates: { lat: 31.6364, lng: -8.0075 },
//         },
//         {
//             name: "Centre Régional de Transfusion Sanguine",
//             address: "Avenue Hassan II, Marrakech",
//             phone: "05 24 43 56 78",
//             coordinates: { lat: 31.6316, lng: -8.0000 },
//           },
//           {
//             name: "Clinique Chifa",
//             address: "Boulevard Abdelkrim El Khattabi, Marrakech",
//             phone: "05 24 43 23 11",
//             coordinates: { lat: 31.6341, lng: -8.0227 },
//           },
//       ];
//     } else if (city.toLowerCase() === "casablanca") {
//       centers = [
//         {
//           name: "Centre de don de sang de Casablanca",
//           address: "789 Rue Allal Ben Abdallah, Casablanca",
//           phone: "05 22 11 33 44",
//           coordinates: { lat: 33.5951, lng: -7.6187 },
//         },
//         {
//           name: "Hôpital Ibn Rochd",
//           address: "321 Boulevard Abdelmoumen, Casablanca",
//           phone: "05 22 23 44 55",
//           coordinates: { lat: 33.5833, lng: -7.6167 },
//         },
//         {
//             name: "Centre de Transfusion Sanguine de Casablanca",
//             address: "Rue Lahcen El Arjoun, Casablanca",
//             phone: "05 22 26 47 58",
//             coordinates: { lat: 33.5889, lng: -7.6114 },
//           },
//           {
//             name: "Clinique Jerrada",
//             address: "Avenue Hassan II, Casablanca",
//             phone: "05 22 30 40 50",
//             coordinates: { lat: 33.5894, lng: -7.6039 },
//           },
//       ];
//     } else if (city.toLowerCase() === "rabat") {
//       centers = [
//         {
//           name: "Centre de don de sang de Rabat",
//           address: "159 Avenue Mohammed V, Rabat",
//           phone: "05 37 66 77 88",
//           coordinates: { lat: 34.0131, lng: -6.8351 },
//         },
//         {
//           name: "Hôpital Militaire d'Instruction Mohammed V",
//           address: "753 Rue Oued Fès, Rabat",
//           phone: "05 37 77 88 99",
//           coordinates: { lat: 34.0186, lng: -6.8267 },
//         },
//         {
//             name: "Centre Régional de Transfusion Sanguine de Rabat",
//             address: "Avenue Allal El Fassi, Rabat",
//             phone: "05 37 28 39 48",
//             coordinates: { lat: 34.0205, lng: -6.8370 },
//           },
//           {
//             name: "Clinique Agdal",
//             address: "Avenue de France, Rabat",
//             phone: "05 37 67 89 90",
//             coordinates: { lat: 34.0126, lng: -6.8206 },
//           },
//       ];
//     } else {
//       centers = [];
//     }
//     setDonationCenters(centers);
//   };

//   return (
//     <div>
//       <Navbar/>
//         <div className="container">
//         <h1>Centres de dons de sang</h1>
//         <div className="search-container">
//           <label htmlFor="city" className="label">Ville :</label>
//           <div className="search-controls">
//             <Input
//               id="city"
//               type="text"
//               placeholder="Entrez une ville"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               className="input"
//             />
//             <Button onClick={handleSearch} className="button">Rechercher</Button>
//           </div>
//         </div>
//         {donationCenters.length > 0 ? (
//           <div className="cards-container">
//             {donationCenters.map((center, index) => (
//               <Card key={index} className="card">
//                 <CardHeader className="card-header">
//                   <CardTitle className="card-title">{center.name}</CardTitle>
//                 </CardHeader>
//                 <CardContent className="card-content">
//                   <div className="address">
//                     <MapPinIcon className="icon" />
//                     {center.address}
//                   </div> 
//                    <div className="phone">
//                     <PhoneIcon className="icon" />
//                     {center.phone}
//                   </div> 
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         ) : (
//           <p className="text-muted-foreground">Aucun centre de don de sang trouvé.</p>
//         )}
//       </div>
//       <Footer/>
//     </div>
//   );
// }

// function MapPinIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
//       <circle cx="12" cy="10" r="3" />
//     </svg>
//   );
// }

// function PhoneIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//     </svg>
//   );
// }



/*import React, { useState } from "react";
import Input from '../Components/ui/input';
import Button from '../Components/ui/button';
import Card, { CardHeader, CardTitle, CardContent } from '../Components/ui/card';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './Oudonner.css';
import { Link } from 'react-router-dom';

export default function Oudonner() {
  const [city, setCity] = useState("");
  const [donationCenters, setDonationCenters] = useState([]);

  const handleSearch = () => {
    let centers = [];
    if (city.toLowerCase() === "marrakech") {
      centers = [
        {
          name: "Centre de don de sang de Marrakech",
          address: "123 Rue des Orangers, Marrakech",
          phone: "05 24 44 55 66",
          coordinates: { lat: 31.6294, lng: -8.0186 },
          hours: "Lundi - Vendredi: 9h - 17h, Samedi: 9h - 13h",
          link: "https://example.com/rendezvous"
        },
        {
          name: "Hôpital Militaire Avicenne",
          address: "456 Boulevard Mohammed VI, Marrakech",
          phone: "05 24 33 22 11",
          coordinates: { lat: 31.6364, lng: -8.0075 },
          hours: "Lundi - Vendredi: 8h - 16h, Samedi: 8h - 12h",
          link: "https://example.com/rendezvous"
        },
        // Ajoutez d'autres centres pour Marrakech
      ];
    } else if (city.toLowerCase() === "casablanca") {
      centers = [
        {
          name: "Centre de don de sang de Casablanca",
          address: "789 Rue Allal Ben Abdallah, Casablanca",
          phone: "05 22 11 33 44",
          coordinates: { lat: 33.5951, lng: -7.6187 },
          hours: "Lundi - Vendredi: 9h - 17h, Samedi: 9h - 13h",
          link: "https://example.com/rendezvous"
        },
        {
          name: "Hôpital Ibn Rochd",
          address: "321 Boulevard Abdelmoumen, Casablanca",
          phone: "05 22 23 44 55",
          coordinates: { lat: 33.5833, lng: -7.6167 },
          hours: "Lundi - Vendredi: 8h - 16h, Samedi: 8h - 12h",
          link: "https://example.com/rendezvous"
        },
        // Ajoutez d'autres centres pour Casablanca
      ];
    } else if (city.toLowerCase() === "rabat") {
      centers = [
        {
          name: "Centre de don de sang de Rabat",
          address: "159 Avenue Mohammed V, Rabat",
          phone: "05 37 66 77 88",
          coordinates: { lat: 34.0131, lng: -6.8351 },
          hours: "Lundi - Vendredi: 9h - 17h, Samedi: 9h - 13h",
          link: "https://example.com/rendezvous"
        },
        {
          name: "Hôpital Militaire d'Instruction Mohammed V",
          address: "753 Rue Oued Fès, Rabat",
          phone: "05 37 77 88 99",
          coordinates: { lat: 34.0186, lng: -6.8267 },
          hours: "Lundi - Vendredi: 8h - 16h, Samedi: 8h - 12h",
          link: "https://example.com/rendezvous"
        },
        // Ajoutez d'autres centres pour Rabat
      ];
    } else {
      centers = [];
    }
    setDonationCenters(centers);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Trouvez un centre de don de sang</h1>
        <p>Entrez votre adresse pour trouver les centres de don de sang les plus proches.</p>
        <div className="search-container">
          <Input
            id="city"
            type="text"
            placeholder="Entrez votre adresse"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="input"
          />
          <Button onClick={handleSearch} className="button">Rechercher</Button>
        </div>
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
                  <div className="hours">{center.hours}</div>
                  <Link to={center.link} className="appointment-button">Prendre rendez-vous</Link>
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
}*/



import React, { useState } from "react";
import Input from '../Components/ui/input';
import Button from '../Components/ui/button';
import Card, { CardHeader, CardTitle, CardContent } from '../Components/ui/card';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './Oudonner.css';

export default function Oudonner() {
  const [city, setCity] = useState("");
  const [donationCenters, setDonationCenters] = useState([]);

  const handleSearch = () => {
    let centers = [];
    if (city.toLowerCase() === "marrakech") {
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
      ];
    } else if (city.toLowerCase() === "casablanca") {
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
      ];
    } else if (city.toLowerCase() === "rabat") {
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
          <Button onClick={handleSearch} className="button">Rechercher</Button>
        </div>
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

