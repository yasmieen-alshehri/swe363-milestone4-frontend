function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  error,
  textarea = false,
  rows = 5,
}) {
  const commonStyle = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1px solid #b9b9b9",
    outline: "none",
    fontSize: "14px",
    fontFamily: "Josefin Sans, sans-serif",
    boxSizing: "border-box",
    background: "white",
  };

  return (
    <div style={{ width: "100%" }}>
      <label
        style={{
          display: "block",
          marginBottom: "6px",
          fontSize: "14px",
          color: "#444",
        }}
      >
        {label}
      </label>

      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          style={{ ...commonStyle, resize: "none" }}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={commonStyle}
        />
      )}

      {error && (
        <p
          style={{
            color: "#ff5a45",
            fontSize: "12px",
            marginTop: "6px",
            marginBottom: 0,
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;