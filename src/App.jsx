export default function CyberPortfolio() {
  const skills = [
    'Splunk',
    'Palo Alto Cortex XSOAR',
    'Wireshark',
    'Linux',
    'Docker',
    'Python',
    'SIEM',
    'Threat Hunting',
    'Incident Response',
    'Cloud Security',
    'Network Security',
    'MITRE ATT&CK',
    'SOC Operations',
  ];

  const projects = [
    {
      title: 'SOC Alert Investigation Dashboard',
      desc: 'Built a centralized SOC dashboard for monitoring, triaging, and investigating security alerts in real-time environments.',
      tech: 'React, Splunk, Tailwind',
    },
    {
      title: 'Palo Alto Cortex XSOAR Deployment & Administration',
      desc: 'Deployed and managed Cortex XSOAR environments, configured integrations, and improved SOC automation workflows.',
      tech: 'Cortex XSOAR, SOAR, Security Automation',
    },
    {
      title: 'XSOAR Playbook Tuning & Automation',
      desc: 'Developed and optimized SOAR playbooks to automate incident response workflows and reduce analyst workload.',
      tech: 'Python, APIs, XSOAR',
    },
    {
      title: 'Security Automation Scripts',
      desc: 'Built Python-based automation tools for log parsing, alert enrichment, and incident response optimization.',
      tech: 'Python, Security Automation',
    },
    {
      title: 'Akalvio Honeypot Deployment',
      desc: 'Deployed honeypot systems to simulate attacks, capture threat data, and improve threat intelligence.',
      tech: 'Honeypots, Linux, Threat Intel',
    },
    {
      title: 'SIEM Detection Engineering',
      desc: 'Created correlation rules aligned with MITRE ATT&CK for improved detection and monitoring.',
      tech: 'SIEM, Splunk, Detection Engineering',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* HERO */}
      <section className="text-center py-32 px-6">
        <p className="text-cyan-400 tracking-[0.3em] mb-4">
          BLUE TEAM CYBER SECURITY ANALYST
        </p>

        <h1 className="text-5xl md:text-7xl font-bold">
          Defending Infrastructure <br />
          <span className="text-cyan-400">Monitoring Threats</span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          SOC operations, SIEM monitoring, incident response, threat hunting, and security automation.
        </p>

        <div className="flex gap-4 justify-center mt-10">
          <button
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-6 py-3 bg-cyan-400 text-black font-bold rounded-xl"
          >
            View Projects
          </button>

          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-xl"
          >
            Contact Me
          </button>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-8 py-20 bg-white/5">
        <h2 className="text-4xl text-center text-cyan-400 mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="p-4 bg-black/50 border border-cyan-500/20 rounded-xl text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl text-center text-cyan-400 mb-12">
          Projects & Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-400"
            >
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-gray-400 mb-4">{p.desc}</p>
              <span className="text-cyan-400 text-sm">{p.tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT (UPDATED BACKGROUND - OPTION 2) */}
      <section
        id="contact"
        className="px-8 py-24 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_60%)] bg-black border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-cyan-400 mb-4">
            — Initiate_Contact
          </h2>

          <p className="text-gray-400 mb-12">
            Currently open to Detection Engineering and Senior Cybersecurity Analyst opportunities.
            Let’s discuss how I can improve your security operations.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">

            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <p className="text-cyan-400 mb-2">EMAIL</p>
              <p>abelanbes1235@gmail.com</p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <p className="text-cyan-400 mb-2">PHONE</p>
              <p>+251941120840</p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <p className="text-cyan-400 mb-2">LINKEDIN</p>
              <p>abel-anbese</p>
            </div>

          </div>

          <a
            href="/Abel_Anbese.pdf"
            download
            className="px-10 py-4 bg-cyan-400 text-black font-bold rounded-xl"
          >
            DOWNLOAD_FULL_RESUME.PDF
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-gray-500 border-t border-white/10">
        © 2026 ABEL_ANBESE. ALL_RIGHTS_RESERVE
      </footer>

    </div>
  );
}
