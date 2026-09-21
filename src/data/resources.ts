import { IMAGES } from './siteData';

export const SITE_URL = 'https://www.theoakland.in';

export type ResourceCategory = 'Planning & Cost' | 'Materials' | 'Style' | 'Care';

export interface ResourceSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface Resource {
  slug: string;
  category: ResourceCategory;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  image: string;
  alt: string;
  readTime: string;
  published: string; // ISO date
  /** Direct 2–3 sentence answer to the title's implicit question. Used for AEO snippet + JSON-LD description. */
  summary: string;
  sections: ResourceSection[];
  faqs: { question: string; answer: string }[];
}

export const RESOURCE_CATEGORIES: ResourceCategory[] = [
'Planning & Cost',
'Materials',
'Style',
'Care'];

export const RESOURCES: Resource[] = [
{
  slug: 'interior-design-cost-per-sq-ft-hyderabad',
  category: 'Planning & Cost',
  title: 'Interior Design Cost per Sq Ft in Hyderabad (2026 Guide)',
  metaTitle: 'Interior Design Cost per Sq Ft in Hyderabad 2026 | The Oakland',
  metaDescription:
  'How much does home interior design cost in Hyderabad? Indicative per-sq-ft rates for basic, premium and luxury interiors, what drives the price, and how to budget.',
  keywords: [
  'interior design cost per sq ft hyderabad',
  'home interior cost hyderabad',
  'interior designer charges hyderabad',
  '2bhk interior cost hyderabad',
  '3bhk interior cost hyderabad'],

  image: IMAGES.collection,
  alt: 'Contemporary living room interior designed by The Oakland in Hyderabad',
  readTime: '6 min read',
  published: '2026-09-01',
  summary:
  'Full home interiors in Hyderabad typically cost between ₹1,200 and ₹3,500 per sq ft of carpet area in 2026. A basic 2BHK (approx. 1,000 sq ft) starts around ₹12–15 lakh, while premium and luxury interiors with bespoke joinery, natural stone and designer lighting range from ₹25 lakh upwards.',
  sections: [
  {
    heading: 'Indicative interior design rates in Hyderabad',
    paragraphs: [
    'Interior costs are usually quoted per square foot of carpet area and vary with material grade, the amount of custom woodwork, and the level of design involvement. The ranges below are indicative for 2026 and cover design, modular furniture, false ceiling, electrical, painting and soft furnishings.'],

    list: [
    'Basic interiors: ₹1,200 – ₹1,800 per sq ft — laminate finishes, standard hardware, minimal false ceiling',
    'Premium interiors: ₹1,800 – ₹2,800 per sq ft — veneer and PU finishes, branded hardware, layered lighting',
    'Luxury interiors: ₹2,800 – ₹3,500+ per sq ft — bespoke joinery, natural stone, designer lighting and furniture']

  },
  {
    heading: 'What drives the cost of home interiors',
    paragraphs: [
    'Modular woodwork — kitchens, wardrobes, TV units and storage — is the single largest cost line in most Hyderabad homes, typically 45–60% of the budget. Finishes come next: a veneer or PU-painted shutter costs two to three times a laminate one. Natural stone, imported tiles, and lighting design add further layers.',
    'Design fees are either a percentage of project value (usually 8–12%) or a fixed per-sq-ft design charge. At The Oakland, design is included when we execute the project end to end.']

  },
  {
    heading: 'How to budget for a 2BHK or 3BHK in Hyderabad',
    paragraphs: [
    'Start with the carpet area, choose a finish tier, then add a 10% contingency for civil changes and site surprises. Prioritise spend on rooms you use daily — the kitchen, living room and master bedroom — and keep guest rooms simpler.'],

    list: [
    '2BHK (900–1,100 sq ft): ₹12 – 28 lakh',
    '3BHK (1,400–1,800 sq ft): ₹18 – 50 lakh',
    'Villa (2,500+ sq ft): ₹40 lakh upwards']

  }],

  faqs: [
  {
    question: 'What is the average cost of interior design in Hyderabad?',
    answer:
    'Most full-home projects in Hyderabad fall between ₹1,500 and ₹2,500 per sq ft in 2026, which works out to roughly ₹15–35 lakh for a typical 2–3BHK apartment.'
  },
  {
    question: 'Do interior designers in Hyderabad charge a separate design fee?',
    answer:
    'Many do — either 8–12% of project value or a per-sq-ft fee. Studios that execute the project, like The Oakland, often include design in the overall quote.'
  },
  {
    question: 'How can I reduce my home interior cost without compromising quality?',
    answer:
    'Use premium finishes where you touch and see them daily (kitchen shutters, wardrobe fronts) and laminate inside carcasses; limit false ceiling to living and master bedroom; and choose a few statement lights over many.'
  }]

},
{
  slug: 'modular-kitchen-cost-hyderabad',
  category: 'Planning & Cost',
  title: 'Modular Kitchen Cost in Hyderabad: Materials, Layouts and Pricing',
  metaTitle: 'Modular Kitchen Cost in Hyderabad 2026 | The Oakland',
  metaDescription:
  'Modular kitchen prices in Hyderabad explained — L-shape, U-shape and island layouts, laminate vs acrylic vs PU shutters, hardware, countertops and what to expect at each budget.',
  keywords: [
  'modular kitchen cost hyderabad',
  'modular kitchen price hyderabad',
  'modular kitchen designers hyderabad',
  'l shaped modular kitchen cost',
  'best modular kitchen hyderabad'],

  image: IMAGES.kitchen,
  alt: 'Oak and stone modular kitchen designed by The Oakland',
  readTime: '5 min read',
  published: '2026-09-03',
  summary:
  'A modular kitchen in Hyderabad costs between ₹1.5 lakh and ₹8 lakh in 2026 depending on size, layout and finish. A standard 8×10 ft L-shaped kitchen with laminate shutters starts near ₹1.8 lakh; the same kitchen in PU or acrylic with quartz countertops and premium hardware is ₹4–6 lakh.',
  sections: [
  {
    heading: 'Modular kitchen price by finish',
    paragraphs: [
    'Shutter finish is the biggest price lever. The carcass (the box behind the shutter) is usually BWR or marine plywood across all tiers; the visible surface changes the cost.'],

    list: [
    'Laminate: ₹1,200 – ₹1,600 per sq ft of shutter area — durable, widest colour range, most economical',
    'Acrylic: ₹1,800 – ₹2,400 per sq ft — high gloss, scratch resistant, easy to clean',
    'PU paint: ₹2,200 – ₹3,000 per sq ft — seamless matte or gloss, any RAL colour, premium feel',
    'Veneer / solid wood: ₹2,500 – ₹4,000 per sq ft — natural grain, ages beautifully, needs sealing']

  },
  {
    heading: 'Layouts that work for Hyderabad apartments',
    paragraphs: [
    'Most 2–3BHK apartments in Gachibowli, Kondapur, Kokapet and Banjara Hills have compact kitchens of 60–100 sq ft. An L-shaped layout makes the best use of these; parallel layouts suit long, narrow kitchens; U-shape and island kitchens need 120 sq ft or more.',
    'Plan the work triangle — hob, sink and refrigerator — with 4 to 9 feet between each, and keep at least 3 feet of clear walkway.']

  },
  {
    heading: 'Hardware, countertops and the hidden costs',
    paragraphs: [
    'Soft-close hinges, tandem drawers and tall-unit pull-outs from brands like Hettich, Hafele or Blum add ₹40,000–1.2 lakh but define daily usability. Countertops range from ₹250 per sq ft for granite to ₹600+ for quartz. Budget separately for the chimney, hob, sink, dado tiles and electrical points.']

  }],

  faqs: [
  {
    question: 'What is the cost of a small modular kitchen in Hyderabad?',
    answer:
    'A compact 6×8 ft straight or L-shaped kitchen with laminate shutters and standard hardware starts at about ₹1.5 lakh; with acrylic or PU finish expect ₹2.5–3.5 lakh.'
  },
  {
    question: 'Which modular kitchen material is best for Indian cooking?',
    answer:
    'For heavy Indian cooking, PU-painted or laminate shutters on a marine-ply carcass are the most practical — both resist oil, steam and heat and wipe clean. Avoid MDF near the hob and sink.'
  },
  {
    question: 'How long does a modular kitchen take to install?',
    answer:
    'Design and finalisation takes 1–2 weeks, manufacturing 3–4 weeks and installation 3–5 days — about 6–7 weeks from sign-off to handover.'
  }]

},
{
  slug: 'how-to-choose-interior-designer-hyderabad',
  category: 'Planning & Cost',
  title: 'How to Choose an Interior Designer in Hyderabad',
  metaTitle: 'How to Choose an Interior Designer in Hyderabad | The Oakland',
  metaDescription:
  'A practical checklist for hiring the right interior designer in Hyderabad — portfolio, process, contracts, timelines, warranties and the questions to ask before you sign.',
  keywords: [
  'interior designers in hyderabad',
  'best interior designer hyderabad',
  'how to choose interior designer',
  'interior design studio gachibowli',
  'home interior designers hyderabad'],

  image: IMAGES.studio,
  alt: 'The Oakland design studio in Gachibowli with material samples',
  readTime: '6 min read',
  published: '2026-09-05',
  summary:
  'Choose an interior designer in Hyderabad by reviewing completed projects in person, confirming they handle design and execution under one contract, checking material brands and warranties in writing, and agreeing a milestone-based payment schedule tied to a fixed timeline.',
  sections: [
  {
    heading: 'Look at finished homes, not just renders',
    paragraphs: [
    '3D renders show intent; finished projects show execution. Ask any shortlisted studio for two or three completed homes you can visit or video-call the owners of. Check joinery alignment, shutter gaps, paint finish at edges and how the space has held up after a year of use.']

  },
  {
    heading: 'Design-only vs design-and-build',
    paragraphs: [
    'A design-only consultant hands you drawings and you manage contractors yourself. A design-and-build studio owns the outcome — one contract, one point of accountability, one warranty. For most homeowners in Hyderabad the second model is less stressful and, once contractor mark-ups are counted, rarely more expensive.']

  },
  {
    heading: 'Questions to ask before signing',
    paragraphs: ['Get the answers in writing as part of the agreement.'],
    list: [
    'Which plywood, laminate, hardware and paint brands are specified — and are substitutions allowed?',
    'What is the warranty on woodwork, hardware and finishes?',
    'Is the quote itemised by room and by item?',
    'What is the payment schedule and is it tied to milestones?',
    'Who is the single point of contact on site, and how often will I get updates?',
    'What happens if the project runs late?']

  },
  {
    heading: 'Red flags',
    paragraphs: [
    'Lump-sum quotes without itemisation, pressure to pay more than 10–20% upfront, no written specification of brands, and no completed projects you can see in person are all reasons to keep looking.']

  }],

  faqs: [
  {
    question: 'How much do interior designers in Hyderabad charge?',
    answer:
    'Design-only fees run ₹50–150 per sq ft or 8–12% of project value. Design-and-build studios typically quote the whole project at ₹1,200–3,500 per sq ft with design included.'
  },
  {
    question: 'Should I hire an interior designer or a contractor?',
    answer:
    'A contractor executes what you specify; a designer plans the space, materials, lighting and storage so the result works as a whole. For a full home, a design-and-build studio combines both.'
  },
  {
    question: 'How early should I involve an interior designer?',
    answer:
    'Ideally before you take possession — a designer can advise on electrical points, plumbing shifts and false-ceiling heights while the builder is still on site, saving rework later.'
  }]

},
{
  slug: 'bespoke-wardrobe-design-guide',
  category: 'Planning & Cost',
  title: 'Bespoke Wardrobe Design: Sliding vs Hinged, Internals and Costs',
  metaTitle: 'Wardrobe Design Guide: Sliding vs Hinged, Internals, Cost | The Oakland',
  metaDescription:
  'Everything to decide before ordering a custom wardrobe in Hyderabad — sliding vs hinged doors, walk-in layouts, internal fittings, finishes and realistic per-sq-ft pricing.',
  keywords: [
  'wardrobe design hyderabad',
  'sliding wardrobe vs hinged wardrobe',
  'walk in wardrobe design',
  'custom wardrobe cost',
  'bedroom wardrobe interior design'],

  image: IMAGES.wardrobe,
  alt: 'Custom walnut wardrobe wall with integrated lighting by The Oakland',
  readTime: '5 min read',
  published: '2026-09-07',
  summary:
  'A custom wardrobe in Hyderabad costs ₹1,100–2,800 per sq ft of front area depending on door type and finish. Hinged doors are cheaper and give full access; sliding doors save floor space in rooms where the bed sits within 3 feet of the wardrobe. Plan internals around what you own, not a standard template.',
  sections: [
  {
    heading: 'Sliding or hinged doors?',
    paragraphs: [
    'Hinged (openable) wardrobes cost less, let you see the whole interior at once and allow mirrors or accessories on the inside of doors. Sliding wardrobes need no swing clearance — ideal when the bed is close — but only reveal half the wardrobe at a time and use pricier tracks. Beyond 8 feet wide, sliding doors get heavy; consider three-door systems or a mix.']

  },
  {
    heading: 'Internal planning that actually works',
    paragraphs: [
    'Count what you own before drawing a single shelf. A good rule for Indian wardrobes: 40% hanging (long and short), 30% shelves for folded clothes, 20% drawers for smalls and accessories, 10% loft or seasonal storage.'],

    list: [
    'Long hang: 1,500 mm clear for sarees, kurtas, dresses and coats',
    'Short hang: 1,000 mm for shirts and trousers, stacked two-high',
    'Shelves: 350–400 mm deep, 300 mm apart; adjustable where possible',
    'Drawers: 150–200 mm deep with dividers; add a lockable drawer for valuables',
    'Lighting: motion-sensor LED strips on the front edge of shelves']

  },
  {
    heading: 'Finishes and pricing',
    paragraphs: [
    'Laminate shutters start at ₹1,100 per sq ft; acrylic and PU are ₹1,700–2,400; veneer and fluted or profiled fronts run to ₹2,800. Add ₹15,000–40,000 for sliding tracks and ₹8,000–25,000 for internal accessories like pull-down rails and trouser racks. A walk-in wardrobe adds the cost of an extra room finish but rarely more per sq ft of storage.']

  }],

  faqs: [
  {
    question: 'What is the standard depth of a wardrobe?',
    answer:
    '600 mm (24 inches) external depth is standard for hanging clothes. Sliding wardrobes need 650–700 mm to account for the overlapping tracks.'
  },
  {
    question: 'Is a walk-in wardrobe worth it in an apartment?',
    answer:
    'If you can spare a 6×8 ft space or larger, a walk-in gives better visibility and doubles as a dressing area. In smaller bedrooms, a full-height wall wardrobe with a loft is more efficient.'
  }]

},
{
  slug: 'complete-materials-guide-indian-homes',
  category: 'Materials',
  title: 'The Complete Materials Guide for Indian Home Interiors',
  metaTitle: 'Interior Materials Guide: Plywood, Laminate, Veneer, Stone | The Oakland',
  metaDescription:
  'Plywood grades, laminate vs veneer vs PU, natural stone vs engineered quartz, tile types and fabrics — a clear guide to choosing interior materials that last in Indian climates.',
  keywords: [
  'interior materials guide',
  'plywood vs mdf for interiors',
  'laminate vs veneer',
  'best plywood for wardrobe',
  'interior design materials india'],

  image: IMAGES.material,
  alt: 'Natural stone, oak and linen material palette at The Oakland studio',
  readTime: '8 min read',
  published: '2026-08-20',
  summary:
  'For Indian homes, choose BWR or marine-grade plywood for all wet-area woodwork, laminate or PU for high-use shutters, veneer or solid wood where you want natural grain, and quartz or granite for kitchen counters. Match every material to the humidity and use of the room it goes in.',
  sections: [
  {
    heading: 'Core boards: plywood, MDF and HDHMR',
    paragraphs: [
    'Plywood is the backbone of Indian interiors. Use BWR (boiling water resistant) grade for bedrooms and living rooms and marine (BWP) grade for kitchens, bathrooms and utility areas. MDF is flat and stable and takes paint well but swells with moisture — keep it for dry-area panelling and shutters that will be PU painted. HDHMR is a denser, moisture-resistant alternative to MDF that works for kitchen shutters.']

  },
  {
    heading: 'Surface finishes compared',
    paragraphs: ['Every finish trades cost against feel and maintenance.'],
    list: [
    'Laminate: most economical, hundreds of textures, tough; edges are visible unless edge-banded well',
    'Acrylic: mirror gloss, scratch resistant, shows fingerprints',
    'PU paint: seamless, any colour, matte or gloss; premium and repairable',
    'Veneer: real wood surface on ply; natural variation; needs polish or PU clear coat',
    'Solid wood (teak, oak, ash): the most enduring; moves with humidity so best for furniture, not full-height panelling']

  },
  {
    heading: 'Stone, tile and countertops',
    paragraphs: [
    'Granite is the workhorse for Indian kitchens — heat and stain resistant at ₹150–400 per sq ft. Quartz is engineered, non-porous and consistent at ₹350–700. Marble is beautiful but etches with lemon and turmeric; reserve it for living-room floors and vanities, and seal it. For flooring, vitrified tiles remain the most practical; large-format porcelain slabs give a stone look with fewer joints.']

  },
  {
    heading: 'Fabrics and soft materials',
    paragraphs: [
    'Cotton and linen breathe in Hyderabad heat; blends with polyester hold shape on sofas. Choose upholstery with a Martindale rub count above 25,000 for daily-use seating. Wool and jute rugs wear well; keep silk for low-traffic rooms.']

  }],

  faqs: [
  {
    question: 'Which plywood is best for kitchen cabinets in India?',
    answer:
    'Marine-grade (BWP / IS:710) plywood from brands such as Century, Greenply or Kitply is the standard for kitchen carcasses because it resists prolonged moisture.'
  },
  {
    question: 'Is laminate or veneer better for wardrobes?',
    answer:
    'Laminate is cheaper, more scratch resistant and needs no maintenance; veneer looks richer and can be re-polished. Many homes use laminate inside and veneer or PU on the visible fronts.'
  },
  {
    question: 'Quartz or granite for a kitchen countertop?',
    answer:
    'Granite handles hot vessels better and costs less; quartz is non-porous, uniform in colour and easier to keep hygienic. Both work well for Indian cooking.'
  }]

},
{
  slug: 'flooring-options-indian-homes',
  category: 'Materials',
  title: 'Flooring Options for Indian Homes: Tiles, Wood, Stone and Cost',
  metaTitle: 'Flooring Options for Indian Homes: Tiles vs Wood vs Stone | The Oakland',
  metaDescription:
  'Compare vitrified tiles, porcelain slabs, engineered wood, marble and granite flooring for Indian homes — durability, maintenance, cost per sq ft and where each works best.',
  keywords: [
  'flooring options india',
  'best flooring for indian homes',
  'engineered wood flooring india',
  'vitrified tiles vs marble',
  'flooring cost per sq ft'],

  image: IMAGES.flooring,
  alt: 'Wide-plank white oak flooring meeting limestone in a living room',
  readTime: '5 min read',
  published: '2026-08-25',
  summary:
  'Vitrified and porcelain tiles are the most practical flooring for Indian homes at ₹60–250 per sq ft installed. Engineered wood suits bedrooms and living rooms in air-conditioned homes at ₹300–600. Marble and granite are enduring but need sealing and cost ₹200–800 depending on the stone.',
  sections: [
  {
    heading: 'Tiles: vitrified and large-format porcelain',
    paragraphs: [
    'Vitrified tiles are dense, low-porosity and nearly maintenance free. Large-format porcelain slabs (up to 1,200×2,400 mm) reduce grout lines and convincingly mimic marble or concrete. Choose matt or satin finishes in living areas to avoid glare and slips; use R10-rated anti-skid tiles in bathrooms and balconies.']

  },
  {
    heading: 'Wood: engineered vs laminate flooring',
    paragraphs: [
    'Engineered wood has a real hardwood veneer over a plywood core, so it handles humidity better than solid wood and can be sanded once or twice. Laminate flooring is a printed image on HDF — cheaper, but it cannot be refinished and swells if water sits on it. Neither belongs in kitchens, bathrooms or ground floors without a moisture barrier.']

  },
  {
    heading: 'Natural stone: marble, granite and limestone',
    paragraphs: [
    'Indian marble (Makrana, Ambaji) and imported Italian marble bring depth no tile can replicate, but they are porous and etch with acids. Granite is harder and more forgiving. Both need periodic sealing and a professional polish every few years. Limestone and travertine give a soft, warm look but are best in low-traffic, dry rooms.']

  }],

  faqs: [
  {
    question: 'Which flooring is best for Hyderabad apartments?',
    answer:
    'Large-format vitrified or porcelain tiles in living and wet areas, with engineered wood in bedrooms if the home is air-conditioned, gives the best balance of durability, comfort and cost.'
  },
  {
    question: 'Is wooden flooring suitable for Indian climate?',
    answer:
    'Engineered wood is — its cross-layered core resists the expansion solid wood suffers in humidity. Keep it out of wet areas and maintain 40–60% indoor humidity where possible.'
  }]

},
{
  slug: 'interior-design-trends-2026-hyderabad',
  category: 'Style',
  title: 'Interior Design Trends 2026: What Hyderabad Homes Are Embracing',
  metaTitle: 'Interior Design Trends 2026 for Indian Homes | The Oakland',
  metaDescription:
  'The interior design trends shaping Hyderabad homes in 2026 — warm minimalism, fluted panelling, natural stone, earthy palettes, layered lighting and flexible work-from-home spaces.',
  keywords: [
  'interior design trends 2026',
  'home interior trends india 2026',
  'living room design trends',
  'modern indian home interiors',
  'warm minimalism interiors'],

  image: IMAGES.trends,
  alt: 'Contemporary living room with sculptural seating and natural light',
  readTime: '5 min read',
  published: '2026-09-10',
  summary:
  'In 2026, Hyderabad homes are moving toward warm minimalism: earthy, low-contrast palettes, natural wood and stone, fluted and curved joinery, layered lighting instead of a single ceiling source, and rooms planned around flexible work and family time rather than formal display.',
  sections: [
  {
    heading: '1. Warm minimalism replaces stark white',
    paragraphs: [
    'Pure white walls and glossy surfaces are giving way to bone, sand, clay and olive tones with matte finishes. The look is calm rather than cold — fewer pieces, each with real texture.']

  },
  {
    heading: '2. Natural materials front and centre',
    paragraphs: [
    'Veneer, solid oak and teak, honed stone, lime plaster and linen are being chosen over high-gloss laminates. Homeowners are asking for materials that age well and can be repaired rather than replaced.']

  },
  {
    heading: '3. Fluted, curved and sculptural joinery',
    paragraphs: [
    'Fluted panels on wardrobes, TV walls and kitchen islands add rhythm without pattern. Curved sofas, arched niches and rounded edges on counters soften the rectilinear apartment shell.']

  },
  {
    heading: '4. Layered lighting',
    paragraphs: [
    'One central ceiling light is out. Homes are combining cove lighting, wall washers, pendants over dining tables and portable lamps on dimmers, all on separate circuits — often controlled through simple smart switches.']

  },
  {
    heading: '5. Rooms that flex',
    paragraphs: [
    'A study nook in the living room, a guest room that doubles as a home office, and dining tables sized for work as well as meals reflect how Hyderabad families actually live post-2020.']

  }],

  faqs: [
  {
    question: 'What colours are trending for home interiors in 2026?',
    answer:
    'Earthy neutrals — warm white, sand, terracotta, olive and deep brown — used in low-contrast combinations, with colour coming from natural materials rather than paint.'
  },
  {
    question: 'Is minimalism still in style in India?',
    answer:
    'Yes, but in a warmer form. Indian homes are keeping fewer, better pieces while adding texture, wood and handcrafted objects so spaces feel lived-in rather than empty.'
  }]

},
{
  slug: 'cohesive-colour-story-home-interiors',
  category: 'Style',
  title: 'Building a Cohesive Colour Story for Your Home',
  metaTitle: 'How to Choose a Colour Palette for Your Home Interiors | The Oakland',
  metaDescription:
  'A step-by-step method for choosing a whole-home colour palette — base, secondary and accent tones, the 60-30-10 rule, testing paint in Indian light, and coordinating wood and stone.',
  keywords: [
  'home colour palette ideas',
  'how to choose paint colours for home',
  'interior colour scheme',
  '60 30 10 rule interior design',
  'wall colour combination for living room'],

  image: IMAGES.colour,
  alt: 'Warm interior colour palette with terracotta and bone tones',
  readTime: '4 min read',
  published: '2026-08-28',
  summary:
  'Build a home colour palette with one base neutral for 60% of surfaces, a secondary tone for 30% (joinery, upholstery, rugs) and an accent for 10% (art, cushions, a single wall). Fix the wood and stone tones first, since they are the hardest to change, then choose paint to sit with them.',
  sections: [
  {
    heading: 'Start with what you cannot repaint',
    paragraphs: [
    'Flooring, countertops, veneer and stone set the undertone of a home — warm (yellow/red) or cool (grey/blue). Pick these first and choose every paint and fabric to agree with them. Mixing a cool grey tile with warm teak joinery is the most common reason a home feels "off".']

  },
  {
    heading: 'The 60-30-10 rule',
    paragraphs: ['A simple structure that keeps rooms balanced and lets them flow into each other.'],
    list: [
    '60% base: walls and ceiling in one or two closely related neutrals across the whole home',
    '30% secondary: joinery, sofas, curtains and rugs in a deeper or complementary tone',
    '10% accent: art, cushions, a feature wall or a coloured kitchen island']

  },
  {
    heading: 'Test in your own light',
    paragraphs: [
    'Hyderabad daylight is strong and warm; the same paint looks two shades lighter and yellower at 2pm than in a showroom. Paint A3 sample boards, move them around the room over a full day and look at them under your actual bulbs (choose 2700–3000K warm white for living spaces).']

  }],

  faqs: [
  {
    question: 'Should every room in the house be the same colour?',
    answer:
    'Not necessarily, but they should share a family. Use one base neutral throughout and vary the secondary and accent tones per room so the home reads as one story.'
  },
  {
    question: 'What is the best wall colour for a small living room?',
    answer:
    'A warm off-white or pale sand with a matte finish maximises light without the clinical feel of pure white; keep the ceiling the same colour to visually lift it.'
  }]

},
{
  slug: 'caring-for-natural-finishes',
  category: 'Care',
  title: 'Caring for Natural Wood, Stone and Fabric Finishes',
  metaTitle: 'How to Maintain Wood, Marble and Fabric Interiors | The Oakland',
  metaDescription:
  'Maintenance guide for natural interior finishes in Indian homes — cleaning and polishing veneer and solid wood, sealing marble and granite, and caring for linen, cotton and wool upholstery.',
  keywords: [
  'how to maintain wooden furniture',
  'marble floor maintenance',
  'veneer furniture care',
  'upholstery cleaning tips',
  'interior maintenance guide'],

  image: IMAGES.flooring,
  alt: 'Natural oak and stone interior finishes in a living room',
  readTime: '4 min read',
  published: '2026-08-15',
  summary:
  'Natural finishes last decades with simple care: dust wood weekly and re-polish veneer every 2–3 years; seal marble and granite annually and wipe acidic spills immediately; vacuum upholstery weekly and rotate cushions. Avoid harsh chemicals, abrasive pads and prolonged standing water on all three.',
  sections: [
  {
    heading: 'Wood and veneer',
    paragraphs: [
    'Dust with a dry microfibre cloth; wipe with a barely damp cloth for marks and dry immediately. Keep wood out of direct afternoon sun to prevent fading and away from AC vents that dry it out. PU-coated surfaces need nothing more; melamine or natural-polish veneer benefits from a professional re-polish every two to three years.']

  },
  {
    heading: 'Marble, granite and limestone',
    paragraphs: [
    'Seal natural stone on installation and every 12 months after. Clean with a pH-neutral stone cleaner — never vinegar, lemon or bathroom acids. Wipe turmeric, oil, wine and tea immediately; marble etches within minutes. Use felt pads under furniture and doormats at entries to keep grit off the floor.']

  },
  {
    heading: 'Linen, cotton and wool',
    paragraphs: [
    'Vacuum sofas and rugs weekly with an upholstery attachment. Blot spills, never rub. Rotate and flip cushions monthly for even wear. Professional dry-cleaning of loose covers once a year keeps linen crisp; wool rugs should be professionally cleaned every 18–24 months and kept out of damp rooms.']

  }],

  faqs: [
  {
    question: 'How often should marble floors be polished?',
    answer:
    'A professional diamond polish every 3–5 years in living areas, sooner in high-traffic entries. Regular sealing and pH-neutral cleaning extends the interval.'
  },
  {
    question: 'Can I use water to clean veneer furniture?',
    answer:
    'Yes, sparingly — a cloth wrung almost dry, followed by a dry wipe. Standing water lifts veneer at the edges.'
  }]

}];

export const getResource = (slug: string) =>
RESOURCES.find((r) => r.slug === slug);
