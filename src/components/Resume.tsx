import { Mail, MapPin, Github, Globe, Phone } from "lucide-react";

export function Resume() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page 1 */}
      <div className="max-w-[8.5in] mx-auto bg-white min-h-[11in]">
        <div className="px-20 py-16">

          {/* Header */}
          <header className="mb-14">
            <div className="mb-6">
              <h1 className="text-[#1a1a1a] mb-2 tracking-tight text-3xl sm:text-4xl">
                Bazell Partridge
              </h1>
              <div className="h-0.5 w-12 bg-[#4285f4]"></div>
            </div>
            <p className="text-[#5f6368] text-lg mb-6">Senior UI Engineer</p>

            {/* REVISED: Responsive contact info section */}
            <div className="text-[#5f6368] text-sm">
              {/* Use a flex-wrap for small screens to prevent overflow, or a grid for better alignment. 
                  Let's try a grid on extra-small/small screens and then revert to flex-row on medium screens. */}

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:flex md:flex-row md:gap-6 md:flex-wrap">
                {/* - Default (xs): grid-cols-1 (stacks vertically, one item per row)
                  - sm: grid-cols-2 (two items per row, which should prevent the messy wrapping seen)
                  - md: flex-row (back to a single row layout)
                */}

                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" />
                  <span>BP@Sojourn.LLC</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5" />
                  <a
                    href="https://sojourn.llc"
                    className="text-[#4285f4] hover:underline whitespace-nowrap"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5" />
                  <a
                    href="https://github.com/elbitapmoC"
                    target="_blank"
                    className="text-[#4285f4] hover:underline whitespace-nowrap"
                  >
                    Github Profile
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className='whitespace-nowrap'>Fort Lauderdale, FL</span>
                </div>
              </div>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-14">
            <h2 className="text-[#1a1a1a] mb-4">Summary</h2>
            <p className="text-[#5f6368] text-sm leading-relaxed">
              Senior UI Engineer with 7+ years building responsive email
              templates, React applications, and enterprise design systems for
              Fortune 500 companies. Delivered email campaigns to 2M+ monthly
              recipients and design systems serving 10,000+ developers. Expert
              in React Email and HTML/CSS email coding, cross-platform testing (Email on
              Acid), WCAG 2.1 AA accessibility, and React/TypeScript component
              architecture. Collaborate cross-functionally with product, compliance, and UX to deliver
              accessible, high-impact experiences.
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-[#1a1a1a] mb-6">Experience</h2>

            {/* American Express - Sr. UI Engineer */}
            <div className="mb-10">
              <div className="flex justify-between items-baseline mb-4">
                <div>
                  <h3 className="text-[#1a1a1a]">Sr. UI Engineer</h3>
                  <p className="text-[#4285f4] text-sm">American Express</p>
                </div>
                <span className="text-xs text-[#5f6368]">
                  Feb 2025 - Current
                </span>
              </div>

              <ul className="space-y-2.5 text-[#5f6368] text-sm">
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    2M+ email campaigns
                  </strong>{" "}
                  for AMEX Card members. Hand-coding responsive
                  HTML/CSS email templates and building modular templates with React Email,
                  with cross-platform compatibility (Gmail, Outlook, Apple Mail). Implemented WCAG 2.1 AA
                  accessibility and rigorous testing workflows using Email on Acid.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    Validated UX across 100K+ users
                  </strong>{" "}
                  through A/B testing and end-to-end testing with global UX
                  teams. Resolved 25+ broken links and improved experiences in
                  unsupported international markets.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">Set org-wide accessibility and compliance standards</strong>{" "}
                  by authoring best-practice React/TypeScript patterns, a11y coding guidelines, and design system
                  governance adopted across Amex. Served as primary SME in the tech chat, supporting Senior Managers
                  through Interns, and accelerated v6 to v7 adoption for 200+ developers.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">Partnered with product and compliance</strong>{" "}
                  to align campaigns and ensure brand and regulatory standards.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    Built theme builder tool
                  </strong>{" "}
                  enabling real-time token tracking and unused token
                  identification for developer-designer collaboration.
                  Restructured token system into simplified, semantic, tiered
                  architecture improving consistency for 200+ developers.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    Established design system feedback loop
                  </strong>{" "}
                  allowing engineers to request component features and
                  enhancements. Addressed long-standing need, improving adoption
                  and developer satisfaction across teams.
                </li>
              </ul>
            </div>

            {/* Sojourner LLC */}
            <div className="mb-10">
              <div className="flex justify-between items-baseline mb-4">
                <div>
                  <h3 className="text-[#1a1a1a]">Sr. Front-End Developer</h3>
                  <p className="text-[#4285f4] text-sm">Sojourner LLC</p>
                </div>
                <span className="text-xs text-[#5f6368]">
                  Aug 2020 - Current
                </span>
              </div>

              <ul className="space-y-2.5 text-[#5f6368] text-sm">
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    Improved prescription accuracy 25%
                  </strong>{" "}
                  by designing data visualization tools with React, Zustand, and
                  Tailwind CSS, providing pharmacists real-time insights for
                  dosage suggestions and clinical decisions.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    Reduced prescription processing time 20%
                  </strong>{" "}
                  by building React frontend integrated with Node.js backend,
                  streamlining workflow efficiency for healthcare providers.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    Increased clinician satisfaction 20%
                  </strong>{" "}
                  by partnering with clinical SMEs to align UI components with
                  healthcare workflows and user needs.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    Enhanced user engagement
                  </strong>{" "}
                  with AI-powered recommendation system providing personalized
                  reading suggestions based on behavioral insights and ML
                  algorithms.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    Reduced server requests 15%
                  </strong>{" "}
                  by implementing React Query and caching strategies, improving
                  load times and app responsiveness.
                </li>
              </ul>
            </div>

            {/* American Express - Sr. Front End Developer */}
            <div className="mb-10">
              <div className="flex justify-between items-baseline mb-4">
                <div>
                  <h3 className="text-[#1a1a1a]">Sr. Front-End Developer</h3>
                  <p className="text-[#4285f4] text-sm">American Express</p>
                </div>
                <span className="text-xs text-[#5f6368]">
                  Oct 2023 - July 2024
                </span>
              </div>

              <ul className="space-y-2.5 text-[#5f6368] text-sm">
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    Reduced security incidents ~70%
                  </strong>{" "}
                  by implemnting Passkeys using WebAuthN and
                  crypto.subtle APIs, streamlining authentication for billions
                  of customers and eliminating phishing vulnerabilities and unauthorized access attempts..
                </li>
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    Cut development time at least 20%
                  </strong>{" "}
                  by enhancing design system with reusable React/TypeScript UI
                  components, improving design consistency across three
                  platforms.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    Reduced login times
                  </strong>{" "}
                  by redesigning consolidated login screens with email, OTP, and
                  SMS verification, boosting user satisfaction through
                  streamlined POD/POA workflows.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    Improved process efficiency 30%
                  </strong>{" "}
                  by building onboarding wizard for 50+ architects, directors,
                  and senior managers, facilitating exploration of new ideas
                  with step-by-step guidance.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    Increased test coverage 
                  </strong>{" "}
                  using Storybook, React Testing Library, and Jest, enhancing
                  component reliability and development consistency, 80% test coverage on all components.
                </li>
              </ul>
            </div>

            {/* PwC */}
            <div className="mb-10">
              <div className="flex justify-between items-baseline mb-4">
                <div>
                  <h3 className="text-[#1a1a1a]">Front End Engineer</h3>
                  <p className="text-[#4285f4] text-sm">PwC</p>
                </div>
                <span className="text-xs text-[#5f6368]">Apr 2018 - Apr 2022</span>
              </div>

              <ul className="space-y-2.5 text-[#5f6368] text-sm">
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    Coded GDPR-compliant email campaigns
                  </strong>{" "}
                  using responsive HTML/CSS templates for marketing and client
                  communications. Built reusable email component system with
                  cross-client testing (Outlook, Gmail, Apple Mail) and
                  WCAG-compliant responsive layouts.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    Improved load times
                  </strong>{" "}
                  by migrating Angular component library from legacy AngularJS
                  for 300K+ users across 12 markets. Implemented ITCSS
                  methodology, design token system, and GDPR compliance across
                  all applications.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    Achieved 100% WCAG 2.1 AA compliance
                  </strong>{" "}
                  in external audit by hand-coding semantic HTML with ARIA
                  attributes, keyboard navigation, and screen reader
                  compatibility across web and email interfaces.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-[#1a1a1a]">
                    Delivered financial dashboards
                  </strong>{" "}
                  for Wells Fargo and Sallie Mae using React and Angular. Built
                  responsive, accessible, data-driven front-end interfaces
                  improving customer satisfaction.
                </li>
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-[#1a1a1a] mb-5">Technical Skills</h2>

            <div className="grid grid-cols-4 gap-8">
              <div>
                <h4 className="text-[#1a1a1a] text-xs mb-2.5">
                  Email Development
                </h4>
                <ul className="space-y-1.5 text-[#5f6368] text-xs">
                  <li>HTML Email Coding</li>
                  <li>React Email</li>
                  <li>Responsive CSS</li>
                  <li>Litmus / Email on Acid</li>
                  <li>Cross-Platform Testing</li>
                  <li>Gmail / Outlook / Apple</li>
                </ul>
              </div>

              <div>
                <h4 className="text-[#1a1a1a] text-xs mb-2.5">Front-End</h4>
                <ul className="space-y-1.5 text-[#5f6368] text-xs">
                  <li>React / Next.js</li>
                  <li>TypeScript / JavaScript</li>
                  <li>HTML5 / CSS3</li>
                  <li>Sass/SCSS</li>
                  <li>Tailwind CSS</li>
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
            <h2 className="text-[#1a1a1a] mb-5">Awards & Recognition</h2>

            <div className="grid grid-cols-2 gap-x-16 gap-y-4">
              <div>
                <h4 className="text-[#1a1a1a] text-sm">
                  Mentor Madness Winner
                </h4>
                <p className="text-[#5f6368] text-xs mt-0.5">
                  Outstanding technical mentorship and peer leadership
                </p>
              </div>
              <div>
                <h4 className="text-[#1a1a1a] text-sm">Digital Dose Badge</h4>
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
                <h4 className="text-[#1a1a1a] text-sm">SAFe Certified</h4>
                <p className="text-[#5f6368] text-xs mt-0.5">
                  Scaled Agile Framework
                </p>
              </div>
            </div>
          </section>

          {/* Key Competencies */}
          <section className="mb-14">
            <h2 className="text-[#1a1a1a] mb-4">Key Competencies</h2>

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
            <h2 className="text-[#1a1a1a] mb-5">Education & Certifications</h2>

            <div className="space-y-4">
              <div>
                <h4 className="text-[#1a1a1a] text-sm">
                  Gwinnett Technical College
                </h4>
                <p className="text-[#5f6368] text-xs mt-0.5">
                  A.A.S Information Technology
                  <span className="text-[#4285f4]"> (TBD)</span>
                </p>
              </div>

              <div>
                <h4 className="text-[#1a1a1a] text-sm">Udacity</h4>
                <p className="text-[#5f6368] text-xs mt-0.5">
                  UX / HCI (Human Computer Interactions)
                </p>
              </div>

              <div>
                <h4 className="text-[#1a1a1a] text-sm">Free Code Camp</h4>
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
