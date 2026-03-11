<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Deportivo</span>
        <br>
        <h1>Fútbol</h1>
        <p>Todas las categorías del Sureño, desde la escuelita hasta la primera</p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">

        <div class="division-card" v-for="(div, i) in divisions" :key="i">
          <div class="division-header">
            <span class="division-icon">{{ div.icon }}</span>
            <div>
              <h2>{{ div.name }}</h2>
              <p class="division-subtitle">{{ div.subtitle }}</p>
            </div>
          </div>
          <p>{{ div.desc }}</p>
          <div v-if="div.items" class="division-items">
            <span v-for="item in div.items" :key="item" class="division-tag">{{ item }}</span>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
const divisions = [
  {
    name: 'Primera División',
    subtitle: 'Plantel Mayor',
    icon: '🏆',
    desc: 'El primer equipo representa al club en las competencias oficiales de la Liga Departamental de Gualeguaychú.',
    items: ['Equipo', 'Cuerpo Tecnico']
  },
  {
    name: 'Sub 23',
    subtitle: 'Cantera de talentos',
    icon: '💪',
    desc: 'La reserva permite el desarrollo de jóvenes futbolistas que buscan llegar al plantel de primera división.'
  },
  {
    name: 'Juveniles',
    subtitle: 'Formación integral',
    icon: '⚡',
    desc: 'Las categorías juveniles desarrollan talento y valores en cada etapa de crecimiento.',
    items: ['Sub 17 (2009 | 2010) ', ' 2011 ',' 2012 ',' 2013 ','2014']
  },
  {
    name: 'Escuelita',
    subtitle: 'Los futuros cracks',
    icon: '⭐',
    desc: 'La escuelita de fútbol recibe niños desde los 5 años con el objetivo de enseñar fundamentos del juego y valores deportivos.',
    items: ['2018 |  2019 |  2020 y 2021']
  },
  {
    name: 'Futbol Amateur',
    subtitle: 'Plantel Mayor Amateur',
    icon: '🏆',
    desc: 'Equipo representa al club en las competencias oficiales amateurs Gualeguaychú.',
    items: []
  },
  {
    name: 'Futbol Senior',
    subtitle: 'Plantel Senior ',
    icon: '🏆',
    desc: 'Equipo representa al club en las competencias seniors oficiales Gualeguaychú.',
    items: []
  },
]
</script>

<style scoped>
.division-card {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  padding: 40px;
  margin-bottom: 30px;
  transition: var(--transition-base);
}

.division-card:hover {
  border-color: transparent;
  box-shadow: var(--shadow-lg);
}

.division-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 16px;
}

.division-icon {
  font-size: 40px;
  flex-shrink: 0;
}

.division-header h2 {
  margin-bottom: 4px;
  font-size: 24px;
}

.division-subtitle {
  font-size: 14px;
  color: var(--celeste);
  font-weight: 500;
  margin-bottom: 0;
}

.division-card > p {
  color: var(--gray-500);
  line-height: 1.7;
}

.division-items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.division-tag {
  font-family: var(--font-heading);
  font-size: 13px;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 50px;
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  color: var(--navy);
}

@media (max-width: 640px) {
  .division-card {
    padding: 28px 20px;
  }

  .division-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
