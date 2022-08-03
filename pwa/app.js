if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
  .then(() => {
    // registration worked
    console.log('Registration succeeded');
  }).catch((error) => {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}
