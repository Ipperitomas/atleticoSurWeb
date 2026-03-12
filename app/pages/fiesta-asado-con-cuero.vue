<template>
  <div>
    <FiestaHero />
    <FiestaHistoria />
    <FiestaActividades />
    <!-- <FiestaArtistas /> -->

    <!-- Ubicación -->
    <section class="fiesta-ubicacion">
      <div class="container">
        <div class="content-block text-center">
          <span class="section-label">Dónde nos encontrás</span>
          <br>
          <h2>Ubicación</h2>
          <div class="divider divider-center"></div>
        </div>

        <div class="ubicacion-info">
          <p class="ubicacion-lugar">Predio del Club Atlético Sur</p>
          <p class="ubicacion-ciudad">Gualeguaychú – Entre Ríos – Argentina</p>
        </div>

        <div class="mapa-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3345.5!2d-58.5483322!3d-33.0273513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!1s0x0%3A0x0!5e0!3m2!1ses-419!2sar!4v1"
            width="100%"
            height="400"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>

    <FiestaGaleria />

    <!-- Edición 2026 -->
    <section class="fiesta-edicion">
      <div class="container">
        <div class="edicion-card">
          <span class="edicion-badge">Próxima Edición</span>
          <h2 class="edicion-fecha">Domingo 11 de octubre de 2026</h2>
          <p class="edicion-entrada">Entrada libre y gratuita</p>
          <div class="edicion-divider"></div>
          <p class="edicion-org">Organiza: Club Atlético Sur de Gualeguaychú</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import FiestaHero from '~/components/FiestaHero.vue'
import FiestaHistoria from '~/components/FiestaHistoria.vue'
import FiestaActividades from '~/components/FiestaActividades.vue'
import FiestaArtistas from '~/components/FiestaArtistas.vue'
import FiestaGaleria from '~/components/FiestaGaleria.vue'

useHead({
  title: 'Fiesta del Asado con Cuero de Búfalo | Club Atlético Sur',
  meta: [
    {
      name: 'description',
      content: 'Conocé la Fiesta de la Música Popular y el tradicional Asado con Cuero de Búfalo organizada por el Club Atlético Sur de Gualeguaychú.'
    }
  ]
})
</script>

<style scoped>
/* ========================================
   UBICACIÓN
   ======================================== */

.fiesta-ubicacion {
  padding: 100px 0;
  background: var(--white);
}

.content-block {
  margin-bottom: 48px;
}

.ubicacion-info {
  text-align: center;
  margin-bottom: 32px;
}

.ubicacion-lugar {
  font-family: var(--font-heading);
  font-size: 22px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 4px;
}

.ubicacion-ciudad {
  font-size: 16px;
  color: var(--gray-500);
  margin-bottom: 0;
}

.mapa-wrapper {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--gray-200);
}

.mapa-wrapper iframe {
  display: block;
}

/* ========================================
   EDICIÓN 2026
   ======================================== */

.fiesta-edicion {
  padding: 100px 0;
  background: var(--navy);
  position: relative;
  overflow: hidden;
}

.fiesta-edicion::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 50%, rgba(58, 175, 224, 0.1) 0%, transparent 60%);
  pointer-events: none;
}

.edicion-card {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  padding: 60px 40px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-xl);
  position: relative;
}

.edicion-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--celeste), var(--white), var(--celeste));
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
}

.edicion-badge {
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
  margin-bottom: 28px;
}

.edicion-fecha {
  font-size: clamp(24px, 4vw, 40px);
  font-weight: 900;
  color: var(--white);
  margin-bottom: 16px;
}

.edicion-entrada {
  font-size: 20px;
  color: var(--celeste-light);
  font-weight: 500;
  margin-bottom: 24px;
}

.edicion-divider {
  width: 60px;
  height: 2px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 auto 24px;
}

.edicion-org {
  font-size: 14px;
  color: var(--gray-400);
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .fiesta-ubicacion,
  .fiesta-edicion {
    padding: 60px 0;
  }

  .edicion-card {
    padding: 40px 24px;
  }
}
</style>
