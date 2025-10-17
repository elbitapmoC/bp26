import { Mail, MapPin, Github } from "lucide-react";

export function Resume() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page 1 */}
      <div className="max-w-[8.5in] mx-auto bg-white min-h-[11in]">
        <div className="px-20 py-16">
          {/* Header */}
          <header className="mb-14">
            <div className="mb-6">
              <h1 className="text-[#1a1a1a] mb-2 tracking-tight">
                Bazell Partridge
              </h1>
              <div className="h-0.5 w-12 bg-[#4285f4]"></div>
            </div>
            <p className="text-[#5f6368] text-lg mb-6">
              Senior UI Engineer
            </p>

            <div className="flex gap-6 text-[#5f6368] text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" />
                <span>BP@Sojourn.LLC</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-3.5 h-3.5" />
                <a
                  href="#"
                  className="text-[#4285f4] hover:underline"
                >
                  Github Profile
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>Fort Lauderdale, FL</span>
              </div>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-14">
            <h2 className="text-[#1a1a1a] mb-4">Summary</h2>
            <p className="text-[#5f6368] text-sm leading-relaxed">
              Senior UI Engineer with 7+ years specializing in
              email template development, React applications,
              and enterprise-scale front-end systems. Expert in
              HTML/CSS coding for responsive email campaigns,
              cross-platform testing, and WCAG-compliant
              interfaces. Proven success building email systems
              serving 2M+ recipients monthly, architecting
              design systems for 200+ developers, and delivering
              high-impact user experiences at Fortune 500
              companies including American Express and PwC.
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-[#1a1a1a] mb-6">Experience</h2>

            {/* American Express */}
            <div className="mb-10">
              <div className="flex justify-between items-baseline mb-4">
                <div>
                  <h3 className="text-[#1a1a1a]">
                    Design Systems Engineer
                  </h3>
                  <p className="text-[#4285f4] text-sm">
                    American Express
                  </p>
                </div>
                <span className="text-xs text-[#5f6368]">
                  2023 - Current
                </span>
              </div>

              <ul className="space-y-2.5 text-[#5f6368] text-sm">
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    Email Template Development (Centurion
                    System):
                  </strong>{" "}
                  Led end-to-end development of responsive email
                  template system serving 2M+ recipients monthly
                  for premium Black Card members. Hand-coded
                  HTML/CSS templates with cross-platform
                  compatibility (Gmail, Outlook, Apple Mail).
                  Implemented WCAG 2.1 AA accessibility
                  standards and rigorous email testing workflows
                  using Litmus and Email on Acid.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    Passkeys Security Implementation (SME):
                  </strong>{" "}
                  Collaborated with security and engineering
                  teams as Subject Matter Expert to implement
                  Passkeys authentication using WebAuthn and
                  crypto.subtle APIs. Enhanced security
                  architecture reducing unauthorized access
                  attempts and phishing incidents by 77% while
                  improving user experience by lowering login
                  complexity.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    User Onboarding & Authentication:
                  </strong>{" "}
                  Developed consolidated Onboarding Wizard and
                  login screens using email, OTP, and SMS
                  verification with React. Reduced login
                  completion time by 12% and improved onboarding
                  efficiency by 10-30% for new users including
                  directors, architects, and designers.
                  Streamlined POD/POA workflows increasing user
                  satisfaction by 12%.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    UI/UX Excellence & Global Testing:
                  </strong>{" "}
                  Worked with global UX teams conducting
                  comprehensive end-to-end testing across
                  international markets. Resolved 25+ broken
                  links, improved experiences in unsupported
                  global markets, and validated intuitive UX
                  patterns with A/B testing across 100K+ users.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    React Component Library & Leadership:
                  </strong>{" "}
                  Built enterprise design system with React and
                  TypeScript serving 200+ developers. Mentored 5
                  junior developers and 15+ senior engineers.
                  Increased test coverage from 45% to 75% using
                  React Testing Library and Jest, reducing
                  production bugs by 40%.
                </li>
              </ul>
            </div>

            {/* PwC */}
            <div className="mb-10">
              <div className="flex justify-between items-baseline mb-4">
                <div>
                  <h3 className="text-[#1a1a1a]">
                    Sr. UI Engineer
                  </h3>
                  <p className="text-[#4285f4] text-sm">PwC</p>
                </div>
                <span className="text-xs text-[#5f6368]">
                  2018 - 2022
                </span>
              </div>

              <ul className="space-y-2.5 text-[#5f6368] text-sm">
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    Email Campaign Development:
                  </strong>{" "}
                  Developed and coded responsive HTML/CSS email
                  templates for marketing campaigns and client
                  communications ensuring GDPR compliance. Built
                  reusable email component system with
                  cross-client compatibility testing (Outlook,
                  Gmail, Apple Mail). Implemented responsive
                  layouts and WCAG-compliant designs ensuring
                  accessibility across all email platforms.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    Component Library Architecture:
                  </strong>{" "}
                  Built Angular component library with ITCSS
                  methodology and design token system for 300K+
                  users across 12 markets. Improved load times
                  by 45% through migration from legacy
                  AngularJS. Ensured GDPR compliance across all
                  applications and user data handling.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    WCAG Compliance & Accessibility:
                  </strong>{" "}
                  Achieved 100% WCAG 2.1 AA compliance in
                  external audit. Hand-coded semantic HTML with
                  proper ARIA attributes, ensuring keyboard
                  navigation and screen reader compatibility
                  across web and email interfaces.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    Enterprise Client Solutions:
                  </strong>{" "}
                  Delivered financial dashboards and loan
                  management systems for Wells Fargo and Sallie
                  Mae. Built responsive front-end interfaces
                  with React and Angular, improving customer
                  satisfaction through accessible, data-driven
                  experiences.
                </li>
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-[#1a1a1a] mb-5">
              Technical Skills
            </h2>

            <div className="grid grid-cols-4 gap-8">
              <div>
                <h4 className="text-[#1a1a1a] text-xs mb-2.5">
                  Email Development
                </h4>
                <ul className="space-y-1.5 text-[#5f6368] text-xs">
                  <li>HTML Email Coding</li>
                  <li>Responsive CSS</li>
                  <li>Litmus / Email on Acid</li>
                  <li>Cross-Platform Testing</li>
                  <li>Gmail / Outlook / Apple</li>
                  <li>MJML</li>
                </ul>
              </div>

              <div>
                <h4 className="text-[#1a1a1a] text-xs mb-2.5">
                  Front-End
                </h4>
                <ul className="space-y-1.5 text-[#5f6368] text-xs">
                  <li>React / Next.js</li>
                  <li>TypeScript / JavaScript</li>
                  <li>HTML5 / CSS3</li>
                  <li>Sass/SCSS</li>
                  <li>Tailwind CSS</li>
                  <li>Angular / NgRX</li>
                </ul>
              </div>

              <div>
                <h4 className="text-[#1a1a1a] text-xs mb-2.5">
                  Testing & Tools
                </h4>
                <ul className="space-y-1.5 text-[#5f6368] text-xs">
                  <li>React Testing Library</li>
                  <li>Jest / Cypress</li>
                  <li>BrowserStack</li>
                  <li>Git / Github</li>
                  <li>Storybook</li>
                  <li>Docker</li>
                </ul>
              </div>

              <div>
                <h4 className="text-[#1a1a1a] text-xs mb-2.5">
                  Design Systems
                </h4>
                <ul className="space-y-1.5 text-[#5f6368] text-xs">
                  <li>Component Libraries</li>
                  <li>Design Tokens</li>
                  <li>WCAG Accessibility</li>
                  <li>Figma</li>
                  <li>Design Documentation</li>
                  <li>Pattern Libraries</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Page 2 */}
      <div className="max-w-[8.5in] mx-auto bg-white min-h-[11in] print:break-before-page mt-8 print:mt-0">
        <div className="px-20 py-16">
          {/* Awards */}
          <section className="mb-14">
            <h2 className="text-[#1a1a1a] mb-5">
              Awards & Recognition
            </h2>

            <div className="grid grid-cols-2 gap-x-16 gap-y-4">
              <div>
                <h4 className="text-[#1a1a1a] text-sm">
                  Mentor Madness Winner
                </h4>
                <p className="text-[#5f6368] text-xs mt-0.5">
                  Outstanding technical mentorship and peer
                  leadership
                </p>
              </div>
              <div>
                <h4 className="text-[#1a1a1a] text-sm">
                  Digital Dose Badge
                </h4>
                <p className="text-[#5f6368] text-xs mt-0.5">
                  Excellence in digital innovation
                </p>
              </div>
              <div>
                <h4 className="text-[#1a1a1a] text-sm">
                  Software Magazine Recognition
                </h4>
                <p className="text-[#5f6368] text-xs mt-0.5">
                  Enterprise software development
                </p>
              </div>
              <div>
                <h4 className="text-[#1a1a1a] text-sm">
                  SAFe Certified
                </h4>
                <p className="text-[#5f6368] text-xs mt-0.5">
                  Scaled Agile Framework
                </p>
              </div>
            </div>
          </section>

          {/* Key Competencies */}
          <section className="mb-14">
            <h2 className="text-[#1a1a1a] mb-4">
              Key Competencies
            </h2>

            <div className="grid grid-cols-3 gap-x-12 gap-y-2 text-[#5f6368] text-xs">
              <span>• Email Campaign Development</span>
              <span>• Responsive Email Templates</span>
              <span>• Cross-Platform Email Testing</span>
              <span>• React Application Development</span>
              <span>• Component Library Architecture</span>
              <span>• WCAG Accessibility Standards</span>
              <span>• HTML/CSS Hand-Coding</span>
              <span>• A/B Testing & Optimization</span>
              <span>• Technical Mentorship</span>
              <span>• Cross-Functional Collaboration</span>
              <span>• Agile/Scrum Methodologies</span>
              <span>• User Experience Design</span>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-[#1a1a1a] mb-5">
              Education & Certifications
            </h2>

            <div className="space-y-4">
              <div>
                <h4 className="text-[#1a1a1a] text-sm">
                  Gwinnett Technical College
                </h4>
                <p className="text-[#5f6368] text-xs mt-0.5">
                  A.A.S Information Technology
                  <span className="text-[#4285f4]">
                    {" "}
                    (Expected Dec 2025)
                  </span>
                </p>
              </div>

              <div>
                <h4 className="text-[#1a1a1a] text-sm">
                  Udacity
                </h4>
                <p className="text-[#5f6368] text-xs mt-0.5">
                  UX / HCI (Human Computer Interactions)
                </p>
              </div>

              <div>
                <h4 className="text-[#1a1a1a] text-sm">
                  Free Code Camp
                </h4>
                <p className="text-[#5f6368] text-xs mt-0.5">
                  Front End Development Certificate
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}