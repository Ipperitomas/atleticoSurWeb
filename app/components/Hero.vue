<template>
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-overlay"></div>

    <div class="hero-content">
      <div class="hero-badge">
        <img src="/logo.png" alt="Escudo" class="hero-shield" />
      </div>

      <h1 class="hero-title">
        Club Atlético
        <span class="hero-highlight">Sur</span>
      </h1>

      <p class="hero-tagline">
        Pasión, fútbol y formación desde Gualeguaychú
      </p>

      <div class="hero-actions">
        <NuxtLink to="/socios" class="btn btn-gold btn-lg">Hacete Socio</NuxtLink>
        <NuxtLink to="/el-club" class="btn btn-outline btn-lg">Conocer el Club</NuxtLink>
      </div>
    </div>

    <div class="hero-scroll">
      <span>Descubrí más</span>
      <div class="scroll-arrow"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: url('/hero.jpeg') center/cover no-repeat;
  transform: scale(1.05);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg,
      rgba(10, 22, 40, 0.7) 0%,
      rgba(10, 22, 40, 0.5) 40%,
      rgba(10, 22, 40, 0.8) 100%
    );
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 24px;
  animation: fadeInUp 0.8s ease-out both;
}

.hero-badge {
  margin-bottom: 28px;
}

.hero-shield {
  height: 120px;
  width: auto;
  margin: 0 auto;
  filter: drop-shadow(0 8px 30px rgba(0, 0, 0, 0.4));
  animation: fadeInUp 0.6s ease-out 0.1s both;
}

.hero-title {
  font-size: clamp(42px, 8vw, 80px);
  font-weight: 900;
  color: white;
  letter-spacing: -0.02em;
  line-height: 1;
  margin-bottom: 20px;
  animation: fadeInUp 0.6s ease-out 0.2s both;
}

.hero-highlight {
  display: block;
  background: linear-gradient(135deg, var(--celeste-light), var(--celeste));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-tagline {
  font-size: clamp(16px, 2.5vw, 22px);
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  margin-bottom: 40px;
  letter-spacing: 0.02em;
  animation: fadeInUp 0.6s ease-out 0.3s both;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 0.6s ease-out 0.4s both;
}

/* Scroll indicator */
.hero-scroll {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  font-size: 12px;
  font-family: var(--font-heading);
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  animation: fadeIn 1s ease-out 1s both;
}

.scroll-arrow {
  width: 20px;
  height: 20px;
  border-right: 2px solid rgba(255, 255, 255, 0.3);
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  transform: rotate(45deg);
  margin: 10px auto 0;
  animation: scrollBounce 2s ease-in-out infinite;
}

@keyframes scrollBounce {
  0%, 100% { transform: rotate(45deg) translateY(0); opacity: 0.3; }
  50% { transform: rotate(45deg) translateY(6px); opacity: 0.8; }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 768px) {
  .hero-shield {
    height: 90px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
