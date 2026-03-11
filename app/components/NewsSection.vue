<template>
  <section class="news-section section">
    <div class="container">

      <div class="section-header">
        <span class="section-label">Novedades</span>
        <br>
        <h2>Últimas Noticias</h2>
      </div>

      <div class="news-grid">
        <article v-for="item in news" :key="item.id" class="news-card">
          <div class="news-img" :style="{ background: item.image_url ? `url(${item.image_url}) center/cover` : fallbackGradient(item.category) }">
            <span v-if="!item.image_url" class="news-icon">{{ categoryIcon(item.category) }}</span>
          </div>
          <div class="news-body">
            <div class="news-meta">
              <span class="news-date">{{ formatDate(item.published_at) }}</span>
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
const { get } = useApi()

const fallbackNews = [
  {
        id: 0,
        title: 'Debut Historico',
        excerpt: 'El equipo de primera división logró una importante empate por 0 a 0 en su debut historico. Un gran partido que deja al Sureño bien posicionado.',
        published_at: '2026-03-01T18:00:00-03:00',
        category: 'Primera'
      },
      {
        id: 2,
        title: 'Nuevos sponsor para el club',
        excerpt: 'Se suman los nuevos sponsors para acompañar el debut del club en la Primera Division de la Liga Departamental de Gualeguaychú. Agradecemos el compromiso con el desarrollo deportivo de nuestra ciudad.',
        published_at: '2026-02-15T18:00:00-03:00',
        category: 'Institucional'
      }
]

const news = ref(fallbackNews)

onMounted(async () => {
  try {
    const response = await get('/api/news?per_page=3')
    if (response?.data?.length) {
      news.value = response.data
    }
  } catch {
    // usa fallback
  }
})

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long'
  })
}

function categoryIcon(category) {
  const icons = { Primera: '⚽', Escuelita: '🌟', Institucional: '🤝', Juveniles: '🏆' }
  return icons[category] || '📰'
}

function fallbackGradient(category) {
  const gradients = {
    Primera: 'linear-gradient(135deg, #0a1628, #1a2d4d)',
    Escuelita: 'linear-gradient(135deg, #1a4a2e, #0a1628)',
    Institucional: 'linear-gradient(135deg, #4a2a1a, #0a1628)',
    Juveniles: 'linear-gradient(135deg, #1a2d4d, #2a1a4a)'
  }
  return gradients[category] || 'linear-gradient(135deg, #0a1628, #1a2d4d)'
}
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
