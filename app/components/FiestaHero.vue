<template>
  <section class="fiesta-hero">
    <div class="fiesta-hero-bg"></div>
    <div class="fiesta-hero-overlay"></div>

    <div class="fiesta-hero-content">
      <div class="fiesta-hero-logo">
        <img src="/fiestabufalo/bufalo-blanco y negro.png" alt="Logo Fiesta del Búfalo" class="fiesta-logo-img" />
      </div>

      <h1 class="fiesta-hero-title">
        Fiesta de la Música Popular
        <span class="fiesta-hero-highlight">y el Asado con Cuero de Búfalo</span>
      </h1>

      <p class="fiesta-hero-tagline">
        Una de las fiestas populares más importantes de Gualeguaychú, organizada por el Club Atlético Sur.
      </p>

      <FiestaCountdown />
    </div>

    <div class="fiesta-hero-scroll">
      <span>Conocé más</span>
      <div class="scroll-arrow"></div>
    </div>
  </section>
</template>

<script setup>
import FiestaCountdown from './FiestaCountdown.vue'
</script>

<style scoped>
.fiesta-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.fiesta-hero-bg {
  position: absolute;
  inset: 0;
  background:
    url('/fiestabufalo/fotocaballostodos.jpeg') center/cover no-repeat;
  transform: scale(1.05);
}

.fiesta-hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg,
      rgba(10, 22, 40, 0.75) 0%,
      rgba(10, 22, 40, 0.5) 40%,
      rgba(10, 22, 40, 0.85) 100%
    );
}

.fiesta-hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 24px;
  max-width: 900px;
  animation: fadeInUp 0.8s ease-out both;
}

.fiesta-hero-logo {
  margin-bottom: 28px;
  animation: fadeInUp 0.6s ease-out 0.1s both;
}

.fiesta-logo-img {
  height: 120px;
  width: auto;
  margin: 0 auto;
  filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.5));
}

.fiesta-hero-badge {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--celeste-light);
  background: rgba(58, 175, 224, 0.12);
  border: 1px solid rgba(58, 175, 224, 0.2);
  padding: 8px 24px;
  border-radius: 50px;
  margin-bottom: 32px;
  animation: fadeInUp 0.6s ease-out 0.1s both;
}

.fiesta-hero-title {
  font-size: clamp(32px, 6vw, 64px);
  font-weight: 900;
  color: white;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 24px;
  animation: fadeInUp 0.6s ease-out 0.2s both;
}

.fiesta-hero-highlight {
  display: block;
  background: linear-gradient(135deg, var(--celeste-light), var(--celeste));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: clamp(26px, 4.5vw, 50px);
}

.fiesta-hero-tagline {
  font-size: clamp(16px, 2.5vw, 20px);
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  margin-bottom: 48px;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 0.02em;
  animation: fadeInUp 0.6s ease-out 0.3s both;
}

.fiesta-hero-scroll {
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
  .fiesta-hero-content {
    padding: 0 16px;
  }

  .fiesta-logo-img {
    height: 90px;
  }

  .fiesta-hero-tagline {
    margin-bottom: 36px;
  }
}
</style>
