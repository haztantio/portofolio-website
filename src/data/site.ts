// Centralized content for everything that isn't markdown-driven.
// Update this file directly to change copy across the site.

export const profile = {
  name: "Hastantio Ridhwandi Adam",
  initials: "HRA",
  role: "Internet Engineering Technology Student",
  university: "Vocational College, Universitas Gadjah Mada",
  focus: "Cybersecurity, Networking & IoT",
  tagline: "Learning. Building. Securing.",
  heroIntro:
    "Mahasiswa Teknologi Rekayasa Internet, Universitas Gadjah Mada, yang berfokus pada Cybersecurity, Networking, dan IoT.",
  aboutParagraphs: [
    "I am an undergraduate student in Internet Engineering Technology at the Vocational College, Universitas Gadjah Mada. Passionate about Networking and Cybersecurity, I enjoy learning how modern systems are designed, secured, and optimized.",
    "I also explore Internet of Things (IoT) to broaden my technical perspective through hands-on learning. Currently, I continuously develop my skills through academic projects, self-directed learning, and Capture The Flag (CTF) competitions.",
    "My aspiration is to become a professional Network & Cybersecurity Engineer.",
  ],
  motto: "Every small step is the beginning of a great achievement.",
  mottoFollowUp:
    "I believe that consistent learning and continuous improvement are the foundation of long-term success in technology.",
  email: "adamridhwandi@gmail.com",
};

export type LearningItem = {
  label: string;
  badge: "database" | "code" | "shield" | "network" | "linux" | "iot" | "web";
  progress: number;
};

export const currentlyLearning: LearningItem[] = [
  { label: "Oracle Database", badge: "database", progress: 95 },
  { label: "Python Programming Language", badge: "code", progress: 85 },
  { label: "Cybersecurity", badge: "shield", progress: 60 },
  { label: "Networking", badge: "network", progress: 50 },
  { label: "Linux", badge: "linux", progress: 35 },
  { label: "IoT", badge: "iot", progress: 25 },
  { label: "Web Development", badge: "web", progress: 10 },
];

export const skillGroups = [
  {
    title: "Cybersecurity",
    items: ["Kali Linux", "Nmap", "Wireshark", "Burp Suite", "Steganography", "Ghidra"],
  },
  {
    title: "Programming",
    items: ["Python", "HTML", "C++", "PHP"],
  },
  {
    title: "Networking",
    items: ["Cisco", "MikroTik", "VLAN", "OSPF", "DHCP", "NAT", "VPN", "QoS"],
  },
  {
    title: "Database",
    items: ["Oracle SQL", "MySQL"],
  },
];

export const experiences = [
  {
    role: "Member of Cybersecurity & Networking Club",
    organization: "Networking Club SV UGM",
    period: "2025",
  },
  {
    role: "Member of Aliansi Siber Gadjah Mada",
    organization: "Komunitas Mahasiswa TIK UGM",
    period: "2026 – Sekarang",
  },
  {
    role: "Staff of Kajian Strategis dan Advokasi",
    organization: "Forum Komunikasi Teknologi Rekayasa Internet UGM",
    period: "2026 – Sekarang",
  },
];

export const achievements = [
  {
    title: "Juara 1 — Netclub Battleground (Cybersecurity)",
    image: "/images/achievements/netclub.png",
    caption:
      "Kejuaraan tingkat Departemen dengan konsep CTF Jeopardy meliputi lima submateri: Cryptography, Forensics, Reverse Engineering, Binary Exploitation, dan Web Exploitation.",
  },
  {
    title: "Juara 2 — Lomba Film Dokumenter (High School)",
    image: "/images/achievements/dokumenter.jpg",
    caption:
      "Kejuaraan tingkat kabupaten, perlombaan tim yang mengangkat tema sejarah Dusun Balong, Bimomartani, Ngemplak, Sleman.",
  },
];

export const socialLinks = {
  github: "https://github.com/hastantioridhwandiadam2007-web",
  linkedin: "https://www.linkedin.com/in/haztantio",
  instagram: "https://instagram.com/haztantio",
  email: "mailto:adamridhwandi@gmail.com",
};
