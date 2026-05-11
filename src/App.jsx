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
      desc: 'Built a centralized SOC dashboard for monitoring, triaging, and investigating security alerts in real-time environments. Focused on improving alert visibility, incident tracking, and analyst workflow efficiency.',
      tech: 'React, Splunk, Tailwind',
    },
    {
      title: 'Palo Alto Cortex XSOAR Administration & Deployment',
      desc: 'Participated in the deployment, administration, and optimization of Palo Alto Cortex XSOAR environments, including integration management, incident workflow customization, playbook configuration, and SOC automation improvements.',
      tech: 'Cortex XSOAR, SOAR, Security Automation, Incident Response',
    },
    {
      title: 'XSOAR Playbook Tuning & Automation Development',
      desc: 'Developed and tuned Cortex XSOAR playbooks and custom automation scripts to streamline incident response workflows, reduce manual analyst effort, and improve SOC operational efficiency.',
      tech: 'Cortex XSOAR, Python, APIs, SOAR Automation',
    },
    {
      title: 'Security Automation Development',
      desc: 'Created custom Python automation scripts and integrations to support security operations, automate repetitive analyst tasks, parse security logs, and improve incident handling efficiency.',
      tech: 'Python, APIs, Security Automation',
    },
    {
      title: 'Akalvio Honeypot Deployment',
      desc: 'Deployed and configured Akalvio honeypot environments to simulate vulnerable systems, capture attacker behavior, analyze malicious activity, and enhance threat intelligence collection.',
      tech: 'Honeypots, Threat Intelligence, Linux',
    },
    {
      title: 'Threat Detection & SIEM Correlation Rules',
      desc: 'Designed and implemented SIEM correlation rules aligned with MITRE ATT&CK to improve threat detection and visibility.',
      tech: 'SIEM, Splunk, Detection Engineering',
    },
  ];

  return (
    <div className="relative z-10 min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_40%)] pointer-events-none" />

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-black/40">
        <h1 className="text-2xl font-bold text-cyan-400">
          Abel Anbese
        </h1>

        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <p className="uppercase tracking-[0.3em] text-cyan-400 mb-4">
          Blue Team Cyber Security Analyst
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold">
          Defending Infrastructure <br />
          <span className="text-cyan-400">Monitoring Threats</span>
        </h1>

        <p className="mt-8 max-w-2xl text-gray-400 text-lg">
          SOC operations, SIEM monitoring, incident response, threat hunting, and automation.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-10">
          <button
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition"
          >
            View Projects
          </button>

          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-6 py-3 rounded-2xl border border-cyan-400 hover:bg-cyan-400/10 transition"
          >
            Contact Me
          </button>

          <a
            href="/Abel_Anbese.pdf"
            download
            className="px-6 py-3 rounded-2xl border border-cyan-400 hover:bg-cyan-400/10 text-cyan-400 transition"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl text-cyan-400 mb-6">About Me</h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          I'm Abel Anbese, a Blue Team cybersecurity analyst and enthusiast focused on SOC operations, incident response, SIEM monitoring, and security automation using tools like Cortex XSOAR. I have hands-on experience with XSOAR administration, automation, threat detection workflows, and Palo Alto security technologies.
          <br></br>I'm passionate about strengthening defensive security while also exploring Red Team techniques to better understand attacker behavior and improve security strategies. I continuously build my skills through labs, CTF challenges, and practical cybersecurity projects. My goal is to grow into a skilled cybersecurity professional who combines security operations, automation, and analytical problem-solving to defend against modern cyber threats.
        
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="px-8 py-24 bg-white/5">
        <h2 className="text-4xl text-center text-cyan-400 mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="p-6 bg-black/50 border border-cyan-500/20 rounded-2xl text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl text-center text-cyan-400 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="p-8 bg-white/5 border border-white/10 rounded-3xl"
            >
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-gray-400 mb-4">{p.desc}</p>
              <span className="text-cyan-400 text-sm">{p.tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-24 bg-black border-t border-white/10">
        <h2 className="text-4xl text-center text-cyan-400 mb-10">
          Contact Me
        </h2>

        <form className="max-w-xl mx-auto space-y-6">
          <input className="w-full p-4 bg-white/5 rounded-xl" placeholder="Name" />
          <input className="w-full p-4 bg-white/5 rounded-xl" placeholder="Email" />
          <textarea className="w-full p-4 bg-white/5 rounded-xl" placeholder="Message" rows="5" />
          <button className="w-full py-4 bg-cyan-500 text-black font-bold rounded-xl">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t border-white/10">
        © 2026 Abel Anbese
      </footer>
    </div>
  );
}