import React from "react";

function Home() {
  return (
    <section
      className="h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
      }}
    >
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Explore the World with TravelRiser
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Plan, book, and experience unforgettable adventures with our
          all-in-one travel app.
        </p>
        <a
          href="#download"
          className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

export default Home;
