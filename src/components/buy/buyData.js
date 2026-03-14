export const commonCarePlans = [
  { title: "Screen Protection (1 Year)", price: "Rs5999.00" },
  { title: "Extended Warranty (1 Year)", price: "Rs7399.00" },
  { title: "Accidental & Liquid Damage Protection (1 Year)", price: "Rs8999.00" },
  { title: "Comprehensive Protection (2 Years)", price: "Rs14499.00" },
  { title: "I don't need additional protection", price: "" },
];

export const commonDirectBenefits = [
  { title: "Samsung Rewards", text: "Earn up to 2% Samsung Rewards points on your purchase", icon: "award" },
  { title: "Samsung Care+", text: "Now with unlimited claims starting at Rs 500/mo. with 12 months No Cost EMI", icon: "gift" },
  { title: "Free Delivery", text: "Sign in / Sign up to get free delivery.", icon: "truck" },
  { title: "Samsung Exchange", text: "Get best exchange value on your old device.", icon: "refresh" },
];

export const commonOffers = [
  {
    title: "No Cost EMI starts from Rs11666.73/month. Standard EMI starts from Rs6721.76/month.",
    text: "",
  },
  {
    title: "Pre-order & get double storage worth Rs20000",
    text: "Get 512GB at price of 256GB when you pre-order now, limited time only.",
  },
  {
    title: "Pre-reserves & Handraisers, get a charger at Rs300",
    text: "Sign in to View Eligible Offers on cart.",
  },
  {
    title: "Multi-buy offer",
    text: "Get Rs2000 off all-new Galaxy Buds4 Series when you buy together with Galaxy S26 Series, limited time only.",
  },
  {
    title: "Earn up to Rs 2799 worth Samsung reward",
    text: "Use Samsung rewards to avail discounts on next purchase of your next favourites.",
  },
  {
    title: "Samsung Axis Bank Credit Card",
    text: "Extra 10% cashback on EMI and full swipe, over and above all offers.",
  },
];

export const buyVariants = {
  ultra: {
    top: {
      productTabs: [
        { label: "Galaxy S26 Ultra", href: "/smartphones/galaxy-s26-ultra/buy/", active: true },
        { label: "Galaxy S26+ | S26", href: "/smartphones/galaxy-s26/buy/", active: false },
      ],
      title: "Galaxy S26 Ultra",
      priceHeadline: "From Rs.5833.33/mo. or Rs70000.00 with exchange*",
      priceSub: "MRP :Rs159999.00 (Incl. of all taxes)",
      priceSave: "Save Rs20000.00",
      benefitText: "Sign in to avail benefits worth Rs 5498",
    },
    config: {
      heroImage: "/Galaxy S26 Ultra buy 2.jpg",
      heroAlt: "Galaxy S26 Ultra",
      gallery: [
        { type: "video", src: "/Galaxy S26 Ultra buy 1.webm", alt: "Galaxy S26 Ultra product video" },
        { type: "image", src: "/Galaxy S26 Ultra buy 2.jpg", alt: "Galaxy S26 Ultra color variants" },
        { type: "image", src: "/Galaxy S26 Ultra buy 3.jpg", alt: "Galaxy S26 Ultra close-up" },
        { type: "image", src: "/Galaxy S26 Ultra buy 4.jpg", alt: "Galaxy S26 Ultra angle view" },
        { type: "image", src: "/Galaxy S26 Ultra buy 5.jpg", alt: "Galaxy S26 Ultra finish detail" },
      ],
      featurePills: ["Privacy Display", "Customized AP", "Photo Assist"],
      deviceOptions: [
        {
          name: "Galaxy S26 Ultra",
          display: "17.49 cm display",
          price: "From Rs11666.58/mo. or Rs139999.00",
          sub: "MRP: Rs159999.00 (Incl. of all taxes) Save Rs20000.00",
          active: true,
        },
      ],
      rewardText: "Earn up to Rs2799 worth reward points",
      storagePlans: [
        {
          label: "256 GB | 12 GB",
          price: "From Rs. 11666.58/mo. or Rs. 139999.00",
          sub: "MRP: Rs. 159999.00 (Incl. of all taxes)",
          active: false,
        },
        {
          label: "512 GB | 12 GB",
          price: "Rs. 11666.58/mo. or Rs. 139999.00",
          sub: "MRP: Rs. 159999.00 (Incl. of all taxes)",
          active: true,
        },
        {
          label: "1 TB | 16 GB",
          price: "Rs. 15833.25/mo. or Rs. 189999.00",
          sub: "MRP: Rs. 189999.00 (Incl. of all taxes)",
          active: false,
        },
      ],
      storagePromoText: "Get 512GB for the price of 256GB (Benefits worth Rs 20000)",
      colors: [
        { name: "Pink Gold", hex: "#e5d2c4", active: false },
        { name: "Silver Shadow", hex: "#b3b5b7", active: true },
        { name: "Sky Blue", hex: "#a6c4d4", active: false },
        { name: "White", hex: "#f0f0ef", active: false },
        { name: "Cobalt Violet", hex: "#696d87", active: false },
        { name: "Black", hex: "#535862", active: false },
      ],
    },
    commerce: {
      exchangeMaxText: "Highest exchange value: Up-to Rs69999 for your old device",
      exchangeSaveText: "Save up to Rs69999.00",
      boxItems: [
        { image: "/whats inside the box.jpg", alt: "What's in the box" },
      ],
      boxSummary: {
        title: "Galaxy S26 Ultra",
        sku: "SM-S948BZSC",
        variant: "512 GB | 12 GB | Silver Shadow",
        price: "Rs11666.58/mo. or Rs139999.00",
        mrp: "MRP: Rs159999.00 (Incl. of all taxes)",
        save: "Save Rs20000.00",
        rewards: "Earn up to 2% back in rewards",
        cta: "Pre-order",
        delivery: "Early delivery starts 6th Mar, 2026",
      },
    },
    accordion: {
      actualSizeImages: [
        { image: "/actual size.avif", alt: "Galaxy S26 Ultra size visual" },
      ],
      compareModels: [
        { name: "Galaxy S26 Ultra", image: "/compare the  models s26ultra.avif" },
        { name: "Galaxy S26+", image: "/Galaxy S26 S26+.avif" },
        { name: "Galaxy S26", image: "/compare the  modelss26.avif" },
      ],
      compareDetails: [
        {
          color: "Cobalt Violet",
          blurb: "An innovative AI phone with a built-in Privacy Display, customized AP and bright camera.",
        },
        {
          color: "Cobalt Violet",
          blurb: "A premium smartphone that delivers powerful performance and smart AI features.",
        },
        {
          color: "Cobalt Violet",
          blurb: "A sleek smartphone of a compact size with reliable performance and smart AI features.",
        },
      ],
      faqItems: [
        { question: "What's new about Galaxy S26 Ultra?", answer: "Galaxy S26 Ultra introduces upgraded camera hardware, more capable on-device AI tools, and refined performance with better efficiency." },
        { question: "What makes Galaxy S26 Ultra better than the previous Galaxy S25 Ultra model?", answer: "It offers improved processing, updated imaging pipeline, and better AI-assisted features for productivity and photography." },
        { question: "What are the colour options of Galaxy S26 Ultra?", answer: "Available colours include standard shades and Samsung.com exclusive colours depending on stock and region." },
        { question: "What are the available storage options for Galaxy S26 Ultra?", answer: "Storage variants can include 256 GB, 512 GB, and 1 TB configurations depending on availability." },
        { question: "Does Galaxy S26 Ultra come with a charger?", answer: "In-box contents may vary by market; generally, cable and eject pin are included while wall charger may be sold separately." },
      ],
      keySpecs: [
        { title: "Weight & Size", icon: "size", rows: [["Main Display Dimension", "17.49 cm", "16.91 cm", "15.93 cm"], ["Weight", "214 g", "190 g", "167 g"]] },
        { title: "Camera", icon: "camera", rows: [["Wide", "200.0 MP", "50.0 MP", "50.0 MP"], ["Ultra Wide", "50.0 MP", "12.0 MP", "12.0 MP"], ["Telephoto", "50.0/10.0 MP", "10.0 MP", "10.0 MP"]] },
        { title: "Battery", icon: "battery", rows: [["Battery Capacity", "5000 mAh", "4900 mAh", "4300 mAh"]] },
        { title: "Processor", icon: "cpu", rows: [["Processor", "Snapdragon 8 Elite Gen 5 for Galaxy", "Exynos 2600 customised for Galaxy", "Exynos 2600 customised for Galaxy"]] },
      ],
    },
  },
  s26: {
    top: {
      productTabs: [
        { label: "Galaxy S26 Ultra", href: "/smartphones/galaxy-s26-ultra/buy/", active: false },
        { label: "Galaxy S26+ | S26", href: "/smartphones/galaxy-s26/buy/", active: true },
      ],
      title: "Galaxy S26+ | S26",
      priceHeadline: "From Rs.3499.75/mo. or Rs42000.00 with exchange*",
      priceSub: "MRP :Rs92999.00 (Incl. of all taxes)",
      priceSave: "Save Rs17000.00",
      benefitText: "Sign in to avail benefits worth Rs 1998",
    },
    config: {
      heroImage: "/Galaxy S26 2.jpg",
      heroAlt: "Galaxy S26+ and S26",
      gallery: [
        { type: "video", src: "/Galaxy S26 1.webm", alt: "Galaxy S26 product video" },
        { type: "image", src: "/Galaxy S26 2.jpg", alt: "Galaxy S26+ and S26 colors" },
        { type: "image", src: "/Galaxy S26 3.jpg", alt: "Galaxy S26 color detail" },
        { type: "image", src: "/Galaxy S26 4.jpg", alt: "Galaxy S26 side view" },
      ],
      featurePills: ["Customized AP", "Photo Assist", "Advanced Nightography"],
      deviceOptions: [
        {
          name: "Galaxy S26+",
          display: "16.91 cm display",
          price: "From Rs4999.75/mo. or Rs109999.00",
          sub: "MRP: Rs129999.00 (Incl. of all taxes) Save Rs20000.00",
          active: true,
        },
        {
          name: "Galaxy S26",
          display: "15.93 cm display",
          price: "From Rs3499.75/mo. or Rs69999.00",
          sub: "MRP: Rs86999.00 (Incl. of all taxes) Save Rs17000.00",
          active: false,
        },
      ],
      rewardText: "Earn up to Rs1399 worth reward points",
      storagePlans: [
        {
          label: "256 GB | 12 GB",
          price: "From Rs4999.75/mo. or Rs109999.00",
          sub: "MRP: Rs129999.00 (Incl. of all taxes)",
          active: false,
        },
        {
          label: "512 GB | 12 GB",
          price: "Rs4999.75/mo. or Rs109999.00",
          sub: "MRP: Rs139999.00 (Incl. of all taxes)",
          active: true,
        },
      ],
      storagePromoText: "Get 512GB for the price of 256GB (Limited pre-order offer)",
      colors: [
        { name: "Cobalt Violet", hex: "#696d87", active: true },
        { name: "Black", hex: "#535862", active: false },
        { name: "Sky Blue", hex: "#a6c4d4", active: false },
        { name: "White", hex: "#f0f0ef", active: false },
        { name: "Pink Gold", hex: "#e5d2c4", active: false },
        { name: "Silver Shadow", hex: "#b3b5b7", active: false },
      ],
    },
    commerce: {
      exchangeMaxText: "Highest exchange value: Up-to Rs45000 for your old device",
      exchangeSaveText: "Save up to Rs45000.00",
      boxItems: [
        { image: "/whats inside the box.jpg", alt: "What's in the box" },
      ],
      boxSummary: {
        title: "Galaxy S26+",
        sku: "SM-S947BLVGINU",
        variant: "512 GB | 12 GB | Cobalt Violet",
        price: "Rs4999.75/mo. or Rs109999.00",
        mrp: "MRP: Rs129999.00 (Incl. of all taxes)",
        save: "Save Rs20000.00",
        rewards: "Earn up to 2% back in rewards",
        cta: "Pre-order",
        delivery: "Early delivery starts 6th Mar, 2026",
      },
    },
    accordion: {
      actualSizeImages: [
        { image: "/actual size.avif", alt: "Galaxy S26+ size visual" },
      ],
      compareModels: [
        { name: "Galaxy S26+", image: "/Galaxy S26 S26+.avif" },
        { name: "Galaxy S26", image: "/compare the  modelss26.avif" },
      ],
      compareDetails: [
        { color: "Cobalt Violet", blurb: "A premium smartphone that delivers powerful performance and smart AI features." },
        { color: "Cobalt Violet", blurb: "A sleek smartphone of a compact size with reliable performance and smart AI features." },
      ],
      faqItems: [
        { question: "What's new about Galaxy S26 and S26+?", answer: "Galaxy S26 and S26+ include improved customized AP performance, enhanced camera features and better AI-assisted tools." },
        { question: "What are the colour options of Galaxy S26 and S26+?", answer: "Standard and Samsung.com-only colours vary by stock and region." },
        { question: "What are the available storage options for Galaxy S26 and S26+?", answer: "Storage options include 256 GB and 512 GB with 12 GB RAM depending on model and market." },
        { question: "Does Galaxy S26/S26+ come with a charger?", answer: "In-box contents vary by region; cable is included and adapter may be sold separately." },
      ],
      keySpecs: [
        { title: "Weight & Size", icon: "size", rows: [["Main Display Dimension", "16.91 cm", "15.93 cm", "-"] , ["Weight", "190 g", "167 g", "-"]] },
        { title: "Camera", icon: "camera", rows: [["Wide", "50.0 MP", "50.0 MP", "-"], ["Ultra Wide", "12.0 MP", "12.0 MP", "-"], ["Telephoto", "10.0 MP", "10.0 MP", "-"]] },
        { title: "Battery", icon: "battery", rows: [["Battery Capacity", "4900 mAh", "4300 mAh", "-"]] },
        { title: "Processor", icon: "cpu", rows: [["Processor", "Exynos 2600 customised for Galaxy", "Exynos 2600 customised for Galaxy", "-"]] },
      ],
    },
  },
};
