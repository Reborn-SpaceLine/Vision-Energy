import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>

function S({ children, ...rest }: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  )
}

export const Icon = {
  pin: (p: P) => (
    <S {...p}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </S>
  ),
  headset: (p: P) => (
    <S {...p}>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 14h2.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM20 14h-2.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1H19a1 1 0 0 0 1-1z" />
    </S>
  ),
  siren: (p: P) => (
    <S {...p}>
      <path d="M7 17v-4a5 5 0 0 1 10 0v4" />
      <path d="M4 20h16M5 17h14M12 4V2M19 7l1.5-1.5M5 7 3.5 5.5" />
    </S>
  ),
  globe: (p: P) => (
    <S {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
    </S>
  ),
  user: (p: P) => (
    <S {...p}>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
    </S>
  ),
  send: (p: P) => (
    <S {...p}>
      <path d="M21 3 3 10.5l7 2.7L12.5 21z" />
      <path d="M10 13.2 21 3" />
    </S>
  ),
  arrowR: (p: P) => (
    <S {...p}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </S>
  ),
  arrowL: (p: P) => (
    <S {...p}>
      <path d="M20 12H5M11 18 5 12l6-6" />
    </S>
  ),
  arrowD: (p: P) => (
    <S {...p}>
      <path d="M12 4v15M6 13l6 6 6-6" />
    </S>
  ),
  chevR: (p: P) => (
    <S {...p}>
      <path d="m9 5 7 7-7 7" />
    </S>
  ),
  chevD: (p: P) => (
    <S {...p}>
      <path d="m5 9 7 7 7-7" />
    </S>
  ),
  burger: (p: P) => (
    <S {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </S>
  ),
  close: (p: P) => (
    <S {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </S>
  ),
  fuel: (p: P) => (
    <S {...p}>
      <path d="M4 20V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v15" />
      <path d="M3 20h11M4 11h9" />
      <path d="M13 8h3a2 2 0 0 1 2 2v6a1.8 1.8 0 0 0 3.6 0V11l-2.6-3" />
    </S>
  ),
  flame: (p: P) => (
    <S {...p}>
      <path d="M12 3s5 4.2 5 9a5 5 0 0 1-10 0c0-1.6.7-3 1.5-4 .2 1.2 1 2 1.8 2 .8 0 1.2-.8 1.2-2 0-2-.5-4-.5-5Z" />
    </S>
  ),
  drop: (p: P) => (
    <S {...p}>
      <path d="M12 3s6 6.4 6 10.2A6 6 0 0 1 6 13.2C6 9.4 12 3 12 3Z" />
    </S>
  ),
  shop: (p: P) => (
    <S {...p}>
      <path d="M4 9h16l-1 11H5z" />
      <path d="M8 9V6a4 4 0 0 1 8 0v3" />
    </S>
  ),
  check: (p: P) => (
    <S {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.4 2.6 2.6L16 9.6" />
    </S>
  ),
  bolt: (p: P) => (
    <S {...p}>
      <path d="M13 2 4.5 13.5H11l-1 8.5 9-11.8h-6.4z" />
    </S>
  ),
  shield: (p: P) => (
    <S {...p}>
      <path d="M12 3l7.5 2.6v5.6c0 4.6-3.1 8.3-7.5 9.6-4.4-1.3-7.5-5-7.5-9.6V5.6z" />
      <path d="m9 12 2.2 2.2L15.4 10" />
    </S>
  ),
  nfc: (p: P) => (
    <S {...p}>
      <path d="M7 8a6 6 0 0 1 0 8M10.5 6a9.5 9.5 0 0 1 0 12M14 4.5a13 13 0 0 1 0 15" />
    </S>
  ),
  calendar: (p: P) => (
    <S {...p}>
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </S>
  ),
  navigate: (p: P) => (
    <S {...p}>
      <path d="m3.5 11 17-7.5-7.5 17-2-7z" />
    </S>
  ),
  search: (p: P) => (
    <S {...p}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </S>
  ),
  phone: (p: P) => (
    <S {...p}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
    </S>
  ),
  mail: (p: P) => (
    <S {...p}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </S>
  ),
  building: (p: P) => (
    <S {...p}>
      <path d="M4 21V6l8-3v18M12 21h8V11l-8-3" />
      <path d="M7 9h1.5M7 13h1.5M7 17h1.5M15 14h2M15 17.5h2M3 21h18" />
    </S>
  ),
  ext: (p: P) => (
    <S {...p}>
      <path d="M14 4h6v6M20 4l-8.5 8.5" />
      <path d="M18 14v5a1.5 1.5 0 0 1-1.5 1.5H5.5A1.5 1.5 0 0 1 4 19V7.5A1.5 1.5 0 0 1 5.5 6H10" />
    </S>
  ),
  card: (p: P) => (
    <S {...p}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 10h19M6 15h4" />
    </S>
  ),
  truck: (p: P) => (
    <S {...p}>
      <path d="M2.5 16V6h11v10M13.5 9h4l3.5 3.5V16" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
      <path d="M9 18h6M2.5 16h2.5" />
    </S>
  ),
  ship: (p: P) => (
    <S {...p}>
      <path d="M3.5 14.5 12 12l8.5 2.5-2 5.5H5.5z" />
      <path d="M8 12V7.5h8V12M12 4v3.5" />
    </S>
  ),
  sun: (p: P) => (
    <S {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5V5M12 19v2.5M2.5 12H5M19 12h2.5M5.5 5.5 7 7M17 17l1.5 1.5M18.5 5.5 17 7M7 17l-1.5 1.5" />
    </S>
  ),
  factory: (p: P) => (
    <S {...p}>
      <path d="M3 21V10l6 3.5V10l6 3.5V6h6v15z" />
      <path d="M7 17h1.5M12 17h1.5M17 17h1.5" />
    </S>
  ),
  chart: (p: P) => (
    <S {...p}>
      <path d="M4 20V4M4 20h16" />
      <path d="M8 16v-5M12.5 16V7M17 16v-3" />
    </S>
  ),
  download: (p: P) => (
    <S {...p}>
      <path d="M12 3v11M8 10.5l4 4 4-4" />
      <path d="M4 18.5h16" />
    </S>
  ),
  users: (p: P) => (
    <S {...p}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.8 19.5a6.4 6.4 0 0 1 12.4 0" />
      <path d="M16 5.4a3.2 3.2 0 0 1 0 5.2M17.5 14.2a6.4 6.4 0 0 1 3.7 5.3" />
    </S>
  ),
  cpu: (p: P) => (
    <S {...p}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M10 2.5v3M14 2.5v3M10 18.5v3M14 18.5v3M2.5 10h3M2.5 14h3M18.5 10h3M18.5 14h3" />
    </S>
  ),
  gavel: (p: P) => (
    <S {...p}>
      <path d="m5 19 6-6M9 9l6 6M13 5l6 6M11.5 6.5 8 10M17.5 12.5 14 16" />
      <path d="M3.5 21h7" />
    </S>
  ),
  leaf: (p: P) => (
    <S {...p}>
      <path d="M20 4c0 9-5.5 13-11 13-2 0-3.5-.5-3.5-.5S5 8 12 6c3-.8 8-2 8-2Z" />
      <path d="M4 21c1.5-5 5-8.5 10-11" />
    </S>
  ),
  grad: (p: P) => (
    <S {...p}>
      <path d="m2.5 9 9.5-4.5L21.5 9 12 13.5z" />
      <path d="M6.5 11v5c0 1.4 2.5 2.6 5.5 2.6s5.5-1.2 5.5-2.6v-5" />
    </S>
  ),
  flag: (p: P) => (
    <S {...p}>
      <path d="M5 21V4M5 5h12l-2 4 2 4H5" />
    </S>
  ),
  server: (p: P) => (
    <S {...p}>
      <rect x="3.5" y="4" width="17" height="6" rx="1.8" />
      <rect x="3.5" y="14" width="17" height="6" rx="1.8" />
      <path d="M7 7h.01M7 17h.01" />
    </S>
  ),
  signal: (p: P) => (
    <S {...p}>
      <path d="M4 20V14M9.3 20V9.5M14.7 20V12M20 20V5" />
    </S>
  ),
  anchor: (p: P) => (
    <S {...p}>
      <circle cx="12" cy="5" r="2.2" />
      <path d="M12 7.2V21M5 13a7 7 0 0 0 14 0M4 13h2.6M17.4 13H20" />
    </S>
  ),
  recycle: (p: P) => (
    <S {...p}>
      <path d="M7 8 4.5 12l3.6.4M17 8l2.5 4-3.6.4" />
      <path d="M9.5 19.5h5l-1.2-2.8M12 4.5 9.6 8.7M12 4.5l2.4 4.2" />
      <path d="M6.2 16.5 4.5 12l4.2-.5M17.8 16.5l1.7-4.5-4.2-.5" />
    </S>
  ),
  pipe: (p: P) => (
    <S {...p}>
      <path d="M3 9h9a4 4 0 0 1 4 4v8M3 15h9" />
      <path d="M14 5h6v4h-6z" />
    </S>
  ),
  target: (p: P) => (
    <S {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </S>
  ),
  eye: (p: P) => (
    <S {...p}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </S>
  ),
  handshake: (p: P) => (
    <S {...p}>
      <path d="m3 11 4-4 3 2 2-1 2 1 3-2 4 4-3 3-2-2-2 2-2-2-2 2z" />
      <path d="M7 15l2.5 2.5M17 15l-2.5 2.5" />
    </S>
  ),
  refresh: (p: P) => (
    <S {...p}>
      <path d="M20 11a8 8 0 0 0-14-4.5L4 9" />
      <path d="M4 13a8 8 0 0 0 14 4.5L20 15" />
      <path d="M4 4v5h5M20 20v-5h-5" />
    </S>
  ),
  briefcase: (p: P) => (
    <S {...p}>
      <rect x="3" y="7.5" width="18" height="12.5" rx="2.2" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3 13h18" />
    </S>
  ),
  gauge: (p: P) => (
    <S {...p}>
      <path d="M4 17a8.5 8.5 0 1 1 16 0" />
      <path d="m12 13 4-3.5" />
      <circle cx="12" cy="14" r="1.4" />
    </S>
  ),
  flask: (p: P) => (
    <S {...p}>
      <path d="M9.5 3v6L4.8 17.4A2 2 0 0 0 6.5 20.5h11a2 2 0 0 0 1.7-3.1L14.5 9V3" />
      <path d="M8 3h8M7.6 14h8.8" />
    </S>
  ),
  wrench: (p: P) => (
    <S {...p}>
      <path d="M15.5 3a5.5 5.5 0 0 0-5 7.8L3 18.3 5.7 21l7.5-7.5A5.5 5.5 0 0 0 21 8.5l-3 3-2.5-2.5z" />
    </S>
  ),
  fire: (p: P) => (
    <S {...p}>
      <path d="M12 21c4 0 6.5-2.6 6.5-6 0-4.5-4-6-4-10 0 0-2.5 1.5-2.5 5 0 1.5-.7 2.2-1.4 2.2-.9 0-1.6-.9-1.6-2.2C7 11.5 5.5 13 5.5 15c0 3.4 2.5 6 6.5 6Z" />
    </S>
  ),
  sliders: (p: P) => (
    <S {...p}>
      <path d="M4 7h10M18 7h2M4 17h2M10 17h10" />
      <circle cx="16" cy="7" r="2" />
      <circle cx="8" cy="17" r="2" />
    </S>
  ),
  doc: (p: P) => (
    <S {...p}>
      <path d="M6 2.5h8l4 4V21.5H6z" />
      <path d="M14 2.5v4h4M9 12h6M9 16h6" />
    </S>
  ),
  trendUp: (p: P) => (
    <S {...p}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </S>
  ),
  trendDown: (p: P) => (
    <S {...p}>
      <path d="M3 7l6 6 4-4 8 8" />
      <path d="M15 17h6v-6" />
    </S>
  ),
  hourglass: (p: P) => (
    <S {...p}>
      <path d="M6 2.5h12M6 21.5h12" />
      <path d="M6.5 2.5v3.2c0 3 5.5 4.6 5.5 6.3s-5.5 3.3-5.5 6.3v3.2M17.5 2.5v3.2c0 3-5.5 4.6-5.5 6.3s5.5 3.3 5.5 6.3v3.2" />
    </S>
  ),
  lock: (p: P) => (
    <S {...p}>
      <rect x="4.5" y="10" width="15" height="11" rx="2.4" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </S>
  ),
  swap: (p: P) => (
    <S {...p}>
      <path d="M4 8h13l-3.5-3.5M20 16H7l3.5 3.5" />
    </S>
  ),
  coffee: (p: P) => (
    <S {...p}>
      <path d="M3.5 8h13v6.5a4.5 4.5 0 0 1-9 0z" />
      <path d="M16.5 10H19a2.5 2.5 0 0 1 0 5h-2.5M4 21h13" />
    </S>
  ),
  wifi: (p: P) => (
    <S {...p}>
      <path d="M2.5 9a14 14 0 0 1 19 0M6 12.5a9 9 0 0 1 12 0M9.4 16a4.3 4.3 0 0 1 5.2 0" />
      <circle cx="12" cy="19.4" r="1" />
    </S>
  ),
  utensils: (p: P) => (
    <S {...p}>
      <path d="M6 3v7a2.5 2.5 0 0 0 5 0V3M8.5 12.5V21" />
      <path d="M17 3c-1.8 1.4-2.5 3.4-2.5 6 0 1.6.8 2.5 2.5 2.5V21" />
    </S>
  ),
  atm: (p: P) => (
    <S {...p}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h8M8 11h4M8 15h8" />
    </S>
  ),
  receipt: (p: P) => (
    <S {...p}>
      <path d="M5.5 2.5h13v19l-2.2-1.5-2.2 1.5-2.1-1.5L9.7 21.5 7.5 20l-2 1.5z" />
      <path d="M9 8h6M9 12h6" />
    </S>
  ),
  help: (p: P) => (
    <S {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.3a2.6 2.6 0 1 1 3.4 2.5c-.7.3-.9.9-.9 1.6" />
      <circle cx="12" cy="16.8" r=".8" fill="currentColor" stroke="none" />
    </S>
  ),
  funnel: (p: P) => (
    <S {...p}>
      <path d="M3.5 5h17l-6.5 7.5V20l-4-2.5v-5z" />
    </S>
  ),
  info: (p: P) => (
    <S {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v6" />
      <circle cx="12" cy="7.8" r=".9" fill="currentColor" stroke="none" />
    </S>
  ),
  cloud: (p: P) => (
    <S {...p}>
      <path d="M7 18.5a4.2 4.2 0 0 1-.4-8.4A5.6 5.6 0 0 1 17.3 9.6 3.9 3.9 0 0 1 18 18.5z" />
    </S>
  ),
  megaphone: (p: P) => (
    <S {...p}>
      <path d="M4 10v4a2 2 0 0 0 2 2h1.5L18 20V4L7.5 8H6a2 2 0 0 0-2 2Z" />
      <path d="M8 16v4.5h3V17" />
    </S>
  ),
  tag: (p: P) => (
    <S {...p}>
      <path d="M3.5 11.5V4.5A1 1 0 0 1 4.5 3.5h7l9 9-8 8z" />
      <circle cx="8" cy="8" r="1.4" />
    </S>
  ),
  rosette: (p: P) => (
    <S {...p}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.5 13.8-1.5 7 5-2.5 5 2.5-1.5-7" />
    </S>
  ),
  folderStar: (p: P) => (
    <S {...p}>
      <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4l2 2.5h7A1.5 1.5 0 0 1 19 9v9.5A1.5 1.5 0 0 1 17.5 20h-13A1.5 1.5 0 0 1 3 18.5z" />
      <path d="m11 11.5 1.2 2.4 2.6.3-1.9 1.8.5 2.5-2.4-1.2-2.3 1.2.4-2.5-1.9-1.8 2.6-.3z" />
    </S>
  ),
  share: (p: P) => (
    <S {...p}>
      <circle cx="18" cy="5.5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="18.5" r="2.5" />
      <path d="m8.3 10.8 7.4-4M8.3 13.2l7.4 4" />
    </S>
  ),
  shieldPlus: (p: P) => (
    <S {...p}>
      <path d="M12 3l7.5 2.6v5.6c0 4.6-3.1 8.3-7.5 9.6-4.4-1.3-7.5-5-7.5-9.6V5.6z" />
      <path d="M12 8.5v6M9 11.5h6" />
    </S>
  ),
  userCheck: (p: P) => (
    <S {...p}>
      <circle cx="9.5" cy="8" r="3.5" />
      <path d="M2.5 20a7 7 0 0 1 12-4.9" />
      <path d="m15.5 16.5 2 2 4-4.2" />
    </S>
  ),
  clock: (p: P) => (
    <S {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5.4l3.4 2" />
    </S>
  ),
  uploadCloud: (p: P) => (
    <S {...p}>
      <path d="M7 18.5a4.2 4.2 0 0 1-.4-8.4A5.6 5.6 0 0 1 17.3 9.6 3.9 3.9 0 0 1 18 18.5" />
      <path d="M12 21v-7M9.2 16.2 12 13.4l2.8 2.8" />
    </S>
  ),
}
