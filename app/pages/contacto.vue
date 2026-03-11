<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Escribinos</span>
        <br>
        <h1>Contacto</h1>
        <p>Estamos para ayudarte. No dudes en comunicarte con nosotros</p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">

        <div class="contact-grid">
          <div class="contact-info">
            <h2>Encontranos</h2>
            <div class="divider"></div>

            <div class="info-cards">
              <div class="info-card">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h3>Dirección</h3>
                  <p>Gualeguaychú, Entre Ríos, Argentina</p>
                </div>
              </div>

              <div class="info-card">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>atleticosur@gmail.com</p>
                </div>
              </div>

              <div class="info-card">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <div>
                  <h3>Redes Sociales</h3>
                  <a target="_blank" href="https://www.instagram.com/atleticosurgchu/">Instagram &middot; @atleticosurgchu </a>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <div class="form-card">
              <h3>Enviar Mensaje</h3>
              <p class="form-desc">Completá el formulario y te respondemos a la brevedad.</p>
              <form @submit.prevent>
                <input placeholder="Nombre" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Tu mensaje"></textarea>
                <button type="submit" class="btn btn-primary" style="width: 100%;">Enviar</button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
}

.info-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 24px;
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-md);
  transition: var(--transition-base);
}

.info-card:hover {
  border-color: var(--celeste);
  box-shadow: var(--shadow-md);
}

.info-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--celeste), var(--celeste-dark));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-icon svg {
  width: 20px;
  height: 20px;
  color: white;
}

.info-card h3 {
  font-size: 15px;
  margin-bottom: 4px;
  color: var(--navy);
}

.info-card p {
  font-size: 14px;
  color: var(--gray-500);
  margin-bottom: 0;
}

.form-card {
  background: var(--navy);
  border-radius: var(--radius-xl);
  padding: 40px;
  position: sticky;
  top: 100px;
}

.form-card h3 {
  color: var(--white);
  font-size: 22px;
  margin-bottom: 8px;
}

.form-desc {
  color: var(--gray-400);
  font-size: 14px;
  margin-bottom: 28px;
}

.form-card input,
.form-card textarea {
  background: var(--navy-light);
  border-color: rgba(255, 255, 255, 0.08);
  color: var(--white);
}

.form-card input:focus,
.form-card textarea:focus {
  border-color: var(--celeste);
  box-shadow: 0 0 0 4px rgba(58, 175, 224, 0.1);
}

.form-card input::placeholder,
.form-card textarea::placeholder {
  color: var(--gray-500);
}

@media (max-width: 960px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .form-card {
    position: static;
  }
}

@media (max-width: 640px) {
  .form-card {
    padding: 28px 20px;
  }
}
</style>
