import Link from "next/link";

const Logo = () => (
  <div className="flex items-center gap-2.5">
    <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center shrink-0">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="1" width="6" height="6" rx="1.5" fill="white" />
        <rect x="9" y="1" width="6" height="6" rx="1.5" fill="white" fillOpacity="0.6" />
        <rect x="1" y="9" width="6" height="6" rx="1.5" fill="white" fillOpacity="0.6" />
        <rect x="9" y="9" width="6" height="6" rx="1.5" fill="white" />
      </svg>
    </div>
    <span className="font-bold text-gray-900">Config OS</span>
  </div>
);

const Code = ({ children, language = "" }: { children: string; language?: string }) => (
  <div className="bg-gray-950 rounded-xl overflow-hidden my-4">
    {language && (
      <div className="px-4 py-2 border-b border-gray-800 text-xs text-gray-500 font-mono">{language}</div>
    )}
    <pre className="p-4 text-sm text-gray-300 font-mono overflow-x-auto leading-relaxed">{children}</pre>
  </div>
);

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="mb-16 scroll-mt-24">
    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-100">{title}</h2>
    {children}
  </section>
);

const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
    {children}
  </div>
);

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "installation", label: "Installation" },
  { id: "configuration", label: "Configuration" },
  { id: "dashboard", label: "Dashboard" },
  { id: "sdk", label: "Node.js SDK" },
  { id: "api", label: "API Reference" },
  { id: "environments", label: "Environments" },
  { id: "secrets", label: "Secrets" },
  { id: "tokens", label: "API Tokens" },
  { id: "roles", label: "Roles & Access" },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Top nav */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/"><Logo /></Link>
            <span className="text-gray-300">|</span>
            <span className="text-sm font-medium text-gray-500">Documentation</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://github.com/vikaszool/configos" className="text-sm text-gray-500 hover:text-gray-900">GitHub</a>
            <Link href="/signup" className="bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Get started
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12 flex gap-12">

        {/* Sidebar */}
        <aside className="hidden lg:block w-52 shrink-0">
          <div className="sticky top-24">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Contents</p>
            <nav className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-sm text-gray-500 hover:text-indigo-600 py-1 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 max-w-3xl">

          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Developer Documentation</h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Everything you need to deploy Config OS and integrate it into your applications.
            </p>
          </div>

          {/* Overview */}
          <Section id="overview" title="Overview">
            <p className="text-gray-600 leading-relaxed mb-4">
              Config OS is a self-hosted configuration and secrets management platform. It replaces scattered <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">.env</code> files with a centralized dashboard, encrypted secret storage, and a lightweight SDK that fetches configs at runtime.
            </p>
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5">
              <p className="text-sm font-semibold text-indigo-800 mb-2">Core principle</p>
              <p className="text-sm text-indigo-700">No secrets or config values ever live in your codebase. The only thing in your code is a <strong>Config OS API token</strong> — not the secrets themselves.</p>
            </div>
          </Section>

          {/* Installation */}
          <Section id="installation" title="Installation">
            <SubSection title="Prerequisites">
              <ul className="list-none space-y-2 text-gray-600 text-sm">
                {["Docker 24+", "Docker Compose v2+", "A license key from Config OS"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-indigo-500">✓</span> {item}
                  </li>
                ))}
              </ul>
            </SubSection>

            <SubSection title="Quick install">
              <p className="text-gray-600 text-sm mb-3">Download the docker-compose file and run it on your server:</p>
              <Code language="bash">{`# Download the compose file
curl -O https://raw.githubusercontent.com/vikaszool/configos/main/docker-compose.yml
curl -O https://raw.githubusercontent.com/vikaszool/configos/main/docker-compose.env.example

# Set up environment
cp docker-compose.env.example .env

# Edit .env with your values (see Configuration section below)
nano .env

# Start Config OS
docker compose up -d`}</Code>
              <p className="text-gray-600 text-sm">
                Config OS will be available at <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">http://your-server:3000</code>.
              </p>
            </SubSection>

            <SubSection title="Choose your database">
              <p className="text-gray-600 text-sm mb-3">Config OS supports PostgreSQL (default) and MySQL. Use the matching compose file:</p>
              <Code language="bash">{`# PostgreSQL (default)
docker compose up -d

# MySQL
docker compose -f docker-compose.mysql.yml up -d`}</Code>
              <p className="text-gray-600 text-sm mt-3">When using MySQL, also set <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">DB_ROOT_PASSWORD</code> in your <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">.env</code> — see the Configuration section below.</p>
            </SubSection>

            <SubSection title="Verify it's running">
              <Code language="bash">{`curl http://localhost:3001/health
# {"ok":true}`}</Code>
            </SubSection>
          </Section>

          {/* Configuration */}
          <Section id="configuration" title="Configuration">
            <p className="text-gray-600 text-sm mb-4">Fill in your <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">.env</code> file before starting:</p>
            <Code language=".env">{`# Required
DB_PASSWORD=choose-a-strong-password
LICENSE_KEY=COS-XXXX-XXXX-XXXX-XXXX

# Generate with: openssl rand -hex 32
JWT_SECRET=
ENCRYPTION_KEY=

# MySQL only — not needed for PostgreSQL
# DB_ROOT_PASSWORD=choose-a-root-password

# Optional — public URL if exposing externally
API_URL=http://localhost:3001`}</Code>

            <SubSection title="Generate secrets">
              <Code language="bash">{`# Generate JWT_SECRET and ENCRYPTION_KEY
openssl rand -hex 32   # run twice, use each output for one variable`}</Code>
            </SubSection>

            <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 text-sm text-yellow-800">
              <strong>Important:</strong> Keep your <code className="bg-yellow-100 px-1 rounded">ENCRYPTION_KEY</code> safe. If you lose it, encrypted secrets cannot be recovered. Back it up securely before going to production.
            </div>
          </Section>

          {/* Dashboard */}
          <Section id="dashboard" title="Dashboard">
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Open <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">http://your-server:3000</code> in your browser.
            </p>

            <SubSection title="First-time setup">
              <ol className="list-none space-y-4 text-sm text-gray-600">
                {[
                  { n: "1", title: "Create an account", desc: "Click Sign up. Enter your name, email, password, and organization name." },
                  { n: "2", title: "Create a project", desc: "Click New project. Config OS automatically creates three environments: Development, Staging, Production." },
                  { n: "3", title: "Add configs", desc: "Select an environment, click Add config, and enter a KEY and value." },
                  { n: "4", title: "Add secrets", desc: "Switch to the Secrets tab for sensitive values like DB passwords or API keys. All secrets are AES-256 encrypted." },
                  { n: "5", title: "Create an API token", desc: "Go to API Tokens → New token. Copy the token — it's only shown once." },
                ].map((step) => (
                  <li key={step.n} className="flex gap-4">
                    <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{step.n}</span>
                    <div>
                      <p className="font-medium text-gray-800">{step.title}</p>
                      <p className="text-gray-500 mt-0.5">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </SubSection>
          </Section>

          {/* SDK */}
          <Section id="sdk" title="Node.js SDK">
            <SubSection title="Install">
              <Code language="bash">npm install @config-os/sdk</Code>
            </SubSection>

            <SubSection title="Initialize">
              <Code language="typescript">{`import { createClient } from "@config-os/sdk";

const config = createClient({
  apiUrl: process.env.CONFIG_OS_URL!,   // URL of your Config OS API
  token: process.env.CONFIG_OS_TOKEN!,  // API token from the dashboard
  project: "my-app",                    // project slug
  environment: process.env.NODE_ENV!,   // "development" | "staging" | "production"
});`}</Code>
            </SubSection>

            <SubSection title="Fetch configs">
              <Code language="typescript">{`// get — returns undefined if key doesn't exist
const port = await config.get("PORT");

// require — throws if key is missing (recommended for critical configs)
const dbUrl = await config.require("DB_URL");
const stripeKey = await config.require("STRIPE_SECRET_KEY");

// getAll — returns all configs as a key-value object
const all = await config.getAll();`}</Code>
            </SubSection>

            <SubSection title="Recommended: pre-warm at startup">
              <p className="text-gray-600 text-sm mb-3">Call <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">getAll()</code> before your server starts to load all configs in one request:</p>
              <Code language="typescript">{`async function bootstrap() {
  // Load all configs before accepting requests
  await config.getAll();

  const port = await config.require("PORT");
  app.listen(parseInt(port), () => {
    console.log(\`Server running on port \${port}\`);
  });
}

bootstrap();`}</Code>
            </SubSection>

            <SubSection title="Cache behaviour">
              <p className="text-gray-600 text-sm mb-3">The SDK fetches all configs in one request and caches them in memory. Default TTL is 60 seconds.</p>
              <Code language="typescript">{`// Increase TTL for configs that rarely change
const config = createClient({
  ...opts,
  cacheTtl: 5 * 60 * 1000, // 5 minutes
});

// Force a cache refresh
config.invalidate();           // clear everything
config.invalidate("DB_URL");   // clear one key`}</Code>
            </SubSection>
          </Section>

          {/* API Reference */}
          <Section id="api" title="API Reference">
            <p className="text-gray-600 text-sm mb-6">All API requests require either a <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">Authorization: Bearer &lt;token&gt;</code> header (for dashboard operations) or <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">x-api-token: &lt;token&gt;</code> (for SDK token access).</p>

            {[
              { method: "GET", path: "/sdk/configs?project=slug&env=slug", desc: "Fetch all configs for a project/environment. Used by the SDK." },
              { method: "GET", path: "/orgs/:org/projects", desc: "List all projects in an organization." },
              { method: "POST", path: "/orgs/:org/projects", desc: "Create a new project." },
              { method: "GET", path: "/orgs/:org/projects/:project/envs/:env/configs", desc: "List all configs for an environment." },
              { method: "POST", path: "/orgs/:org/projects/:project/envs/:env/configs", desc: "Create or update a config key." },
              { method: "DELETE", path: "/orgs/:org/projects/:project/envs/:env/configs/:key", desc: "Delete a config key." },
              { method: "GET", path: "/orgs/:org/projects/:project/envs/:env/secrets", desc: "List secrets (values masked)." },
              { method: "POST", path: "/orgs/:org/projects/:project/envs/:env/secrets", desc: "Create or update a secret." },
              { method: "GET", path: "/orgs/:org/projects/:project/envs/:env/secrets/:key/reveal", desc: "Reveal a secret value. Admin only." },
              { method: "GET", path: "/orgs/:org/audit", desc: "List audit log entries." },
            ].map((endpoint) => (
              <div key={endpoint.path} className="flex gap-3 py-3 border-b border-gray-50 text-sm">
                <span className={`shrink-0 font-bold font-mono text-xs px-2 py-1 rounded h-fit ${endpoint.method === "GET" ? "bg-blue-50 text-blue-600" : endpoint.method === "POST" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}>
                  {endpoint.method}
                </span>
                <div>
                  <code className="text-gray-800 text-xs">{endpoint.path}</code>
                  <p className="text-gray-500 mt-0.5 text-xs">{endpoint.desc}</p>
                </div>
              </div>
            ))}
          </Section>

          {/* Environments */}
          <Section id="environments" title="Environments">
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Every project starts with three environments: <strong>Development</strong>, <strong>Staging</strong>, and <strong>Production</strong>. Each environment has its own isolated set of configs and secrets.
            </p>
            <Code language="typescript">{`// In development
const config = createClient({ ..., environment: "development" });

// In production (e.g. set NODE_ENV in your deployment)
const config = createClient({ ..., environment: "production" });`}</Code>
            <p className="text-gray-600 text-sm">
              A config key can exist in one or all environments with different values. If a key only exists in production, fetching it from development returns <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">undefined</code>.
            </p>
          </Section>

          {/* Secrets */}
          <Section id="secrets" title="Secrets">
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Secrets are encrypted using <strong>AES-256-GCM</strong> before being stored. The encryption key never leaves your server.
            </p>
            <SubSection title="Accessing secrets via SDK">
              <p className="text-gray-600 text-sm mb-3">Secrets and configs use the same SDK interface:</p>
              <Code language="typescript">{`// Secrets are fetched alongside configs — same call
const dbPassword = await config.require("DB_PASSWORD");
const stripeKey = await config.require("STRIPE_SECRET_KEY");`}</Code>
            </SubSection>
            <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 text-sm text-yellow-800">
              <strong>Reveal in dashboard:</strong> Only Admins can reveal secret values in the dashboard. Every reveal is recorded in the audit log.
            </div>
          </Section>

          {/* Tokens */}
          <Section id="tokens" title="API Tokens">
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              API tokens authenticate the SDK. They are scoped to your organization and optionally to a specific project.
            </p>
            <SubSection title="Create a token">
              <ol className="list-none space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-indigo-500 font-bold">1.</span> Go to <strong>API Tokens</strong> in the sidebar</li>
                <li className="flex gap-2"><span className="text-indigo-500 font-bold">2.</span> Click <strong>New token</strong>, give it a descriptive name (e.g. <code className="bg-gray-100 px-1 rounded">production-api</code>)</li>
                <li className="flex gap-2"><span className="text-indigo-500 font-bold">3.</span> Copy the token immediately — it is shown only once</li>
                <li className="flex gap-2"><span className="text-indigo-500 font-bold">4.</span> Store it as an environment variable on your server</li>
              </ol>
            </SubSection>
            <Code language="bash">{`# Store on your server — never commit this to git
export CONFIG_OS_TOKEN=cos_xxxxxxxxxxxxxxxx`}</Code>
          </Section>

          {/* Roles */}
          <Section id="roles" title="Roles & Access">
            <div className="overflow-hidden border border-gray-200 rounded-xl">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-5 py-3 font-semibold text-gray-600">Role</th>
                    <th className="text-left px-5 py-3 font-semibold text-gray-600">Can do</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { role: "Admin", perms: "Everything — create/delete projects, manage API tokens, reveal secrets, manage team members" },
                    { role: "Editor", perms: "Create and update configs and secrets. Cannot reveal secrets or manage tokens." },
                    { role: "Viewer", perms: "Read-only access to configs. Cannot view secrets or make any changes." },
                  ].map((r) => (
                    <tr key={r.role} className="hover:bg-gray-50">
                      <td className="px-5 py-3 font-medium text-gray-800">{r.role}</td>
                      <td className="px-5 py-3 text-gray-500">{r.perms}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* Footer */}
          <div className="border-t border-gray-100 pt-8 mt-8 flex justify-between items-center text-sm text-gray-400">
            <span>Config OS Docs</span>
            <Link href="/" className="text-indigo-600 hover:underline">← Back to home</Link>
          </div>

        </main>
      </div>
    </div>
  );
}
