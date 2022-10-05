import PreloadApi from '../../main/api/preloadApi';

declare global {
  interface Window {
    api: typeof PreloadApi;
  }
}

const { api } = window;

export default api;
