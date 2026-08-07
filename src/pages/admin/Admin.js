import React, { useState, useEffect } from "react";
import "./Admin.css";

const LANGUAGE_OPTIONS = [
  { name: "JavaScript", iconifyClass: "logos-javascript" },
  { name: "TypeScript", iconifyClass: "simple-icons:typescript" },
  { name: "Python", iconifyClass: "logos-python" },
  { name: "Java", iconifyClass: "logos-java" },
  { name: "C#", iconifyClass: "logos-c-sharp" },
  { name: "PHP", iconifyClass: "logos-php" },
  { name: "HTML", iconifyClass: "logos-html-5" },
  { name: "CSS", iconifyClass: "logos-css-3" },
  { name: "Rust", iconifyClass: "logos-rust" },
  { name: "Ruby", iconifyClass: "logos:ruby" },
  { name: "Shell", iconifyClass: "simple-icons:shell" },
  { name: "Jupyter Notebook", iconifyClass: "logos-jupyter" },
  { name: "Dockerfile", iconifyClass: "simple-icons:docker" },
  { name: "React", iconifyClass: "simple-icons:react" },
  { name: "NestJS", iconifyClass: "simple-icons:nestjs" },
  { name: "Laravel", iconifyClass: "simple-icons:laravel" },
  { name: "PostgreSQL", iconifyClass: "simple-icons:postgresql" },
  { name: "MySQL", iconifyClass: "simple-icons:mysql" },
  { name: "MongoDB", iconifyClass: "simple-icons:mongodb" },
];

const GITHUB_REPO_OWNER = "aldievanz";
const GITHUB_REPO_NAME = "aldievanz.github.io";
const FILE_PATH = "src/shared/opensource/projects.json";

const emptyForm = {
  id: "",
  name: "",
  createdAt: "",
  url: "",
  description: "",
  isFork: false,
  languages: [],
};

export default function Admin() {
  const [token, setToken] = useState(
    localStorage.getItem("gh_admin_token") || ""
  );
  const [tokenInput, setTokenInput] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("gh_admin_token")
  );
  const [projects, setProjects] = useState([]);
  const [fileSha, setFileSha] = useState("");
  const [form, setForm] = useState({ ...emptyForm });
  const [editIndex, setEditIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ msg: "", type: "" });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      fetchProjectsFromGitHub();
    }
    // eslint-disable-next-line
  }, [isLoggedIn]);

  function handleLogin() {
    if (!tokenInput.trim()) {
      setStatus({ msg: "Token tidak boleh kosong!", type: "error" });
      return;
    }
    localStorage.setItem("gh_admin_token", tokenInput.trim());
    setToken(tokenInput.trim());
    setIsLoggedIn(true);
    setStatus({ msg: "", type: "" });
  }

  function handleLogout() {
    localStorage.removeItem("gh_admin_token");
    setToken("");
    setIsLoggedIn(false);
    setProjects([]);
  }

  const fetchProjectsFromGitHub = async () => {
    try {
      setLoading(true);
      setStatus({ msg: "Menghubungkan ke GitHub...", type: "info" });

      const response = await fetch(
        `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/contents/${FILE_PATH}`,
        {
          headers: {
            Authorization: `token ${token}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );

      if (response.status === 404) {
        setProjects([]);
        setStatus({
          msg: "File belum ada, silakan tambahkan data baru.",
          type: "info",
        });
        setLoading(false);
        return;
      }

      if (!response.ok) {
        throw new Error(
          "Gagal mengambil data dari GitHub. Periksa kembali token Anda."
        );
      }

      const data = await response.json();
      setFileSha(data.sha);

      const decodedContent = b64DecodeUnicode(data.content);
      const parsedData = JSON.parse(decodedContent);

      setProjects(parsedData.data || []);
      setStatus({ msg: "Berhasil terhubung ke GitHub!", type: "success" });
    } catch (error) {
      console.error(error);
      setStatus({ msg: error.message, type: "error" });
      if (error.message.includes("token")) {
        handleLogout();
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchPublicRepos = async () => {
    try {
      setLoading(true);
      setStatus({ msg: "Mengambil repositori dari GitHub...", type: "info" });

      const response = await fetch(
        `https://api.github.com/users/${GITHUB_REPO_OWNER}/repos?per_page=100&type=owner&sort=updated`
      );
      if (!response.ok) {
        throw new Error("Gagal mengambil repositori dari GitHub");
      }
      const repos = await response.json();

      const newProjects = repos.map((repo) => {
        let iconifyClass = "logos:github";
        if (repo.language) {
          const lang = repo.language.toLowerCase();
          if (lang === "javascript") iconifyClass = "logos:javascript";
          else if (lang === "typescript")
            iconifyClass = "logos:typescript-icon";
          else if (lang === "java") iconifyClass = "logos:java";
          else if (lang === "python") iconifyClass = "logos:python";
          else if (lang === "html") iconifyClass = "logos:html-5";
          else if (lang === "css") iconifyClass = "logos:css-3";
          else if (lang === "php") iconifyClass = "logos:php";
          else if (lang === "go") iconifyClass = "logos:go";
          else if (lang === "c++" || lang === "c")
            iconifyClass = "logos:c-plusplus";
          else if (lang === "c#") iconifyClass = "logos:c-sharp";
          else if (lang === "ruby") iconifyClass = "logos:ruby";
          else if (lang === "dart") iconifyClass = "logos:dart";
        }

        return {
          id: repo.node_id || repo.id.toString(),
          name: repo.name,
          createdAt: repo.created_at,
          url: repo.html_url,
          description: repo.description || "",
          isFork: repo.fork,
          languages: repo.language
            ? [{ name: repo.language, iconifyClass: iconifyClass }]
            : [],
        };
      });

      const existingUrls = projects.map((p) => p.url);
      const filteredNewProjects = newProjects.filter(
        (p) => !existingUrls.includes(p.url)
      );

      setProjects([...projects, ...filteredNewProjects]);
      setStatus({
        msg: `Berhasil mengambil ${filteredNewProjects.length} repositori baru (repo yang sudah ada dilewati).`,
        type: "success",
      });
    } catch (error) {
      console.error(error);
      setStatus({ msg: error.message, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  async function saveToGitHub(updatedProjects) {
    setLoading(true);
    setStatus({ msg: "Menyimpan ke GitHub...", type: "info" });
    try {
      const newContent = JSON.stringify({ data: updatedProjects }, null, 2);
      const encoded = btoa(unescape(encodeURIComponent(newContent)));
      const res = await fetch(
        `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/contents/${FILE_PATH}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: `chore: update projects.json via admin panel`,
            content: encoded,
            sha: fileSha,
          }),
        }
      );
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || `Error: ${res.status}`);
      }
      const result = await res.json();
      setFileSha(result.content.sha);
      setProjects(updatedProjects);
      setStatus({
        msg: "✅ Berhasil disimpan & otomatis push ke GitHub!",
        type: "success",
      });
    } catch (e) {
      setStatus({ msg: `❌ Gagal: ${e.message}`, type: "error" });
    } finally {
      setLoading(false);
    }
  }

  function handleFormChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function toggleLanguage(lang) {
    setForm((prev) => {
      const exists = prev.languages.find((l) => l.name === lang.name);
      if (exists) {
        return {
          ...prev,
          languages: prev.languages.filter((l) => l.name !== lang.name),
        };
      } else {
        return {
          ...prev,
          languages: [
            ...prev.languages,
            { name: lang.name, iconifyClass: lang.iconifyClass },
          ],
        };
      }
    });
  }

  function handleAddOrEdit() {
    if (!form.name.trim()) {
      setStatus({ msg: "Nama proyek wajib diisi!", type: "error" });
      return;
    }
    const newProject = {
      ...form,
      id: form.id || Date.now().toString(),
      createdAt: form.createdAt
        ? new Date(form.createdAt).toISOString()
        : new Date().toISOString(),
    };

    let updatedProjects;
    if (editIndex !== null) {
      updatedProjects = projects.map((p, i) =>
        i === editIndex ? newProject : p
      );
    } else {
      updatedProjects = [...projects, newProject];
    }
    saveToGitHub(updatedProjects);
    setForm({ ...emptyForm });
    setEditIndex(null);
    setShowForm(false);
  }

  function handleEdit(index) {
    const p = projects[index];
    setForm({
      ...p,
      createdAt: p.createdAt ? p.createdAt.slice(0, 10) : "",
    });
    setEditIndex(index);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleDelete(index) {
    if (!window.confirm("Yakin hapus proyek ini?")) return;
    const updatedProjects = projects.filter((_, i) => i !== index);
    saveToGitHub(updatedProjects);
  }

  function handleCancelForm() {
    setForm({ ...emptyForm });
    setEditIndex(null);
    setShowForm(false);
  }

  if (!isLoggedIn) {
    return (
      <div className="admin-login-wrapper">
        <div className="admin-login-card">
          <div className="admin-login-icon">🔐</div>
          <h1 className="admin-login-title">Portfolio Admin</h1>
          <p className="admin-login-desc">
            Masukkan GitHub Personal Access Token Anda untuk mengakses panel
            admin.
          </p>
          <div className="admin-login-hint">
            <strong>Cara membuat token:</strong>
            <ol>
              <li>
                Buka{" "}
                <a
                  href="https://github.com/settings/tokens"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub → Settings → Developer Settings → Personal Access
                  Tokens → Tokens (classic)
                </a>
              </li>
              <li>
                Klik <strong>"Generate new token (classic)"</strong>
              </li>
              <li>
                Centang scope: <code>repo</code>
              </li>
              <li>Copy token yang dihasilkan</li>
            </ol>
          </div>
          <input
            className="admin-token-input"
            type="password"
            placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          />
          {status.msg && (
            <div className={`admin-status admin-status-${status.type}`}>
              {status.msg}
            </div>
          )}
          <button
            className="admin-btn admin-btn-primary admin-btn-full"
            onClick={handleLogin}
          >
            Masuk
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-wrapper">
      <div className="admin-header">
        <div className="admin-header-left">
          <span className="admin-header-icon">⚡</span>
          <h1 className="admin-header-title">Portfolio Admin Panel</h1>
        </div>
        <div className="admin-header-right">
          <button
            className="admin-btn admin-btn-secondary"
            onClick={fetchProjectsFromGitHub}
            disabled={loading}
          >
            🔄 Refresh
          </button>
          <button className="admin-btn admin-btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {status.msg && (
        <div className={`admin-status admin-status-${status.type}`}>
          {status.msg}
        </div>
      )}

      {/* FORM ADD / EDIT */}
      {showForm ? (
        <div className="admin-card">
          <h2 className="admin-section-title">
            {editIndex !== null ? "✏️ Edit Proyek" : "➕ Tambah Proyek Baru"}
          </h2>

          <div className="admin-form-grid">
            <div className="admin-form-group">
              <label className="admin-label">Nama Proyek *</label>
              <input
                className="admin-input"
                name="name"
                placeholder="Contoh: Plant Map Management System"
                value={form.name}
                onChange={handleFormChange}
              />
            </div>
            <div className="admin-form-group">
              <label className="admin-label">URL GitHub / Demo</label>
              <input
                className="admin-input"
                name="url"
                placeholder="https://github.com/aldievanz/..."
                value={form.url}
                onChange={handleFormChange}
              />
            </div>
            <div className="admin-form-group admin-form-group-full">
              <label className="admin-label">Deskripsi</label>
              <textarea
                className="admin-input admin-textarea"
                name="description"
                placeholder="Jelaskan proyek Anda..."
                value={form.description}
                onChange={handleFormChange}
              />
            </div>
            <div className="admin-form-group">
              <label className="admin-label">Tanggal Dibuat</label>
              <input
                className="admin-input"
                name="createdAt"
                type="date"
                value={form.createdAt}
                onChange={handleFormChange}
              />
            </div>
            <div className="admin-form-group">
              <label className="admin-label">
                <input
                  type="checkbox"
                  name="isFork"
                  checked={form.isFork}
                  onChange={handleFormChange}
                  style={{ marginRight: 8 }}
                />
                Ini adalah Fork
              </label>
            </div>
          </div>

          <div className="admin-form-group">
            <label className="admin-label">
              Pilih Bahasa / Teknologi (klik untuk pilih)
            </label>
            <div className="admin-lang-grid">
              {LANGUAGE_OPTIONS.map((lang) => {
                const isSelected = form.languages.find(
                  (l) => l.name === lang.name
                );
                return (
                  <button
                    key={lang.name}
                    type="button"
                    className={`admin-lang-btn ${
                      isSelected ? "admin-lang-btn-selected" : ""
                    }`}
                    onClick={() => toggleLanguage(lang)}
                  >
                    <span className="admin-lang-name">{lang.name}</span>
                  </button>
                );
              })}
            </div>
            {form.languages.length > 0 && (
              <div className="admin-selected-langs">
                <strong>Terpilih:</strong>{" "}
                {form.languages.map((l) => (
                  <span key={l.name} className="admin-lang-tag">
                    {l.name} ✕
                    <button
                      className="admin-lang-tag-remove"
                      onClick={() => toggleLanguage(l)}
                    />
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="admin-form-actions">
            <button
              className="admin-btn admin-btn-primary"
              onClick={handleAddOrEdit}
              disabled={loading}
            >
              {loading
                ? "Menyimpan..."
                : editIndex !== null
                ? "💾 Update Proyek"
                : "💾 Simpan & Push ke GitHub"}
            </button>
            <button
              className="admin-btn admin-btn-secondary"
              onClick={handleCancelForm}
              disabled={loading}
            >
              Batal
            </button>
          </div>
        </div>
      ) : (
        <div className="admin-add-bar">
          <button
            className="admin-btn admin-btn-primary"
            onClick={() => {
              setShowForm(true);
              setEditIndex(null);
              setForm({ ...emptyForm });
            }}
          >
            ➕ Tambah Proyek Baru
          </button>
        </div>
      )}

      {/* DAFTAR PROYEK */}
      <div className="admin-card">
        <h2 className="admin-section-title">
          📋 Daftar Proyek ({projects.length})
        </h2>
        {loading && !projects.length ? (
          <div className="admin-loading">Memuat data...</div>
        ) : projects.length === 0 ? (
          <div className="admin-empty">
            Belum ada proyek. Tambah proyek pertama Anda!
          </div>
        ) : (
          <div className="admin-project-list">
            {projects.map((proj, index) => (
              <div key={proj.id || index} className="admin-project-item">
                <div className="admin-project-info">
                  <div className="admin-project-name">
                    <a href={proj.url} target="_blank" rel="noreferrer">
                      🔗 {proj.name}
                    </a>
                  </div>
                  <div className="admin-project-desc">
                    {proj.description || <em>Tidak ada deskripsi</em>}
                  </div>
                  <div className="admin-project-meta">
                    <span>
                      📅 {proj.createdAt ? proj.createdAt.slice(0, 10) : "-"}
                    </span>
                    {proj.languages && proj.languages.length > 0 && (
                      <span>
                        {proj.languages.map((l) => (
                          <span key={l.name} className="admin-lang-tag">
                            {l.name}
                          </span>
                        ))}
                      </span>
                    )}
                  </div>
                </div>
                <div className="admin-project-actions">
                  <button
                    className="admin-btn admin-btn-secondary admin-btn-sm"
                    onClick={() => handleEdit(index)}
                    disabled={loading}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="admin-btn admin-btn-danger admin-btn-sm"
                    onClick={() => handleDelete(index)}
                    disabled={loading}
                  >
                    🗑️ Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
