import React from 'react';
import '../Styles/Upcomingevents.css';

const events = [
  {
    title: "Journée Mondiale du Don de Sang - 14 Juin",
    description: "Rejoignez-nous pour célébrer la Journée Mondiale du Don de Sang. Des activités spéciales et des sessions de don de sang seront organisées tout au long de la journée."
  },
  {
    title: "Marathon de Don de Sang - 1er Septembre",
    description: "Participez à notre marathon de don de sang et aidez-nous à atteindre notre objectif de 500 dons en une journée !"
  },
  {
    title: "Conférence sur la Santé et le Don de Sang - 20 Novembre",
    description: "Assistez à notre conférence annuelle où des experts discuteront de l'importance du don de sang et des dernières avancées médicales."
  }
];

const UpcomingEvents = () => {
  return (
    <div className="upcoming-events">
      <h2>Événements à Venir</h2>
      <div className="events-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;
