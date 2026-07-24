import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="loader-container">
        <svg
          className="raw_logo"
          width="480"
          height="310"
          viewBox="0 0 480 310"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hexagon Frame Outer */}
          <path
            className="myHexagon"
            d="M313.545 167.405L249.5 204.381C247.025 205.81 243.975 205.81 241.5 204.381L177.455 167.405C174.98 165.976 173.455 163.335 173.455 160.476L173.455 86.5234C173.455 83.6653 174.98 81.0243 177.455 79.5952L241.5 42.6187C243.975 41.1896 247.025 41.1897 249.5 42.6187L313.545 79.5952C316.02 81.0243 317.545 83.6653 317.545 86.5234L317.545 160.476C317.545 163.335 316.02 165.976 313.545 167.405Z"
            stroke={theme.body}
            strokeWidth="4"
          />
          {/* Hexagon Frame Inner */}
          <path
            className="myHexagon"
            d="M167.455 73.5953L231.5 36.6188C233.975 35.1898 237.025 35.1898 239.5 36.6188L303.545 73.5953C306.02 75.0244 307.545 77.6654 307.545 80.5235L307.545 154.477C307.545 157.335 306.02 159.976 303.545 161.405L239.5 198.381C237.025 199.81 233.975 199.81 231.5 198.381L167.455 161.405C164.98 159.976 163.455 157.335 163.455 154.477L163.455 80.5235C163.455 77.6654 164.98 75.0244 167.455 73.5953Z"
            stroke={theme.body}
            strokeWidth="4"
          />

          {/* AVM Initials Text */}
          <text
            x="245"
            y="135"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="none"
            stroke={theme.body}
            strokeWidth="3"
            className="initials-text"
            style={{
              fontFamily: "'Google Sans', 'Inter', sans-serif",
              fontSize: "52px",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            AVM
          </text>

          {/* Signature Cursive Text */}
          <text
            x="245"
            y="255"
            textAnchor="middle"
            fill="none"
            stroke={theme.body}
            strokeWidth="2"
            className="signature-text"
            style={{
              fontFamily: "'Agustina Regular', cursive",
              fontSize: "36px",
              fontWeight: "normal",
            }}
          >
            Aldi Vandiaz Maulana
          </text>
        </svg>
      </div>
    );
  }
}

export default LogoLoader;
