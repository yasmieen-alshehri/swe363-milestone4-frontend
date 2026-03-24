import Navbar from "../components/Navbar";
import Button from "../components/Button";
import rose from "../assets/rose.png";
import bubble7 from "../assets/bubble7.png";
import bubble8 from "../assets/bubble8.png";

function Home() {
  return (
    <div
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
          <Button text="Add to Cart" variant="primary" />
          <Button text="More Details" variant="secondary" />
        </div>
      </div>
    </div>
  );
}

export default Home;