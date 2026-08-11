import { useTranslation } from "react-i18next";
import { products as productsData, type Product } from "@/data/products";

const productsTranslations: Record<string, Record<string, Partial<Product>>> = {
  en: {},
  ar: {
    "business-laptops-desktops": {
      title: "أجهزة الكمبيوتر المحمولة وسطح المكتب للأعمال",
      short: "محطات عمل على مستوى المؤسسات مصممة للإنتاجية والأمان والمتانة.",
      overview: "أجهزة الكمبيوتر المحمولة وسطح المكتب للأعمال من HP و Dell و Lenovo مصممة للإنتاجية والأمان والمتانة في بيئات المؤسسات.",
      features: [
        "معالجات Intel Core و AMD Ryzen",
        "ذاكرة DDR4 و DDR5 عالية السعة",
        "محركات SSD NVMe سريعة",
        "شاشات عالية الدقة",
        "أمان BIOS ومستشعر بصمات الأصابع",
        "عمر بطارية طويل",
        "دعم Windows 10/11 Pro",
      ],
      applications: [
        "المكاتب الإدارية",
        "قوى المبيعات الميدانية",
        "العمل عن بعد",
        "مراكز الاتصال",
        "التعليم والتدريب",
      ],
      benefits: [
        "أداء موثوق ومتسق",
        "إدارة الأجهزة المركزية",
        "دعم الشركات على مدار الساعة",
        "ضمانات ممتدة",
        "قيمة إعادة البيع المحسنة",
      ],
    },
    "server-storage-solutions": {
      title: "حلول الخوادم والتخزين",
      short: "خوادم Rack وTower والبنية فائقة التقارب (Hyperconverged)، مدعومة بحلول تخزين مرنة وعالية الاعتمادية من كبرى الشركات الرائدة.",
      overview: "خوادم Rack وTower والبنية فائقة التقارب (Hyperconverged)، مدعومة بحلول تخزين مرنة وعالية الاعتمادية من Dell EMC و HPE و NetApp و Pure Storage.",
      features: [
        "معالجات Intel Xeon و AMD EPYC",
        "ذاكرة ECC عالية السعة",
        "تخزين NVMe و SAS",
        "شبكات 10GbE و 25GbE",
        "إدارة iDRAC و iLO",
        "دعم الافتراضية",
        "قابلية التوسع",
      ],
      applications: [
        "الافتراضية والسحابة",
        "قواعد البيانات",
        "التخزين المشترك",
        "النسخ الاحتياطي والاستعادة",
        "الذكاء الاصطناعي والتعلم الآلي",
      ],
      benefits: [
        "أداء عالي الإنتاجية",
        "موثوقية 99.999%",
        "إدارة مركزية",
        "كفاءة الطاقة",
        "دعم 24/7",
      ],
    },
    "it-accessories-peripherals": {
      title: "ملحقات وأجهزة تكنولوجيا المعلومات",
      short: "شاشات ومحطات وصوت وملحقات مريحة لمكان العمل الحديث.",
      overview: "شاشات ومحطات وصوت وملحقات مريحة لمكان العمل الحديث من Dell و LG و Logitech و Jabra.",
      features: [
        "شاشات 4K و 5K",
        "محطات USB-C",
        "سماعات رأس عازلة للضوضاء",
        "لوحات مفاتيح مريحة",
        "فئران لاسلكية",
        "كاميرات ويب HD",
        "مكبرات صوت USB",
      ],
      applications: [
        "العمل عن بعد",
        "الاجتماعات الافتراضية",
        "التصميم والإبداع",
        "دعم العملاء",
        "التعليم",
      ],
      benefits: [
        "راحة محسنة",
        "إنتاجية أعلى",
        "تقليل إجهاد العين",
        "اتصال سهل",
        "جودة صوت واضحة",
      ],
    },
    "enterprise-software-hardware": {
      title: "البرمجيات والأجهزة للمؤسسات",
      short: "الترخيص والنشر والدعم للمنصات التي تعمل عليها أعمالك.",
      overview: "الترخيص والنشر والدعم لـ Microsoft و VMware و Citrix و Red Hat.",
      features: [
        "ترخيص حجم المؤسسات",
        "نشر آلي",
        "إدارة مركزية",
        "أمان متقدم",
        "تحديثات منتظمة",
        "دعم 24/7",
        "تكامل السحابة",
      ],
      applications: [
        "إدارة المستخدمين",
        "الافتراضية سطح المكتب",
        "اتصالات المؤسسات",
        "إدارة المحتوى",
        "الأمان والامتثال",
      ],
      benefits: [
        "تكلفة إجمالية منخفضة للملكية",
        "أمان محسّن",
        "إدارة مبسطة",
        "قابلية التوسع",
        "دعم احترافي",
      ],
    },
    "networking-infrastructure": {
      title: "منتجات البنية التحتية للشبكات",
      short:
        "مفاتيح وأجهزة التوجيه وجدران الحماية وواي فاي من Cisco و Fortinet و Ubiquiti و Aruba.",
      overview: "مفاتيح وأجهزة التوجيه وجدران الحماية وواي فاي من Cisco و Fortinet و Ubiquiti و Aruba.",
      features: [
        "مفاتيح 10GbE و 40GbE",
        "أجهزة التوجيه المؤسسية",
        "جدران الحماية من الجيل التالي",
        "واي فاي Wi-Fi 6/6E",
        "شبكات تعريف البرمجيات (SDN)",
        "شبكات خاصة افتراضية (VPN)",
        "شبكات محلية افتراضية (VLAN)",
      ],
      applications: [
        "الشبكات الحرم الجامعي",
        "مركز البيانات",
        "الشبكات الفرعية",
        "الوصول عن بعد",
        "إنترنت الأشياء",
      ],
      benefits: [
        "أداء عالي",
        "أمان متقدم",
        "إدارة مركزية",
        "قابلية التوسع",
        "موثوقية",
      ],
    },
    "storage-data-management": {
      title: "منتجات التخزين وإدارة البيانات",
      short: "التخزين الأساسي والثانوي والأرشيف مع إدارة بيانات ذكية.",
      overview: "التخزين الأساسي والثانوي والأرشيف مع إدارة بيانات ذكية من Dell EMC و NetApp و Pure Storage.",
      features: [
        "تخزين NVMe عالي الأداء",
        "تخزين كائنات قابل للتوسع",
        "النسخ الاحتياطي والاستعادة",
        "تكرار البيانات",
        "تشفير البيانات",
        "ضغط وإلغاء التكرار",
        "إدارة البيانات",
      ],
      applications: [
        "قواعد البيانات",
        "الافتراضية",
        "النسخ الاحتياطي",
        "الأرشفة",
        "التحليلات",
      ],
      benefits: [
        "أداء عالي",
        "كفاءة التخزين",
        "حماية البيانات",
        "قابلية التوسع",
        "إدارة مبسطة",
      ],
    },
    "document-solutions": {
      title: "حلول المستندات",
      short: "طابعات متعددة الوظائف وماسحات ضوئية وخدمات الطباعة المدارة التي تتوسع.",
      overview: "طابعات متعددة الوظائف وماسحات ضوئية وخدمات الطباعة المدارة من HP و Canon و Xerox.",
      features: [
        "طباعة عالية السرعة",
        "مسح ضوئي ملون",
        "الفاكس والبريد الإلكتروني",
        "إدارة المستندات",
        "الأمان",
        "الطباعة عبر الهاتف المحمول",
        "المراقبة عن بعد",
      ],
      applications: [
        "المكاتب الإدارية",
        "القانونية",
        "الرعاية الصحية",
        "التعليم",
        "الحكومة",
      ],
      benefits: [
        "كفاءة محسنة",
        "توفير التكاليف",
        "أمان المستندات",
        "إدارة مبسطة",
        "دعم موثوق",
      ],
    },
    "ups-power-protection": {
      title: "UPS وحماية الطاقة",
      short: "UPS و PDU وحماية الطاقة للمؤسسات للبيئات الحرجة.",
      overview: "UPS و PDU وحماية الطاقة للمؤسسات من APC و Eaton و Vertiv.",
      features: [
        "UPS على مستوى المؤسسات",
        "توزيع الطاقة (PDU)",
        "إدارة الطاقة",
        "المراقبة عن بعد",
        "البطاريات الاحتياطية",
        "الأتمتة",
        "التكامل مع مركز البيانات",
      ],
      applications: [
        "مركز البيانات",
        "الخوادم الحرجة",
        "الاتصالات",
        "الرعاية الصحية",
        "الصناعة",
      ],
      benefits: [
        "وقت تشغيل مستمر",
        "حماية من انقطاع التيار",
        "إدارة الطاقة",
        "موثوقية",
        "دعم 24/7",
      ],
    },
  },
};

const categoryTranslations: Record<string, Record<string, string>> = {
  en: {
    "Computing": "Computing",
    "Servers": "Servers",
    "Peripherals": "Peripherals",
    "Software": "Software",
    "Networking": "Networking",
    "Storage": "Storage",
    "Documents": "Documents",
    "Power": "Power",
  },
  ar: {
    "Computing": "الحوسبة",
    "Servers": "الخوادم",
    "Peripherals": "الأجهزة الطرفية",
    "Software": "البرمجيات",
    "Networking": "الشبكات",
    "Storage": "التخزين",
    "Documents": "المستندات",
    "Power": "الطاقة",
  },
};

export function useTranslatedProducts() {
  const { i18n } = useTranslation();

  return productsData.map((product) => {
    const translated = productsTranslations[i18n.language]?.[product.slug];
    // Only translate category for Arabic, keep original for English
    const categoryTranslated = i18n.language === 'ar' 
      ? categoryTranslations[i18n.language]?.[product.category as keyof typeof categoryTranslations.en]
      : undefined;
    return { 
      ...product, 
      ...(translated || {}), 
      featured: product.featured, 
      category: categoryTranslated || product.category 
    };
  });
}
