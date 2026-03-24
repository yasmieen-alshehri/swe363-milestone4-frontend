function Button({ text, variant = "primary", style }) {
  const classes = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    purple: "btn-purple",
    purpleDisabled: "btn-purple-disabled",
  };

  return (
    <button className={classes[variant]} style={style}>
      {text}
    </button>
    
  );
}

export default Button;