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
              <form v-if="!success" @submit.prevent="submit">
                <input v-model="form.first_name" placeholder="Nombre" :class="{ 'input-error': errors.first_name }" />
                <span v-if="errors.first_name" class="field-error">{{ errors.first_name[0] }}</span>

                <input v-model="form.last_name" placeholder="Apellido" :class="{ 'input-error': errors.last_name }" />
                <span v-if="errors.last_name" class="field-error">{{ errors.last_name[0] }}</span>

                <input v-model="form.email" type="email" placeholder="Email" :class="{ 'input-error': errors.email }" />
                <span v-if="errors.email" class="field-error">{{ errors.email[0] }}</span>

                <input v-model="form.phone" type="tel" placeholder="Teléfono (opcional)" />

                <textarea v-model="form.message" placeholder="Mensaje (opcional)"></textarea>

                <p v-if="generalError" class="general-error">{{ generalError }}</p>
                <button type="submit" class="btn btn-gold" style="width: 100%;" :disabled="loading">
                  {{ loading ? 'Enviando...' : 'Enviar Solicitud' }}
                </button>
              </form>
              <div v-else class="success-message">
                <span class="success-icon">✓</span>
                <h4>Solicitud enviada</h4>
                <p>Nos pondremos en contacto a la brevedad.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { post } = useApi()

const benefits = [
  { icon: '🎉', text: 'Participación en eventos' },
  { icon: '⚽', text: 'Apoyo al fútbol infantil' },
  { icon: '💰', text: 'Descuentos en actividades y alquiler del salon' }
]

const form = reactive({
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  message: ''
})

const loading = ref(false)
const success = ref(false)
const errors = ref<Record<string, string[]>>({})
const generalError = ref('')

async function submit() {
  loading.value = true
  errors.value = {}
  generalError.value = ''

  try {
    await post('/api/membership-requests', form)
    success.value = true
  } catch (err: any) {
    if (err?.response?.status === 422 || err?.status === 422) {
      const data = err?.response?._data || err?.data
      errors.value = data?.errors || {}
    } else {
      generalError.value = 'Ocurrió un error. Intentá nuevamente.'
    }
  } finally {
    loading.value = false
  }
}
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

.input-error {
  border-color: #e74c3c !important;
}

.field-error {
  display: block;
  color: #e74c3c;
  font-size: 12px;
  margin-top: -8px;
  margin-bottom: 12px;
}

.general-error {
  color: #e74c3c;
  font-size: 13px;
  text-align: center;
  margin-bottom: 12px;
}

.success-message {
  text-align: center;
  padding: 30px 0;
}

.success-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--celeste);
  color: var(--white);
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
}

.success-message h4 {
  color: var(--white);
  font-size: 20px;
  margin-bottom: 8px;
}

.success-message p {
  color: var(--gray-400);
  font-size: 14px;
  margin-bottom: 0;
}
</style>
