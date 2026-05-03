import Link from "next/link";

const Logo = () => (
  <div className="flex items-center gap-2.5">
    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="1" width="6" height="6" rx="1.5" fill="white" />
        <rect x="9" y="1" width="6" height="6" rx="1.5" fill="white" fillOpacity="0.6" />
        <rect x="1" y="9" width="6" height="6" rx="1.5" fill="white" fillOpacity="0.6" />
        <rect x="9" y="9" width="6" height="6" rx="1.5" fill="white" />
      </svg>
    </div>
    <span className="font-bold text-gray-900 text-lg">Config OS</span>
  </div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Nav */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
            <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How it works</a>
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
            <Link href="/docs" className="hover:text-gray-900 transition-colors">Docs</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Sign in
            </Link>
            <Link
              href="/signup"
              className="bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get started free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
            Self-hosted · Workspace-first access control
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Stop storing secrets
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              in your codebase
            </span>
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Config OS gives engineering teams a single place to manage configs and secrets across workspaces, projects, and environments — with built-in audit trails, invites, and secure runtime delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="bg-indigo-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-indigo-700 transition-colors text-sm"
            >
              Start for free
            </Link>
            <Link
              href="/docs"
              className="border border-gray-200 text-gray-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-gray-50 transition-colors text-sm"
            >
              View docs →
            </Link>
          </div>
          <p className="text-xs text-gray-400 mt-4">Self-hosted. No credit card required.</p>
        </div>
      </section>

      {/* Code demo */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-950 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-gray-500 text-xs font-mono">app.ts</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              <div className="text-gray-500 mb-4">{"// Before Config OS — secrets scattered in .env files"}</div>
              <div className="text-red-400 line-through opacity-60 mb-1">{"import dotenv from 'dotenv';"}</div>
              <div className="text-red-400 line-through opacity-60 mb-4">{"dotenv.config(); // hope nobody committed this..."}</div>

              <div className="text-gray-500 mb-4">{"// After Config OS — one SDK call, all configs loaded"}</div>
              <div>
                <span className="text-violet-400">import</span>
                <span className="text-gray-300"> {"{ createClient }"} </span>
                <span className="text-violet-400">from</span>
                <span className="text-green-400"> {"'@config-os/sdk'"}</span>
                <span className="text-gray-300">;</span>
              </div>
              <div className="mt-3">
                <span className="text-violet-400">const</span>
                <span className="text-blue-400"> config </span>
                <span className="text-gray-300">= createClient{"({"}</span>
              </div>
              <div className="pl-6 text-gray-300">
                <div><span className="text-blue-300">apiUrl</span>{": "}<span className="text-green-400">process.env.CONFIG_OS_URL</span>,</div>
                <div><span className="text-blue-300">token</span>{": "}<span className="text-green-400">process.env.CONFIG_OS_TOKEN</span>,</div>
                <div><span className="text-blue-300">project</span>{": "}<span className="text-green-400">"backend-api"</span>,</div>
                <div><span className="text-blue-300">environment</span>{": "}<span className="text-green-400">process.env.NODE_ENV</span>,</div>
              </div>
              <div className="text-gray-300">{"});"}</div>
              <div className="mt-4">
                <span className="text-violet-400">const</span>
                <span className="text-blue-400"> dbUrl </span>
                <span className="text-gray-300">= </span>
                <span className="text-violet-400">await</span>
                <span className="text-blue-400"> config</span>
                <span className="text-gray-300">.require(</span>
                <span className="text-green-400">"DB_URL"</span>
                <span className="text-gray-300">);</span>
              </div>
              <div className="mt-1">
                <span className="text-violet-400">const</span>
                <span className="text-blue-400"> apiKey </span>
                <span className="text-gray-300">= </span>
                <span className="text-violet-400">await</span>
                <span className="text-blue-400"> config</span>
                <span className="text-gray-300">.require(</span>
                <span className="text-green-400">"STRIPE_SECRET_KEY"</span>
                <span className="text-gray-300">);</span>
              </div>
              <div className="mt-4 text-gray-500">{"// Zero secrets in code. Change configs from the dashboard."}</div>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs">All configs loaded from Config OS · 12ms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Up and running in minutes</h2>
            <p className="text-gray-500">Three steps from install to production</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Install on your server",
                desc: "Use the deployment bundle and one install command. Choose PostgreSQL by default or switch to MySQL when needed.",
                code: "bash deploy/install.sh",
              },
              {
                step: "02",
                title: "Create workspace + projects",
                desc: "Set up projects and environments, then invite teammates with workspace and project-level roles.",
                code: "workspaces · members · invitations",
              },
              {
                step: "03",
                title: "Install the SDK",
                desc: "Add the SDK to your Node.js app. Preload configs at startup and read secrets at runtime.",
                code: "npm install @config-os/sdk",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-black text-gray-100 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                <code className="bg-gray-900 text-green-400 text-xs px-3 py-2 rounded-lg block">
                  {item.code}
                </code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Everything your team needs</h2>
            <p className="text-gray-500">Built for engineering teams who care about security</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🔐",
                title: "AES-256 Secrets",
                desc: "Every secret is encrypted at rest using AES-256-GCM. Values are never stored in plain text.",
              },
              {
                icon: "🌍",
                title: "Multi-environment",
                desc: "Separate configs for dev, staging, and production. No more environment drift.",
              },
              {
                icon: "📋",
                title: "Workspace audit trails",
                desc: "Every change, reveal, and permission event is recorded with actor and timestamp context.",
              },
              {
                icon: "👥",
                title: "Workspace + project roles",
                desc: "Control access with scoped roles across workspaces and individual projects.",
              },
              {
                icon: "⚡",
                title: "Fast SDK",
                desc: "Bulk fetch on startup, in-memory cache with TTL. Config reads take under 1ms after load.",
              },
              {
                icon: "🏠",
                title: "Self-hosted",
                desc: "Runs entirely on your infrastructure. Your secrets never leave your network.",
              },
              {
                icon: "✉️",
                title: "Invitation workflows",
                desc: "Invite workspace members, manage project membership, and handle invite requests cleanly.",
              },
              {
                icon: "🛠️",
                title: "Operations-ready",
                desc: "Install, upgrade, backup, and restore scripts are included for predictable production operations.",
              },
              {
                icon: "🐳",
                title: "Postgres or MySQL",
                desc: "Deploy with the default PostgreSQL setup or use the MySQL installation path when required.",
              },
            ].map((f) => (
              <div key={f.title} className="border border-gray-100 rounded-xl p-6 hover:border-indigo-100 hover:shadow-sm transition-all">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Simple, transparent pricing</h2>
            <p className="text-gray-500">Annual license. Runs on your infrastructure.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: "₹50,000",
                period: "/year",
                desc: "For small teams getting started",
                features: [
                  "Up to 10 users",
                  "1 workspace",
                  "Unlimited projects",
                  "Dev / staging / production environments",
                  "Workspace audit trails",
                  "Node.js SDK",
                  "Email support",
                ],
                cta: "Get started",
                highlight: false,
              },
              {
                name: "Standard",
                price: "₹1,00,000",
                period: "/year",
                desc: "For growing engineering teams",
                features: [
                  "Up to 50 users",
                  "Multiple workspaces",
                  "Unlimited projects",
                  "Workspace + project role controls",
                  "Invite and invite-request workflows",
                  "Node.js SDK",
                  "Priority support",
                ],
                cta: "Get started",
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                desc: "For large teams with compliance needs",
                features: [
                  "Unlimited users",
                  "Unlimited workspaces",
                  "Org-admin governance workflows",
                  "Air-gapped install",
                  "SSO / SAML",
                  "SLA guarantee",
                  "Dedicated support",
                  "Custom contract",
                ],
                cta: "Contact us",
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 ${plan.highlight ? "bg-indigo-600 text-white shadow-xl shadow-indigo-200" : "bg-white border border-gray-200"}`}
              >
                <h3 className={`font-bold text-lg mb-1 ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.highlight ? "text-indigo-200" : "text-gray-400"}`}>{plan.desc}</p>
                <div className="mb-6">
                  <span className={`text-4xl font-black ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? "text-indigo-200" : "text-gray-400"}`}>{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <span className={plan.highlight ? "text-indigo-300" : "text-indigo-500"}>✓</span>
                      <span className={plan.highlight ? "text-indigo-100" : "text-gray-600"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://zool.in/contact"
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                    plan.highlight
                      ? "bg-white text-indigo-600 hover:bg-indigo-50"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to clean up your configs?</h2>
          <p className="text-gray-500 mb-8">Deploy in minutes. Your team will thank you.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="bg-indigo-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-indigo-700 transition-colors text-sm"
            >
              Start for free
            </Link>
            <Link
              href="/docs"
              className="border border-gray-200 text-gray-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-gray-50 transition-colors text-sm"
            >
              Read the docs
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo />
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="/docs" className="hover:text-gray-600">Docs</Link>
            <a href="https://zool.in/contact" className="hover:text-gray-600">Contact</a>
          </div>
          <p className="text-sm text-gray-400">© 2026 Config OS</p>
        </div>
      </footer>
    </div>
  );
}
