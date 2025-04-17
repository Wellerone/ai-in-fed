import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// COMPONENTE SCHEDA (per le aree tematiche)
function Scheda({ children }) {
  return (
    <div className="border border-fedpink bg-white p-4 rounded-md shadow-md mb-4">
      {children}
    </div>
  );
}

// NAVBAR
function Navbar() {
  return (
    <nav className="bg-fedgreen text-white px-4 py-4 shadow-md sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-2">
        <div className="flex justify-center items-center gap-3">
          <Link to="/">
            <img
              src="/LogoFED512.png"
              alt="Logo FED"
              className="w-24 h-auto mx-auto block"
              style={{ width: "80px", height: "auto" }}
            />
          </Link>
          <span className="font-bold text-2xl tracking-wide">AI in FED</span>
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
      <h1 className="text-xl font-bold text-fedgreen underline mb-2">
        AI in FED <span role="img" aria-label="razzo">🚀</span>
      </h1>
      <p className="text-lg mb-6">
        Una piattaforma per docenti sulle potenzialità educative dell'intelligenza artificiale.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Link
          to="/materiali"
          className="block border border-black bg-white p-6 rounded-lg shadow hover:bg-fedgreen hover:text-white transition"
        >
          <h2 className="text-xl font-semibold mb-2">📚 Materiali</h2>
          <p>Risorse didattiche e strumenti utili per la tua attività educativa.</p>
        </Link>

        <Link
          to="/promptoteca"
          className="block border border-black bg-white p-6 rounded-lg shadow hover:bg-fedgreen hover:text-white transition"
        >
          <h2 className="text-xl font-semibold mb-2">💬 Promptoteca</h2>
          <p>Prompt per stimolare l'interazione con l’AI in classe.</p>
        </Link>

        <Link
          to="/area-docenti"
          className="block border border-black bg-white p-6 rounded-lg shadow hover:bg-fedgreen hover:text-white transition"
        >
          <h2 className="text-xl font-semibold mb-2">👩‍🏫 Area Docenti</h2>
          <p>Spazio riservato agli insegnanti per la condivisione e il confronto.</p>
        </Link>

        <Link
          to="/eventi"
          className="block border border-black bg-white p-6 rounded-lg shadow hover:bg-fedgreen hover:text-white transition"
        >
          <h2 className="text-xl font-semibold mb-2">📅 Eventi</h2>
          <p>Laboratori, incontri e iniziative sull'intelligenza artificiale.</p>
        </Link>
      </div>
    </div>
  );
}

// PAGINE INTERNE CON SCHEDA
function Materiali() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-fedgreen mb-2">📚 Materiali</h2>
      <Scheda><p>Unità didattiche basate sull’uso dell’AI</p></Scheda>
      <Scheda><p>Strumenti digitali da integrare nella pratica scolastica</p></Scheda>
      <Scheda><p>Guide pratiche per docenti</p></Scheda>
      <Scheda><p>Modelli di lezione pronti all’uso</p></Scheda>
    </div>
  );
}

function Promptoteca() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-fedgreen mb-2">💬 Promptoteca</h2>
      <Scheda><p>Stimolare attività creative con l’AI</p></Scheda>
      <Scheda><p>Guidare l’interazione con ChatGPT in ambito didattico</p></Scheda>
      <Scheda><p>Proporre attività interdisciplinari</p></Scheda>
    </div>
  );
}

function AreaDocenti() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-fedgreen mb-2">👩‍🏫 Area Docenti</h2>
      <Scheda><p>Condividere esperienze e pratiche tra colleghi</p></Scheda>
      <Scheda><p>Accedere a percorsi di formazione dedicati all’AI</p></Scheda>
      <Scheda><p>Scambiare idee, materiali e strumenti utili</p></Scheda>
    </div>
  );
}

function Eventi() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-fedgreen mb-2">📅 Eventi</h2>
      <Scheda><p>Calendario aggiornato di eventi, webinar e workshop</p></Scheda>
      <Scheda><p>Iniziative locali e nazionali legate all’uso dell’AI in educazione</p></Scheda>
      <Scheda><p>Occasioni di confronto tra docenti e specialisti</p></Scheda>
    </div>
  );
}

// COMPONENTE PRINCIPALE
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
