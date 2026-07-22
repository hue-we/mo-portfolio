# Mo Portfolio

Two parts: `client` (React + Vite + Tailwind + Framer Motion) and `server`
(Node + Express + MongoDB). The public site reads projects from the API;
`/admin` is a password-protected panel for adding/editing/deleting projects
without redeploying.

## Local setup (Windows / PowerShell)

### 1. Database
Create a free MongoDB Atlas cluster, get your connection string.

### 2. Server
```powershell
cd server
npm install
copy .env.example .env
```
Edit `.env`:
- `MONGO_URI` — your Atlas connection string
- `JWT_SECRET` — any long random string
- `ADMIN_PASSWORD_HASH` — generate it:
```powershell
npm run hash-password "your-chosen-password"
```
Paste the printed hash into `.env`. Then run:
```powershell
npm run dev
```
Server runs on `http://localhost:5000`.

### 3. Client
```powershell
cd client
npm install
copy .env.example .env
npm run dev
```
Client runs on `http://localhost:5173` and proxies `/api` to the server in dev.
Visit `/admin` to log in and add your first projects — the fallback entries
on the homepage disappear as soon as real ones exist in the database.

## Deploy

**Backend → Render**
- New Web Service, root directory `server`
- Build command: `npm install`
- Start command: `npm start`
- Add the same environment variables from `.env`

**Frontend → Netlify**
- Base directory `client`, build command `npm run build`, publish directory `client/dist`
- Environment variable: `VITE_API_URL` = your Render URL + `/api`
- The included `_redirects` file makes `/admin` work on refresh

**Database → MongoDB Atlas**
- Already connected via `MONGO_URI`; whitelist Render's IP (or `0.0.0.0/0` for simplicity) in Atlas Network Access.

## Notes
- Replace the placeholder email in `client/src/components/Contact.jsx`.
- Swap the GitHub/LinkedIn/Instagram links if any change.
- The loader, timeline, and project list are the pieces most worth tweaking
  further if you want to push the visual direction more.
