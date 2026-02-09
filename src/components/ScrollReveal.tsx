import { type ReactNode, type CSSProperties } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';

type AnimationType = 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale-in' | 'zoom-in';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

const animations: Record<AnimationType, { from: CSSProperties; to: CSSProperties }> = {
  'fade-up': {
    from: { opacity: 0, transform: 'translateY(40px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
  'fade-in': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  'fade-left': {
    from: { opacity: 0, transform: 'translateX(-40px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  },
  'fade-right': {
    from: { opacity: 0, transform: 'translateX(40px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  },
  'scale-in': {
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: 1, transform: 'scale(1)' },
  },
  'zoom-in': {
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
  },
};

const ScrollReveal = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  className,
  threshold = 0.15,
  as: Tag = 'div',
}: ScrollRevealProps) => {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({ threshold });
  const anim = animations[animation];

  const style: CSSProperties = {
    ...(isVisible ? anim.to : anim.from),
    transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
    willChange: 'opacity, transform',
  };

  return (
    <div ref={ref} style={style} className={cn(className)}>
      {children}
    </div>
  );
};

export default ScrollReveal;
