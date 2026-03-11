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

@media (max-width: 960px) {
  .welcome-grid {
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
