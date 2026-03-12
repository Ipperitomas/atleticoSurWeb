<template>
  <section class="fiesta-actividades">
    <div class="container">
      <div class="content-block text-center">
        <span class="section-label">Qué vas a encontrar</span>
        <br>
        <h2 class="text-white">Actividades de la Fiesta</h2>
        <div class="divider divider-center"></div>
      </div>

      <div class="actividades-grid">
        <div
          v-for="(act, i) in actividades"
          :key="i"
          class="actividad-card"
        >
          <span class="actividad-icon">{{ act.icon }}</span>
          <h3>{{ act.title }}</h3>
          <p>{{ act.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const actividades = [
  {
    icon: '🔥',
    title: 'Asado con cuero de búfalo',
    desc: 'El plato estrella preparado a la manera tradicional por experimentados asadores.'
  },
  {
    icon: '🎵',
    title: 'Música folklórica y popular',
    desc: 'Espectáculos en vivo con artistas regionales y nacionales.'
  },
  {
    icon: '🐴',
    title: 'Destrezas criollas',
    desc: 'Exhibiciones de habilidades gauchas.'
  },
  {
    icon: '🍖',
    title: 'Feria gastronómica',
    desc: 'Comidas típicas, empanadas, choripán y sabores regionales.'
  },
  {
    icon: '🏪',
    title: 'Stands',
    desc: 'Espacios para emprendedores y comerciantes que quieran exhibir y vender sus productos.'
  },
  {
    icon: '🍷',
    title: 'Cantina del club',
    desc: 'Bebidas, tragos y la mejor atención de la cantina sureña.'
  }
]
</script>

<style scoped>
.fiesta-actividades {
  padding: 100px 0;
  background: var(--navy);
  position: relative;
  overflow: hidden;
}

.fiesta-actividades::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(58, 175, 224, 0.08) 0%, transparent 60%);
  pointer-events: none;
}

.content-block {
  margin-bottom: 60px;
  position: relative;
}

.actividades-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  position: relative;
}

.actividad-card {
  text-align: center;
  padding: 40px 28px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: var(--transition-base);
}

.actividad-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(58, 175, 224, 0.2);
  transform: translateY(-4px);
}

.actividad-icon {
  font-size: 40px;
  display: block;
  margin-bottom: 20px;
}

.actividad-card h3 {
  font-size: 18px;
  color: var(--white);
  margin-bottom: 10px;
}

.actividad-card p {
  font-size: 15px;
  color: var(--gray-400);
  line-height: 1.7;
  margin-bottom: 0;
}

@media (max-width: 960px) {
  .actividades-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .fiesta-actividades {
    padding: 60px 0;
  }

  .actividades-grid {
    grid-template-columns: 1fr;
  }
}
</style>
