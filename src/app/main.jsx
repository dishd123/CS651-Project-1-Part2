import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../../css/site.css';
import SiteNav from '../SiteNav.jsx';

const sessions = [
  { title: 'Computer Vision · Edge Detection', date: 'Today', boards: 3, cards: 12, color: 'mint' },
  { title: 'Web Systems · HTTP and APIs', date: 'Yesterday', boards: 2, cards: 8, color: 'peach' },
  { title: 'Machine Learning · Loss Functions', date: 'Sep 08', boards: 4, cards: 16, color: 'lavender' }
];

function SessionCard({ session, selected, onSelect }) {
  return <button className={`session-card ${selected ? 'selected' : ''}`} onClick={onSelect}><div className={`session-swatch ${session.color}`}></div><div className="text-start"><small>{session.date}</small><h3>{session.title}</h3><span>{session.boards} boards · {session.cards} flashcards</span></div><span className="session-arrow">→</span></button>;
}

function BoardPreview({ session }) {
  return <section className="workspace-panel board-panel"><div className="panel-heading"><div><p className="eyebrow">LATEST BOARD</p><h2>{session.title.split(' · ')[1]}</h2></div><button className="icon-button" aria-label="More board options" disabled>•••</button></div>
  <div className="board-preview">
    <img src="/images/app-board.jpg" alt="A photographed whiteboard with an edge detection sketch" style={{ width: '100%', borderRadius: 16, marginBottom: '1rem' }} />
  </div>
  <div className="board-meta"><span>Captured today at 10:42 AM</span><span className="tag">3 regions identified</span></div></section>;
}

function FlashcardDeck() {
  const [flipped, setFlipped] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const cards = [{ q: 'Why do we blur an image before edge detection?', a: 'Blurring reduces noise so the detector focuses on meaningful changes.' }, { q: 'What does a gradient reveal?', a: 'It reveals how quickly pixel intensity changes across an image.' }];
  const card = cards[cardIndex];
  return <section className="workspace-panel"><div className="panel-heading"><div><p className="eyebrow">REVIEW DECK</p><h2>Quick recall</h2></div><span className="progress-count">{cardIndex + 1} / {cards.length}</span></div><button className={`flashcard ${flipped ? 'is-flipped' : ''}`} onClick={() => setFlipped(!flipped)}><span className="card-label">{flipped ? 'ANSWER' : 'QUESTION'}</span><strong>{flipped ? card.a : card.q}</strong><small>Click to flip</small></button><div className="deck-controls"><button className="btn btn-sm btn-outline-dark" onClick={() => { setCardIndex((cardIndex + cards.length - 1) % cards.length); setFlipped(false); }}>← Previous</button><button className="btn btn-sm btn-primary" onClick={() => { setCardIndex((cardIndex + 1) % cards.length); setFlipped(false); }}>Next card →</button></div></section>;
}

function TutorPanel() {
  const [question, setQuestion] = useState('');
  const [asked, setAsked] = useState(false);
  return <section className="workspace-panel tutor-panel"><p className="eyebrow">YOUR STUDY TUTOR</p><h2>Ask your notes.</h2><p className="panel-copy">Soon your tutor will read the board and listen to the explanation with you.</p><div className="tutor-bubble"><span className="avatar tutor-avatar">✦</span><p>{asked ? `I’ll look through your board and explanation for “${question}”.` : 'What part of this board would you like to understand better?'}</p></div><form onSubmit={(event) => { event.preventDefault(); if (question.trim()) setAsked(true); }} className="tutor-form"><input value={question} onChange={(event) => { setQuestion(event.target.value); setAsked(false); }} placeholder="Ask about this session..." aria-label="Ask your study tutor" /><button type="submit" aria-label="Send question">↑</button></form><button className="voice-button" onClick={() => setQuestion('Explain the most important step aloud')}>◉ Try a voice question</button></section>;
}

function Dashboard() {
  const [selectedSession, setSelectedSession] = useState(0);
  const session = sessions[selectedSession];
  return <><SiteNav active="/app/" /><main className="app-shell"><div className="container"><div className="app-welcome"><div><p className="eyebrow">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }).toUpperCase()}</p><h1>Good morning, Alex.</h1><p className="lead">Pick up where your curiosity left off.</p></div><button className="btn btn-primary" disabled>＋ New study session</button></div><div className="row g-4"><div className="col-lg-4"><section className="sessions-column"><div className="column-heading"><h2>Your sessions</h2><span>3 total</span></div>{sessions.map((item, index) => <SessionCard key={item.title} session={item} selected={index === selectedSession} onSelect={() => setSelectedSession(index)} />)}<button className="text-button" disabled>View all sessions →</button></section></div><div className="col-lg-8"><div className="row g-4"><div className="col-12"><BoardPreview session={session} /></div><div className="col-md-6"><FlashcardDeck /></div><div className="col-md-6"><TutorPanel /></div></div></div></div></div></main></>;
}

function App() { return <Dashboard />; }
createRoot(document.getElementById('root')).render(<App />);
