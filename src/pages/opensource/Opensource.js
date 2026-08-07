import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./Opensource.css";

class Opensource extends Component {
  render() {
    return (
      <div className="opensource-main">
        <Header theme={this.props.theme} />
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h1 style={{ color: this.props.theme.text, marginTop: "2rem" }}>
            Open Source
          </h1>
          <p
            style={{
              color: this.props.theme.secondaryText,
              maxWidth: "600px",
              margin: "1rem auto",
            }}
          >
            Halaman ini akan diisi dengan kontribusi open source saya di masa
            mendatang. Stay tuned!
          </p>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Opensource;
