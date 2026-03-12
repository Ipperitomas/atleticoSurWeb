<template>
  <section class="fiesta-artistas">
    <div class="container">
      <div class="content-block text-center">
        <span class="section-label">Escenario 2026</span>
        <br>
        <h2 class="text-white">Próximos Artistas</h2>
        <div class="divider divider-center"></div>
      </div>

      <div class="artistas-grid">
        <div
          v-for="(artista, i) in artistas"
          :key="i"
          class="artista-card"
        >
          <div class="artista-avatar">{{ artista.name.charAt(0) }}</div>
          <h3>{{ artista.name }}</h3>
          <span class="artista-genre">{{ artista.genre }}</span>
        </div>
      </div>

      <p class="artistas-nota">Se irán confirmando más artistas próximamente.</p>
    </div>
  </section>
</template>

<script setup>
const artistas = [
  { name: 'Rodrigo Ipperi', genre: 'Folklore' },
]
</script>

<style scoped>
.fiesta-artistas {
  padding: 100px 0;
  background: var(--navy-light);
  position: relative;
  overflow: hidden;
}

.fiesta-artistas::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 50%, rgba(201, 168, 76, 0.06) 0%, transparent 60%);
  pointer-events: none;
}

.content-block {
  margin-bottom: 60px;
  position: relative;
}

.artistas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.artista-card {
  text-align: center;
  padding: 40px 28px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: var(--transition-base);
}

.artista-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(201, 168, 76, 0.3);
  transform: translateY(-4px);
}

.artista-avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gold), var(--gold-dark));
  color: var(--navy);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 28px;
  font-weight: 900;
  margin: 0 auto 20px;
  box-shadow: 0 4px 20px rgba(201, 168, 76, 0.3);
}

.artista-card h3 {
  font-size: 20px;
  color: var(--white);
  margin-bottom: 6px;
}

.artista-genre {
  font-family: var(--font-heading);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gold-light);
}

.artistas-nota {
  text-align: center;
  color: var(--gray-400);
  font-size: 15px;
  margin-top: 40px;
  position: relative;
}

@media (max-width: 640px) {
  .fiesta-artistas {
    padding: 60px 0;
  }
}
</style>
