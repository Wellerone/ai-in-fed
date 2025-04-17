// src/serviceWorkerRegistration.js

// Questo file abilita il Service Worker per rendere l'app una PWA.

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    // [::1] è l'indirizzo localhost IPv6
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 è localhost IPv4
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4]\d|[01]?\d?\d)){3}$/
    )
  );
  
  export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
      if (isLocalhost) {
        // Controllo locale
        checkValidServiceWorker(swUrl, config);
      } else {
        // Registra normalmente
        registerValidSW(swUrl, config);
      }
    }
  }
  
  function registerValidSW(swUrl, config) {
    navigator.serviceWorker
      .register(swUrl)
      .then(registration => {
        if (registration.waiting) {
          if (config && config.onUpdate) {
            config.onUpdate(registration);
          }
        }
        if (config && config.onSuccess) {
          config.onSuccess(registration);
        }
      })
      .catch(error => {
        console.error('Errore nel Service Worker:', error);
      });
  }
  
  function checkValidServiceWorker(swUrl, config) {
    fetch(swUrl, {
      headers: { 'Service-Worker': 'script' }
    })
      .then(response => {
        const contentType = response.headers.get('content-type');
        if (
          response.status === 404 ||
          (contentType && !contentType.includes('javascript'))
        ) {
          navigator.serviceWorker.ready.then(registration => {
            registration.unregister().then(() => {
              window.location.reload();
            });
          });
        } else {
          registerValidSW(swUrl, config);
        }
      })
      .catch(() => {
        console.log('Nessuna connessione Internet. App in modalità offline.');
      });
  }
  
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then(registration => {
          registration.unregister();
        })
        .catch(error => {
          console.error(error.message);
        });
    }
  }
  