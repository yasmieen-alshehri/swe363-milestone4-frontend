import Navbar from "../components/Navbar";
import Button from "../components/Button";
import rose from "../assets/rose.png";
import bubble7 from "../assets/bubble7.png";
import bubble8 from "../assets/bubble8.png";
import heart from "../assets/heart.png";
import heartFilled from "../assets/heart-filled.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [liked, setLiked] = useState(false);

  const isLoggedIn = false; 

  const handleWishlist = () => {
    if (!isLoggedIn) {
      alert("Please login first");
      return;
    }

    setLiked(!liked);
  };

  return (
    <div
      className="pink-page"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Navbar />

      <img
        src={bubble7}
        alt="bubble left"
        style={{
          position: "absolute",
          left: "5px",
          bottom: "20px",
          width: "500px",
          opacity: 0.9,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <img
        src={bubble8}
        alt="bubble right"
        style={{
          position: "absolute",
          right: "2px",
          top: "20px",
          width: "500px",
          opacity: 0.9,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          paddingTop: "40px",
          position: "relative",
          zIndex: 2,
        }}
      >
        
        <img
          src={rose}
          alt="Bubble Soap"
          style={{
            width: "560px",
            maxWidth: "100%",
            filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.18))",
            marginBottom: "10px",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "-50px",
          }}
        >
          {/* Add to Cart */}
          <Button
            text="Add to Cart"
            variant="primary"
            onClick={() => {
              if (!isLoggedIn) {
                alert("Please login first");
              } else {
                alert("Added to cart");
              }
            }}
          />

          {/* More Details */}
          <Button
            text="More Details"
            variant="secondary"
            onClick={() => navigate("/product-details/1")}
          />

          {/* ❤️ Heart */}
          <img
            src={liked ? heartFilled : heart}
            alt="wishlist"
            onClick={handleWishlist}
            style={{
              width: "22px",
              height: "22px",
              cursor: "pointer",
              transition: "0.3s",
              transform: liked ? "scale(1.2)" : "scale(1)",
              opacity: liked ? 1 : 0.7,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;