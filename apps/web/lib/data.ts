export type TravelItem = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  location: string;
  duration: string;
  price: string;
  tags: string[];
};

export const business = {
  name: "Sri Kala Bhairava Holidays",
  address: "Hosamane, Bhadravathi, Karnataka 577301",
  rating: 5.0,
  reviewCount: 12,
  lat: 13.8409,
  lng: 75.7037,
  description: "Local tour and vehicle rental service in Bhadravathi."
};

export const destinations: TravelItem[] = [
  { slug:"shivamogga-bhadravathi", title:"Shivamogga & Bhadravathi", subtitle:"Waterfalls, heritage and easy local escapes.", location:"Shivamogga, Karnataka", duration:"1–3 days", price:"From ₹3,999", image:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=92", tags:["Local","Nature","Family"] },
  { slug:"chikkamagaluru", title:"Chikkamagaluru", subtitle:"Coffee country, misty hills and scenic drives.", location:"Chikkamagaluru, Karnataka", duration:"2–4 days", price:"From ₹7,999", image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1800&q=92", tags:["Hills","Nature","Road Trip"] },
  { slug:"coorg", title:"Coorg", subtitle:"Plantations, waterfalls and relaxing mountain stays.", location:"Kodagu, Karnataka", duration:"2–4 days", price:"From ₹8,499", image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=92", tags:["Hills","Couples","Family"] },
  { slug:"coastal-karnataka", title:"Coastal Karnataka", subtitle:"Beaches, temples and beautiful coastal roads.", location:"Udupi & Mangaluru", duration:"3–5 days", price:"From ₹9,999", image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=92", tags:["Beach","Culture","Road Trip"] },
  { slug:"hampi", title:"Hampi", subtitle:"Monuments, boulders and iconic heritage trails.", location:"Vijayanagara, Karnataka", duration:"2–3 days", price:"From ₹6,999", image:"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1800&q=92", tags:["Heritage","Culture","History"] },
  { slug:"mysuru", title:"Mysuru", subtitle:"Palaces, food, culture and comfortable city breaks.", location:"Mysuru, Karnataka", duration:"1–2 days", price:"From ₹4,999", image:"https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1800&q=92", tags:["Family","Culture","City"] }
];

export const tours = [
  ...destinations.map(d => ({...d, kind:"Tour"})),
  { slug:"tempo-traveller", title:"Tempo Traveller & Group Travel", subtitle:"Comfortable group transport for families, friends and events.", location:"Bhadravathi", duration:"Custom", price:"On request", image:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1800&q=92", tags:["Group","Rental","Events"], kind:"Vehicle" }
];

export const packages = [
  { slug:"family-karnataka", title:"Family Karnataka Explorer", subtitle:"A relaxed multi-day itinerary with vehicle and sightseeing planning.", image:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=92", duration:"4–6 days", price:"From ₹18,999", tags:["Family","Private"] },
  { slug:"couples-escape", title:"Couples Hill Escape", subtitle:"Scenic stays, viewpoints and a flexible road-trip plan.", image:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=92", duration:"3–4 days", price:"From ₹15,999", tags:["Couples","Hills"] },
  { slug:"group-explorer", title:"Group Explorer", subtitle:"Custom group itinerary with vehicle options and route coordination.", image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=92", duration:"Custom", price:"Quote based", tags:["Groups","Rental"] }
];

export const blogPosts = [
  { slug:"karnataka-road-trip-guide", title:"How to Plan a Karnataka Road Trip", excerpt:"Build routes around drive time, stops, stays and vehicle comfort.", image:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=92" },
  { slug:"group-travel-checklist", title:"A Practical Group Travel Checklist", excerpt:"What to confirm before you book a group vehicle or multi-day trip.", image:"https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1600&q=92" },
  { slug:"what-to-pack-hills", title:"What to Pack for a Hill Trip", excerpt:"Simple essentials for cool weather, long drives and outdoor stops.", image:"https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1600&q=92" }
];