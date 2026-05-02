function App() {
  const skills = [
    {
      title: "Desenvolvimento Web",
      details: "React, JavaScript, HTML5, CSS3, Vite, responsividade, acessibilidade",
    },
    {
      title: "Back-end e APIs",
      details: "Node.js, Express, REST APIs, consumo de serviços, integração de dados",
    },
    {
      title: "Ferramentas e Fluxo",
      details: "Git, GitHub, versionamento, deploy, revisão de código e trabalho em equipe",
    },
    {
      title: "Comunicação em Inglês",
      details: "Technical writing, meetings, documentation, code reviews and client communication",
    },
  ];

  const projects = [
    {
      name: "Portfolio pessoal",
      description: "Site responsivo que apresenta habilidades, projetos e contato profissional.",
    },
    {
      name: "Painel analítico",
      description: "Dashboard visual para apresentar métricas e progresso com clareza e design limpo.",
    },
    {
      name: "Aplicação full-stack",
      description: "Aplicações modernas com React no front-end e comunicação segura com APIs no back-end.",
    },
  ];

  return (
    <div className="portfolio">
      <header className="hero">
        <div className="container hero-inner">
          <span className="eyebrow">Portfolio Pessoal</span>
          <h1>Desenvolvedor com habilidades sólidas em programação e fluência em inglês.</h1>
          <p className="hero-copy">
            Sou um desenvolvedor dedicado que cria experiências web limpas e eficientes. Minha comunicação em inglês é profissional, com clareza em documentação, reuniões e entregas técnicas.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#contact">
              Contato
            </a>
            <a className="btn" href="#skills">
              Habilidades
            </a>
          </div>
        </div>
      </header>

      <nav className="site-nav">
        <div className="container nav-inner">
          <a href="#about">Sobre</a>
          <a href="#skills">Habilidades</a>
          <a href="#projects">Projetos</a>
          <a href="#english">Inglês</a>
          <a href="#contact">Contato</a>
        </div>
      </nav>

      <main>
        <section id="about" className="section about-section">
          <div className="container section-grid">
            <article>
              <p className="section-label">Sobre mim</p>
              <h2>Profissional em desenvolvimento de software</h2>
              <p>
                Tenho experiência em construir aplicações web modernas com foco em desempenho, usabilidade e manutenção. Meu trabalho combina lógica robusta de programação com design responsivo, sempre pensando na melhor experiência para o usuário.
              </p>
              <p>
                Em paralelo, utilizo o inglês diariamente para escrever documentação técnica, participar de reuniões, apresentar soluções e colaborar com equipes.
              </p>
            </article>
            <div className="profile-card">
              <p className="card-title">Resumo</p>
              <ul>
                <li>React e desenvolvimento front-end</li>
                <li>Experiência com APIs e integração de sistemas</li>
                <li>Comunicação clara em inglês técnico</li>
                <li>Entrega de projetos profissionais e bem documentados</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="container">
            <p className="section-label">Habilidades</p>
            <h2>O que faço melhor</h2>
            <div className="card-grid">
              {skills.map((skill) => (
                <article key={skill.title} className="card skill-card">
                  <p className="card-title">{skill.title}</p>
                  <p>{skill.details}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <p className="section-label">Projetos</p>
            <h2>Trabalhos recentes</h2>
            <div className="card-grid">
              {projects.map((project) => (
                <article key={project.name} className="card project-card">
                  <p className="card-title">{project.name}</p>
                  <p>{project.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="english" className="section english-section">
          <div className="container section-grid">
            <div>
              <p className="section-label">Inglês</p>
              <h2>Fluência técnica e comunicação</h2>
              <p>
                Eu falo inglês com confiança em contextos profissionais. Posso explicar conceitos técnicos, colaborar com documentação e realizar apresentações ou demonstrações sem dificuldades.
              </p>
              <ul className="english-list">
                <li>Technical documentation and reporting</li>
                <li>Team collaboration and code reviews</li>
                <li>Client communication and project updates</li>
              </ul>
            </div>
            <div className="language-card card">
              <p className="card-title">Inglês profissional</p>
              <p>
                Daily use of English for development tasks, requirements analysis, and communicating solutions clearly across teams.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-card card">
            <h2>Vamos conversar?</h2>
            <p>
              Se você procura um desenvolvedor que entende tanto de código quanto de comunicação técnica em inglês, estou disponível para novos projetos.
            </p>
            <div className="contact-details">
              <div>
                <p className="contact-label">Email</p>
                <p>
                  <a className="btn primary" href="mailto:devfelipepaiva@gmail.com">
                    Enviar email
                  </a>
                </p>
              </div>
              <div>
                <p className="contact-label">LinkedIn</p>
                <p>
                  <a className="btn" href="https://www.linkedin.com/in/felipekinderpaiva/" target="_blank" rel="noreferrer">
                    Abrir LinkedIn
                  </a>
                </p>
              </div>
              <div>
                <p className="contact-label">GitHub</p>
                <p>
                  <a className="btn" href="https://github.com/FeKinDeR" target="_blank" rel="noreferrer">
                    Abrir GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>Portfolio criado para destacar minhas habilidades de programador e fluência em inglês.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
