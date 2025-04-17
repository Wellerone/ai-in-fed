import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// COMPONENTE NAVBAR
function Navbar() {
  return (
    <nav className="bg-fedgreen text-white px-4 py-4 shadow-md sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-2">
        <div className="flex justify-center items-center gap-3">
          <Link to="/">
            <img
              src="/LogoFED512.png"
              alt="Logo FED"
              className="h-12 w-auto object-contain"
            />
          </Link>
          <span className="font-bold text-xl tracking-wide">AI in FED</span>
        </div>
        <div className="space-x-4 text-sm sm:text-base">
          <Link to="/materiali" className="hover:text-fedpink">Materiali</Link>
          <Link to="/promptoteca" className="hover:text-fedpink">Promptoteca</Link>
          <Link to="/area-docenti" className="hover:text-fedpink">Area docenti</Link>
          <Link to="/eventi" className="hover:text-fedpink">Eventi</Link>
        </div>
      </div>
    </nav>
  );
}

// HOMEPAGE
function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-5xl font-bold text-fedgreen underline mb-2">
        AI in FED{" "}
        <span role="img" aria-label="razzo">
          🚀
        </span>
      </h1>
      <p className="text-lg mt-2">
        Una piattaforma per docenti sulle potenzialità educative dell'intelligenza artificiale.
      </p>
    </div>
  );
}

// SEZIONI DEL SITO
function Materiali() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-semibold text-fedgreen mb-4">📚 Materiali</h2>
      <p>Risorse scaricabili e contenuti didattici.</p>
    </div>
  );
}

function Promptoteca() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-semibold text-fedgreen mb-4">💬 Promptoteca</h2>
      <p>Prompt utili per stimolare l’interazione con l’AI.</p>
    </div>
  );
}

function AreaDocenti() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-semibold text-fedgreen mb-4">👥 Area Docenti</h2>
      <p>Spazio riservato a materiali di approfondimento per insegnanti.</p>
    </div>
  );
}

function Eventi() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-semibold text-fedgreen mb-4">📅 Eventi</h2>
      <p>Calendario eventi, workshop e webinar formativi.</p>
    </div>
  );
}

// APP PRINCIPALE
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materiali" element={<Materiali />} />
        <Route path="/promptoteca" element={<Promptoteca />} />
        <Route path="/area-docenti" element={<AreaDocenti />} />
        <Route path="/eventi" element={<Eventi />} />
      </Routes>
    </Router>
  );
}

export default App;
