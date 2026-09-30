export type CaseStudyBlock =
  | { type: 'heading'; en: string; ja?: string }
  | { type: 'text'; en: string; ja?: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'spec'; en: string }

export type Project = {
  slug: string
  title: string
  tags: string[]
  category: 1 | 2 | 3 | 4 // 1 제품 · 2 포토그래피 · 3 비주얼 · 4 AI
  description: string
  image?: string // 대표 이미지 — 홈 타일 / 프로젝트 그리드 / 상세 페이지 히어로에 사용
  imageAspect?: number // image의 원본 가로/세로 비율 (예: 16:9 → 16/9). 지정 시 홈 타일이 이 비율의 박스로 렌더링되어 크롭 없이 표시됨
  tileIndex?: number // 홈 히어로 구체의 어느 타일(1~16)에 이 프로젝트를 노출할지
  comingSoon?: boolean
  caseStudy?: CaseStudyBlock[] // 상세 페이지 본문, 원본 자료 순서 그대로
}

export const projects: Project[] = [
  {
    slug: 'product-one',
    title: 'Product Project',
    tags: ['Product Design', 'Prototyping'],
    category: 1,
    description: '제품 디자인 프로젝트 자리표시자 설명입니다. 실제 콘텐츠로 교체 예정입니다.',
  },
  {
    slug: 'photography-one',
    title: 'Photography Project',
    tags: ['Photography', 'Art Direction'],
    category: 2,
    description: '포토그래피 프로젝트 자리표시자 설명입니다. 실제 콘텐츠로 교체 예정입니다.',
  },
  {
    slug: 'visual-one',
    title: 'Visual Project',
    tags: ['Visual Identity', 'Illustration'],
    category: 3,
    description: '비주얼 프로젝트 자리표시자 설명입니다. 실제 콘텐츠로 교체 예정입니다.',
    comingSoon: true,
  },
  {
    slug: 'ai-one',
    title: 'Convivio - 02',
    tags: ['AI', 'Speculative Design', 'Human-AI Coexistence'],
    category: 4,
    image: '/images/convivio/00-cover-main.jpg',
    imageAspect: 1920 / 1080,
    tileIndex: 2,
    description: 'Human-AI Coexistence Through Tableware — 인간과 자아를 가진 AI가 식탁을 함께 나누는 방법을 상상한 스페큘러티브 디자인 프로젝트.',
    caseStudy: [
      { type: 'image', src: '/images/convivio/page-01.jpg', alt: 'Convivio page 1' },
      { type: 'image', src: '/images/convivio/page-02.jpg', alt: 'Convivio page 2' },
      { type: 'image', src: '/images/convivio/page-03.jpg', alt: 'Convivio page 3' },
      { type: 'image', src: '/images/convivio/page-04.jpg', alt: 'Convivio page 4' },
      { type: 'image', src: '/images/convivio/page-05.jpg', alt: 'Convivio page 5' },
      { type: 'image', src: '/images/convivio/page-06.jpg', alt: 'Convivio page 6' },
      { type: 'image', src: '/images/convivio/page-07.jpg', alt: 'Convivio page 7' },
      { type: 'image', src: '/images/convivio/page-08.jpg', alt: 'Convivio page 8' },
    ],
  },
  {
    slug: 'eve',
    title: 'EVE - 03',
    tags: ['Discursive Design', 'CMF', 'Installation'],
    category: 1,
    image: '/images/eve/00-cover-main.jpg',
    imageAspect: 1920 / 1080,
    tileIndex: 3,
    description: '해조류 기반 대체재료 산업 속 노동자의 소외를 다루는 디스커시브 CMF 프로젝트. 관람객이 직접 앉아 경험하는 오브제와 시나리오북으로 구성된 체험형 전시.',
    caseStudy: [
      { type: 'image', src: '/images/eve/page-01.jpg', alt: 'EVE title page' },
      { type: 'image', src: '/images/eve/page-02.jpg', alt: 'EVE update intro' },
      { type: 'image', src: '/images/eve/page-03.jpg', alt: 'EVE binary code page' },
      { type: 'image', src: '/images/eve/page-04.jpg', alt: 'EVE transition page' },
      { type: 'image', src: '/images/eve/page-05.jpg', alt: 'EVE scenario 0000' },
      { type: 'image', src: '/images/eve/page-06.jpg', alt: 'EVE scenario 0001' },
      { type: 'image', src: '/images/eve/page-07.jpg', alt: 'EVE scenario 0010, part one' },
      { type: 'image', src: '/images/eve/page-08.jpg', alt: 'EVE scenario 0010, part two' },
      { type: 'image', src: '/images/eve/page-09.jpg', alt: 'EVE scenario 0011' },
      { type: 'image', src: '/images/eve/page-10.jpg', alt: 'EVE scenario imagery' },
      { type: 'image', src: '/images/eve/page-11.jpg', alt: 'EVE scenario imagery' },
      { type: 'image', src: '/images/eve/page-12.jpg', alt: 'EVE object viewfinder note' },
      { type: 'image', src: '/images/eve/page-13.jpg', alt: 'EVE scenario booklet note' },
      { type: 'image', src: '/images/eve/page-14.jpg', alt: 'EVE translucent material note' },
      { type: 'image', src: '/images/eve/page-15.jpg', alt: 'EVE research imagery' },
      { type: 'image', src: '/images/eve/page-16.jpg', alt: 'EVE seaweed-based alternative material overview' },
      { type: 'image', src: '/images/eve/page-17.jpg', alt: 'EVE project overview and process flow' },
      { type: 'image', src: '/images/eve/page-18.jpg', alt: 'EVE seaweed material research findings' },
      { type: 'image', src: '/images/eve/page-19.jpg', alt: 'EVE alternative material industry analysis table' },
      { type: 'image', src: '/images/eve/page-20.jpg', alt: 'EVE redefining noise pollution as labor issue' },
      { type: 'image', src: '/images/eve/page-21.jpg', alt: 'EVE redefined noise pollution insight' },
      { type: 'image', src: '/images/eve/page-22.jpg', alt: 'EVE What If scenario concept' },
      { type: 'image', src: '/images/eve/page-23.jpg', alt: 'EVE object concept' },
      { type: 'image', src: '/images/eve/page-24.jpg', alt: 'EVE exhibition installation intent' },
      { type: 'image', src: '/images/eve/page-25.jpg', alt: 'EVE exhibition photos and visitor reactions' },
    ],
  },
]

export const categoryLabels: Record<Project['category'], string> = {
  1: 'Product',
  2: 'Photography',
  3: 'Visual',
  4: 'AI',
}

export const explorations = [
  'Blob — Visual Exploration',
  'Grid Study — Layout Exploration',
  'Type Test — Typography Exploration',
  'Motion Sketch — Interaction Exploration',
  'Color Field — Visual Exploration',
  'Data Pattern — AI Exploration',
]
