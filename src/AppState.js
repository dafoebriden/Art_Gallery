import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Art.js').Art} */
  art: [],
  /** @type {import('./models/Art.js').Art} */
  activeArt: null,
  /** @type {import('./models/Art.js').Art} */
  currentPage: null,
  /** @type {import('./models/Art.js').Art} */
  totalPages: null
})
