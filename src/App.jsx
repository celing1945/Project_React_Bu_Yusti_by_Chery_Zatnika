
import { useState } from 'react'
import './App.css'

function App() {
  const [pesan, setPesan] = useState(false)

  return (
    <div className="container0">
      <nav className="navbar">
        <h2>PPLG Hub</h2>
        <span>Student Portal</span>
      </nav>

      <main className="hero">
        <p className="label">Halo, Siswa PPLG</p>

        <h1>
          Mulai Perjalanan
          <br />
          <span>coding-mu.</span>
        </h1>

        <p className="deskripsi">
          Belajar pemrogaman, membangun proyek,
          dan mengembangkan kreativitas bersama
          PPLG Student Hub.
        </p>

        <button onClick={() => setPesan(!pesan)}>
          {pesan ? 'Tutup Pesan' : 'Mulai Belajar'}
        </button>

        {pesan && (
          <p className="cards">
            Semangat Belajar Coding!!!
          </p>
        )}
      </main>

      <section className="cards">
        <article className="card">
          <h3>Coding</h3>
          <p>Belajar Logika dan Bahasa Pemrogaman.</p>

        </article>

        <article className="card">
          <h3>Project</h3>
          <p>Buat Website dan Aplikasi Pertamamu.</p>
        </article>

        <article className="card">
          <h3>Karier</h3>
          <p>Persiapkan Diri Untuk Menjadi Seorang Developer.</p>
        </article>
      </section>

      <footer>
        2026 PPLG Student Hub
      </footer>
    </div>
  )
}

export default App