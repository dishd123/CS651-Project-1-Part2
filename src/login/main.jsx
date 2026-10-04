import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../../css/site.css';

function LoginForm({ credentials, setCredentials, onCreateAccount }) {
  const [message, setMessage] = useState('');
  return <form className="auth-form" onSubmit={(event) => { event.preventDefault(); setMessage(`Welcome back, ${credentials.login || 'learner'}!`); }}><p className="eyebrow">WELCOME BACK</p><h1>Sign in to your board.</h1><p className="auth-copy">Continue building understanding, one session at a time.</p><label htmlFor="login">Login</label><input id="login" className="form-control" value={credentials.login} onChange={(event) => setCredentials({ ...credentials, login: event.target.value })} required placeholder="Your login" /><label htmlFor="password">Password</label><input id="password" type="password" className="form-control" value={credentials.password} onChange={(event) => setCredentials({ ...credentials, password: event.target.value })} required placeholder="Your password" /><button className="btn btn-primary w-100 mt-4" type="submit">Sign in</button><button className="create-account-button" type="button" onClick={onCreateAccount}>Create an account</button>{message && <p className="form-status" aria-live="polite">{message}</p>}</form>;
}

function CreateAccountForm({ credentials, setCredentials, onComplete }) {
  const [details, setDetails] = useState({ name: '', email: '', login: '', password: '' });
  const update = (key, value) => setDetails({ ...details, [key]: value });
  return <form className="auth-form account-form" onSubmit={(event) => { event.preventDefault(); setCredentials({ login: details.login, password: details.password }); onComplete(); }}><p className="eyebrow">NEW HERE?</p><h2>Create your account.</h2><p className="auth-copy">Set up a personal space for your class material.</p>{[['name', 'Name', 'Your name'], ['email', 'Email', 'you@example.com'], ['login', 'Login', 'Choose a login'], ['password', 'Password', 'Choose a password']].map(([key, label, placeholder]) => <React.Fragment key={key}><label htmlFor={`account-${key}`}>{label}</label><input id={`account-${key}`} className="form-control" type={key === 'password' ? 'password' : key === 'email' ? 'email' : 'text'} required placeholder={placeholder} value={details[key]} onChange={(event) => update(key, event.target.value)} /></React.Fragment>)}<button className="btn btn-primary w-100 mt-4" type="submit">Enter</button><button className="create-account-button" type="button" onClick={onComplete}>Back to sign in</button></form>;
}

function LoginApp() {
  const [showAccount, setShowAccount] = useState(false);
  const [credentials, setCredentials] = useState({ login: '', password: '' });
  return <><nav className="navbar site-nav"><div className="container"><a className="navbar-brand" href="/"><span className="brand-mark">S</span> StudyBoard</a><a className="app-back" href="/">← Back to home</a></div></nav><main className="auth-page"><div className="auth-layout"><div className="auth-visual image-slot" role="img" aria-label="Image placeholder for a StudyBoard learning moment"><span>IMAGE PLACEHOLDER<br /><small>Teammate: add learning visual here</small></span><div className="auth-scribble">learn<br />what<br />matters</div></div><div className="auth-card">{showAccount ? <CreateAccountForm credentials={credentials} setCredentials={setCredentials} onComplete={() => setShowAccount(false)} /> : <LoginForm credentials={credentials} setCredentials={setCredentials} onCreateAccount={() => setShowAccount(true)} />}</div></div></main></>;
}

createRoot(document.getElementById('root')).render(<LoginApp />);
