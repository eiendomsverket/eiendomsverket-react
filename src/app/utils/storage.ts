export function setSessionItem(key: string, value: any) {
  sessionStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
}

export function getSessionItem<T = any>(key: string): T | null {
  const item = sessionStorage.getItem(key);
  try {
    return item ? JSON.parse(item) : null;
  } catch {
    return item as never;
  }
}

export function removeSessionItem(key: string) {
  sessionStorage.removeItem(key);
}

