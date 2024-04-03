/// <reference types="vite/client" />

interface Window extends Window {
  WEBLAB_WIDGET: {
    init: () => void;
  };
}
