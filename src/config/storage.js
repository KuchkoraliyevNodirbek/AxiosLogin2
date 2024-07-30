/**
 * Load state from local storage.
 * @param {string} key - The key for the item to be retrieved.
 * @returns {any} The parsed state or undefined if not found.
 */
export const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state:", err);
    return undefined;
  }
};

/**
 * Save state to local storage.
 * @param {string} key - The key for the item to be saved.
 * @param {any} state - The state to be saved.
 */
export const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error("Could not save state:", err);
  }
};

/**
 * Clear state from local storage.
 * @param {string} key - The key for the item to be removed.
 */
export const clearState = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error("Could not clear state:", err);
  }
};
