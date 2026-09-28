# Assortment Line Planner

Production planning for the sweet and savoury assortments (FGC 2, Polin, Wafer, FGC 1, Laser).

- Hosted on GitHub Pages: `index.html` is the whole app.
- Login: Firebase Authentication (email + password).
- Data: Firebase Realtime Database under `assortment/` (`assortment/plan`, `assortment/log/<date>`).

## Firebase setup (one time)

1. **Realtime Database → Rules**: add this block next to the existing rules (don't delete the others):

   ```json
   "assortment": {
     ".read": "auth != null",
     ".write": "auth != null"
   }
   ```

2. **Authentication → Settings → Authorized domains**: make sure `luiscontinentalbrands.github.io` is listed.
3. **Authentication → Users → Add user**: create an email + password for each person who needs the planner.
