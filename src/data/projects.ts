export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Feature Films' | 'Web Series' | 'Commercials' | 'Documentaries';
  image: string;
  description: string;
  year: string;
  client?: string;
  platform?: string;
  role?: string;
  cast?: string;
}

export const projects: Project[] = [
  {
    id: 'khufiya',
    title: 'Khufiya',
    tagline: 'A gripping espionage thriller',
    category: 'Feature Films',
    image: '/NE-upload/khufiya.png',
    description: 'Post-production work for this critically acclaimed espionage thriller featuring intricate storytelling and compelling performances.',
    year: '2023',
    platform: 'Netflix',
    role: 'Post Producer',
    cast: 'Tabu, Ashish Vidyarthi, Ali Fazal, Wamiqa Gabbi'
  },
  {
    id: 'charlie-chopra',
    title: 'Charlie Chopra & The Mystery of Solang Valley',
    tagline: 'Mystery meets comedy in the hills',
    category: 'Web Series',
    image: 'https://m.media-amazon.com/images/M/MV5BYTY5YjQ2NzAtOGFlMi00Yjc5LWFlZTUtZjliMmJiOWUyYzk2XkEyXkFqcGc@._V1_QL75_UX865.5_.jpg',
    description: 'A delightful mystery-comedy series showcasing our expertise in episodic content production and post-production.',
    year: '2023',
    platform: 'Sony LIV',
    role: 'Post Producer / Post Production Supervisor',
    cast: 'Mystery thriller cast'
  },
  {
    id: 'the-trial',
    title: 'The Trial',
    tagline: 'Justice redefined',
    category: 'Web Series',
    image: 'https://imgs.search.brave.com/bra7w1Gesl4QsqaaeSqkeveYWAYMLLDV2hU6XKDEBCY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/amFncmFudHYuY29t/L2FydGljbGUvcmMx/MDQzMDAwLzE2ODY2/NTUzMjUtdGhlLXRy/aWFsLWtham9sLmpw/Zw',
    description: 'Intense legal drama series featuring complex characters and compelling courtroom sequences.',
    year: '2023',
    platform: 'Disney+ Hotstar',
    role: 'Post Production Supervisor',
    cast: 'Kajol'
  },
  {
    id: 'ponniyin-selvan-2',
    title: 'Ponniyin Selvan: Part Two',
    tagline: 'The saga concludes',
    category: 'Feature Films',
    image: 'https://m.media-amazon.com/images/M/MV5BZjMyYTczZDMtMDRiNS00NmE0LWJkOGEtMWU0NmJiN2NkYThlXkEyXkFqcGc@._V1_QL75_UX580.5_.jpg',
    description: 'Continuation of the epic historical drama, demonstrating our consistency in delivering high-quality post-production work.',
    year: '2023',
    platform: 'Theatrical Release',
    role: 'Post Production Supervisor',
    cast: 'Vikram, Aishwarya Rai, Trisha Krishnan, Karthi'
  },
  {
    id: 'tooth-pari',
    title: 'Tooth Pari: When Love Bites',
    tagline: 'Romance meets supernatural',
    category: 'Web Series',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    description: 'Supernatural romance series featuring innovative visual effects and compelling storytelling.',
    year: '2023',
    platform: 'Netflix',
    role: 'Post-Production Coordinator',
    cast: 'Supernatural romance cast'
  },
  {
    id: 'ponniyin-selvan-1',
    title: 'Ponniyin Selvan: Part One',
    tagline: 'Epic historical saga begins',
    category: 'Feature Films',
    image: 'https://imgs.search.brave.com/1eeVz3jwEJkVGi97Ky5kvo28RLYfaC6aAZ3WoJB4wQE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci81Nzgv/ODYwL0hELXdhbGxw/YXBlci1wb25uaXlp/bi1zZWx2YW4tcGFy/dC0xLW9mZmljaWFs/LXRlbHVndS10ZWx1/Z3UtbW92aWUtbmV3/cy10aW1lcy1vZi1p/bmRpYS10aHVtYm5h/aWwuanBn',
    description: 'Contributed to the post-production of this magnum opus period drama showcasing our capability in large-scale productions.',
    year: '2022',
    platform: 'Theatrical Release',
    role: 'Post Production Supervisor',
    cast: 'Vikram, Aishwarya Rai, Trisha Krishnan, Karthi'
  },
  {
    id: 'laal-singh-chaddha',
    title: 'Laal Singh Chaddha',
    tagline: 'Life is like a box of chocolates',
    category: 'Feature Films',
    image: 'https://imgs.search.brave.com/2orT2jZxoBOabfQWt_RK5xVz6GHqygwVrB8-wJSdfI0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDExMzc2/OTQ3LmpwZw',
    description: 'Heartwarming drama featuring extensive post-production work including visual effects and color grading.',
    year: '2022',
    platform: 'Theatrical Release',
    role: 'Post-Production Coordinator',
    cast: 'Aamir Khan, Kareena Kapoor'
  },
  {
    id: 'aranyak',
    title: 'Aranyak',
    tagline: 'Secrets hidden in the forest',
    category: 'Web Series',
    image: 'https://imgs.search.brave.com/qN2Lo7LkMTkhUwDFwoSCcNhnzZywDRMhnCyFQItY6Yw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9udHZi/LnRtc2ltZy5jb20v/YXNzZXRzL3AyMDk5/MDEwN19iX2g4X2Fh/LmpwZz93PTk2MCZo/PTU0MA',
    description: 'Atmospheric crime thriller series showcasing our expertise in creating mood and tension through post-production.',
    year: '2021',
    platform: 'Netflix',
    role: 'Post-Production Coordinator',
    cast: 'Raveena Tandon, Parambrata Chattopadhyay'
  },
  {
    id: 'class-of-83',
    title: 'Class of \'83',
    tagline: 'When heroes cross the line',
    category: 'Feature Films',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop',
    description: 'Gritty crime drama featuring complex narrative structure and intensive post-production work.',
    year: '2020',
    platform: 'Netflix',
    role: 'Post-Production Coordinator',
    cast: 'Bobby Deol'
  }
];

export const categories = ['All', 'Feature Films', 'Web Series', 'Commercials', 'Documentaries'] as const;