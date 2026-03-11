export function useApi() {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase as string

  async function post<T = any>(endpoint: string, body: Record<string, any>) {
    const response = await $fetch<T>(`${apiBase}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body
    })
    return response
  }

  async function get<T = any>(endpoint: string) {
    const response = await $fetch<T>(`${apiBase}${endpoint}`, {
      headers: {
        'Accept': 'application/json'
      }
    })
    return response
  }

  return { post, get, apiBase }
}
