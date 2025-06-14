import { initialBooks } from './bookData.js';
import { insertBooks } from './render.js';
import { setupEventListeners } from './bookEvents.js';

initialBooks();
insertBooks();
setupEventListeners();