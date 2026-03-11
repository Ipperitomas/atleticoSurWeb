<template>
  <section class="categories section">
    <div class="container">

      <div class="section-header">
        <span class="section-label">Fútbol</span>
        <br>
        <h2>Nuestras Categorías</h2>
      </div>

      <div class="categories-grid">
        <NuxtLink
          v-for="(cat, i) in categories"
          :key="i"
          to="/futbol"
          class="category-card"
        >
          <div class="category-icon">{{ cat.icon }}</div>
          <h3>{{ cat.name }}</h3>
          <p>{{ cat.desc }}</p>
          <span class="category-arrow">&rarr;</span>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    name: 'Primera División',
    desc: 'El plantel mayor compite en la Liga Departamental de Gualeguaychú.',
    icon: '🏆'
  },
  {
    name: 'Sub 23',
    desc: 'Jóvenes talentos preparándose para el primer equipo.',
    icon: '💪'
  },
  {
    name: 'Juveniles',
    desc: 'Formación integral desde Sub 11 hasta Sub 17.',
    icon: '⚡'
  },
  {
    name: 'Escuelita',
    desc: 'Los más chicos aprenden fundamentos y valores desde los 5 años.',
    icon: '⭐'
  }
]
</script>

<style scoped>
.categories {
  background: var(--white);
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.category-card {
  position: relative;
  padding: 36px 28px;
  border-radius: var(--radius-lg);
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  text-decoration: none;
  color: inherit;
  transition: var(--transition-base);
  overflow: hidden;
}

.category-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--celeste), var(--gold));
  transform: scaleX(0);
  transition: var(--transition-base);
}

.category-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: transparent;
  background: var(--white);
}

.category-card:hover::after {
  transform: scaleX(1);
}

.category-icon {
  font-size: 36px;
  margin-bottom: 18px;
}

.category-card h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--navy);
}

.category-card p {
  font-size: 14px;
  color: var(--gray-500);
  line-height: 1.6;
  margin-bottom: 16px;
}

.category-arrow {
  font-size: 18px;
  color: var(--celeste);
  opacity: 0;
  transform: translateX(-8px);
  transition: var(--transition-base);
  display: inline-block;
}

.category-card:hover .category-arrow {
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 960px) {
  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .categories-grid {
    grid-template-columns: 1fr;
  }
}
</style>
