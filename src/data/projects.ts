export type Project = {
  slug: string
  title: string
  tags: string[]
  category: 1 | 2 | 3 | 4 // 1 제품 · 2 포토그래피 · 3 비주얼 · 4 AI
  description: string
  comingSoon?: boolean
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
    title: 'AI Project',
    tags: ['AI', 'Interaction Design'],
    category: 4,
    description: 'AI 프로젝트 자리표시자 설명입니다. 실제 콘텐츠로 교체 예정입니다.',
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
