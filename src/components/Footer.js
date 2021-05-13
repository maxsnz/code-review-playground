import React from "react";

const footerStyle = {
  flexShrink: "0",
  padding: "20px 0",
  color: "darkgrey",
};
const Footer = () => ({
  render() {
    return (
      <footer style={footerStyle}>
        <div className="container">footer contents</div>
      </footer>
    );
  },
});

export default Footer;
