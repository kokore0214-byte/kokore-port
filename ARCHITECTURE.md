# ARCHITECTURE — 디자이너 포트폴리오 웹사이트

## 1. 스택
- **Astro** — 정적 사이트 생성(SSG). 페이지가 미리 완성된 HTML로 나가서 SEO/링크 미리보기 문제가 애초에 발생하지 않음
- **React** (`@astrojs/react`) — 인터랙션이 필요한 부분만 "아일랜드"로 사용 (인덱스, 마커, 배경, 그리드 리빌)
- **Tailwind CSS v4** — 스타일링
- **three.js** (v0.186) — About 페이지 크롬 블롭 전용. gionatannese.com이 실제로 WebGL2 canvas를 쓰는 걸 확인하고 범위를 좁혀 허용(PRD 12번 참고). React Three Fiber 등 래퍼 없이 순수 three.js로 최소 범위만 구현, `<script>`로 클라이언트에서만 지연 실행 — 다른 페이지 번들에는 영향 없음
- 히어로 콜라주 궤도 회전은 three.js 없이 CSS 3D transform(`perspective` + `rotateY`)으로 처리 — 평면 이미지 회전은 WebGL이 필요 없음

### 왜 Astro인가 (검토 과정)
초기에는 Vite + React(CSR 전용 SPA)로 시작했으나, 포트폴리오는 링크 공유·검색 노출이 핵심 목적이라 클라이언트 렌더링만으로는 SEO/링크 미리보기가 제대로 동작하지 않는 문제가 있었다. 콘텐츠가 거의 채워지지 않은 시점에 Astro로 전환하는 것이 가장 저렴한 타이밍이라 판단해 교체했다.

## 2. 페이지 구조
gionatannese.com 구조를 복제한 다중 페이지(정적 라우팅, Astro MPA). 페이지 전환은 Astro 내장 View Transitions(`astro:transitions`의 `<ClientRouter />`)로 처리 — 별도 클라이언트 라우터/라이브러리 없이 SSG 이점을 유지한다.

```
/                    Home — 히어로(이름/모노그램/태그라인 + 흩뿌려진 콜라주) → Selected work → Explorations
/projects            Projects — 3열 그리드
/projects/[slug]     Project 상세
/about               About — 헤드라인 + 4원칙 + Awards + Contact
```

공통 `Layout.astro`가 상단 번호 인덱스 네비(1 Home / 2 Projects / 3 About, 현재 경로 강조)와 하단 Contact 푸터를 담당한다.

## 3. 콘텐츠 데이터 구조
프로젝트 내용을 컴포넌트에 하드코딩하지 않고 데이터 파일로 분리한다.

```
src/data/projects.ts
```

```ts
export type Project = {
  slug: string
  title: string
  tags: string[]
  category: 1 | 2 | 3 | 4 // 1 제품 · 2 포토그래피 · 3 비주얼 · 4 AI
  description: string
  comingSoon?: boolean
}

export const projects: Project[] = [ /* ... */ ]
export const categoryLabels: Record<Project['category'], string> = { /* ... */ }
export const explorations: string[] = [ /* Home 하단 텍스트 리스트 */ ]
```

새 프로젝트 추가 = `projects` 배열에 객체 하나 추가 → `/projects` 그리드와 `/projects/[slug]` 상세(`getStaticPaths`로 생성), Home의 Selected work 리스트에 자동 반영. 컴포넌트 코드는 건드릴 필요 없음.

## 4. 핵심 컴포넌트 / 구현 방식
순수 Astro 컴포넌트 + CSS로 구현 (React 아일랜드나 애니메이션 라이브러리 없이 네이티브로 처리 — `ponytail:` 원칙에 따라 필요해지면 그때 추가).

| 영역 | 구현 |
|---|---|
| 번호 인덱스 네비 | `Layout.astro` 내부, `Astro.url.pathname` 기반으로 현재 페이지 강조, 라벨은 CSS `max-width` 트랜지션으로 hover/active 시 드러남 |
| Home 흩뿌려진 콜라주 | 절대 위치(퍼센트) 타일 + `perspective`/`rotateY` CSS 3D로 궤도 회전, `prefers-reduced-motion`에서 비활성화 |
| Selected work | 콜라주를 `position: sticky`로 화면에 고정한 채, `IntersectionObserver`로 스크롤 위치에 따라 캡션(제목/태그)만 크로스페이드 (`work-marker` 구간 감지) |
| Explorations 리스트 | `explorations` 배열을 `.map()`으로 순회하는 정적 마크업 |
| Projects 그리드 | 3열 그리드, `comingSoon` 플래그로 배지 표시 |
| About 크롬 블롭 | `three.js`로 렌더링되는 금속 재질(MetalnessMaterial + RoomEnvironment) 구체. 클라이언트 전용 `<script>`에서 동적 import, `prefers-reduced-motion`이면 회전 정지 |
| 페이지 전환 | Astro `<ClientRouter />` (View Transitions), 추가 의존성 없음 |
| 스무스 스크롤 | 네이티브 `scroll-behavior: smooth` (`ponytail:` 전역 단순 처리, 관성 스크롤이 꼭 필요해지면 Lenis 도입 검토) |

## 5. 색상 토큰 (Tailwind 설정, `DESIGN.md` 기준)
```css
--color-accent: #0066cc;         /* Action Blue — 밝은 배경 */
--color-accent-on-dark: #2997ff; /* Sky Link Blue — 사진/어두운 배경 위 */
--color-bg: #ffffff;             /* canvas */
--color-bg-soft: #f5f5f7;        /* parchment */
--color-text: #1d1d1f;           /* ink */
```
순수 원색(`#FF0000` 류), 네온톤, 상투적 그라디언트는 사용하지 않음. 카드/버튼 그림자 없음.

## 6. 타이포그래피
```css
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Pretendard, Inter, Helvetica, Arial, sans-serif;
```
한글 텍스트가 들어가는 모든 요소는 위 스택을 그대로 사용해 Pretendard 폴백이 항상 걸리도록 한다. 서구 전용 손글씨/장식 폰트를 한글에 단독 적용하지 않는다 (실제로 Caveat 폰트가 한글을 지원하지 않아 브라우저가 궁서체류 시스템 폰트로 강제 대체하는 문제가 있었음).

## 7. 반응형 / 접근성
- Tailwind 기본 breakpoint 사용 (`sm/md/lg/xl`)
- 터치 디바이스: 호버 인터랙션은 탭으로 대체 (`@media (hover: hover)`로 분기)
- `prefers-reduced-motion` 대응: 배경 크로스페이드/그리드 애니메이션 최소화 버전 제공

## 8. 정적 프로토타입
- `figma/mockup.html` — Astro 앱과 별개로, 순수 HTML/CSS/JS로 인터랙션을 먼저 검증하는 실험용 정적 파일
- 새 인터랙션 아이디어는 여기서 먼저 프로토타이핑한 뒤 Astro 컴포넌트로 이식한다
- 실제 서비스 코드가 아니므로 유지보수 대상 아님 (스냅샷 성격)

## 9. 배포
- **Vercel**에 Astro 정적 빌드 배포
- `.is-a.dev` 서브도메인을 Vercel 배포 도메인으로 CNAME 연결 (사이트가 Vercel에 먼저 올라간 뒤 등록 PR 진행)

## 10. 알려진 이슈
- 이 개발 환경(Windows)에서 Astro의 네이티브 컴파일러 바이너리(`astro.win32-x64-msvc.node`)가 WDAC(코드 무결성 정책)에 의해 간헐적으로 차단됨. 재현 원인은 클라우드 평판 조회 지연으로 추정. 빌드/개발 서버 실행 실패 시 재시도로 대부분 해결됨. 조직 정책이라 근본 해결은 IT 협의 필요.
