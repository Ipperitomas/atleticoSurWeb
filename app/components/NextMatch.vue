<template>
  <section class="next-match">
    <div class="container">

      <div class="section-header">
        <h2>Último Partido</h2>
      </div>

      <div class="match-card">
        <div class="match-stripe"></div>

        <div class="match-content">
          <div class="team home">
            <div class="team-logo">
              <img :src="match.home.logo" :alt="match.home.name" />
            </div>
            <span class="team-name">{{ match.home.name }}</span>
            <span class="team-tag">Local</span>
          </div>

          <div class="match-info">
            <div class="match-league">{{ match.league }}</div>
            <div class="match-vs">VS</div>
            <div class="match-datetime">
              <div class="match-day">{{ matchDay }}</div>
              <div class="match-time">{{ matchTime }}</div>
            </div>
            <div class="match-detail">{{ match.matchday }}</div>
          </div>

          <div class="team away">
            <div class="team-logo">
              <img :src="match.away.logo" :alt="match.away.name" />
            </div>
            <span class="team-name">{{ match.away.name }}</span>
            <span class="team-tag">Visitante</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Datos fallback por si la API no responde
const fallbackMatch = {
  home: { name: 'Atlético Sur', logo: '/logo.png', isLocal: true },
  away: { name: 'Defensores del Oeste', logo: '/logovisitante.png', isLocal: false },
  date: '2026-03-12T22:00:00',
  league: 'Copa Gualeguaychú - Liga Departamental',
  venue: 'Estadio Municipal',
  matchday: 'Fecha 2'
}

const { apiBase } = useApi()

// Fetch desde la API (solo client-side, no durante prerender)
const { data: apiMatch } = useLazyFetch(`${apiBase}/api/next-match`, {
  headers: { 'Accept': 'application/json' },
  server: false,
  default: () => fallbackMatch
})

const match = computed(() => apiMatch.value ?? fallbackMatch)

const matchDate = computed(() => new Date(match.value.date))

const matchDay = computed(() => {
  return matchDate.value.toLocaleDateString('es-AR', {
    weekday: 'long',
    day: 'numeric',
    month: 'short'
  })
})

const matchTime = computed(() => {
  return matchDate.value.toLocaleTimeString('es-AR', {
    hour: '2-digit',
    minute: '2-digit'
  }) + ' hs'
})
</script>

<style scoped>
.next-match {
  padding: 100px 0;
  background: var(--navy);
  position: relative;
  overflow: hidden;
}

.next-match::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(58, 175, 224, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 50%, rgba(201, 168, 76, 0.04) 0%, transparent 50%);
  pointer-events: none;
}

.next-match .section-header {
  text-align: center;
  margin-bottom: 50px;
  position: relative;
}

.next-match .section-header h2 {
  color: var(--white);
}

.next-match .section-header h2::after {
  background: linear-gradient(90deg, var(--celeste), var(--white), var(--celeste));
}

.match-card {
  position: relative;
  background: var(--navy-light);
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
  max-width: 800px;
  margin: 0 auto;
}

.match-stripe {
  height: 4px;
  background: linear-gradient(90deg, var(--celeste), var(--white), var(--celeste), var(--white), var(--celeste));
  background-size: 300% 100%;
  animation: shimmer 4s ease-in-out infinite;
}

@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

.match-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 40px;
  gap: 20px;
}

.team {
  text-align: center;
  flex: 1;
}

.team-logo {
  width: 80px;
  height: 80px;
  margin: 0 auto 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.team-logo img {
  max-height: 80px;
  max-width: 80px;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
}

.team-name {
  display: block;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 16px;
  color: var(--white);
  margin-bottom: 4px;
}

.team-tag {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--gray-400);
  font-weight: 500;
}

.match-info {
  text-align: center;
  flex-shrink: 0;
}

.match-league {
  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--gold);
  margin-bottom: 12px;
}

.match-vs {
  font-family: var(--font-heading);
  font-size: 32px;
  font-weight: 900;
  color: var(--celeste);
  letter-spacing: 0.05em;
  margin-bottom: 12px;
  text-shadow: 0 0 30px rgba(58, 175, 224, 0.3);
}

.match-datetime {
  color: var(--gray-300);
}

.match-day {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 15px;
}

.match-time {
  font-size: 13px;
  color: var(--gray-400);
}

.match-detail {
  margin-top: 10px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--gray-500);
}

@media (max-width: 640px) {
  .match-content {
    flex-direction: column;
    padding: 30px 20px;
    gap: 24px;
  }

  .team-logo {
    width: 60px;
    height: 60px;
  }

  .team-logo img {
    max-height: 60px;
    max-width: 60px;
  }

  .match-vs {
    font-size: 24px;
  }
}
</style>
