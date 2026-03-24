import { useState, useEffect } from "react";
import logo from "../assets/bubble-logo.png";
import cart from "../assets/cart.png";
import profile from "../assets/profile-picture.png";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = ["Home", "Products", "Contact Us"];

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobile ? "8px 14px" : "10px 22px",
          margin: isMobile ? "10px auto" : "16px auto",
          maxWidth: isMobile ? "95%" : "1000px",
          width: isMobile ? "95%" : "90%",
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(255, 255, 255, 0.12)",
          border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: isMobile ? "22px" : "30px",
          backdropFilter: "blur(12px)",
          zIndex: 100,
        }}
      >
        <img
          src={logo}
          alt="Bubble Logo"
          style={{
            width: isMobile ? "70px" : "95px",
          }}
        />

        {!isMobile && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "30px",
            }}
          >
            {links.map((link) => (
              <span
                key={link}
                onClick={() => setActive(link)}
                style={{
                  cursor: "pointer",
                  color: active === link ? "#fff" : "#333",
                  fontWeight: active === link ? 700 : 400,
                  textDecoration: active === link ? "underline" : "none",
                  transition: "all 0.3s ease",
                }}
              >
                {link}
              </span>
            ))}
          </div>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {isMobile && (
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                fontSize: "22px",
                cursor: "pointer",
                color: "#333",
              }}
            >
              ☰
            </div>
          )}

          <img
            src={cart}
            alt="Cart"
            style={{
              width: isMobile ? "20px" : "24px",
              objectFit: "contain",
            }}
          />

          <img
            src={profile}
            alt="Profile"
            style={{
              width: isMobile ? "26px" : "34px",
              height: isMobile ? "26px" : "34px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>
      </nav>

      {isMobile && menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(12px)",
            borderRadius: "20px",
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            textAlign: "center",
            zIndex: 99,
          }}
        >
          {links.map((link) => (
            <span
              key={link}
              onClick={() => {
                setActive(link);
                setMenuOpen(false);
              }}
              style={{
                cursor: "pointer",
                color: active === link ? "#fff" : "#2e3d4c",
                fontWeight: active === link ? 700 : 400,
                transition: "all 0.3s ease",
              }}
            >
              {link}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;