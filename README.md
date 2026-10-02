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

---

# HR Hub (`/hr/`)

Employee files, leave, sick leave, salary advances and notices for Namibian staff (Labour Act 11 of 2007).

- Link: https://luiscontinentalbrands.github.io/assortment-planner/hr/
- `hr/index.html` is the whole app. Same Firebase project and logins as the planner.
- Data: Realtime Database under `hrhub/` (`hrhub/data/<collection>/<id>`, scanned files in `hrhub/files/`, the company logo in `hrhub/public/`).

## Firebase setup (one time)
1. **Realtime Database → Rules**: paste `database.rules.json` (it holds both the `assortment` and the `hrhub` blocks) and press **Publish**.
2. Open the link. Nobody is set up yet, so the first person becomes the **administrator** (use your planner email and password).
3. The administrator adds everyone else on the **Users** page. People who already use the planner sign in with the same login and press **Ask for access**.

## Roles
- Administrator: everything, plus manages users
- HR: all employee files, leave, sick leave, advances, notices and settings
- Staff: apply for leave and read notices only
