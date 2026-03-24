function Button({ text, variant = "primary" }) {
  const styles = {
    primary: {
      background: "#b45f69",
      color: "white",
    },
    secondary: {
      background: "#e7c7cd",
      color: "#6d3a45",
    },
  };

  return (
    <button
      style={{
        padding: "12px 26px",
        margin: "10px",
        border: "none",
        borderRadius: "12px",
        fontWeight: "600",
        cursor: "pointer",
        ...styles[variant],
      }}
    >
      {text}
    </button>
  );
}

export default Button;