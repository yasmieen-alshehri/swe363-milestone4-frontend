import { useState } from "react";
import logo from "../assets/bubble-logo.png";
import cart from "../assets/cart.png";
import profile from "../assets/profile-picture.png";

function Navbar() {
  const [active, setActive] = useState("Home");
  const links = ["Home", "Products", "Contact Us"];

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 28px",
        margin: "16px auto",
        maxWidth: "1280px",
        width: "calc(100% - 48px)",
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        background: "rgba(255, 255, 255, 0.12)",
        border: "1px solid rgba(255,255,255,0.25)",
        borderRadius: "50px",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 100,
      }}
    >
      {/* Left: Logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="Bubble Logo"
          style={{
            width: "95px",
            objectFit: "contain",
            cursor: "pointer",
          }}
        />
      </div>

      {/* Center: Navigation links */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "36px",
          alignItems: "center",
        }}
      >
        {links.map((link) => (
          <span
            key={link}
            onClick={() => setActive(link)}
            style={{
              cursor: "pointer",
              color: active === link ? "#ffffff" : "#6d3a45",
              fontWeight: active === link ? 700 : 500,
              textDecoration: active === link ? "underline" : "none",
              textUnderlineOffset: "6px",
              fontSize: "16px",
              transition: "all 0.2s ease",
            }}
          >
            {link}
          </span>
        ))}
      </div>

      {/* Right: Cart + Profile */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <img
          src={cart}
          alt="Cart"
          style={{
            width: "24px",
            height: "24px",
            objectFit: "contain",
            cursor: "pointer",
          }}
        />

        <img
          src={profile}
          alt="Profile"
          style={{
            width: "34px",
            height: "34px",
            objectFit: "cover",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        />
      </div>
    </nav>
  );
}

export default Navbar;