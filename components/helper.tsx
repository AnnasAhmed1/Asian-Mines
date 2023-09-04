import "../styles/helper.css";

export const H1 = ({
  text = "",
  center = false,
  underline = false,
  fontWeight = "bold",
  color = "",
  padding = "0px",
  margin = "0px",
  style = {},
}) => {
  return (
    <h1
      style={{
        textAlign: center ? "center" : "left",
        textDecoration: underline ? "underline" : "",
        fontWeight,
        color: `var(--${color})`,
        padding,
        margin,
        ...style,
      }}
      className="helper-h1"
    >
      {text}
    </h1>
  );
};
export const H2 = ({
  text = "",
  center = false,
  underline = false,
  fontWeight = "bold",
  color = "",
  padding = "0px",
  margin = "0px",
  style = {},
}) => {
  return (
    <h2
      style={{
        textAlign: center ? "center" : "left",
        textDecoration: underline ? "underline" : "",
        fontWeight,
        color: `var(--${color})`,
        padding,
        margin,
        ...style,
      }}
      className="helper-h2"
    >
      {text}
    </h2>
  );
};
export const H3 = ({
  text = "",
  center = false,
  underline = false,
  fontWeight = "bold",
  color = "primary",
  style = {},
}) => {
  return (
    <h3
      style={{
        textAlign: center ? "center" : "left",
        textDecoration: underline ? "underline" : "",
        fontWeight,
        color: `var(--${color})`,
        ...style,
      }}
      className="helper-h3"
    >
      {text}
    </h3>
  );
};

export const P1 = ({
  text = "",
  center = false,
  underline = false,
  fontWeight = "normal",
  color = "textLight",
  padding = "0px",
  margin = "0px",
  style = {},
}) => {
  return (
    <p
      style={{
        textAlign: center ? "center" : "left",
        textDecoration: underline ? "underline" : "",
        fontWeight,
        color: `var(--${color})`,
        padding,
        margin,
        ...style,
      }}
      className="helper-p2"
    >
      {text}
    </p>
  );
};
export const P2 = ({
  text = "",
  center = false,
  underline = false,
  fontWeight = "normal",
  color = "",
  padding = "0px",
  margin = "0px",
  style = {},
}) => {
  return (
    <p
      style={{
        textAlign: center ? "center" : "left",
        textDecoration: underline ? "underline" : "",
        fontWeight,
        color,
        padding,
        margin,
        ...style,
      }}
      className="helper-p2"
    >
      {text}
    </p>
  );
};
export const P3 = ({
  text = "",
  center = false,
  underline = false,
  fontWeight = "normal",
  color = "",
  style = {},
}) => {
  return (
    <p
      style={{
        textAlign: center ? "center" : "left",
        textDecoration: underline ? "underline" : "",
        fontWeight,
        color: `var(--${color})`,
        ...style,
      }}
      className="helper-p3"
    >
      {text}
    </p>
  );
};
