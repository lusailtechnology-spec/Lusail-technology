export type Product = {
  slug: string;
  title: string;
  category: string;
  short: string;
  icon: string;
  image?: string;
  overview: string;
  features: string[];
  specs: { label: string; value: string }[];
  applications: string[];
  brands: string[];
  benefits: string[];
  featured?: boolean;
};

export const productCategories = [
  "All",
  "Computing",
  "Servers",
  "Networking",
  "Storage",
  "Software",
  "Peripherals",
  "Power",
  "Documents",
];

export const products: Product[] = [
  {
    slug: "business-laptops-desktops",
    title: "Business Laptops & Desktops",
    category: "Computing",
    short: "Enterprise-grade workstations engineered for productivity, security and durability.",
    icon: "Laptop",
    image: "/Laptop & desktop.png",
    overview: "A curated portfolio of business-class laptops, desktops and workstations from HP, Dell, and Lenovo — pre-configured, imaged and delivered ready-to-work.",
    features: ["vPro & manageability", "Enterprise imaging", "3-year warranty", "Zero-touch deployment"],
    specs: [
      { label: "CPU", value: "Intel Core Ultra / AMD Ryzen Pro" },
      { label: "Memory", value: "16GB – 128GB DDR5" },
      { label: "Storage", value: "512GB – 4TB NVMe SSD" },
      { label: "Display", value: "13\" – 27\" 4K OLED options" },
    ],
    applications: ["Knowledge workers", "Engineering & CAD", "Finance & trading", "Creative studios"],
    brands: ["HP", "Dell", "Lenovo", "Microsoft Surface"],
    benefits: ["Standardized fleets", "Rapid deployment", "Central management", "Lower TCO"],
    featured: true,
  },
  {
    slug: "server-storage-solutions",
    title: "Server & Storage Solutions",
    category: "Servers",
    short: "Rack, tower and hyperconverged servers with resilient storage from leading vendors.",
    icon: "Server",
    image: "/Server & Storage.png",
    overview: "Design and supply of enterprise servers, HCI and storage arrays — from edge branches to multi-rack datacenters.",
    features: ["Rack, tower & blade servers", "HCI (VxRail, Nutanix)", "SAN/NAS storage", "Datacenter design"],
    specs: [
      { label: "CPU", value: "Xeon Scalable / EPYC" },
      { label: "Memory", value: "Up to 8TB DDR5" },
      { label: "Storage", value: "NVMe / SAS / SATA" },
      { label: "Network", value: "10/25/100 GbE" },
    ],
    applications: ["Virtualization", "Databases", "AI/ML training", "Backup & DR"],
    brands: ["Dell EMC", "HPE", "Lenovo", "Nutanix"],
    benefits: ["High availability", "Elastic scale", "Vendor-neutral advice", "Full lifecycle support"],
    featured: true,
  },
  {
    slug: "it-accessories-peripherals",
    title: "IT Accessories & Peripherals",
    category: "Peripherals",
    short: "Premium monitors, docks, audio and ergonomic accessories for modern workplaces.",
    icon: "Mouse",
    image: "/IT accessories and peripherals.png",
    overview: "Everything around the endpoint — 4K monitors, Thunderbolt docks, keyboards, mice, headsets and ergonomic gear.",
    features: ["4K & ultrawide monitors", "Thunderbolt docks", "Enterprise headsets", "Ergonomic accessories"],
    specs: [
      { label: "Displays", value: "24\" – 49\" up to 8K" },
      { label: "Docks", value: "USB-C / TB4 / TB5" },
      { label: "Audio", value: "Poly, Jabra, Logitech" },
    ],
    applications: ["Hybrid offices", "Executive setups", "Contact centers", "Design studios"],
    brands: ["Logitech", "Poly", "Jabra", "LG", "Samsung"],
    benefits: ["Standardized peripherals", "Volume pricing", "Warranty coverage", "Rapid delivery"],
  },
  {
    slug: "enterprise-software-hardware",
    title: "Enterprise Software & Hardware",
    category: "Software",
    short: "Licensing, deployment and support for the platforms your business runs on.",
    icon: "Package",
    image: "/Enterprise software andf hardware.png",
    overview: "Volume licensing, deployment and support across Microsoft, Adobe, VMware, and specialist enterprise vendors.",
    features: ["Volume licensing", "SaaS management", "Deployment services", "License optimization"],
    specs: [
      { label: "Coverage", value: "Windows, Office, M365, Azure, Adobe, Autodesk" },
      { label: "Support", value: "24/7 tier-1 to tier-3" },
    ],
    applications: ["Enterprise productivity", "Creative teams", "Engineering", "Datacenter virtualization"],
    brands: ["Microsoft", "Adobe", "VMware", "Autodesk"],
    benefits: ["Compliance", "Cost optimization", "Single vendor accountability"],
    featured: true,
  },
  {
    slug: "networking-infrastructure",
    title: "Networking Infrastructure Products",
    category: "Networking",
    short: "Switches, routers, firewalls and Wi-Fi from Cisco, Fortinet, Ubiquiti and Aruba.",
    icon: "Router",
    image: "/Network Infrastructure Products.png",
    overview: "Complete networking stack — from campus switching and enterprise Wi-Fi to next-gen firewalls and SD-WAN.",
    features: ["Enterprise switches", "Firewalls (NGFW)", "Wi-Fi 6/7 APs", "SD-WAN appliances"],
    specs: [
      { label: "Switching", value: "1G/10G/25G/100G" },
      { label: "Wireless", value: "Wi-Fi 6E / Wi-Fi 7" },
      { label: "Security", value: "NGFW with threat intel" },
    ],
    applications: ["Campus networks", "Branch offices", "Datacenters", "Retail chains"],
    brands: ["Cisco", "Fortinet", "Ubiquiti", "Aruba", "Meraki"],
    benefits: ["High performance", "Deep security", "Central management"],
  },
  {
    slug: "storage-data-management",
    title: "Storage & Data Management Products",
    category: "Storage",
    short: "Primary, secondary and archive storage with intelligent data management.",
    icon: "HardDrive",
    image: "/Storage and data management.png",
    overview: "All-flash arrays, unified NAS, object storage and backup appliances — including automated tiering and data protection.",
    features: ["All-flash arrays", "Object storage", "Backup appliances", "Data protection software"],
    specs: [
      { label: "Capacity", value: "Terabytes to petabytes" },
      { label: "Interfaces", value: "NVMe-oF, iSCSI, NFS, S3" },
    ],
    applications: ["Databases", "Media workflows", "Backup & archive", "Analytics"],
    brands: ["Dell EMC", "NetApp", "Pure Storage", "Veeam"],
    benefits: ["Predictable performance", "Ransomware protection", "Automated tiering"],
  },
  {
    slug: "document-solutions",
    title: "Document Solutions",
    category: "Documents",
    short: "Multifunction printers, scanners and managed print services that scale.",
    icon: "Printer",
    image: "/Document solutions.png",
    overview: "Full document lifecycle solutions — MFPs, high-volume scanners, secure print release and managed print services.",
    features: ["Managed Print Services", "Secure print release", "High-volume scanners", "Cost tracking"],
    specs: [
      { label: "Devices", value: "A4/A3 mono & color MFPs" },
      { label: "Scanners", value: "Up to 200 ppm" },
    ],
    applications: ["Corporate offices", "Government", "Healthcare", "Education"],
    brands: ["HP", "Xerox", "Canon", "Ricoh", "Kodak"],
    benefits: ["Print cost visibility", "Consolidated fleets", "Secure workflows"],
  },
  {
    slug: "ups-power-protection",
    title: "UPS & Power Protection",
    category: "Power",
    short: "Enterprise UPS, PDU and DCIM power protection for mission-critical environments.",
    icon: "Battery",
    image: "/UPS & Protection.png",
    overview: "Uninterruptible power supplies, PDUs and battery solutions to protect servers, networks and workstations.",
    features: ["Online double-conversion UPS", "Rack & tower models", "Smart PDUs", "Battery service plans"],
    specs: [
      { label: "Capacity", value: "1kVA – 500kVA" },
      { label: "Topology", value: "Line-interactive / Online" },
    ],
    applications: ["Server rooms", "Datacenters", "Retail POS", "Broadcast studios"],
    brands: ["APC", "Eaton", "Vertiv", "CyberPower"],
    benefits: ["Business continuity", "Remote monitoring", "Predictable service life"],
  },
];

export const featuredProducts = products.filter((p) => p.featured);
