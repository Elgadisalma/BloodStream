import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import UpcomingEvents from "../Components/Upcomingevents";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Info />
      <BookAppointment />
      <UpcomingEvents/>
      <Reviews />
      <Footer />
    </div>
  );
}

export default Home;
