<template>
  <div class="countdown">
    <div class="countdown-item">
      <span class="countdown-number">{{ days }}</span>
      <span class="countdown-label">Días</span>
    </div>
    <div class="countdown-separator">:</div>
    <div class="countdown-item">
      <span class="countdown-number">{{ hours }}</span>
      <span class="countdown-label">Horas</span>
    </div>
    <div class="countdown-separator">:</div>
    <div class="countdown-item">
      <span class="countdown-number">{{ minutes }}</span>
      <span class="countdown-label">Minutos</span>
    </div>
    <div class="countdown-separator">:</div>
    <div class="countdown-item">
      <span class="countdown-number">{{ seconds }}</span>
      <span class="countdown-label">Segundos</span>
    </div>
  </div>
</template>

<script setup>
const targetDate = new Date('2026-10-11T12:00:00-03:00')

const days = ref('000')
const hours = ref('00')
const minutes = ref('00')
const seconds = ref('00')

let interval = null

function update() {
  const now = new Date()
  const diff = targetDate.getTime() - now.getTime()

  if (diff <= 0) {
    days.value = '0'
    hours.value = '00'
    minutes.value = '00'
    seconds.value = '00'
    if (interval) clearInterval(interval)
    return
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24))
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const s = Math.floor((diff % (1000 * 60)) / 1000)

  days.value = String(d)
  hours.value = String(h).padStart(2, '0')
  minutes.value = String(m).padStart(2, '0')
  seconds.value = String(s).padStart(2, '0')
}

onMounted(() => {
  update()
  interval = setInterval(update, 1000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped>
.countdown {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-md);
  padding: 20px 24px;
  min-width: 100px;
}

.countdown-number {
  font-family: var(--font-heading);
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 900;
  color: var(--white);
  line-height: 1;
  letter-spacing: -0.02em;
}

.countdown-label {
  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--celeste-light);
  margin-top: 8px;
}

.countdown-separator {
  font-family: var(--font-heading);
  font-size: 36px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.3);
  line-height: 1;
  padding-bottom: 20px;
}

@media (max-width: 640px) {
  .countdown {
    gap: 8px;
  }

  .countdown-item {
    min-width: 72px;
    padding: 14px 12px;
  }

  .countdown-separator {
    font-size: 24px;
    padding-bottom: 16px;
  }
}
</style>
