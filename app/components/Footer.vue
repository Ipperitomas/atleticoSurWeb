<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">

          <div class="footer-brand">
            <div class="footer-logo">
              <img src="/logo.png" alt="Atlético Sur" />
              <div>
                <span class="footer-name">Club Atlético Sur</span>
                <span class="footer-location">Gualeguaychú, Entre Ríos</span>
              </div>
            </div>
            <p class="footer-desc">
              Pasión, fútbol y formación. Desde la escuelita hasta la primera división,
              formamos jugadores y personas.
            </p>
          </div>

          <div class="footer-links">
            <h4>Navegación</h4>
            <ul>
              <li><NuxtLink to="/">Inicio</NuxtLink></li>
              <li><NuxtLink to="/el-club">El Club</NuxtLink></li>
              <li><NuxtLink to="/futbol">Fútbol</NuxtLink></li>
              <li><NuxtLink to="/noticias">Noticias</NuxtLink></li>
            </ul>
          </div>

          <div class="footer-links">
            <h4>Institucional</h4>
            <ul>
              <li><NuxtLink to="/socios">Hacete Socio</NuxtLink></li>
              <li><NuxtLink to="/contacto">Contacto</NuxtLink></li>
            </ul>
          </div>

          <div class="footer-contact">
            <h4>Contacto</h4>
            <ul>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Gualeguaychú, Entre Ríos
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                atleticosur@gmail.com
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <span>&copy; {{ new Date().getFullYear() }} Club Atlético Sur. Todos los derechos reservados.</span>
          <div class="footer-dev">
            <span>Desarrollado por Tomas Ipperi </span>
            <a href="#" target="_blank" rel="noopener" class="dev-link">
              <img src="/sponsors/tippNegro.png" alt="Tipp Sistemas" class="dev-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--navy);
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--celeste), var(--gold), transparent);
}

.footer-main {
  padding: 80px 0 50px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.3fr;
  gap: 50px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
}

.footer-logo img {
  height: 50px;
  width: auto;
}

.footer-name {
  display: block;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 18px;
  line-height: 1.2;
}

.footer-location {
  font-size: 12px;
  opacity: 0.5;
  letter-spacing: 0.05em;
}

.footer-desc {
  color: var(--gray-400);
  font-size: 14px;
  line-height: 1.7;
}

.footer-links h4,
.footer-contact h4 {
  font-family: var(--font-heading);
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--white);
  margin-bottom: 20px;
}

.footer-links ul,
.footer-contact ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: var(--gray-400);
  font-size: 14px;
  transition: var(--transition-fast);
}

.footer-links a:hover {
  color: var(--celeste-light);
  padding-left: 4px;
}

.footer-contact li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--gray-400);
  font-size: 14px;
  margin-bottom: 12px;
}

.footer-contact svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: var(--celeste);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 24px 0;
  font-size: 13px;
  color: var(--gray-500);
}

.footer-bottom-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-dev {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--gray-500);
}

.dev-link {
  display: flex;
  align-items: center;
  transition: var(--transition-fast);
  opacity: 0.5;
}

.dev-link:hover {
  opacity: 1;
}

.dev-logo {
  height: 22px;
  width: auto;
  filter: brightness(0) invert(1);
}

@media (max-width: 960px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .footer-main {
    padding: 50px 0 30px;
  }

  .footer-bottom-content {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
}
</style>
