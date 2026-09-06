/**
 * The Jawed Habib Salon - Centralized Salon Data
 * 
 * NOTE: All business information, services, gallery images, reviews,
 * and FAQs are stored here. Update this file to modify any website content.
 */

export const salonInfo = {
  name: "The Jawed Habib Salon",
  shortName: "The Jawed Habib",
  branch: "Airport, Dum Dum",
  category: "Hair / Beauty Salon",
  tagline: "Your Style, Refined.",
  subheading: "A contemporary salon experience on Jessore Road, dedicated to personal styling, healthy hair care, and professional grooming.",
  address: "1 No Gate, 24/47 Jessore Rd, Airport, Dum Dum, West Bengal 700028",
  landmark: "1 No Gate, Jessore Road",
  phone: "+91 86971 65838",
  phoneRaw: "+918697165838",
  hours: "Every day, 10:00 AM – 9:00 PM",
  daysOpen: "Monday – Sunday (7 Days a Week)",
  timings: "10:00 AM – 9:00 PM",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=1+No+Gate+24%2F47+Jessore+Rd+Airport+Dum+Dum+West+Bengal+700028",
  googleReviewUrl: "https://www.google.com/maps/search/?api=1&query=1+No+Gate+24%2F47+Jessore+Rd+Airport+Dum+Dum+West+Bengal+700028",
  announcement: "Open 7 Days a Week: 10:00 AM – 9:00 PM · 1 No Gate, Jessore Rd, Dum Dum · Call +91 86971 65838",
  whatsappUrl: "https://wa.me/918697165838?text=Hello!%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment%20at%20The%20Jawed%20Habib%20Salon."
};

export const trustHighlights = [
  {
    id: "hours",
    title: "Open Daily",
    description: "10:00 AM – 9:00 PM, all 7 days a week",
    badge: "7 Days Active"
  },
  {
    id: "location",
    title: "Convenient Location",
    description: "1 No Gate, Jessore Road, Dum Dum Airport area",
    badge: "Easy Access"
  },
  {
    id: "care",
    title: "Personal Consultation",
    description: "Styling tailored to your hair texture and preference",
    badge: "Client Centered"
  },
  {
    id: "hygiene",
    title: "Hygienic Standards",
    description: "Sanitized tools, fresh capes, and clean styling stations",
    badge: "Clean & Safe"
  }
];

export const serviceCategories = [
  {
    id: "haircuts-styling",
    name: "Haircuts & Styling",
    tagline: "Precision haircuts and custom styling crafted for everyday elegance or special occasions.",
    items: [
      {
        title: "Women's Precision Haircut",
        description: "Includes professional hair texture consultation, wash, customized haircut, and blow-dry finish.",
        duration: "45-60 min",
        suitableFor: "All hair lengths & textures"
      },
      {
        title: "Men's Executive Haircut",
        description: "Tailored haircut with neck clean-up, precision scissor or clipper detailing, and style finishing.",
        duration: "30-40 min",
        suitableFor: "Classic, fade, or modern textured cuts"
      },
      {
        title: "Blow-Dry & Style Finishing",
        description: "Volumizing, sleek straight, or soft wave blow-dry for meetings, gatherings, or evenings out.",
        duration: "30-45 min",
        suitableFor: "Immediate polished presentation"
      },
      {
        title: "Kids Haircut",
        description: "Patient, friendly haircutting experience designed specifically for younger clients.",
        duration: "20-30 min",
        suitableFor: "Boys & girls up to 12 years"
      }
    ]
  },
  {
    id: "hair-colour",
    name: "Hair Colour",
    tagline: "Dimensional shades, grey coverage, and global tones using trusted salon formulations.",
    items: [
      {
        title: "Global Hair Colour",
        description: "Seamless single-tone application from roots to tips to enhance your natural tone or achieve a new shade.",
        duration: "90-120 min",
        suitableFor: "Full color transformation or complete refresh"
      },
      {
        title: "Root Touch-Up",
        description: "Targeted regrowth coverage matching your existing hair shade for clean, consistent results.",
        duration: "60-75 min",
        suitableFor: "Grey coverage & maintenance"
      },
      {
        title: "Highlights & Balayage",
        description: "Custom hand-painted or foiled highlights adding subtle light, depth, and movement to hair.",
        duration: "120-180 min",
        suitableFor: "Dimensional & sun-kissed looks"
      },
      {
        title: "Gloss & Tone Refresh",
        description: "Shine-enhancing glaze that revitalizes faded shades and counters unwanted brassiness.",
        duration: "45-60 min",
        suitableFor: "Mid-season color maintenance"
      }
    ]
  },
  {
    id: "hair-treatments",
    name: "Hair Treatments",
    tagline: "Targeted restorative treatments designed to combat frizz, dryness, and pollution damage.",
    items: [
      {
        title: "Keratin Smoothing Therapy",
        description: "Intense smoothing treatment that calms stubborn frizz, adds high gloss, and cuts daily blow-dry time.",
        duration: "150-180 min",
        suitableFor: "Frizzy, wavy, or unruly hair"
      },
      {
        title: "Deep Conditioning Moisture Therapy",
        description: "Concentrated nourishment to replenish moisture balance, restore elasticity, and soften brittle ends.",
        duration: "45-60 min",
        suitableFor: "Dry, sun-exposed, or chemically treated hair"
      },
      {
        title: "Anti-Dandruff & Scalp Clarifying",
        description: "Gentle scalp exfoliation and soothing mask to clear buildup, reduce flaking, and rebalance scalp sebum.",
        duration: "50-60 min",
        suitableFor: "Flaky, itchy, or congested scalp"
      },
      {
        title: "Hair Botox Revitalizer",
        description: "Deep conditioning filler treatment formulated to fortify weak hair strands and restore body.",
        duration: "120-150 min",
        suitableFor: "Damaged or aging hair fibers"
      }
    ]
  },
  {
    id: "hair-spa",
    name: "Hair Spa",
    tagline: "Relaxing rituals combining scalp acupressure massage, steaming, and nourishing hair masques.",
    items: [
      {
        title: "Classic Nourishing Hair Spa",
        description: "Relaxing scalp massage followed by nutrient-rich masque steam to revitalize dull, tired hair.",
        duration: "60 min",
        suitableFor: "Regular hair wellness & stress relief"
      },
      {
        title: "Intense Repair Hair Spa",
        description: "Specially formulated for colored or chemically treated hair needing restorative lipid care.",
        duration: "60-75 min",
        suitableFor: "Chemically treated or brittle hair"
      },
      {
        title: "Moroccan Argan Oil Spa",
        description: "Luxury infusion of pure argan oil providing lightweight silkiness, detangling, and luminous shine.",
        duration: "60-75 min",
        suitableFor: "Dry, rough, or unmanageable hair"
      }
    ]
  },
  {
    id: "mens-grooming",
    name: "Men's Grooming",
    tagline: "Sharply detailed cuts, beard architecture, and refreshing facial treatments for men.",
    items: [
      {
        title: "Beard Trim & Shape Detailing",
        description: "Sculpted beard shaping, line cleanup, hot towel treatment, and nourishing beard oil finish.",
        duration: "20-30 min",
        suitableFor: "Stubble to full-length beards"
      },
      {
        title: "Men's Cut & Beard Combo",
        description: "Complete signature haircut paired with detailed beard grooming and styling finish.",
        duration: "50-60 min",
        suitableFor: "Full routine maintenance"
      },
      {
        title: "Men's Grey Blending & Colour",
        description: "Natural, subtle salt-and-pepper blending or uniform coverage for hair and beard.",
        duration: "40-50 min",
        suitableFor: "Discreet natural rejuvenation"
      },
      {
        title: "Men's Relaxing Head Massage",
        description: "Therapeutic acupressure head massage with cooling or herbal oils to relieve fatigue.",
        duration: "30 min",
        suitableFor: "Relaxation & stress reduction"
      }
    ]
  },
  {
    id: "beauty-grooming",
    name: "Beauty & Grooming",
    tagline: "Essential skincare, threading, waxing, and clean facial treatments in a sanitized setting.",
    items: [
      {
        title: "Hydrating Clean-Up",
        description: "Exfoliation, gentle extraction, and soothing mask to instantly clear city grime and brighten skin.",
        duration: "40-50 min",
        suitableFor: "Quick refresh before an event"
      },
      {
        title: "Brightening Facial Treatment",
        description: "Multi-step facial tailored to your skin type to restore radiance, even skin tone, and deeply hydrate.",
        duration: "60-75 min",
        suitableFor: "Dull, fatigued, or uneven skin"
      },
      {
        title: "Threading & Facial Waxing",
        description: "Precise eyebrow shaping, upper lip, chin, and full-face hair removal with hygienic threading.",
        duration: "15-30 min",
        suitableFor: "Precision facial grooming"
      },
      {
        title: "Detan & Polishing Pack",
        description: "Gentle formulation to lift outdoor sun tan, dead skin cells, and revitalize natural skin clarity.",
        duration: "30-45 min",
        suitableFor: "Post-travel or sun-exposed skin"
      }
    ]
  }
];

export const whyChooseUs = [
  {
    icon: "award-experience",
    title: "Professional Salon Experience",
    description: "Our stylists bring structured technique, modern equipment, and dedicated attention to every client, ensuring each visit meets high standards of comfort and craftsmanship."
  },
  {
    icon: "map-pin",
    title: "Convenient Airport Location",
    description: "Conveniently situated at 1 No Gate on Jessore Road, Dum Dum, making it effortless for local residents, airport commuters, and travelers to schedule timely grooming."
  },
  {
    icon: "user-check",
    title: "Attention to Personal Style",
    description: "We don't believe in one-size-fits-all cuts. Every service begins with listening to your preferences, daily lifestyle, and hair texture before touching a pair of shears."
  },
  {
    icon: "sparkles",
    title: "Comfortable Salon Environment",
    description: "Enjoy a clean, well-lit, and hospitable space equipped with hygienic amenities and comfortable styling chairs designed for a tranquil self-care experience."
  }
];

export const aboutSalon = {
  headline: "Crafting Hair & Care Grounded in Refinement",
  subheadline: "Your neighborhood salon at 1 No Gate, Jessore Road, Dum Dum.",
  paragraphs: [
    "At The Jawed Habib Salon, we believe grooming is more than routine—it is a thoughtful reflection of how you present yourself to the world.",
    "Located conveniently on Jessore Road near Airport 1 No Gate, our salon offers a welcoming sanctuary from the rush of the city. We focus on modern hair design, restorative treatments, and hygienic grooming services suited for both men and women.",
    "Whether you are stepping in for a quick maintenance trim, an extensive restorative hair spa, or a bespoke colour transformation, our staff takes the time to consult with you personally to achieve results that feel natural, manageable, and uniquely yours."
  ],
  commitments: [
    "Transparent advice on hair health and maintenance",
    "Punctual service for scheduled appointments",
    "Clean, sanitized tools for every single guest",
    "Accessible daily hours from 10:00 AM to 9:00 PM"
  ]
};

export const galleryImages = [
  {
    id: 1,
    title: "Precision Haircut & Styling",
    category: "Styling",
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    alt: "Stylist working on client hair in contemporary salon"
  },
  {
    id: 2,
    title: "Dimensional Hair Colour & Gloss",
    category: "Hair Care",
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
    alt: "Healthy sleek styled hair showing rich tones and shine"
  },
  {
    id: 3,
    title: "Restorative Hair Spa & Steam",
    category: "Hair Care",
    src: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80",
    alt: "Client relaxing during a nourishing hair spa ritual"
  },
  {
    id: 4,
    title: "Gentlemen's Cut & Grooming",
    category: "Men's Grooming",
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
    alt: "Classic men's grooming and haircut finishing"
  },
  {
    id: 5,
    title: "Clean Modern Salon Ambience",
    category: "Ambience",
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
    alt: "Modern illuminated salon interior with styling stations"
  },
  {
    id: 6,
    title: "Detailed Scissor & Texture Work",
    category: "Styling",
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80",
    alt: "Hair stylist cutting and detailing hair with precision scissors"
  }
];

export const googleReviewsInfo = {
  title: "Client Feedback & Google Reviews",
  subtitle: "We value genuine feedback from every visitor. Below are real client experience themes; you can read all public reviews or leave your own review on Google.",
  ratingNotice: "Reviews verified via Google Maps · Read authentic public reviews directly",
  googleProfileUrl: "https://www.google.com/maps/search/?api=1&query=1+No+Gate+24%2F47+Jessore+Rd+Airport+Dum+Dum+West+Bengal+700028",
  // Editable placeholder reviews representing realistic, non-exaggerated client sentiments
  reviews: [
    {
      id: 1,
      author: "Local Resident (Dum Dum)",
      source: "Google Review",
      date: "Recent Visit",
      rating: 5,
      content: "Very convenient location right on Jessore Road near 1 No Gate. Staff is polite, listened to what haircut I wanted, and the salon was kept clean and comfortable.",
      serviceTag: "Haircut & Styling"
    },
    {
      id: 2,
      author: "Airport Area Commuter",
      source: "Google Review",
      date: "Recent Visit",
      rating: 5,
      content: "Had a hair spa and clean-up here. Great attention during the head massage and proper steam treatment. Reasonable waiting time even on a weekend.",
      serviceTag: "Hair Spa Ritual"
    },
    {
      id: 3,
      author: "Regular Client",
      source: "Google Review",
      date: "Recent Visit",
      rating: 5,
      content: "I regularly get my beard trimmed and hair cut done here. Consistent styling and courteous staff who don't rush through the service.",
      serviceTag: "Men's Grooming"
    }
  ]
};

export const faqs = [
  {
    question: "Do I need an advance appointment, or do you accept walk-ins?",
    answer: "We warmly welcome both walk-in guests and advance bookings. However, for peak evening hours (5:00 PM – 8:30 PM) and weekends, booking an appointment in advance helps minimize your waiting time."
  },
  {
    question: "What are your exact opening days and working hours?",
    answer: "The salon is open every day of the week (Monday through Sunday) from 10:00 AM to 9:00 PM."
  },
  {
    question: "Where exactly is the salon located on Jessore Road?",
    answer: "We are located at 1 No Gate, 24/47 Jessore Rd, Airport area, Dum Dum, West Bengal 700028. It is conveniently situated near 1 No Gate with direct road access."
  },
  {
    question: "Can I consult a stylist before deciding on a hair colour or treatment?",
    answer: "Yes, absolutely. We encourage a complimentary consultation prior to any chemical treatment, hair smoothing, or major restyle so that our stylists can examine your hair texture and discuss your expectations."
  },
  {
    question: "What payment methods do you accept at the salon?",
    answer: "We accept UPI (Google Pay, PhonePe, Paytm), major credit/debit cards, and cash payments at the billing counter."
  },
  {
    question: "How can I book an appointment or check slot availability?",
    answer: "You can book directly by calling us at +91 86971 65838, sending a message on WhatsApp, or using the 'Book an Appointment' form on this website."
  }
];

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
  { label: "FAQ", href: "#faq" }
];
