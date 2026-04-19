function debounce (func, wait) {
  let timeout;

  return function(...args) {
    // Clear the previous timer to reset the waiting period
    clearTimeout(timeout);

    // Set a new timer
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

// Example Usage:
const saveData = debounce (() => console.log('Saving data...'), 1000);
document.addEventListener('keyup', saveData);
