import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold mb-2">AI in FED</h1>
      <p className="mb-6 text-gray-600">
        Una piattaforma per docenti sulle potenzialità educative dell'intelligenza artificiale.
      </p>
      <div className="space-y-2">
        <Link to="/materiali" className="block border rounded p-2 bg-white shadow">Materiali</Link>
        <Link to="/promptoteca" className="block border rounded p-2 bg-white shadow">Promptoteca</Link>
        <Link to="/area-docenti" className="block border rounded p-2 bg-white shadow">Area docenti</Link>
        <Link to="/eventi" className="block border rounded p-2 bg-white shadow">Eventi</Link>
      </div>
    </div>
  );
}

function Materiali() {
  const materiali = [
    {
      titolo: "Attività introduttiva sull'IA",
      descrizione: "Scheda didattica per avviare una riflessione critica sull'intelligenza artificiale con studenti delle superiori.",
      materia: "Educazione civica",
      livello: "Biennio"
    },
    {
      titolo: "Simulazione di dialoghi storici",
      descrizione: "Materiale per usare l'IA nella creazione di dialoghi tra personaggi storici.",
      materia: "Storia",
      livello: "Triennio"
    },
    {
      titolo: "Analisi del linguaggio giornalistico",
      descrizione: "Attività guidata che sfrutta l'IA per riconoscere bias e tecniche retoriche in articoli di giornale.",
      materia: "Italiano",
      livello: "Triennio"
    }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">📚 Materiali didattici</h2>
      <ul className="space-y-4">
        {materiali.map((item, index) => (
          <li key={index} className="border rounded p-4 shadow bg-white">
            <h3 className="text-xl font-bold">{item.titolo}</h3>
            <p className="text-gray-700 mt-2">{item.descrizione}</p>
            <p className="text-sm text-gray-500 mt-1">Materia: {item.materia} | Livello: {item.livello}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Promptoteca() {
  const promptList = [
    {
      titolo: "Sviluppo del pensiero critico",
      descrizione: "Crea un prompt per ChatGPT che aiuti gli studenti a confrontare due visioni storiche opposte su un evento specifico.",
      tool: "ChatGPT",
      categoria: "Pensiero Critico"
    },
    {
      titolo: "Generazione di immagini creative",
      descrizione: "Usa DALL·E per far creare agli studenti un'immagine ispirata a un racconto breve che hanno scritto.",
      tool: "DALL·E",
      categoria: "Creatività"
    },
    {
      titolo: "Analisi del testo letterario",
      descrizione: "Prompt per analizzare i temi principali de 'I promessi sposi' e le intenzioni dell'autore.",
      tool: "ChatGPT",
      categoria: "Letteratura"
    }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">🧠 Promptoteca</h2>
      <ul className="space-y-4">
        {promptList.map((prompt, index) => (
          <li key={index} className="border rounded p-4 shadow bg-white">
            <h3 className="text-xl font-bold">{prompt.titolo}</h3>
            <p className="text-gray-700 mt-2">{prompt.descrizione}</p>
            <p className="text-sm text-gray-500 mt-1">Tool: {prompt.tool} | Categoria: {prompt.categoria}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AreaDocenti() {
  const [titolo, setTitolo] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [materia, setMateria] = useState("");
  const [messaggio, setMessaggio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titolo && descrizione && materia) {
      setMessaggio("✅ Proposta inviata con successo! Grazie per il tuo contributo.");
      setTitolo("");
      setDescrizione("");
      setMateria("");
    } else {
      setMessaggio("❗ Per favore, compila tutti i campi.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">👩‍🏫 Condividi una proposta</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Titolo dell'attività o prompt"
          className="w-full p-2 border rounded"
          value={titolo}
          onChange={(e) => setTitolo(e.target.value)}
        />
        <textarea
          placeholder="Descrizione dettagliata"
          className="w-full p-2 border rounded"
          rows="4"
          value={descrizione}
          onChange={(e) => setDescrizione(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Materia di riferimento"
          className="w-full p-2 border rounded"
          value={materia}
          onChange={(e) => setMateria(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded shadow"
        >
          Invia proposta
        </button>
        {messaggio && <p className="text-sm mt-2">{messaggio}</p>}
      </form>
    </div>
  );
}

function Eventi() {
  return <div className="p-4">📅 Sezione Eventi – in arrivo</div>;
}

export default function App() {
  return (
    <Router>
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

