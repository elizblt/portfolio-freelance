export const HERO_STYLES = {
  // Layout
  section: "relative overflow-hidden font-sans text-slate-900",
  container: "mx-auto max-w-6xl px-4 md:px-6 py-20 sm:py-16 md:py-20 lg:py-24",
  grid: "grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16",
  
  // Content
  content: "order-1 text-center lg:text-left",
  
  // Badge
  badge: "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium shadow-sm backdrop-blur bg-white/85 text-slate-600",
  
  // Title
  title: "mt-3 font-extrabold leading-[1.06] tracking-tight text-[clamp(28px,7vw,54px)] max-w-[20ch] sm:max-w-[28ch]",
  titleWord: "inline-block mr-[.35ch]",
  
  // Underline
  underline: "mt-3 h-1 w-28 rounded-full mx-auto lg:mx-0",
  
  // Description
  description: "mt-4 text-[clamp(16px,4vw,19px)] text-slate-600 max-w-prose leading-relaxed",
  
  // Meta
  meta: "mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm text-slate-700 lg:justify-start",
  metaSeparator: "opacity-40 hidden sm:inline",
  metaItem: "inline-flex items-center gap-2",
  
  // Buttons
  buttonContainer: "mt-6 flex flex-col items-stretch justify-center gap-3 md:flex-row md:items-center md:gap-4 lg:justify-start px-2 sm:px-0",
  
  primaryButton: `group relative inline-flex items-center justify-center gap-2 rounded-full 
                  px-6 py-3.5 text-sm sm:text-base font-semibold text-white 
                  bg-gradient-to-b from-slate-900 to-slate-800 
                  shadow-[0_14px_36px_rgba(15,23,42,.22)] 
                  transition-[transform,box-shadow] duration-300 
                  focus:outline-none focus-visible:outline focus-visible:outline-2 
                  focus-visible:outline-offset-2 focus-visible:outline-slate-800 
                  overflow-hidden min-h-[48px] w-full md:w-auto whitespace-nowrap`,
  
  secondaryButton: `group relative inline-flex items-center justify-center gap-2 rounded-full 
                    px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-900 
                    bg-white/90 backdrop-blur shadow-sm hover:shadow-md 
                    transition-[transform,box-shadow] duration-300 
                    focus:outline-none focus-visible:outline focus-visible:outline-2 
                    focus-visible:outline-offset-2 focus-visible:outline-slate-300 
                    overflow-hidden min-h-[48px] w-full md:w-auto whitespace-nowrap`,
  
  buttonSpotlight: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100",
  buttonShine: "pointer-events-none absolute inset-0 rounded-full",
  
  // Image
  imageContainer: "order-2 mx-auto lg:order-2",
  imageWrapper: "relative -rotate-3",
  imageShadow: "absolute -inset-6 -z-10 rounded-[32px] opacity-60 blur-2xl",
  imageFrame: "relative aspect-[3/4] w-[200px] xs:w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] rounded-[20px] sm:rounded-[30px] bg-white p-1.5 sm:p-2 shadow-xl",
  imageInner: "relative h-full w-full overflow-hidden rounded-[18px] sm:rounded-[26px]",
  
  // Features
  featuresContainer: "mt-8 sm:mt-12 flex flex-col lg:grid lg:grid-cols-3 gap-3 text-sm px-2 sm:px-0",
  featureCard: "flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-2 rounded-xl bg-white/90 px-3 sm:px-4 py-2.5 sm:py-3 shadow-sm backdrop-blur transition-shadow hover:shadow-lg hover:bg-white text-center",
  featureHeader: "flex items-center gap-2",
  featureTitle: "font-semibold text-slate-900",
  featureDescription: "text-slate-600 text-xs lg:text-sm leading-tight",
  
  // Background
  background: "pointer-events-none absolute inset-0 -z-20 bg-gradient-to-br from-blue-50 via-white to-slate-50",
  backgroundGlow: "pointer-events-none absolute -z-10 left-1/2 top-[-140px] h-[360px] w-[360px] -translate-x-1/2 rounded-full opacity-30 blur-3xl bg-blue-200",
  
  // Scroll indicator
  scrollIndicator: "absolute inset-x-0 bottom-4 flex items-center justify-center text-slate-400"
} as const;