import "./styles.css";

const Button = ({ children, style, ...props }: any) => {
  return (
    <a
      href="#rsvp"
      className="btn btn-light scrollto"
      style={{ width: "214px", color: "white", ...style }}
      {...props}
    >
      <span className="h-lines"></span>
      <span className="v-lines"></span>
      {children}
    </a>
  );
};

export default Button;
