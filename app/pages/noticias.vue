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

        <article v-for="(item, i) in news" :key="i" class="news-article">
          <div class="article-meta">
            <span class="badge" :class="item.badgeClass">{{ item.category }}</span>
            <span class="article-date">{{ item.date }}</span>
          </div>
          <h2>{{ item.title }}</h2>
          <p>{{ item.content }}</p>
        </article>

      </div>
    </section>
  </div>
</template>

<script setup>
const news = [
  {
    title: 'Gran victoria de Atlético Sur',
    content: 'El equipo de primera división logró una importante victoria por 2 a 0 en la última fecha del campeonato. Un gran partido que deja al Sureño bien posicionado en la tabla.',
    date: 'Marzo 2026',
    category: 'Primera',
    badgeClass: ''
  },
  {
    title: 'Comenzó la temporada de la escuelita',
    content: 'Más de 80 chicos comenzaron los entrenamientos en el club. La escuelita sigue creciendo y este año promete ser una gran temporada para los más pequeños.',
    date: 'Marzo 2026',
    category: 'Escuelita',
    badgeClass: ''
  },
  {
    title: 'Nuevo sponsor para el club',
    content: 'Una empresa local se suma al apoyo del fútbol infantil. Agradecemos el compromiso con el desarrollo deportivo de nuestra ciudad.',
    date: 'Febrero 2026',
    category: 'Institucional',
    badgeClass: 'badge-gold'
  }
]
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

@media (max-width: 640px) {
  .news-article {
    padding: 28px 20px;
  }
}
</style>
