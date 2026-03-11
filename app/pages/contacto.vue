<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Escribinos</span>
        <br>
        <h1>Contacto</h1>
        <p>Estamos para ayudarte. No dudes en comunicarte con nosotros</p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">

        <div class="contact-grid">
          <div class="contact-info">
            <h2>Encontranos</h2>
            <div class="divider"></div>

            <div class="info-cards">
              <div class="info-card">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h3>Dirección</h3>
                  <p>Gualeguaychú, Entre Ríos, Argentina</p>
                </div>
              </div>

              <div class="info-card">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>atleticosur@gmail.com</p>
                </div>
              </div>

              <div class="info-card">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <div>
                  <h3>Redes Sociales</h3>
                  <a target="_blank" href="https://www.instagram.com/atleticosurgchu/">Instagram &middot; @atleticosurgchu </a>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <div class="form-card">
              <h3>Enviar Mensaje</h3>
              <p class="form-desc">Completá el formulario y te respondemos a la brevedad.</p>
              <form v-if="!success" @submit.prevent="submit">
                <input v-model="form.name" placeholder="Nombre" :class="{ 'input-error': errors.name }" />
                <span v-if="errors.name" class="field-error">{{ errors.name[0] }}</span>

                <input v-model="form.email" type="email" placeholder="Email" :class="{ 'input-error': errors.email }" />
                <span v-if="errors.email" class="field-error">{{ errors.email[0] }}</span>

                <textarea v-model="form.message" placeholder="Tu mensaje" :class="{ 'input-error': errors.message }"></textarea>
                <span v-if="errors.message" class="field-error">{{ errors.message[0] }}</span>

                <p v-if="generalError" class="general-error">{{ generalError }}</p>
                <button type="submit" class="btn btn-primary" style="width: 100%;" :disabled="loading">
                  {{ loading ? 'Enviando...' : 'Enviar' }}
                </button>
              </form>
              <div v-else class="success-message">
                <span class="success-icon">✓</span>
                <h4>Mensaje enviado</h4>
                <p>Te respondemos a la brevedad.</p>
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

const form = reactive({
  name: '',
  email: '',
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
    await post('/api/contact-messages', form)
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
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
}

.info-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 24px;
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-md);
  transition: var(--transition-base);
}

.info-card:hover {
  border-color: var(--celeste);
  box-shadow: var(--shadow-md);
}

.info-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--celeste), var(--celeste-dark));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-icon svg {
  width: 20px;
  height: 20px;
  color: white;
}

.info-card h3 {
  font-size: 15px;
  margin-bottom: 4px;
  color: var(--navy);
}

.info-card p {
  font-size: 14px;
  color: var(--gray-500);
  margin-bottom: 0;
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
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .form-card {
    position: static;
  }
}

@media (max-width: 640px) {
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
