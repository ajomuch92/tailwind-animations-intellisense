export interface AnimationClass {
  name: string;
  description: string;
  category: 'animation' | 'duration' | 'delay' | 'steps' | 'view';
}

export const animations: AnimationClass[] = [
  { name: 'animate-fade-in', description: 'Fades in gradually', category: 'animation' },
  { name: 'animate-fade-out', description: 'Fades out gradually', category: 'animation' },
  { name: 'animate-slide-in-top', description: 'Slides in from top', category: 'animation' },
  { name: 'animate-slide-in-bottom',description: 'Slides in from bottom', category: 'animation' },
  { name: 'animate-slide-in-left', description: 'Slides in from left', category: 'animation' },
  { name: 'animate-slide-in-right', description: 'Slides in from right', category: 'animation' },
  { name: 'animate-zoom-in', description: 'Appears with zoom', category: 'animation' },
  { name: 'animate-zoom-out', description: 'Disappears with zoom', category: 'animation' },
  { name: 'animate-bounce', description: 'Continuous bounce effect', category: 'animation' },
  { name: 'animate-shake', description: 'Horizontal shake', category: 'animation' },
  { name: 'animate-tada', description: 'Celebration animation', category: 'animation' },
  { name: 'animate-wobble', description: 'Soft oscillation', category: 'animation' },
  { name: 'animate-swing', description: 'Pendulum-like swing', category: 'animation' },
  { name: 'animate-jiggle', description: 'Fast vibration', category: 'animation' },
  { name: 'animate-rubber-band', description: 'Elastic band effect', category: 'animation' },
  { name: 'animate-flash', description: 'Flashing', category: 'animation' },
  { name: 'animate-float', description: 'Soft floating', category: 'animation' },
  { name: 'animate-sink', description: 'Sinking', category: 'animation' },
  { name: 'animate-roll-in', description: 'Rolls in', category: 'animation' },
  { name: 'animate-roll-out', description: 'Rolls out', category: 'animation' },
  { name: 'animate-blurred-fade-in',description: 'Fade in with blur', category: 'animation' },
  { name: 'animate-pulsing', description: 'Soft repetitive pulse', category: 'animation' },
  { name: 'animate-jump', description: 'Jump', category: 'animation' },
  { name: 'animate-hang', description: 'Hangs from top', category: 'animation' },
  // Durations
  { name: 'animate-duration-slow', description: 'Slow duration', category: 'duration' },
  { name: 'animate-duration-normal', description: 'Normal duration', category: 'duration' },
  { name: 'animate-duration-fast', description: 'Fast duration', category: 'duration' },
  { name: 'animate-duration-faster', description: 'Very fast duration', category: 'duration' },
  { name: 'animate-duration-slower', description: 'Very slow duration', category: 'duration' },
  // Delays
  { name: 'animate-delay-100', description: '100ms delay', category: 'delay' },
  { name: 'animate-delay-300', description: '300ms delay', category: 'delay' },
  { name: 'animate-delay-500', description: '500ms delay', category: 'delay' },
  { name: 'animate-delay-700', description: '700ms delay', category: 'delay' },
  { name: 'animate-delay-1000', description: '1000ms delay', category: 'delay' },
];