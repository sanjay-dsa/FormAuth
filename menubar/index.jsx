import { useState } from "react";

// ── Helpers ──────────────────────────────────────────────────────────────────

function getStrength(pwd) {
  let s = 0;
  if (pwd.length >= 8) s++;
  if (/[A-Z]/.test(pwd)) s++;
  if (/[0-9]/.test(pwd)) s++;
  if (/[^A-Za-z0-9]/.test(pwd)) s++;
  return s;
}

const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"];
const strengthColor = [
  "",
  "text-red-400",
  "text-amber-400",
  "text-emerald-400",
  "text-indigo-400",
];
const segColor = [
  "",
  "bg-red-500",
  "bg-amber-500",
  "bg-emerald-500",
  "bg-indigo-500",
];

function StrengthBar({ password }) {
  const s = getStrength(password);
  if (!password.length) return null;
  return (
    <div className="mt-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
              i <= s ? segColor[s] : "bg-white/10"
            }`}
          />
        ))}
      </div>
      <p className={`text-[11px] mt-1 ${strengthColor[s]}`}>
        {strengthLabel[s]}
      </p>
    </div>
  );
}

function EyeIcon({ show }) {
  return show ? (
    <svg
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  ) : (
    <svg
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

// ── Reusable Field ────────────────────────────────────────────────────────────

function Field({ label, icon, type = "text", placeholder, value, onChange, rightSlot }) {
  return (
    <div className="mb-5">
      <label className="block text-[11px] font-semibold text-white/40 uppercase tracking-widest mb-2">
        {label}
      </label>
      <div className="relative group">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-indigo-400 transition-colors text-base pointer-events-none">
          {icon}
        </span>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-10 pr-10 text-white text-sm placeholder-white/20 outline-none focus:bg-white/8 focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200 font-[DM_Sans]"
        />
        {rightSlot && (
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
            {rightSlot}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Checkbox ──────────────────────────────────────────────────────────────────

function Checkbox({ checked, onToggle, children }) {
  return (
    <div
      className="flex items-center gap-2.5 mb-5 cursor-pointer select-none"
      onClick={onToggle}
    >
      <div
        className={`w-[18px] h-[18px] flex-shrink-0 rounded-md border flex items-center justify-center transition-all duration-200 ${
          checked
            ? "bg-indigo-500 border-indigo-500"
            : "bg-white/5 border-white/15"
        }`}
      >
        {checked && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M2 5l2.5 2.5L8 3"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <span className="text-[13px] text-white/50">{children}</span>
    </div>
  );
}

// ── Success Banner ────────────────────────────────────────────────────────────

function SuccessBanner({ children }) {
  return (
    <div className="bg-emerald-500/10 border border-emerald-500/25 rounded-xl px-4 py-3 text-emerald-300 text-[13px] mb-5 animate-fade-up">
      {children}
    </div>
  );
}

// ── Background Orbs ───────────────────────────────────────────────────────────

function Orbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div
        className="absolute rounded-full blur-[80px] opacity-30 animate-float-1"
        style={{
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(99,102,241,0.6), transparent)",
          top: -100,
          left: -100,
        }}
      />
      <div
        className="absolute rounded-full blur-[80px] opacity-25 animate-float-2"
        style={{
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(236,72,153,0.6), transparent)",
          bottom: -80,
          right: -80,
        }}
      />
      <div
        className="absolute rounded-full blur-[80px] opacity-20 animate-float-3"
        style={{
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, rgba(34,211,238,0.6), transparent)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />
    </div>
  );
}

// ── Login Form ────────────────────────────────────────────────────────────────

function LoginForm({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [remember, setRemember] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    if (!email || !password) return;
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="w-full max-w-[440px] px-4 animate-slide-in-right">
      <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-10 shadow-[0_32px_80px_rgba(0,0,0,0.5)] relative overflow-hidden">
        {/* Inner top shine */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Logo */}
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-xl mb-6 shadow-lg animate-pulse-ring">
          ✦
        </div>

        <h1 className="font-[Syne] text-[28px] font-extrabold text-white tracking-tight mb-1">
          Welcome Back
        </h1>
        <p className="text-[14px] text-white/40 mb-8">
          Sign in to continue your journey
        </p>

        {success && <SuccessBanner>✓ Login successful! Redirecting...</SuccessBanner>}

        <Field
          label="Email Address"
          icon="✉"
          type="email"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="mb-5">
          <div className="flex justify-between items-center mb-2">
            <label className="text-[11px] font-semibold text-white/40 uppercase tracking-widest">
              Password
            </label>
            <button className="text-[12px] text-indigo-400 hover:text-indigo-300 transition-colors bg-transparent border-none cursor-pointer">
              Forgot password?
            </button>
          </div>
          <div className="relative group">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-indigo-400 transition-colors text-base pointer-events-none">
              🔒
            </span>
            <input
              type={showPwd ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-10 pr-12 text-white text-sm placeholder-white/20 outline-none focus:bg-white/8 focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
            />
            <button
              onClick={() => setShowPwd((v) => !v)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors bg-transparent border-none cursor-pointer"
            >
              <EyeIcon show={showPwd} />
            </button>
          </div>
        </div>

        <Checkbox checked={remember} onToggle={() => setRemember((v) => !v)}>
          Remember me for 30 days
        </Checkbox>

        <button
          onClick={handleSubmit}
          className="w-full py-3.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-[Syne] font-bold text-[15px] tracking-wide border-none cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(99,102,241,0.4)] active:translate-y-0 transition-all duration-200 mt-1"
        >
          Sign In →
        </button>

        <div className="flex items-center gap-3 my-6 text-white/20 text-xs">
          <div className="flex-1 h-px bg-white/8" />
          or continue with
          <div className="flex-1 h-px bg-white/8" />
        </div>

        <button className="w-full py-3 bg-white/5 border border-white/8 rounded-xl text-white/70 text-sm flex items-center justify-center gap-2.5 hover:bg-white/9 hover:border-white/15 hover:text-white transition-all duration-200 cursor-pointer">
          <GoogleIcon />
          Sign in with Google
        </button>

        <p className="text-center mt-6 text-[13px] text-white/40">
          Don't have an account?{" "}
          <button
            onClick={onSwitch}
            className="text-indigo-400 hover:text-indigo-300 font-medium bg-transparent border-none cursor-pointer text-[13px] transition-colors"
          >
            Create one
          </button>
        </p>
      </div>
    </div>
  );
}

// ── Register Form ─────────────────────────────────────────────────────────────

function RegisterForm({ onSwitch }) {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [showPwd, setShowPwd] = useState(false);
  const [showCfm, setShowCfm] = useState(false);
  const [agree, setAgree] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = () => {
    if (!form.fname || !form.email || !form.password) return;
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  const pwdMismatch =
    form.confirm.length > 0 && form.password !== form.confirm;

  return (
    <div className="w-full max-w-[440px] px-4 animate-slide-in-left">
      <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-10 shadow-[0_32px_80px_rgba(0,0,0,0.5)] relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-xl mb-6 shadow-lg animate-pulse-ring">
          ✦
        </div>

        <h1 className="font-[Syne] text-[28px] font-extrabold text-white tracking-tight mb-1">
          Create Account
        </h1>
        <p className="text-[14px] text-white/40 mb-8">
          Join us today — it's completely free
        </p>

        {success && (
          <SuccessBanner>🎉 Account created successfully!</SuccessBanner>
        )}

        {/* Name row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-semibold text-white/40 uppercase tracking-widest mb-2">
              First Name
            </label>
            <div className="relative group">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-indigo-400 transition-colors pointer-events-none">
                👤
              </span>
              <input
                placeholder="John"
                value={form.fname}
                onChange={set("fname")}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-10 pr-3 text-white text-sm placeholder-white/20 outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
              />
            </div>
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-white/40 uppercase tracking-widest mb-2">
              Last Name
            </label>
            <div className="relative group">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-indigo-400 transition-colors pointer-events-none">
                👤
              </span>
              <input
                placeholder="Doe"
                value={form.lname}
                onChange={set("lname")}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-10 pr-3 text-white text-sm placeholder-white/20 outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Field
            label="Email Address"
            icon="✉"
            type="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={set("email")}
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block text-[11px] font-semibold text-white/40 uppercase tracking-widest mb-2">
            Password
          </label>
          <div className="relative group">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-indigo-400 transition-colors text-base pointer-events-none">
              🔒
            </span>
            <input
              type={showPwd ? "text" : "password"}
              placeholder="Create a strong password"
              value={form.password}
              onChange={set("password")}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-10 pr-12 text-white text-sm placeholder-white/20 outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
            />
            <button
              onClick={() => setShowPwd((v) => !v)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors bg-transparent border-none cursor-pointer"
            >
              <EyeIcon show={showPwd} />
            </button>
          </div>
          <StrengthBar password={form.password} />
        </div>

        {/* Confirm Password */}
        <div className="mb-5">
          <label className="block text-[11px] font-semibold text-white/40 uppercase tracking-widest mb-2">
            Confirm Password
          </label>
          <div className="relative group">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-indigo-400 transition-colors text-base pointer-events-none">
              🔒
            </span>
            <input
              type={showCfm ? "text" : "password"}
              placeholder="Re-enter your password"
              value={form.confirm}
              onChange={set("confirm")}
              className={`w-full bg-white/5 border rounded-xl py-3.5 pl-10 pr-12 text-white text-sm placeholder-white/20 outline-none transition-all duration-200 focus:ring-2 ${
                pwdMismatch
                  ? "border-red-500/60 focus:ring-red-500/20"
                  : "border-white/10 focus:border-indigo-500/60 focus:ring-indigo-500/20"
              }`}
            />
            <button
              onClick={() => setShowCfm((v) => !v)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors bg-transparent border-none cursor-pointer"
            >
              <EyeIcon show={showCfm} />
            </button>
          </div>
          {pwdMismatch && (
            <p className="text-[11px] text-red-400 mt-1">
              Passwords don't match
            </p>
          )}
        </div>

        <Checkbox checked={agree} onToggle={() => setAgree((v) => !v)}>
          I agree to the{" "}
          <span className="text-indigo-400 cursor-pointer">Terms</span> &{" "}
          <span className="text-indigo-400 cursor-pointer">Privacy Policy</span>
        </Checkbox>

        <button
          onClick={handleSubmit}
          className="w-full py-3.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-[Syne] font-bold text-[15px] tracking-wide border-none cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(99,102,241,0.4)] active:translate-y-0 transition-all duration-200 mt-1"
        >
          Create Account →
        </button>

        <div className="flex items-center gap-3 my-6 text-white/20 text-xs">
          <div className="flex-1 h-px bg-white/8" />
          or continue with
          <div className="flex-1 h-px bg-white/8" />
        </div>

        <button className="w-full py-3 bg-white/5 border border-white/8 rounded-xl text-white/70 text-sm flex items-center justify-center gap-2.5 hover:bg-white/9 hover:border-white/15 hover:text-white transition-all duration-200 cursor-pointer">
          <GoogleIcon />
          Sign up with Google
        </button>

        <p className="text-center mt-6 text-[13px] text-white/40">
          Already have an account?{" "}
          <button
            onClick={onSwitch}
            className="text-indigo-400 hover:text-indigo-300 font-medium bg-transparent border-none cursor-pointer text-[13px] transition-colors"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}

// ── Root App ──────────────────────────────────────────────────────────────────

export default function AuthForms() {
  const [mode, setMode] = useState("login");

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center relative overflow-hidden">
      <Orbs />
      <div className="relative z-10 w-full flex justify-center">
        {mode === "login" ? (
          <LoginForm onSwitch={() => setMode("register")} />
        ) : (
          <RegisterForm onSwitch={() => setMode("login")} />
        )}
      </div>
    </div>
  );
}

/*
 ┌─────────────────────────────────────────────────────┐
 │  tailwind.config.js — add these custom animations   │
 └─────────────────────────────────────────────────────┘

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      keyframes: {
        'slide-in-left': {
          from: { opacity: '0', transform: 'translateX(-60px) scale(0.95)' },
          to:   { opacity: '1', transform: 'translateX(0)     scale(1)'    },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(60px)  scale(0.95)' },
          to:   { opacity: '1', transform: 'translateX(0)     scale(1)'    },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to:   { opacity: '1', transform: 'translateY(0)'    },
        },
        'float-1': {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%':     { transform: 'translate(40px,-30px) scale(1.1)' },
          '66%':     { transform: 'translate(-20px,20px) scale(0.95)' },
        },
        'float-2': {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%':     { transform: 'translate(-50px,30px) scale(1.05)' },
          '66%':     { transform: 'translate(30px,-40px) scale(1.1)' },
        },
        'float-3': {
          '0%,100%': { transform: 'translate(-50%,-50%) scale(1)' },
          '50%':     { transform: 'translate(-50%,-50%) scale(1.08)' },
        },
        'pulse-ring': {
          '0%':   { boxShadow: '0 0 0 0 rgba(99,102,241,0.5)' },
          '70%':  { boxShadow: '0 0 0 10px rgba(99,102,241,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(99,102,241,0)'   },
        },
      },
      animation: {
        'slide-in-left':  'slide-in-left  0.55s cubic-bezier(.22,.68,0,1.2) forwards',
        'slide-in-right': 'slide-in-right 0.55s cubic-bezier(.22,.68,0,1.2) forwards',
        'fade-up':        'fade-up        0.4s ease forwards',
        'float-1':        'float-1 12s ease-in-out infinite',
        'float-2':        'float-2 15s ease-in-out infinite',
        'float-3':        'float-3 10s ease-in-out infinite',
        'pulse-ring':     'pulse-ring 2.5s ease-in-out infinite',
      },
    },
  },
}

 ┌─────────────────────────────────────────────────────┐
 │  index.html — add Google Fonts in <head>            │
 └─────────────────────────────────────────────────────┘

<link
  href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap"
  rel="stylesheet"
/>

 ┌─────────────────────────────────────────────────────┐
 │  Usage in your app                                  │
 └─────────────────────────────────────────────────────┘

import AuthForms from './AuthForms';

function App() {
  return <AuthForms />;
}
*/