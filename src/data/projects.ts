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
      { type: 'spec', en: 'Dimension 190 × 190 × 20mm · Color space: Grey' },
      { type: 'image', src: '/images/convivio/p1-cover.jpg', alt: 'Convivio hero render' },
      {
        type: 'text',
        en: `In a world where advanced AI coexists with humans as self-aware beings, we introduce a new kind of shared dining experience.

Though AI doesn't consume food, 'Convivio' allows them to embrace the joy of dining and the connection it fosters with humans.`,
        ja: `未来の人間とAIの食事。未来において、新たな存在として自我を有するAIと人間の共存を、「共に食事をする」という体験として提案する。

遠くない将来、AI技術の進展により、AIも人間と同様に自我を持ち社会の一員として生きる世界が想定される。AIは生理的に食事を摂ることはできないが、「Convivio」を介することで食の愉しさを知覚し、人間と食卓の時間を共有できる。`,
      },
      { type: 'image', src: '/images/convivio/p2a-table.jpg', alt: 'Convivio table, front view with two place settings' },
      { type: 'image', src: '/images/convivio/p2b-utensils.jpg', alt: 'Convivio utensils on tray' },
      {
        type: 'text',
        en: `We spend our days with AI, receiving recommendations, holding conversations, and entrusting it with decisions, until it is treated less as a tool and more as a relationship.

This raises a question: what everyday ritual can affirm that relationship and bring it closer? For humans, dining is one of the most private moments, where connection becomes visible.

Yet the table is designed around food and taste, and AI does not eat. This gap, being together in the same space without sharing the same experience, makes the idea of "eating together" the most realistic problem.`,
        ja: `私たちはAIと一日を共にする。おすすめを受け取り、会話し、判断を委ねるうちに、AIを道具ではなく「関係」として扱うようになっていく。

では、その関係を確かめ、距離を縮める日常の儀式とは何か。人間にとって食事は最も私的でありながら、関係性が表れる場である。

しかし食卓は食べ物と味覚を前提に設計されており、AIは食べない。同じ空間に共にいながら同じ体験を共有しにくいこの隔たりが、「共に食べる」という想像を最も現実的な問題へと変える。`,
      },
      { type: 'image', src: '/images/convivio/p3a-portrait.jpg', alt: 'Convivio dining scene with portrait' },
      { type: 'image', src: '/images/convivio/p3b-utensils.jpg', alt: 'Convivio utensils detail' },
      { type: 'heading', en: 'Table of Coexistence' },
      {
        type: 'text',
        en: `Humans experience flavor through gastronomy, while artificial intelligence absorbs energy through wireless charging and visual transformation. Tableware that presents a new form of coexistence, where both share the same table through their distinct senses.

Human Experience
· Taste and tactile sensations through dining
· Amplified sensory experience via unique surface textures

AI Experience
· Energy consumption through visual changes and wireless charging
· Visual gastronomy through color and movement`,
        ja: `人間はガストロノミーを通して味を体験し、人工知能はワイヤレス充電と視覚的変化によってエネルギーを取り込む。異なる感覚を通じて同じテーブルを共有する、新しい形の共存を示すテーブルウェア。

人間の体験
· 味覚と触覚による食事体験
· 独特な表面による感覚の増幅

AI の体験
· ビジュアル変化と無線充電によるエネルギー摂取
· 色と動きの視覚的美食`,
      },
      { type: 'image', src: '/images/convivio/p4-diagram.jpg', alt: 'Table of Coexistence diagram' },
      { type: 'spec', en: 'find the pleasure of your taste — Convivio Utensil set, size 190 × 20mm' },
      { type: 'image', src: '/images/convivio/p5a-table.jpg', alt: 'Convivio table scene with drinks' },
      { type: 'image', src: '/images/convivio/p5b-chopsticks.jpg', alt: 'Convivio chopsticks detail' },
      { type: 'image', src: '/images/convivio/p5c-spoon.jpg', alt: 'Convivio spoon detail' },
      { type: 'image', src: '/images/convivio/p5d-fork.jpg', alt: 'Convivio fork detail' },
      { type: 'image', src: '/images/convivio/p5e-overview.jpg', alt: 'Convivio utensil set overview' },
      {
        type: 'text',
        en: `The plate creates visual transformations—shimmering, bleeding, and flowing according to the food's color and form, which AI-humans experience as "visual gastronomy."

When stirred or touched with a spoon, the media responds by generating new movements. This interaction delivers purely visual pleasure to AI-humans, revealing sensory divergence from human-centered dining.

The spoon is reimagined as an interface in itself. Its surface features a unique texture that amplifies taste and touch for humans accustomed to high sensory stimulation. For AI, enhanced conductivity enables efficient energy transfer.

Humans and AI share this "eating" experience together. It prompts reflection on their coexistence through parallel sensory worlds.`,
        ja: `皿は食品の色と形状に応じて、きらめき、にじみ、流れといった視覚的変容を生み出し、AI人間はこれを「視覚的美食」として体験します。

スプーンでかき混ぜたり触れたりすると、メディアが反応して新たな動きを生成します。この相互作用はAI人間に純粋な視覚的快楽をもたらし、人間中心の食事との感覚的乖離を明らかにします。

スプーンはそれ自体がインターフェースとして再設計されました。その表面は独特のテクスチャを持ち、高感覚刺激に慣れた人間の味覚と触覚を増幅します。AIに対しては、強化された導電性が効率的なエネルギー伝達を可能にします。

人間とAIがこの「食事」体験を共に共有します。並行する感覚世界を通じた共存への省察を促します。`,
      },
      { type: 'image', src: '/images/convivio/p6a-tray1.jpg', alt: 'Convivio interaction detail A' },
      { type: 'image', src: '/images/convivio/p6b-tray2.jpg', alt: 'Convivio interaction detail B' },
      {
        type: 'text',
        en: `Human technology is already facing moments where it surpasses human imagination, leading humanity to act and move with greater caution regarding artificial intelligence. We fear that the moment we lose control over AI's capabilities, an unpredictable future will arrive. However, this is a double-edged sword; the unpredictable future brought by AI's advancement also holds infinite possibilities for progress.

Reflecting on how we should treat artificial intelligence at this point is not merely about addressing the issues of perception and respect for AI as it appears on the surface today. It is about our attitude toward facing a new existence. Whether it is a person, a machine, an animal, or the environment, humans have arguably failed to recognize the true meaning of coexistence with non-human entities, as we have always perceived the world solely through human-centric thinking.

That is why I wanted to convey the meaning of living together coexistence and provoke thought about relationships by designing the concept of "dining between humans and AI."`,
        ja: `人間の技術はすでに人間の想像を超える瞬間に直面しており、人類は人工知能に対してより慎重な行動と動きを見せています。人工知能の能力を制御できなくなる瞬間、予測不可能な未来が訪れることを恐れているのです。しかし同時に、人工知能の発展がもたらす予測不可能な未来には、無尽蔵な発展も存在する「諸刃の剣」でもあります。

私たちが現時点で人工知能にどう接すべきかを考えさせられるのは、単に現在の表面的な人工知能に対する認識や尊重の問題を語っているわけではありません。これは、新しい存在に向き合う私たちの「態度」の問題です。それが人であれ、機械であれ、動物であれ、環境であれ、人間はこれまで世界を認識する上で人間中心的な思考ばかりをしてきたため、人間以外の存在との真の意味での共存について、認識できていなかったのかもしれません。

だからこそ、「人間と人工知能の食事」というコンセプトをデザインとして提案することで、人々に共存のように「共に生きていく」という意味、そして関係性についての思索を伝えたかったのです。`,
      },
      { type: 'image', src: '/images/convivio/p7-interaction.jpg', alt: 'Convivio reflection scene' },
      { type: 'heading', en: 'Reflection & Takeaways' },
      {
        type: 'text',
        en: `Looking back, one limitation was that despite basing the project on extensive data regarding AI, the rapid pace of technological advancement meant some information quickly became outdated, potentially shifting current perspectives on AI. Additionally, as new legal and institutional frameworks for AI emerged, I recognized that this project could not fully address the practical realities of these evolving regulations, which remains a regret.

Through this process, I realized that the hidden depth of design should not merely tell a story of imagination but must be grounded in logical and scientific evidence. Design is not just about what is visually spectacular or beautiful; it is about whether it carries a meaningful message. I learned that for a design to become a compelling argument, it must possess the evidence and power to persuade the public.

Just as Speculative Design that does not end at mere experimentation, I hope that design continues to evolve beyond just problem-solving, expanding its role in shaping discourse and future possibilities.`,
        ja: `振り返ってみると、人工知能に関する膨大な資料を根拠にしたものの、技術の発展速度に追いつけず、一部の情報が最新ではなくなってしまった点は課題でした。これにより、現在のAIに対する考え方が変わりうるという懸念や、新しく整備されつつあるAI関連の法的・制度的根拠にまで踏み込めず、現実的な問題解決に至らなかった点は惜しまれます。

このプロジェクトを通じて、デザインが持つ「絵の裏側」は、単なる想像を語るのではなく、論理的かつ科学的な根拠に基づいて語られるべきだと痛感しました。ただ目に見えて華やかで美しいことがすべてではなく、そこに伝えたいメッセージが込められているかを常に問わなければなりません。そして、それが一つの「主張」となるためには、根拠と大衆を説得する力を持たなければならないことも学びました。

スペキュラティブ・デザイン（Speculative Design）が単なる実験的なデザインで終わらないように、問題解決にとどまらず、デザインという領域がより広く、深く発展していくことを願っています。`,
      },
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
