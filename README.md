# Instructions

1. Use SQLITE3 for database storage implementation
1. Use Prisma for ORM
1. Implement at least one full CRUD RESTful API
1. Deploy it on Render for backend and vercel for frontend
1. Resolve CORS issue if needed after deployment

---

## Explanation

### Architecture
ShopSmart uses a classic client-server, decoupled architecture:
- **Frontend**: A React application powered by Vite. It is responsible for UI rendering, client-side routing, and presenting the products.
- **Backend**: A Node.js/Express service that provides RESTful APIs to the frontend. It returns mock JSON data or connects to a SQLite database.

### Workflow
- **Development**: Features are built independently in `client` and `server` folders.
- **Testing**:
  - *Unit Tests*: The frontend relies on testing-library and vitest to unit test its components. The backend uses Jest for testing APIs.
  - *Integration Tests*: Tests are run with Jest/Supertest simulating end-to-end API workflows with the database.
  - *E2E Tests*: We use Cypress to simulate user flows on the deployed or local application.
- **CI/CD Pipeline**: A GitHub Actions workflow runs tests and linting (`ESLint`, `Prettier`) on every push and pull request to maintain code quality. Dependabot is configured to check for library updates automatically.

### Design Decisions
1. **Repository Structure**: A monorepo-style approach with `client` and `server` directories keeps code co-located side-by-side but ensures concerns are separated.
2. **Setup Script**: we use idempotent scripts (`scripts/setup.sh`) to safely repeatedly install dependencies and create data directories without error-prone duplication.
3. **UI / Aesthetics**: We implemented a customized styling system inside `index.css` using modern web design principles (glassmorphism/subtle shadows, dynamic hover cards, modern variables) instead of bulk UI framework libraries to keep it lightweight.

### Challenges
- Integrating E2E tools (like Cypress) requires a running backend and frontend simultaneously, often tricky to coordinate seamlessly in simple CI environments.
- Enforcing strict PR checks via linting means keeping matching ESLint configurations, which requires balancing compatibility (e.g. Vite ESLint config vs Node ESLint config standard).
