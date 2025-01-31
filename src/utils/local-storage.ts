export enum LocalStorageKeys {
  AUTH_DATA = 'is auth',
}

export const localStorageGet = (key: LocalStorageKeys | string) => {
  try {
    return localStorage.getItem(key);
  } catch (err) {
    console.warn('localStorage error', err);
  }
};

export const localStorageSet = (
  key: LocalStorageKeys | string,
  value: string
) => {
  try {
    localStorage.setItem(key, value);
  } catch (err) {
    console.warn('localStorage error', err);
  }
};
