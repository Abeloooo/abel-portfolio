export default function CyberPortfolio() {
  const skills = [
    'Splunk', 'Palo Alto', 'XSOAR', 'Wireshark', 'Linux', 'Docker', 'Python',
    'SIEM', 'Threat Hunting', 'Incident Response', 'Cloud Security',
    'Network Security', 'MITRE ATT&CK', 'SOC Operations'
  ];

  const projects = [
    {
      title: 'SOC Alert Investigation Dashboard',
      desc: 'Centralized SOC dashboard for monitoring and investigating security alerts in real-time.',
      tech: 'React, Splunk, Tailwind'
    },
    {
      title: 'Automated Incident Response with Python and XSOAR',
      desc: 'Automated phishing and malware triage workflows using XSOAR playbooks.',
      tech: 'Python, XSOAR, APIs'
    },
    {
      title: 'Threat Detection and SIEM Correlation Rules',
      desc: 'Built SIEM correlation rules and detection logic aligned with MITRE ATT&CK.',
      tech: 'SIEM, Splunk, Detection Engineering'
    },
    {
      title: 'Malware Traffic Analysis Lab',
      desc: 'Analyzed suspicious network traffic and malware behavior in isolated lab environments.',
      tech: 'Wireshark, Linux, PCAP Analysis'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_40%)] pointer-events-none" />

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-black/40">
        <h1 className="text-2xl font-bold tracking-wide text-cyan-400">Abel Anbese</h1>
        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <p className="uppercase tracking-[0.3em] text-cyan-400 mb-4">
          Blue Team Cyber Security Analyst
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-5xl">
          Defending Infrastructure <br />
          <span className="text-cyan-400">Monitoring Threats</span>
        </h1>

        <p className="mt-8 max-w-2xl text-gray-400 text-lg leading-relaxed">
          Specialized in SOC operations, SIEM monitoring, incident response,
          threat hunting, and defensive cybersecurity operations with hands-on
          exposure to red team simulations and adversary emulation.
        </p>

        <div className="flex gap-4 mt-10">
          <button className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-500/30 transition">
            View Projects
          </button>
          <button className="px-6 py-3 rounded-2xl border border-cyan-400 hover:bg-cyan-400/10 transition">
            Contact Me
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-cyan-400">About Me</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              I’m Abel Anbese, a cybersecurity enthusiast focused on Blue Team operations, SOC analysis, incident response, and security automation. I have hands-on experience working with security tools, XSOAR administration and automation, threat detection workflows, and Palo Alto security technologies.
              I’m passionate about strengthening defensive security while also exploring Red Team techniques to better understand attacker behavior and improve security strategies. I continuously build my skills through labs, CTF challenges, and practical cybersecurity projects.
              My goal is to grow into a skilled cybersecurity professional who combines security operations, automation, and analytical problem-solving to defend against modern cyber threats.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
            <div className="space-y-4 text-gray-300">
              <div className="flex justify-between">
                <span>Threat Hunting</span>
                <span className="text-cyan-400">Advanced</span>
              </div>
              <div className="flex justify-between">
                <span>SIEM Monitoring</span>
                <span className="text-cyan-400">Advanced</span>
              </div>
              <div className="flex justify-between">
                <span>Incident Response</span>
                <span className="text-cyan-400">Advanced</span>
              </div>
              <div className="flex justify-between">
                <span>Python Automation</span>
                <span className="text-cyan-400">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-8 py-24 bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-black/50 border border-cyan-500/20 hover:border-cyan-400 rounded-2xl p-6 text-center backdrop-blur-lg transition hover:scale-105 hover:shadow-cyan-500/20 hover:shadow-xl"
              >
                <p className="font-semibold text-gray-200">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Palo Alto PCSAE", "CompTIA Security+", "Cisco CyberOps", "CEH (Learning Path)"].map((cert, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-cyan-400 transition"
            >
              <h3 className="font-bold text-lg mb-2">{cert}</h3>
              <p className="text-gray-400 text-sm">
                Professional cybersecurity certification and training pathway.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="px-8 py-24 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-cyan-400">
          Experience & Learning Journey
        </h2>

        <div className="border-l border-cyan-500/40 pl-8 space-y-12">
          {[
            'Started cybersecurity and Linux fundamentals',
            'Built SOC and SIEM monitoring labs',
            'Worked with XSOAR automation and incident response',
            'Participated in red team simulation exercises and CTF labs',
            'Focused on advanced detection engineering and threat hunting'
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-11 top-1 w-5 h-5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
              <p className="text-lg text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-24 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">
            Contact Me
          </h2>

          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Open to cybersecurity opportunities, SOC analyst roles, and collaborative security projects.
          </p>

          <form className="space-y-6 text-left">
            <input type="text" placeholder="Your Name" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-400 outline-none" />
            <input type="email" placeholder="Your Email" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-400 outline-none" />
            <textarea rows="5" placeholder="Message" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-400 outline-none" />
            <button className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition shadow-lg shadow-cyan-500/30">
              Send Message
            </button>
          </form>

          <div className="flex justify-center gap-6 mt-10 text-gray-400">
            <a href="#" className="hover:text-cyan-400 transition">GitHub</a>
            <a href="https://www.linkedin.com/in/abel-anbese-10465b233" className="hover:text-cyan-400 transition">LinkedIn</a>
            <a href="https://t.me/Abelanbe" className="hover:text-cyan-400 transition">Telegram</a>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-gray-500 border-t border-white/10">
        © 2026 Abel Anbese
      </footer>
    </div>
  );
}
