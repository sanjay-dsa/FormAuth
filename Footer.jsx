import React from "react";
import {
  Facebook,
  Instagram,
  Github,
  Linkedin,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          {/* Logo Section */}
          <div className="footer-box">
            <h2>CodeCraft</h2>
            <p>
              Modern responsive website with beautiful UI,
              smooth animation and mobile friendly design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-box">
            <h3>Quick Links</h3>

            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Services</a></li>
              <li><a href="/">Projects</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-box">
            <h3>Follow Us</h3>

            <div className="social-icons">
              <a href="/"><Facebook size={20} /></a>
              <a href="/"><Instagram size={20} /></a>
              <a href="/"><Github size={20} /></a>
              <a href="/"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-box">
            <h3>Newsletter</h3>

            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />

              <button>
                <Send size={18} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© 2026 CodeCraft. All Rights Reserved.</p>
        </div>
      </footer>

      {/* CSS */}
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial, sans-serif;
        }

        body{
          background:#0f172a;
        }

        .footer{
          width:100%;
          background:linear-gradient(180deg,#111827,#020617);
          color:white;
          padding-top:60px;
          margin-top:50px;
        }

        .footer-container{
          width:90%;
          max-width:1200px;
          margin:auto;
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:35px;
          padding-bottom:40px;
        }

        .footer-box{
          animation:fadeUp 1s ease;
        }

        .footer-box h2{
          font-size:32px;
          color:#3b82f6;
          margin-bottom:15px;
        }

        .footer-box h3{
          font-size:22px;
          margin-bottom:18px;
        }

        .footer-box p{
          color:#cbd5e1;
          line-height:1.7;
          font-size:15px;
        }

        .footer-box ul{
          list-style:none;
        }

        .footer-box ul li{
          margin:12px 0;
        }

        .footer-box ul li a{
          text-decoration:none;
          color:#cbd5e1;
          transition:0.3s;
        }

        .footer-box ul li a:hover{
          color:#3b82f6;
          padding-left:5px;
        }

        .social-icons{
          display:flex;
          gap:15px;
          margin-top:10px;
        }

        .social-icons a{
          width:42px;
          height:42px;
          display:flex;
          align-items:center;
          justify-content:center;
          background:#1e293b;
          border-radius:50%;
          color:white;
          transition:0.3s;
        }

        .social-icons a:hover{
          background:#2563eb;
          transform:translateY(-5px);
        }

        .newsletter{
          display:flex;
          margin-top:10px;
          background:#1e293b;
          border-radius:12px;
          overflow:hidden;
        }

        .newsletter input{
          flex:1;
          padding:14px;
          border:none;
          outline:none;
          background:transparent;
          color:white;
        }

        .newsletter button{
          border:none;
          background:#2563eb;
          color:white;
          width:55px;
          cursor:pointer;
          transition:0.3s;
        }

        .newsletter button:hover{
          background:#1d4ed8;
        }

        .footer-bottom{
          text-align:center;
          border-top:1px solid rgba(255,255,255,0.1);
          padding:20px;
          color:#94a3b8;
          font-size:14px;
        }

        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(40px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        /* Mobile */
        @media(max-width:600px){

          .footer{
            padding-top:40px;
          }

          .footer-box h2{
            font-size:26px;
          }

          .footer-box h3{
            font-size:20px;
          }

          .newsletter input{
            padding:12px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
