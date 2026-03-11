export function useApi() {
  async function post<T = any>(endpoint: string, body: Record<string, any>) {
    const response = await $fetch<T>(endpoint, {
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
    const response = await $fetch<T>(endpoint, {
      headers: {
        'Accept': 'application/json'
      }
    })
    return response
  }

  return { post, get }
}
