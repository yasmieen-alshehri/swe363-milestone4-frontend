function Button({ text, variant = "primary", style, onClick, disabled = false }) {
  const classes = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    purple: "btn-purple",
    purpleDisabled: "btn-purple-disabled",
  };

  return (
    <button
      className={classes[variant]}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;