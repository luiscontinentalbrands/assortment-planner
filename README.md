# Assortment Line Planner

Production planning for the sweet and savoury assortments (FGC 2, Polin, Wafer, FGC 1, Laser).

- Hosted on GitHub Pages: `index.html` is the whole app.
- Login: Firebase Authentication (email + password).
- Data: Firebase Realtime Database under `assortment/` (`assortment/plan`, `assortment/log/<date>`).

## Firebase setup (one time)

1. Firebase project for Continental Brands: create a **Realtime Database** (locked mode) and enable **Authentication → Email/Password**.
2. Paste the web app `firebaseConfig` into `index.html` (the `FIREBASE_CONFIG` block).
3. **Realtime Database → Rules**: add the `assortment` block from `database.rules.json` next to any existing rules.
4. **Authentication → Settings → Authorized domains**: add `luiscontinentalbrands.github.io`.
5. Open the site: the first person creates the **administrator** account; the administrator adds everyone else on the Users page.

## Roles
- Administrator: everything, plus manages users
- Planner: orders, stock, settings and daily entry
- Shift leader: daily entry (kg produced, cases packed) only
- Viewer: read only
