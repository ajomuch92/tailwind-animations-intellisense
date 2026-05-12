export type AnimationCategory =
  | 'animation'
  | 'duration'
  | 'delay'
  | 'steps'
  | 'scroll-timeline'
  | 'view-timeline'
  | 'animate-range'

export interface AnimationClass {
  name: string;
  description: string;
  category: 'animation' | 'duration' | 'delay' | 'steps' | 'view' | 'scroll-timeline' | 'animate-range' | 'view-timeline';
}

export const animations: AnimationClass[] = [
  // ─── Core animations ───────────────────────────────────────────────────────
  { name: 'animate-fade-in',                  description: 'Fade in gradually',                          category: 'animation' },
  { name: 'animate-fade-out',                 description: 'Fade out gradually',                         category: 'animation' },
  { name: 'animate-fade-in-up',               description: 'Fade in while moving upward',                category: 'animation' },
  { name: 'animate-fade-in-down',             description: 'Fade in while moving downward',              category: 'animation' },
  { name: 'animate-fade-in-left',             description: 'Fade in while moving from left',             category: 'animation' },
  { name: 'animate-fade-in-right',            description: 'Fade in while moving from right',            category: 'animation' },
  { name: 'animate-fade-out-up',              description: 'Fade out while moving upward',               category: 'animation' },
  { name: 'animate-fade-out-down',            description: 'Fade out while moving downward',             category: 'animation' },
  { name: 'animate-fade-out-left',            description: 'Fade out while moving to the left',          category: 'animation' },
  { name: 'animate-fade-out-right',           description: 'Fade out while moving to the right',         category: 'animation' },
  { name: 'animate-blurred-fade-in',          description: 'Fade in with a blur effect',                 category: 'animation' },
  // ─── Slide in ──────────────────────────────────────────────────────────────
  { name: 'animate-slide-in-top',             description: 'Slide in from the top',                      category: 'animation' },
  { name: 'animate-slide-in-bottom',          description: 'Slide in from the bottom',                   category: 'animation' },
  { name: 'animate-slide-in-left',            description: 'Slide in from the left',                     category: 'animation' },
  { name: 'animate-slide-in-right',           description: 'Slide in from the right',                    category: 'animation' },
  { name: 'animate-slide-up-fade',            description: 'Slide up with a fade',                       category: 'animation' },
  { name: 'animate-slide-rotate-in',          description: 'Slide in with a rotation',                   category: 'animation' },
  { name: 'animate-slide-rotate-out',         description: 'Slide out with a rotation',                  category: 'animation' },
  // ─── Slide out ─────────────────────────────────────────────────────────────
  { name: 'animate-slide-out-top',            description: 'Slide out through the top',                  category: 'animation' },
  { name: 'animate-slide-out-bottom',         description: 'Slide out through the bottom',               category: 'animation' },
  { name: 'animate-slide-out-left',           description: 'Slide out to the left',                      category: 'animation' },
  { name: 'animate-slide-out-right',          description: 'Slide out to the right',                     category: 'animation' },
  // ─── Zoom ──────────────────────────────────────────────────────────────────
  { name: 'animate-zoom-in',                  description: 'Zoom in from small to full size',            category: 'animation' },
  { name: 'animate-zoom-out',                 description: 'Zoom out from full size to small',           category: 'animation' },
  { name: 'animate-bounce-fade-in',           description: 'Bounce while fading in',                     category: 'animation' },
  // ─── Flip ──────────────────────────────────────────────────────────────────
  { name: 'animate-flip-horizontal',          description: 'Flip on the horizontal axis',                category: 'animation' },
  { name: 'animate-flip-vertical',            description: 'Flip on the vertical axis',                  category: 'animation' },
  { name: 'animate-flip-x',                   description: 'Flip along the X axis',                     category: 'animation' },
  { name: 'animate-flip-y',                   description: 'Flip along the Y axis',                     category: 'animation' },
  { name: 'animate-flip-in-x',               description: 'Flip in along the X axis',                   category: 'animation' },
  { name: 'animate-flip-in-y',               description: 'Flip in along the Y axis',                   category: 'animation' },
  { name: 'animate-flip-out-x',              description: 'Flip out along the X axis',                  category: 'animation' },
  { name: 'animate-flip-out-y',              description: 'Flip out along the Y axis',                  category: 'animation' },
  // ─── Rotate ────────────────────────────────────────────────────────────────
  { name: 'animate-rotate-90',               description: 'Rotate 90 degrees',                          category: 'animation' },
  { name: 'animate-rotate-180',              description: 'Rotate 180 degrees',                         category: 'animation' },
  { name: 'animate-rotate-360',              description: 'Full 360-degree rotation',                   category: 'animation' },
  { name: 'animate-rotate-in',               description: 'Rotate in to visible state',                 category: 'animation' },
  { name: 'animate-rotate-out',              description: 'Rotate out to hidden state',                 category: 'animation' },
  { name: 'animate-rotational-wave',         description: 'Rotational wave effect',                     category: 'animation' },
  { name: 'animate-impulse-rotation-left',   description: 'Quick rotation impulse to the left',         category: 'animation' },
  { name: 'animate-impulse-rotation-right',  description: 'Quick rotation impulse to the right',        category: 'animation' },
  { name: 'animate-spin-clockwise',          description: 'Continuous clockwise spin',                  category: 'animation' },
  { name: 'animate-spin-counter-clockwise',  description: 'Continuous counter-clockwise spin',          category: 'animation' },
  // ─── Attention seekers ─────────────────────────────────────────────────────
  { name: 'animate-bounce',                  description: 'Vertical bounce loop',                       category: 'animation' },
  { name: 'animate-bouncing',                description: 'Continuous bouncing effect',                 category: 'animation' },
  { name: 'animate-horizontal-bounce',       description: 'Horizontal bounce loop',                     category: 'animation' },
  { name: 'animate-pulsing',                 description: 'Gentle repeating pulse',                     category: 'animation' },
  { name: 'animate-pulse',                   description: 'Pulse opacity in and out',                   category: 'animation' },
  { name: 'animate-pulse-fade-in',           description: 'Fade in with a pulse effect',                category: 'animation' },
  { name: 'animate-blink',                   description: 'Blinking visibility',                        category: 'animation' },
  { name: 'animate-flash',                   description: 'Quick flash blink',                          category: 'animation' },
  { name: 'animate-heartbeat',               description: 'Heartbeat scaling pulse',                    category: 'animation' },
  { name: 'animate-shake',                   description: 'Horizontal shake',                           category: 'animation' },
  { name: 'animate-tada',                    description: 'Celebration tada effect',                    category: 'animation' },
  { name: 'animate-jelly',                   description: 'Jelly wobble effect',                        category: 'animation' },
  { name: 'animate-jiggle',                  description: 'Fast jiggle vibration',                      category: 'animation' },
  { name: 'animate-wobble',                  description: 'Gentle side-to-side wobble',                 category: 'animation' },
  { name: 'animate-swing',                   description: 'Pendulum-style swing',                       category: 'animation' },
  { name: 'animate-rubber-band',             description: 'Rubber band stretch effect',                 category: 'animation' },
  { name: 'animate-dancing',                 description: 'Playful dancing motion',                     category: 'animation' },
  { name: 'animate-sway',                    description: 'Gentle swaying motion',                      category: 'animation' },
  { name: 'animate-tilt',                    description: 'Tilting motion',                             category: 'animation' },
  { name: 'animate-skew',                    description: 'Skew distortion',                            category: 'animation' },
  { name: 'animate-skew-right',              description: 'Skew to the right',                          category: 'animation' },
  { name: 'animate-horizontal-vibration',    description: 'Rapid horizontal vibration',                 category: 'animation' },
  // ─── Float / Sink ──────────────────────────────────────────────────────────
  { name: 'animate-float',                   description: 'Gentle floating up and down',                category: 'animation' },
  { name: 'animate-sink',                    description: 'Gentle sinking motion',                      category: 'animation' },
  { name: 'animate-hang',                    description: 'Hanging from top anchor',                    category: 'animation' },
  { name: 'animate-jump',                    description: 'Jump upward',                                category: 'animation' },
  { name: 'animate-pop',                     description: 'Pop scale effect',                           category: 'animation' },
  { name: 'animate-squeeze',                 description: 'Squeeze compression effect',                 category: 'animation' },
  { name: 'animate-scale',                   description: 'Scale in and out',                           category: 'animation' },
  // ─── Roll ──────────────────────────────────────────────────────────────────
  { name: 'animate-roll-in',                 description: 'Roll in from the side',                      category: 'animation' },
  { name: 'animate-roll-out',                description: 'Roll out to the side',                       category: 'animation' },
  // ─── Expand / Contract ─────────────────────────────────────────────────────
  { name: 'animate-expand-horizontally',     description: 'Expand from center horizontally',            category: 'animation' },
  { name: 'animate-expand-vertically',       description: 'Expand from center vertically',              category: 'animation' },
  { name: 'animate-contract-horizontally',   description: 'Contract to center horizontally',            category: 'animation' },
  { name: 'animate-contract-vertically',     description: 'Contract to center vertically',              category: 'animation' },
  { name: 'animate-swing-drop-in',           description: 'Swing in dropping from above',               category: 'animation' },
  { name: 'animate-vertical-bounce',         description: 'Vertical bounce loop',                       category: 'animation' },

  // ─── Duration ──────────────────────────────────────────────────────────────
  { name: 'animate-duration-0',       description: 'Duration: 0ms',     category: 'duration' },
  { name: 'animate-duration-100',     description: 'Duration: 100ms',   category: 'duration' },
  { name: 'animate-duration-150',     description: 'Duration: 150ms',   category: 'duration' },
  { name: 'animate-duration-200',     description: 'Duration: 200ms',   category: 'duration' },
  { name: 'animate-duration-250',     description: 'Duration: 250ms',   category: 'duration' },
  { name: 'animate-duration-300',     description: 'Duration: 300ms',   category: 'duration' },
  { name: 'animate-duration-400',     description: 'Duration: 400ms',   category: 'duration' },
  { name: 'animate-duration-500',     description: 'Duration: 500ms',   category: 'duration' },
  { name: 'animate-duration-700',     description: 'Duration: 700ms',   category: 'duration' },
  { name: 'animate-duration-800',     description: 'Duration: 800ms',   category: 'duration' },
  { name: 'animate-duration-900',     description: 'Duration: 900ms',   category: 'duration' },
  { name: 'animate-duration-1000',    description: 'Duration: 1000ms',  category: 'duration' },
  { name: 'animate-duration-none',    description: 'Duration: none',    category: 'duration' },
  { name: 'animate-duration-slower',  description: 'Duration: slower (preset)',  category: 'duration' },
  { name: 'animate-duration-slow',    description: 'Duration: slow (preset)',    category: 'duration' },
  { name: 'animate-duration-normal',  description: 'Duration: normal (preset)',  category: 'duration' },
  { name: 'animate-duration-fast',    description: 'Duration: fast (preset)',    category: 'duration' },
  { name: 'animate-duration-faster',  description: 'Duration: faster (preset)', category: 'duration' },

  // ─── Delay ─────────────────────────────────────────────────────────────────
  { name: 'animate-delay-0',    description: 'Delay: 0ms',    category: 'delay' },
  { name: 'animate-delay-100',  description: 'Delay: 100ms',  category: 'delay' },
  { name: 'animate-delay-150',  description: 'Delay: 150ms',  category: 'delay' },
  { name: 'animate-delay-200',  description: 'Delay: 200ms',  category: 'delay' },
  { name: 'animate-delay-250',  description: 'Delay: 250ms',  category: 'delay' },
  { name: 'animate-delay-300',  description: 'Delay: 300ms',  category: 'delay' },
  { name: 'animate-delay-400',  description: 'Delay: 400ms',  category: 'delay' },
  { name: 'animate-delay-500',  description: 'Delay: 500ms',  category: 'delay' },
  { name: 'animate-delay-700',  description: 'Delay: 700ms',  category: 'delay' },
  { name: 'animate-delay-800',  description: 'Delay: 800ms',  category: 'delay' },
  { name: 'animate-delay-900',  description: 'Delay: 900ms',  category: 'delay' },
  { name: 'animate-delay-1000', description: 'Delay: 1000ms', category: 'delay' },
  { name: 'animate-delay-none', description: 'No delay',      category: 'delay' },

  // ─── Steps ─────────────────────────────────────────────────────────────────
  { name: 'animate-steps-none',   description: 'Smooth animation (no steps)',          category: 'steps' },
  { name: 'animate-steps-retro',  description: 'Retro stepped animation (choppy)',     category: 'steps' },
  { name: 'animate-steps-normal', description: 'Normal stepped animation',             category: 'steps' },
  { name: 'animate-steps-modern', description: 'Modern stepped animation',             category: 'steps' },

  // ─── Scroll timelines ──────────────────────────────────────────────────────
  { name: 'timeline-scroll',               description: 'Link animation to vertical scroll progress',          category: 'scroll-timeline' },
  { name: 'timeline-[scroll(x)]',          description: 'Link animation to horizontal scroll (x axis)',        category: 'scroll-timeline' },
  { name: 'timeline-[scroll(y)]',          description: 'Link animation to vertical scroll (y axis)',          category: 'scroll-timeline' },
  { name: 'timeline-[scroll(block)]',      description: 'Link animation to block-direction scroll',            category: 'scroll-timeline' },
  { name: 'timeline-[scroll(inline)]',     description: 'Link animation to inline-direction scroll',           category: 'scroll-timeline' },

  // ─── View timelines ────────────────────────────────────────────────────────
  { name: 'timeline-view',                 description: 'Link animation to element viewport visibility',       category: 'view-timeline' },
  { name: 'timeline-[view(x)]',            description: 'View timeline on the x axis',                        category: 'view-timeline' },
  { name: 'timeline-[view(y)]',            description: 'View timeline on the y axis',                        category: 'view-timeline' },
  { name: 'timeline-[view(block)]',        description: 'View timeline on the block axis',                     category: 'view-timeline' },
  { name: 'view-animate-single',           description: 'Named view timeline (single)',                        category: 'view-timeline' },

  // ─── Animate range ─────────────────────────────────────────────────────────
  { name: 'animate-range-cover',           description: 'Animation range: cover (full visibility)',            category: 'animate-range' },
  { name: 'animate-range-contain',         description: 'Animation range: contain (fully contained)',          category: 'animate-range' },
  { name: 'animate-range-entry',           description: 'Animation range: entry (entering viewport)',          category: 'animate-range' },
  { name: 'animate-range-exit',            description: 'Animation range: exit (leaving viewport)',            category: 'animate-range' },
  { name: 'animate-range-gradual',         description: 'Preset range: gradual (10% – 90%)',                   category: 'animate-range' },
  { name: 'animate-range-moderate',        description: 'Preset range: moderate (20% – 80%)',                  category: 'animate-range' },
  { name: 'animate-range-brisk',           description: 'Preset range: brisk (30% – 70%)',                     category: 'animate-range' },
  { name: 'animate-range-rapid',           description: 'Preset range: rapid (40% – 60%)',                     category: 'animate-range' },
];