<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Novedades</span>
        <br>
        <h1>Noticias</h1>
        <p>Todo lo que pasa en el Sureño, dentro y fuera de la cancha</p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">

        <div v-if="loading && !news.length" class="loading-state">
          Cargando noticias...
        </div>

        <article v-for="item in news" :key="item.id" class="news-article">
          <div class="article-meta">
            <span class="badge" :class="badgeClass(item.category)">{{ item.category }}</span>
            <span class="article-date">{{ formatDate(item.published_at) }}</span>
          </div>
          <h2>{{ item.title }}</h2>
          <p>{{ item.content }}</p>
        </article>

        <div v-if="meta && meta.last_page > 1" class="pagination">
          <button
            class="btn btn-secondary"
            :disabled="page <= 1"
            @click="page--"
          >
            Anterior
          </button>
          <span class="pagination-info">Página {{ page }} de {{ meta.last_page }}</span>
          <button
            class="btn btn-secondary"
            :disabled="page >= meta.last_page"
            @click="page++"
          >
            Siguiente
          </button>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
const { get } = useApi()

const news = ref([])
const meta = ref(null)
const page = ref(1)
const loading = ref(true)

async function fetchNews() {
  loading.value = true
  try {
    const response = await get(`/api/news?page=${page.value}&per_page=10`)
    news.value = response.data || []
    meta.value = response.meta || null
  } catch {
    news.value = [
      {
        id: 0,
        title: 'Debut Historico',
        content: 'El equipo de primera división logró una importante empate por 0 a 0 en su debut historico. Un gran partido que deja al Sureño bien posicionado.',
        published_at: '2026-03-01T18:00:00-03:00',
        category: 'Primera'
      },
      {
        id: 2,
        title: 'Nuevos sponsor para el club',
        content: 'Se suman los nuevos sponsors para acompañar el debut del club en la Primera Division de la Liga Departamental de Gualeguaychú. Agradecemos el compromiso con el desarrollo deportivo de nuestra ciudad.',
        published_at: '2026-02-15T18:00:00-03:00',
        category: 'Institucional'
      }
    ]
  } finally {
    loading.value = false
  }
}

watch(page, () => fetchNews())

onMounted(() => fetchNews())

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long'
  })
}

function badgeClass(category) {
  return category === 'Institucional' ? 'badge-gold' : ''
}
</script>

<style scoped>
.news-article {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  padding: 40px;
  margin-bottom: 24px;
  transition: var(--transition-base);
}

.news-article:hover {
  border-color: transparent;
  box-shadow: var(--shadow-lg);
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}

.article-date {
  font-size: 13px;
  color: var(--gray-400);
  font-weight: 500;
}

.news-article h2 {
  font-size: 22px;
  margin-bottom: 12px;
  color: var(--navy);
}

.news-article p {
  color: var(--gray-500);
  line-height: 1.8;
  margin-bottom: 0;
}

.loading-state {
  text-align: center;
  padding: 60px 0;
  color: var(--gray-400);
  font-size: 16px;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}

.pagination-info {
  font-size: 14px;
  color: var(--gray-500);
  font-weight: 500;
}

@media (max-width: 640px) {
  .news-article {
    padding: 28px 20px;
  }
}
</style>
