<template>
  <div>
    <Hero />
    <NextMatch />

    <!-- Welcome section -->
    <section class="welcome section">
      <div class="container">
        <div class="welcome-grid">
          <div class="welcome-text">
            <span class="section-label">Bienvenidos</span>
            <h2>Somos el Sureño de Gualeguaychú</h2>
            <div class="divider"></div>
            <p>
              Formamos jugadores y personas desde la escuelita hasta la primera división.
              Con pasión, compromiso y valores, construimos el futuro del fútbol en nuestra ciudad.
            </p>
            <p>
              Participamos activamente en la Liga Departamental, desarrollando talento local
              y fortaleciendo el espíritu deportivo en cada categoría.
            </p>
            <NuxtLink to="/el-club" class="btn btn-primary">Conocer nuestra historia</NuxtLink>
          </div>
          <div class="welcome-stats">
            <div class="stat-card" v-for="stat in stats" :key="stat.label">
              <span class="stat-number">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fiesta del Búfalo -->
    <section class="fiesta-promo">
      <div class="container">
        <div class="fiesta-promo-grid">
          <div class="fiesta-promo-image">
            <img src="/fiestabufalo/fotoasado.jpeg" alt="Asado con cuero de búfalo" />
          </div>
          <div class="fiesta-promo-text">
            <span class="section-label">Evento Anual</span>
            <h2 class="text-white">Fiesta de la Música Popular y el Asado con Cuero de Búfalo</h2>
            <div class="divider"></div>
            <p>
              Una de las fiestas populares más importantes de Gualeguaychú. Asado con cuero de búfalo, música folklórica, destrezas criollas y mucho más.
            </p>
            <p class="fiesta-promo-date">
              Próxima edición: <strong>Domingo 11 de octubre de 2026</strong>
            </p>
            <NuxtLink to="/fiesta-asado-con-cuero" class="btn btn-gold btn-lg">Conocer la Fiesta</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <Categories />
    <NewsSection />
    <Sponsors />
  </div>
</template>

<script setup>
const stats = [
  { value: '8', label: 'Categorías' },
  { value: '100+', label: 'Socios' },
  { value: '100%', label: 'Pasión' },
  { value: '1', label: 'Familia' }
]
</script>

<style scoped>
.welcome {
  background: var(--white);
}

.welcome-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: center;
}

.welcome-text h2 {
  color: var(--navy);
}

.welcome-text p {
  font-size: 16px;
  line-height: 1.8;
  color: var(--gray-500);
}

.welcome-text .btn {
  margin-top: 12px;
}

.welcome-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.stat-card {
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  text-align: center;
  transition: var(--transition-base);
}

.stat-card:hover {
  border-color: var(--celeste);
  box-shadow: var(--shadow-glow);
}

.stat-number {
  display: block;
  font-family: var(--font-heading);
  font-size: 36px;
  font-weight: 900;
  color: var(--celeste);
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 13px;
  color: var(--gray-500);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* ========================================
   FIESTA PROMO
   ======================================== */

.fiesta-promo {
  background: var(--navy);
  padding: 100px 0;
  position: relative;
  overflow: hidden;
}

.fiesta-promo::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 70% 50%, rgba(58, 175, 224, 0.08) 0%, transparent 60%);
  pointer-events: none;
}

.fiesta-promo-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: center;
  position: relative;
}

.fiesta-promo-image {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}

.fiesta-promo-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 4/3;
  transition: var(--transition-slow);
}

.fiesta-promo-image:hover img {
  transform: scale(1.03);
}

.fiesta-promo-text h2 {
  color: var(--white);
  font-size: clamp(22px, 3vw, 32px);
}

.fiesta-promo-text p {
  font-size: 16px;
  line-height: 1.8;
  color: var(--gray-400);
}

.fiesta-promo-date {
  color: var(--celeste-light) !important;
  font-size: 17px !important;
}

.fiesta-promo-date strong {
  color: var(--white);
}

.fiesta-promo-text .btn {
  margin-top: 12px;
}

@media (max-width: 960px) {
  .welcome-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .fiesta-promo-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 640px) {
  .welcome-stats {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .stat-card {
    padding: 24px 16px;
  }

  .stat-number {
    font-size: 28px;
  }
}
</style>
