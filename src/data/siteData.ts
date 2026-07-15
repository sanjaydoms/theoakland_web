export const BRAND = {
  name: 'Shrutham — Oakland',
  shortName: 'Shrutham',
  location: 'Oakland',
  descriptor: 'Oakland',
  socialHandle: '@Oakland',
  description:
  'A Bay Area interior design studio crafting enduring, tactile spaces for how you live now.'
};

export const CONTACT = {
  address: '2401 Broadway, Suite 210, Oakland, CA 94612',
  phone: '+1 (510) 555-0184',
  email: 'hello@shruthamoakland.com',
  mapEmbedUrl:
  'https://www.openstreetmap.org/export/embed.html?bbox=-122.278%2C37.800%2C-122.258%2C37.817&layer=mapnik&marker=37.808%2C-122.268'
};

export const IMAGES = {
  hero: "/95e74b97-b67f-4d32-a365-3ba623a9d017.jpg",
  collection: "/570d2baf-2935-44d5-98b4-159e054a582d.jpg",

  project: "/e0a813db-8fc6-441f-a612-dd7066e5dd2b.jpg",

  material: "/e37333bf-5b8d-4b19-92ef-d43d41b8e600.jpg",

  studio: "/8a6ba828-8a33-4f5a-ac78-760a8cfbc616.jpg",

  furniture: "/5b36c932-17bf-499f-bb10-a8af10ca2bf4.jpg",

  furnishings: "/724a6445-754f-4108-96df-58803f720ec3.jpg",

  flooring: "/fe83f062-2906-4ca9-8cc3-5ad7e67dc9d8.jpg",

  lighting: "/3bed832c-7f4b-4524-a0f9-f2b5870887fc.jpg",

  kitchen: "/0421df1d-ef94-4a0e-8279-9c7dc31f9574.jpg",

  bedroom: "/44ada375-25cb-43a4-8ab1-37fd484f734a.jpg",

  wardrobe: "/a834d45c-9f50-44bf-96f4-fa105c175dca.jpg",

  wallDecor: "/9d35ab56-f672-4c49-87ea-6ce4985f4915.jpg",

  accessories: "/cc898d96-9871-4e9d-aed6-d3c5ed339ae1.jpg",

  dining: "/ff544411-4e3a-421c-b878-2fc1032e2a00.jpg",

  hillsideProject: "/d1d85715-c2f5-4b14-8add-7e8c84918227.jpg",

  lakeshoreProject: "/ba2fa12a-6167-4a24-9c14-b980b6d24e50.jpg",

  workspaceProject: "/b9ec508c-f21a-414f-a713-8dd986ba1a5c.jpg",

  hospitalityProject: "/a952e09b-6144-4f70-99d2-414ddf340b81.jpg",

  restaurantProject: "/9b74cb3e-2ae3-4db6-ba9b-1167a18f7d29.jpg",

  founder: "/1789a853-9769-41c5-8252-629859d8eaa6.jpg",

  teamDesigner: "/80b37f17-8faf-446d-8641-97967bd48f88.jpg",

  teamArchitect: "/b5f70a6e-25dd-4a2a-9af1-743722e323b6.jpg",

  trends: "/0af1e8c4-5373-45d7-ad6e-1303fdcf8f2d.jpg",

  colour: "/5f19c568-1177-436d-b0f3-91356f60cc3f.jpg"

};

export interface ImageItem {
  image: string;
  alt: string;
}

export interface Category extends ImageItem {
  name: string;
  slug: string;
  blurb: string;
}

export const CATEGORIES: Category[] = [
{
  name: 'Furniture',
  slug: 'furniture',
  blurb: 'Sculptural pieces built to last generations.',
  image: IMAGES.furniture,
  alt: 'Sculptural lounge chair and curved sofa in an Oakland loft'
},
{
  name: 'Furnishings',
  slug: 'furnishings',
  blurb: 'Textiles, throws and soft layers.',
  image: IMAGES.furnishings,
  alt: 'Layered linen, wool and ceramic home furnishings'
},
{
  name: 'Flooring',
  slug: 'flooring',
  blurb: 'Warm oak, stone and engineered surfaces.',
  image: IMAGES.flooring,
  alt: 'Oak flooring meeting honed limestone in a California home'
},
{
  name: 'Lighting',
  slug: 'lighting',
  blurb: 'Ambient, task and statement fixtures.',
  image: IMAGES.lighting,
  alt: 'Sculptural pendant above a stone dining table'
},
{
  name: 'Wall Decor',
  slug: 'wall-decor',
  blurb: 'Art, mirrors and textured finishes.',
  image: IMAGES.wallDecor,
  alt: 'Abstract art and sculptural objects in a refined living room'
},
{
  name: 'Modular Kitchen',
  slug: 'modular-kitchen',
  blurb: 'Considered, functional culinary spaces.',
  image: IMAGES.kitchen,
  alt: 'Oak and stone Oakland kitchen'
},
{
  name: 'Wardrobes',
  slug: 'wardrobes',
  blurb: 'Bespoke storage, beautifully concealed.',
  image: IMAGES.wardrobe,
  alt: 'Custom walnut wardrobe wall with integrated lighting'
},
{
  name: 'Accessories',
  slug: 'accessories',
  blurb: 'The finishing details that matter.',
  image: IMAGES.accessories,
  alt: 'Sculptural interior accessories on a stone table'
}];


export const WHY_US = [
{
  title: 'Premium Materials',
  desc: 'Natural, tactile finishes sourced for beauty and lasting performance.'
},
{
  title: 'Tailored Design',
  desc: 'Every space is shaped around your routines, architecture and point of view.'
},
{
  title: 'Thoughtful Execution',
  desc: 'Clear coordination and skilled craft carry the vision through to installation.'
},
{
  title: 'Local Partnership',
  desc: 'An Oakland studio team that stays closely involved from first conversation to handover.'
},
{
  title: 'Lasting Support',
  desc: 'We remain a trusted resource for your space long after the finishing touches.'
}];


export const COLLECTIONS = [
{
  name: 'California Modern',
  desc: 'Sculptural forms, soft daylight and honest materials.',
  image: IMAGES.collection,
  alt: 'California modern Oakland living room'
},
{
  name: 'Warm Minimal',
  desc: 'A quieter palette with depth in every texture.',
  image: IMAGES.furnishings,
  alt: 'Warm textured furnishing details'
},
{
  name: 'Oakland Entertaining',
  desc: 'Easy gatherings, thoughtfully composed.',
  image: IMAGES.dining,
  alt: 'Oakland dining room with stone table and oak chairs'
},
{
  name: 'Creative Workspace',
  desc: 'Workplaces designed to inspire focus and exchange.',
  image: IMAGES.workspaceProject,
  alt: 'Oakland creative office with timber worktables'
},
{
  name: 'Restful Retreat',
  desc: 'Private rooms made for restoration.',
  image: IMAGES.bedroom,
  alt: 'Tranquil Oakland primary bedroom'
},
{
  name: 'Hillside Living',
  desc: 'Spaces that open to the Bay and the landscape.',
  image: IMAGES.hillsideProject,
  alt: 'Hillside Oakland residence with Bay view'
}];


export const PROJECTS = [
{
  type: 'Residential',
  title: 'Redwood House',
  image: IMAGES.hillsideProject,
  alt: 'Redwood House, a hillside Oakland residence',
  filter: 'Villa'
},
{
  type: 'Apartment',
  title: 'Lakeshore Residence',
  image: IMAGES.lakeshoreProject,
  alt: 'Lakeshore Residence living room in Oakland',
  filter: 'Apartment'
},
{
  type: 'Office',
  title: 'Oakland Creative Co.',
  image: IMAGES.workspaceProject,
  alt: 'Oakland Creative Co. workplace interior',
  filter: 'Office'
},
{
  type: 'Hospitality',
  title: 'Temescal House',
  image: IMAGES.hospitalityProject,
  alt: 'Temescal House hospitality lounge',
  filter: 'Hospitality'
},
{
  type: 'Commercial',
  title: 'Broadway Atelier',
  image: IMAGES.project,
  alt: 'Broadway Atelier contemporary commercial interior',
  filter: 'Commercial'
},
{
  type: 'Restaurant',
  title: 'Moss & Ember',
  image: IMAGES.restaurantProject,
  alt: 'Moss and Ember restaurant dining room',
  filter: 'Commercial'
}];


export const PROJECT_TYPES = PROJECTS.map((project) => project.type);

export const SOLUTIONS = [
{
  name: 'Residential',
  image: IMAGES.hillsideProject,
  alt: 'Sunlit Oakland residential interior with Bay views'
},
{
  name: 'Commercial',
  image: IMAGES.project,
  alt: 'Contemporary commercial interior in Oakland'
},
{
  name: 'Hospitality',
  image: IMAGES.hospitalityProject,
  alt: 'Boutique hospitality lounge in Oakland'
},
{
  name: 'Office Interiors',
  image: IMAGES.workspaceProject,
  alt: 'Thoughtful Oakland creative workplace'
},
{
  name: 'Retail',
  image: IMAGES.wallDecor,
  alt: 'Gallery-like retail interior with art and walnut detailing'
},
{
  name: 'Hillside Homes',
  image: IMAGES.lakeshoreProject,
  alt: 'Refined Oakland apartment living space'
}];


export const MATERIALS = [
{
  name: 'Natural Stone',
  image: IMAGES.material,
  alt: 'Limestone, oak and linen material palette'
},
{
  name: 'White Oak',
  image: IMAGES.flooring,
  alt: 'Wide-plank white oak flooring'
},
{
  name: 'Handwoven Textile',
  image: IMAGES.furnishings,
  alt: 'Textured linen and wool furnishings'
},
{
  name: 'Brushed Metal',
  image: IMAGES.lighting,
  alt: 'Warm metal pendant lighting detail'
},
{
  name: 'Clay & Plaster',
  image: IMAGES.wallDecor,
  alt: 'Plaster wall with sculptural ceramic objects'
},
{
  name: 'Tailored Upholstery',
  image: IMAGES.furniture,
  alt: 'Tailored boucle seating in a California loft'
},
{
  name: 'Veined Stone',
  image: IMAGES.kitchen,
  alt: 'Veined stone kitchen island'
},
{
  name: 'Walnut Joinery',
  image: IMAGES.wardrobe,
  alt: 'Custom walnut wardrobe joinery'
},
{
  name: 'Soft Layers',
  image: IMAGES.bedroom,
  alt: 'Linen bedding and soft bedroom layers'
}];


export const PROCESS = [
'Consultation',
'Planning',
'3D Visualization',
'Material Selection',
'Craft & Build',
'Installation',
'Final Styling'];


export const TESTIMONIALS = [
{
  quote:
  'Shrutham gave us a home that feels grounded in Oakland, yet completely our own. Every detail earns its place.',
  name: 'Maya & Daniel Brooks',
  role: 'Redwood House, Oakland Hills',
  image: IMAGES.hillsideProject,
  alt: 'Redwood House client project'
},
{
  quote:
  'The process was calm, clear and exceptionally well considered. Our Lakeshore home finally feels like it has a point of view.',
  name: 'Elena Park',
  role: 'Lakeshore Residence, Oakland',
  image: IMAGES.lakeshoreProject,
  alt: 'Lakeshore Residence client project'
},
{
  quote:
  'They translated our culture into a workplace people genuinely want to be in.',
  name: 'Jordan Lewis',
  role: 'Oakland Creative Co.',
  image: IMAGES.workspaceProject,
  alt: 'Oakland Creative Co. client project'
}];


export const STATS = [
{ value: '180+', label: 'Bay Area Projects' },
{ value: '15+', label: 'Years in Oakland' },
{ value: '60+', label: 'Craft Partners' },
{ value: '98%', label: 'Client Referrals' }];


export const TEAM = [
{
  role: 'Designers',
  image: IMAGES.teamDesigner,
  alt: 'Shrutham Oakland interior designer in the studio'
},
{
  role: 'Architects',
  image: IMAGES.teamArchitect,
  alt: 'Shrutham Oakland architect holding project drawings'
},
{
  role: 'Project Leads',
  image: IMAGES.founder,
  alt: 'Shrutham Oakland founder in the material library'
},
{
  role: 'Studio Team',
  image: IMAGES.studio,
  alt: 'Shrutham Oakland design studio materials table'
}];


export const RESOURCE_GUIDES = [
{
  title: 'Interior Trends 2026',
  tag: 'Trends',
  image: IMAGES.trends,
  alt: 'California modern interior trends with sculptural seating'
},
{
  title: 'The Complete Materials Guide',
  tag: 'Materials',
  image: IMAGES.material,
  alt: 'Natural stone, oak and textile material palette'
},
{
  title: 'Building a Cohesive Colour Story',
  tag: 'Colour',
  image: IMAGES.colour,
  alt: 'Warm Oakland interior color palette'
},
{
  title: 'Caring for Natural Finishes',
  tag: 'Maintenance',
  image: IMAGES.flooring,
  alt: 'Natural oak and stone interior finishes'
}];


export const INSTAGRAM_POSTS: ImageItem[] = [
{
  image: IMAGES.furniture,
  alt: 'Sculptural seating in a California modern loft'
},
{ image: IMAGES.kitchen, alt: 'Oak and stone kitchen detail' },
{ image: IMAGES.dining, alt: 'Warm contemporary Oakland dining room' },
{ image: IMAGES.material, alt: 'Tactile material palette' },
{ image: IMAGES.bedroom, alt: 'Softly layered Oakland bedroom' },
{ image: IMAGES.wallDecor, alt: 'Gallery-like art wall and walnut console' },
{ image: IMAGES.hillsideProject, alt: 'Oakland Hills home with Bay view' },
{ image: IMAGES.hospitalityProject, alt: 'Moody hospitality lounge' },
{ image: IMAGES.accessories, alt: 'Curated objects on a travertine table' }];


export const BRANDS = [
'VITRA',
'MUUTO',
'HAY',
'MENU',
'GUBI',
'FLOS',
'FERM LIVING',
'CARL HANSEN & SØN'];