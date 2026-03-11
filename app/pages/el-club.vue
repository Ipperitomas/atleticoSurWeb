<template>
  <div>
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Institucional</span>
        <br>
        <h1>El Club</h1>
        <p>Conocé la historia, misión e instalaciones de nuestro querido Sureño</p>
      </div>
    </section>

    <!-- Historia -->
    <section class="page-content">
      <div class="container">

        <div class="content-block">
          <span class="section-label">Nuestra Historia</span>
          <br>
          <h2>Desde 1957, pasión por el fútbol</h2>
          <div class="divider"></div>
        </div>

        <!-- Timeline -->
        <div class="timeline">
          <div
            v-for="(event, i) in timeline"
            :key="i"
            class="timeline-item"
            :class="{ 'timeline-highlight': event.highlight }"
          >
            <div class="timeline-marker">
              <span class="timeline-year">{{ event.year }}</span>
              <div class="timeline-dot"></div>
            </div>
            <div class="timeline-content">
              <h3>{{ event.title }}</h3>
              <p>{{ event.text }}</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Misión -->
    <section class="mission-section">
      <div class="container">
        <div class="mission-grid">
          <div class="mission-card" v-for="(item, i) in mission" :key="i">
            <span class="mission-icon">{{ item.icon }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Instalaciones -->
    <section class="page-content">
      <div class="container">

        <div class="content-block">
          <span class="section-label">Infraestructura</span>
          <br>
          <h2>Instalaciones</h2>
          <div class="divider"></div>
          <div class="facilities-grid">
            <div v-for="facility in facilities" :key="facility.name" class="facility-card">
              <span class="facility-icon">{{ facility.icon }}</span>
              <h3>{{ facility.name }}</h3>
            </div>
          </div>
        </div>

        <div class="content-block">
          <span class="section-label">Dirigencia</span>
          <br>
          <h2>Comisión Directiva</h2>
          <div class="divider"></div>

          <!-- Presidente destacado -->
          <div class="board-president">
            <div class="president-avatar">P</div>
            <div class="president-info">
              <span class="president-role">Presidente</span>
              <span class="president-name">{{ board.Presidente }}</span>
            </div>
          </div>

          <!-- Resto de la comisión -->
          <div class="board-grid">
            <div
              v-for="member in boardMembers"
              :key="member.role"
              class="board-card"
            >
              <div class="board-avatar">{{ member.role.charAt(0) }}</div>
              <div class="board-info">
                <span class="board-role">{{ member.role }}</span>
                <span class="board-name">{{ member.name }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
const timeline = [
  {
    year: '1957',
    title: 'Fundación',
    text: 'El 24 de octubre de 1957, un grupo de vecinos del sur de Gualeguaychú funda el Club Atlético Sur, con una fuerte identidad barrial y el sueño de crear un espacio de encuentro para los jóvenes a través del fútbol.',
    highlight: true
  },
  {
    year: '1960s',
    title: 'Identidad barrial',
    text: 'La sede original se ubicó en la zona de Tropas y Marcelo T. de Alvear. Con recursos limitados pero gran participación vecinal, se organizaron eventos y actividades que marcaron el espíritu del club: trabajo colectivo, esfuerzo y compromiso con la comunidad.'
  },
  {
    year: '1970s-90s',
    title: 'Consolidación deportiva',
    text: 'Atlético Sur se consolida como institución representativa del sector sur. Sus equipos participan en torneos amateur, competencias barriales y ligas locales, manteniendo viva la actividad futbolística del club durante décadas.'
  },
  {
    year: '2000s',
    title: 'La cancha propia',
    text: 'Se concreta uno de los grandes sueños: el predio propio sobre Boulevard Martínez, cerca del acceso sur. Con enorme esfuerzo de dirigentes, socios y colaboradores se limpia el terreno, se marca el campo y se construye la infraestructura necesaria. Aproximadamente dos hectáreas que permiten proyectar el crecimiento del club.',
    highlight: true
  },
  {
    year: '2010s',
    title: 'Crecimiento del fútbol infantil',
    text: 'Un fuerte desarrollo en fútbol infantil y juvenil. Con entrenadores, dirigentes y padres se conforman numerosas categorías que compiten en la Liga Departamental. Más de un centenar de chicos de distintos barrios entrenan representando los colores del club.'
  },
  {
    year: '2020s',
    title: 'Expansión institucional',
    text: 'El crecimiento deportivo se acompaña con fútbol femenino, fútbol de veteranos y eventos sociales que fortalecen el rol del club como espacio de integración comunitaria.'
  },
  {
    year: '2026',
    title: 'Llegada a la Liga Departamental',
    text: 'Momento histórico: Atlético Sur se incorpora por primera vez a las competencias oficiales del fútbol mayor de la Liga Departamental. La presentación de camisetas y plantel marca el inicio de una nueva era, reafirmando los valores que dieron origen al club.',
    highlight: true
  },
  {
    year: 'Hoy',
    title: 'Atlético Sur hoy',
    text: 'El club continúa su proyecto deportivo con la mirada puesta en el futuro, apostando a la formación de jóvenes futbolistas y consolidándose como espacio de contención social, encuentro y desarrollo para la comunidad del sur de Gualeguaychú.'
  }
]

const mission = [
  {
    icon: '⚽',
    title: 'Formación',
    text: 'Formar jugadores y personas, transmitiendo valores como el respeto, el trabajo en equipo y la pasión por el deporte.'
  },
  {
    icon: '🤝',
    title: 'Comunidad',
    text: 'Ser un espacio de encuentro, contención social y desarrollo para los vecinos del sur de Gualeguaychú.'
  },
  {
    icon: '🌟',
    title: 'Crecimiento',
    text: 'Seguir creciendo deportiva e institucionalmente, manteniendo la identidad barrial que nos caracteriza desde 1957.'
  }
]

const facilities = [
  { name: 'Cancha Principal', icon: '🏟️' },
  { name: 'Cancha Auxiliar', icon: '⚽' },
  { name: 'Vestuarios', icon: '🚿' },
  { name: 'Espacio Escuelita', icon: '🌟' },
  { name: 'Sede Social', icon: '🏠' }
]

const board = {
  Presidente: 'Paulino Gomez'
}

const boardMembers = [
  { role: 'Vicepresidenta', name: 'Cecilia Recalde' },
  { role: 'Secretario', name: 'Santiago Gomez' },
  { role: 'Pro Secretaria', name: 'Maria Jose Sack' },
  { role: 'Tesorera', name: 'Maria Soledad Godoy' },
  { role: 'Pro Tesorero', name: 'Juan Mendez' },
  { role: 'Vocales Titulares', name: 'Ipperi Tomas | Miguel Arellano | Monica Procura ' },
  { role: 'Vocales Suplentes', name: 'Javier Gomez | Eugenia Procura | Ramiro Gomez ' },
  { role: 'Revisores de cuentas Titulares', name: 'Juan Gonzales | Oscar Benitez ' },
  { role: 'Revisores de cuentas Suplentes', name: 'Mariano Messeguer | Juan Leiva ' },
]
</script>

<style scoped>
.content-block {
  margin-bottom: 60px;
}

.content-block:last-child {
  margin-bottom: 0;
}

/* ========================================
   TIMELINE
   ======================================== */

.timeline {
  position: relative;
  padding-left: 140px;
  margin-bottom: 80px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 120px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--celeste), var(--gray-200), var(--celeste));
}

.timeline-item {
  position: relative;
  padding-bottom: 48px;
  padding-left: 40px;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -140px;
  top: 0;
  width: 160px;
  display: flex;
  align-items: center;
  gap: 0;
}

.timeline-year {
  display: inline-block;
  width: 100px;
  text-align: right;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 15px;
  color: var(--gray-400);
  padding-right: 16px;
}

.timeline-highlight .timeline-year {
  color: var(--celeste);
  font-size: 16px;
}

.timeline-dot {
  position: absolute;
  right: 33px;
  top: 2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--white);
  border: 3px solid var(--gray-300);
  z-index: 2;
}

.timeline-highlight .timeline-dot {
  border-color: var(--celeste);
  background: var(--celeste);
  box-shadow: 0 0 0 6px rgba(58, 175, 224, 0.15);
}

.timeline-content {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-md);
  padding: 28px 32px;
  transition: var(--transition-base);
}

.timeline-content:hover {
  border-color: transparent;
  box-shadow: var(--shadow-lg);
  transform: translateX(4px);
}

.timeline-highlight .timeline-content {
  border-left: 3px solid var(--celeste);
}

.timeline-content h3 {
  font-size: 18px;
  color: var(--navy);
  margin-bottom: 8px;
}

.timeline-content p {
  font-size: 15px;
  line-height: 1.8;
  color: var(--gray-500);
  margin-bottom: 0;
}

/* ========================================
   MISSION
   ======================================== */

.mission-section {
  background: var(--navy);
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}

.mission-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(58, 175, 224, 0.08) 0%, transparent 60%);
  pointer-events: none;
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  position: relative;
}

.mission-card {
  text-align: center;
  padding: 40px 28px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: var(--transition-base);
}

.mission-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(58, 175, 224, 0.2);
  transform: translateY(-4px);
}

.mission-icon {
  font-size: 40px;
  display: block;
  margin-bottom: 20px;
}

.mission-card h3 {
  font-size: 20px;
  color: var(--white);
  margin-bottom: 12px;
}

.mission-card p {
  font-size: 15px;
  color: var(--gray-400);
  line-height: 1.7;
  margin-bottom: 0;
}

/* ========================================
   FACILITIES
   ======================================== */

.facilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.facility-card {
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-md);
  padding: 24px 20px;
  text-align: center;
  transition: var(--transition-base);
}

.facility-card:hover {
  border-color: var(--celeste);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.facility-icon {
  font-size: 32px;
  display: block;
  margin-bottom: 10px;
}

.facility-card h3 {
  font-size: 14px;
  font-weight: 600;
  color: var(--navy);
  margin-bottom: 0;
}

/* ========================================
   BOARD
   ======================================== */

.board-president {
  display: flex;
  align-items: center;
  gap: 20px;
  background: var(--navy);
  border-radius: var(--radius-lg);
  padding: 32px 36px;
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
}

.board-president::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--celeste), var(--white), var(--celeste));
}

.president-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--celeste), var(--celeste-dark));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 24px;
  font-weight: 800;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(58, 175, 224, 0.3);
}

.president-info {
  display: flex;
  flex-direction: column;
}

.president-role {
  font-family: var(--font-heading);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--celeste);
  margin-bottom: 4px;
}

.president-name {
  font-family: var(--font-heading);
  font-size: 22px;
  font-weight: 800;
  color: var(--white);
}

.board-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.board-card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-md);
  padding: 20px 24px;
  transition: var(--transition-base);
}

.board-card:hover {
  border-color: var(--celeste);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.board-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--gray-100);
  color: var(--navy);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 16px;
  font-weight: 700;
  flex-shrink: 0;
  border: 2px solid var(--gray-200);
}

.board-info {
  display: flex;
  flex-direction: column;
}

.board-role {
  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--celeste);
  margin-bottom: 2px;
}

.board-name {
  font-family: var(--font-heading);
  font-size: 15px;
  font-weight: 600;
  color: var(--navy);
}

/* ========================================
   RESPONSIVE
   ======================================== */

@media (max-width: 768px) {
  .timeline {
    padding-left: 30px;
  }

  .timeline::before {
    left: 8px;
  }

  .timeline-marker {
    left: -30px;
    width: auto;
  }

  .timeline-year {
    display: none;
  }

  .timeline-dot {
    position: relative;
    right: auto;
    top: auto;
  }

  .timeline-item {
    padding-left: 24px;
  }

  .timeline-content {
    padding: 20px;
  }

  .timeline-content h3::before {
    content: attr(data-year);
    display: block;
    font-size: 13px;
    color: var(--celeste);
    margin-bottom: 4px;
  }

  .mission-grid {
    grid-template-columns: 1fr;
  }
}
</style>
