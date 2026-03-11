<template>
  <section class="news-section section">
    <div class="container">

      <div class="section-header">
        <span class="section-label">Novedades</span>
        <br>
        <h2>Últimas Noticias</h2>
      </div>

      <div class="news-grid">
        <article v-for="(item, i) in news" :key="i" class="news-card">
          <div class="news-img" :style="{ background: item.color }">
            <span class="news-icon">{{ item.icon }}</span>
          </div>
          <div class="news-body">
            <div class="news-meta">
              <span class="news-date">{{ item.date }}</span>
              <span class="badge">{{ item.category }}</span>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.excerpt }}</p>
          </div>
        </article>
      </div>

      <div class="news-more">
        <NuxtLink to="/noticias" class="btn btn-primary">Ver Todas las Noticias</NuxtLink>
      </div>

    </div>
  </section>
</template>

<script setup>
const news = [
  {
    title: 'Gran victoria de Atlético Sur',
    excerpt: 'El equipo de primera división logró una importante victoria por 2 a 0 en la última fecha del campeonato.',
    date: 'Marzo 2026',
    category: 'Primera',
    icon: '⚽',
    color: 'linear-gradient(135deg, #0a1628, #1a2d4d)'
  },
  {
    title: 'Comenzó la temporada de la escuelita',
    excerpt: 'Más de 80 chicos comenzaron los entrenamientos en el club con mucho entusiasmo.',
    date: 'Marzo 2026',
    category: 'Escuelita',
    icon: '🌟',
    color: 'linear-gradient(135deg, #1a4a2e, #0a1628)'
  },
  {
    title: 'Nuevo sponsor para el club',
    excerpt: 'Una empresa local se suma al apoyo del fútbol infantil y juvenil del club.',
    date: 'Febrero 2026',
    category: 'Institucional',
    icon: '🤝',
    color: 'linear-gradient(135deg, #4a2a1a, #0a1628)'
  }
]
</script>

<style scoped>
.news-section {
  background: var(--gray-50);
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.news-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--gray-200);
  transition: var(--transition-base);
}

.news-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: transparent;
}

.news-img {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.news-icon {
  font-size: 48px;
  filter: grayscale(20%);
}

.news-body {
  padding: 28px;
}

.news-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.news-date {
  font-size: 13px;
  color: var(--gray-400);
  font-weight: 500;
}

.news-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
  line-height: 1.3;
}

.news-card p {
  font-size: 14px;
  color: var(--gray-500);
  line-height: 1.6;
  margin-bottom: 0;
}

.news-more {
  text-align: center;
  margin-top: 50px;
}

@media (max-width: 960px) {
  .news-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>
