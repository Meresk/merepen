const API_URL = import.meta.env.VITE_API_BASE_URL;

export async function apiFetch(
  path: string,
  options: RequestInit = {}
) {
  const res = await fetch(API_URL + path, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    throw await res.json();
  }

  return res.json();
}
