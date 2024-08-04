// AboutUs.js
import React from 'react';
import '../Styles/Quisommes.css';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about-us-container">
        <section className="about-section">
          <h1 className="section-title">Qui sommes-nous ?</h1>
          <div className="about-content">
            <div className="about-description">
              <p>
                Nous sommes une organisation dédiée à sauver des vies à travers le don de sang. 
                Avec une équipe passionnée et des années d'expérience, nous nous engageons à rendre le processus de don aussi accessible et agréable que possible.
              </p>
            </div>
            <div className="responsibles-grid">
              <div className="responsible-card">
                <h3>Nom Responsable 1</h3>
                <p>Description du responsable 1.</p>
              </div>
              <div className="responsible-card">
                <h3>Nom Responsable 2</h3>
                <p>Description du responsable 2.</p>
              </div>
              <div className="responsible-card">
                <h3>Nom Responsable 3</h3>
                <p>Description du responsable 3.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="impact-section">
          <h1 className="section-title">Nos impacts</h1>
          <div className="impact-container">
            <div className="impact-text">
              <p>Grâce à la générosité de nos donneurs, nous avons pu collecter des milliers de poches de sang et de plasma, permettant de sauver de nombreuses vies. Voici quelques chiffres clés sur notre impact :</p>
            </div>
            <div className="impact-stats">
              <div className="stat-item">
                <h2>25 000</h2>
                <p>Poches de sang collectées</p>
              </div>
              <div className="stat-item">
                <h2>15 000</h2>
                <p>Vies sauvées</p>
              </div>
              <div className="stat-item">
                <h2>500</h2>
                <p>Bénévoles engagés</p>
              </div>
            </div>
          </div>
        </section>

        <section className="values-section">
          <h1 className="section-title">Nos valeurs</h1>
          <div className="values-container">
            <div className="values-item">
              <div className="values-icon">❤️</div>
              <h2>Empathie</h2>
              <p>Nous mettons tout en œuvre pour comprendre et répondre aux besoins des donneurs et des receveurs.</p>
            </div>
            <div className="values-item">
              <div className="values-icon">🔍</div>
              <h2>Intégrité</h2>
              <p>Nous agissons avec transparence et honnêteté dans toutes nos actions.</p>
            </div>
            <div className="values-item">
              <div className="values-icon">⭐</div>
              <h2>Excellence</h2>
              <p>Nous nous efforçons de fournir un service de la plus haute qualité.</p>
            </div>
            <div className="values-item">
              <div className="values-icon">🤝</div>
              <h2>Collaboration</h2>
              <p>Nous croyons en la force du travail en équipe pour atteindre nos objectifs communs.</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
