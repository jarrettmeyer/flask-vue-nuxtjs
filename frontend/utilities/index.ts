export async function fetchJsonData<TData> (url: string): Promise<TData> {
  const init: RequestInit = {
    headers: {
      "Content-type": "application/json"
    }
  }
  const response = await window.fetch(url, init)
  if (response.ok) {
    const json = (await response.json()) as TData
    return Promise.resolve(json)
  }
  return Promise.reject(response)
}

/**
 * Does the HTML fetch response have the given content-type.
 *
 * @param response HTML fetch response
 * @param contentType Content-type
 */
export function hasContentType (response: Response, contentType: string): boolean {
  const type: string | null = response.headers.get("content-type")
  if (type) {
    return type.includes(contentType)
  }
  return false
}
