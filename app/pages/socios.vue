<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Sumate</span>
        <br>
        <h1>Hacete Socio</h1>
        <p>Sé parte del Sureño y acompañá el crecimiento del club</p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">

        <div class="socios-grid">
          <div class="socios-info">
            <div class="content-block">
              <h2>Ser parte del club</h2>
              <div class="divider"></div>
              <p>
                Ser socio del Club Atlético Sur significa apoyar el desarrollo
                del deporte y acompañar el crecimiento del club desde adentro.
              </p>
            </div>

            <div class="content-block">
              <h2>Beneficios</h2>
              <div class="divider"></div>
              <div class="benefits-grid">
                <div v-for="benefit in benefits" :key="benefit.text" class="benefit-card">
                  <span class="benefit-icon">{{ benefit.icon }}</span>
                  <span>{{ benefit.text }}</span>
                </div>
              </div>
            </div>

            <div class="content-block">
              <h2>Cuota Social</h2>
              <div class="divider"></div>
              <p>Consultar en secretaría del club o envianos un mensaje.</p>
            </div>
          </div>

          <div class="socios-form">
            <div class="form-card">
              <h3>Solicitud de Socio</h3>
              <p class="form-desc">Completá el formulario y nos pondremos en contacto.</p>
              <form @submit.prevent>
                <input placeholder="Nombre" />
                <input placeholder="Apellido" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Teléfono" />
                <textarea placeholder="Mensaje (opcional)"></textarea>
                <button type="submit" class="btn btn-gold" style="width: 100%;">Enviar Solicitud</button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
const benefits = [
  { icon: '🎟️', text: 'Ingreso a partidos' },
  { icon: '🎉', text: 'Participación en eventos' },
  { icon: '⚽', text: 'Apoyo al fútbol infantil' },
  { icon: '💰', text: 'Descuentos en actividades' }
]
</script>

<style scoped>
.socios-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.content-block {
  margin-bottom: 40px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 16px;
}

.benefit-card {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-sm);
  padding: 14px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--navy);
}

.benefit-icon {
  font-size: 20px;
  flex-shrink: 0;
}

.form-card {
  background: var(--navy);
  border-radius: var(--radius-xl);
  padding: 40px;
  position: sticky;
  top: 100px;
}

.form-card h3 {
  color: var(--white);
  font-size: 22px;
  margin-bottom: 8px;
}

.form-desc {
  color: var(--gray-400);
  font-size: 14px;
  margin-bottom: 28px;
}

.form-card input,
.form-card textarea {
  background: var(--navy-light);
  border-color: rgba(255, 255, 255, 0.08);
  color: var(--white);
}

.form-card input:focus,
.form-card textarea:focus {
  border-color: var(--celeste);
  box-shadow: 0 0 0 4px rgba(58, 175, 224, 0.1);
}

.form-card input::placeholder,
.form-card textarea::placeholder {
  color: var(--gray-500);
}

@media (max-width: 960px) {
  .socios-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .form-card {
    position: static;
  }
}

@media (max-width: 640px) {
  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .form-card {
    padding: 28px 20px;
  }
}
</style>
