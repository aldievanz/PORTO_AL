import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import "./Resume.css";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { greeting } from "../../portfolio";

export default class ResumePage extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="resume-main">
        <Header theme={theme} />
        <div className="resume-view">
          <Fade bottom duration={1500} distance="30px">
            <div>
              {/* Download / Print Button */}
              <div className="download-btn">
                <Button
                  text="📄 Cetak / Simpan PDF"
                  newTab={false}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.print();
                  }}
                  theme={theme}
                />
              </div>

              {/* Exact LaTeX / Academic Resume Paper (Matches Template PDF View) */}
              <div className="academic-resume-paper">
                {/* Header */}
                <div className="latex-header">
                  <h1 className="latex-name">ALDI VANDIAZ MAULANA</h1>
                  <div className="latex-contact">
                    Semarang, Jawa Tengah, Indonesia &nbsp;|&nbsp; +62
                    822-4540-0182
                  </div>
                  <div className="latex-contact-links">
                    <a href="mailto:aldivandiazmaulana@gmail.com">
                      aldivandiazmaulana@gmail.com
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="https://www.linkedin.com/in/aldi-vandiaz-maulana-5450012a8/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/aldi-vandiaz-maulana-5450012a8
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="https://github.com/aldievanz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/aldievanz
                    </a>
                  </div>
                </div>

                {/* Ringkasan Profil */}
                <div className="latex-section">
                  <h2 className="latex-section-title">Profile Summary</h2>
                  <hr className="latex-hr" />
                  <p className="latex-text">
                    Lulusan D3 Teknik Informatika Universitas Dian Nuswantoro
                    (IPK 3.48 / 4.00) dengan fokus pada pengembangan Frontend
                    Web. Berpengalaman magang 6 bulan sebagai Staff IT Web
                    Programmer di PT Pertamina Lubricants, membangun dashboard
                    dan sistem manajemen berbasis React.js dengan integrasi API
                    dari backend NestJS. Terbiasa membangun UI yang responsif
                    dan reusable component menggunakan React.js, TypeScript, dan
                    Material UI, serta memiliki pemahaman backend (NestJS,
                    PostgreSQL) yang membantu kolaborasi lintas tim. Memiliki
                    kemampuan problem solving yang baik, cepat belajar, dan
                    mampu bekerja mandiri maupun dalam tim.
                  </p>
                </div>

                {/* Education */}
                <div className="latex-section">
                  <h2 className="latex-section-title">Education</h2>
                  <hr className="latex-hr" />
                  <div className="latex-item">
                    <div className="latex-row">
                      <span className="latex-bold">
                        Universitas Dian Nuswantoro
                      </span>
                      <span className="latex-right-italic">2023 – 2026</span>
                    </div>
                    <div className="latex-row">
                      <span className="latex-italic">
                        Diploma 3 (D3) Teknik Informatika
                      </span>
                      <span className="latex-right-italic">
                        Semarang, Jawa Tengah, Indonesia
                      </span>
                    </div>
                    <ul className="latex-list">
                      <li>
                        Cumulative GPA: <strong>3.48 / 4.00</strong>{" "}
                        &nbsp;|&nbsp; Yudisium: <strong>10 Juli 2026</strong>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Experience */}
                <div className="latex-section">
                  <h2 className="latex-section-title">Experience</h2>
                  <hr className="latex-hr" />
                  <div className="latex-item">
                    <div className="latex-row">
                      <span className="latex-bold">
                        PT Pertamina Lubricants (Anak Perusahaan Pertamina Patra
                        Niaga)
                      </span>
                      <span className="latex-right-italic">
                        8 September 2025 – 19 Januari 2026
                      </span>
                    </div>
                    <div className="latex-row">
                      <span className="latex-italic">
                        Staff IT (Web Programmer)
                      </span>
                      <span className="latex-right-italic">
                        Gambir, Jakarta, Indonesia
                      </span>
                    </div>
                    <ul className="latex-list">
                      <li>
                        Membangun UI dashboard manajemen BBM untuk laporan
                        bulanan menggunakan React.js.
                      </li>
                      <li>
                        Berkolaborasi dengan tim IT dalam mengembangkan fitur
                        baru pada aplikasi internal Perusahaan.
                      </li>
                      <li>
                        Mengembangkan dan memelihara aplikasi web internal
                        Perusahaan (frontend & integrasi API dari NestJS).
                      </li>
                      <li>
                        Mendukung operasional sistem informasi Perusahaan agar
                        berjalan optimal.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Technical Skills */}
                <div className="latex-section">
                  <h2 className="latex-section-title">Technical Skills</h2>
                  <hr className="latex-hr" />
                  <ul className="latex-skills-list">
                    <li>
                      <strong>Languages & Full Stack:</strong> React.js,
                      TypeScript, JavaScript (ES6+), HTML5, CSS3, Material UI
                      (MUI), React Query (TanStack), Axios
                    </li>
                    <li>
                      <strong>Backend & Databases:</strong> NestJS, RESTful API,
                      Laravel, CodeIgniter, PHP, Java, PostgreSQL, MySQL,
                      HeidiSQL
                    </li>
                    <li>
                      <strong>Developer Tools & Cloud:</strong> Git, GitHub,
                      Visual Studio Code, Android Studio, Postman, Vercel,
                      Google Cloud Platform (GCP), AWS Cloud Fundamental
                    </li>
                    <li>
                      <strong>Soft Skills:</strong> Kerja Tim, Problem Solving,
                      Komunikasi, Cepat Belajar, Adaptivitas
                    </li>
                  </ul>
                </div>

                {/* Projects */}
                <div className="latex-section">
                  <h2 className="latex-section-title">Projects</h2>
                  <hr className="latex-hr" />

                  <div className="latex-item">
                    <div className="latex-row">
                      <span className="latex-bold">
                        Plant Map Management System
                      </span>
                      <span className="latex-right-italic">
                        September 2025 – November 2025
                      </span>
                    </div>
                    <div className="latex-row">
                      <span className="latex-italic">React.js & NestJS</span>
                    </div>
                    <ul className="latex-list">
                      <li>
                        Sistem web untuk pemetaan dan monitoring lokasi
                        plant/unit produksi dengan fitur CRUD, manajemen user,
                        visualisasi peta, dan role-based access control (RBAC).
                      </li>
                    </ul>
                  </div>

                  <div className="latex-item">
                    <div className="latex-row">
                      <span className="latex-bold">IT Analitik System</span>
                      <span className="latex-right-italic">
                        September 2025 – Desember 2025
                      </span>
                    </div>
                    <div className="latex-row">
                      <span className="latex-italic">
                        React.js, TypeScript, Material UI, React Query &
                        ApexCharts
                      </span>
                    </div>
                    <ul className="latex-list">
                      <li>
                        Sistem analitik dan monitoring aset IT berbasis web
                        dengan dashboard real-time, visualisasi data
                        (ApexCharts, Chart.js), integrasi Google Maps untuk
                        pemetaan lokasi aset, serta modul import/export laporan.
                        Berperan dalam pengembangan frontend dashboard dan
                        manajemen state.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Certifications */}
                <div className="latex-section">
                  <h2 className="latex-section-title">Certifications</h2>
                  <hr className="latex-hr" />
                  <ul className="latex-list">
                    <li>
                      <strong>Certification Scheme of Web Developer</strong> –
                      Badan Nasional Sertifikasi Profesi (BNSP)
                      &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      <em>Januari 2025 – Januari 2028</em> &nbsp;|&nbsp; ID:
                      62010 2131 5 007587 2025
                    </li>
                    <li>
                      <strong>
                        Certification Scheme of Pemrograman Mobil Pratama
                        (Junior Mobile Programmer)
                      </strong>{" "}
                      – BNSP &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      <em>September 2025 – September 2028</em> &nbsp;|&nbsp; ID:
                      62010 2512 5 008276 2025
                    </li>
                  </ul>
                </div>

                {/* Organization */}
                <div className="latex-section">
                  <h2 className="latex-section-title">Organization</h2>
                  <hr className="latex-hr" />
                  <div className="latex-item">
                    <div className="latex-row">
                      <span className="latex-bold">
                        Himpunan Mahasiswa Diploma Teknik Informatika (HMDTI
                        UDINUS)
                      </span>
                      <span className="latex-right-italic">2024 – 2025</span>
                    </div>
                    <div className="latex-row">
                      <span className="latex-italic">Anggota</span>
                      <span className="latex-right-italic">
                        Semarang, Indonesia
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}
