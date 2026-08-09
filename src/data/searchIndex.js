import districts from './districts';
import touristPlaces from './touristPlaces';
import foods from './foods';
import festivals from './festivals';
import { artsCrafts, giProducts } from './artsCrafts';
import { historicalTimeline, famousPersonalities, rivers } from './history';

// Create a unified search index from all data sources
export const searchIndex = [
  ...districts.map(d => ({
    type: 'district',
    id: d.id,
    title: d.name,
    description: d.description || '',
    category: d.division,
    link: `/districts/${d.slug}`,
    tags: [d.name, 'district', d.division, ...(d.famousPersonalities?.map(p => p.name) || [])]
  })),
  ...touristPlaces.map(p => ({
    type: 'place',
    id: p.id,
    title: p.name,
    description: p.description,
    category: p.category,
    link: `/tourism?place=${p.slug}`,
    tags: [p.name, 'tourism', 'place', p.district, p.type]
  })),
  ...foods.map(f => ({
    type: 'food',
    id: f.id,
    title: f.name,
    description: f.description,
    category: f.category,
    link: `/food?item=${f.slug}`,
    tags: [f.name, 'food', 'cuisine', f.district]
  })),
  ...festivals.map(f => ({
    type: 'festival',
    id: f.id,
    title: f.name,
    description: f.description,
    category: f.type,
    link: `/culture/festivals?item=${f.slug}`,
    tags: [f.name, 'festival', 'culture', f.region]
  })),
  ...artsCrafts.map(a => ({
    type: 'art',
    id: a.id,
    title: a.name,
    description: a.description,
    category: a.type,
    link: `/culture/arts?item=${a.slug}`,
    tags: [a.name, 'art', 'craft', a.district, a.region]
  })),
  ...giProducts.map(p => ({
    type: 'giproduct',
    id: p.id,
    title: p.name,
    description: p.description,
    category: p.category,
    link: `/culture/gi-products?item=${p.slug}`,
    tags: [p.name, 'gi product', p.district, p.category]
  })),
  ...historicalTimeline.map(h => ({
    type: 'history',
    id: h.id,
    title: h.title,
    description: h.description,
    category: h.era,
    link: `/history?event=${h.id}`,
    tags: [h.title, 'history', h.era, h.year]
  })),
  ...famousPersonalities.map(p => ({
    type: 'personality',
    id: p.id,
    title: p.name,
    description: p.description,
    category: p.field,
    link: `/history/personalities?person=${p.id}`,
    tags: [p.name, 'person', 'personality', p.district, p.period]
  })),
  ...rivers.map(r => ({
    type: 'river',
    id: r.id,
    title: r.name,
    description: r.description,
    category: 'Geography',
    link: `/about?river=${r.id}`,
    tags: [r.name, 'river', 'geography', ...r.districts]
  }))
];

export const searchOptions = {
  keys: [
    { name: 'title', weight: 3 },
    { name: 'tags', weight: 2 },
    { name: 'description', weight: 1 },
    { name: 'category', weight: 1 }
  ],
  threshold: 0.3,
  includeMatches: true,
  minMatchCharLength: 2
};

export default searchIndex;
