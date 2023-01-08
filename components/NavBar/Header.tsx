import { MobileNavigation, ModeToggle } from '.';
import { AvatarContainer, AvatarLink } from '../Avatar';
import { Container } from '../Container';
import { DesktopNavigation } from './DeskTopNavigation';

export function Header() {
  // UseEffect(() => {
  //   const downDelay = avatarReference.current?.offsetTop ?? 0;
  //   const upDelay = 64;

  //   function updateHeaderStyles() {
  //     const { top, height } = headerReference.current!.getBoundingClientRect();
  //     const scrollY = clamp(
  //       window.scrollY,
  //       0,
  //       document.body.scrollHeight - window.innerHeight,
  //     );

  //     setProperty('--content-offset', `${downDelay}px`);

  //     if (isInitial.current) {
  //       setProperty('--header-position', 'sticky');
  //     }

  //     setProperty('--content-offset', `${downDelay}px`);

  //     if (isInitial.current || scrollY < downDelay) {
  //       setProperty('--header-height', `${downDelay + height}px`);
  //       setProperty('--header-mb', `${-downDelay}px`);
  //     } else if (top + height < -upDelay) {
  //       const offset = Math.max(height, scrollY - upDelay);
  //       setProperty('--header-height', `${offset}px`);

  //       setProperty('--header-mb', `${height - offset}px`);
  //     } else if (top === 0) {
  //       setProperty('--header-height', `${scrollY + height}px`);
  //       setProperty('--header-mb', `${-scrollY}px`);
  //     }

  //     if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
  //       setProperty('--header-inner-position', 'fixed');
  //       removeProperty('--header-top');
  //       removeProperty('--avatar-top');
  //     } else {
  //       removeProperty('--header-inner-position');
  //       setProperty('--header-top', '0px');
  //       setProperty('--avatar-top', '0px');
  //     }
  //   }

  //   function updateAvatarStyles() {
  //     if (!isHomePage) {
  //       return;
  //     }

  //     const fromScale = 1;
  //     const toScale = 36 / 64;
  //     const fromX = 0;
  //     const toX = 2 / 16;

  //     const scrollY = downDelay - window.scrollY;

  //     const scale = (scrollY * (fromScale - toScale)) / downDelay + toScale;
  //     const clampScale = clamp(scale, fromScale, toScale);

  //     const caclX = (scrollY * (fromX - toX)) / downDelay + toX;
  //     const clampX = clamp(caclX, fromX, toX);

  //     setProperty(
  //       '--avatar-image-transform',
  //       `translate3d(${clampX}rem, 0, 0) scale(${clampScale})`,
  //     );

  //     const borderScale = 1 / (toScale / clampScale);
  //     const borderX = (-toX + clampX) * borderScale;
  //     const borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`;

  //     setProperty('--avatar-border-transform', borderTransform);
  //     setProperty(
  //       '--avatar-border-opacity',
  //       (scale === toScale ? 1 : 0).toString(),
  //     );
  //   }

  //   function updateStyles() {
  //     updateHeaderStyles();
  //     updateAvatarStyles();
  //     isInitial.current = false

  //   }

  //   updateStyles();
  //   window.addEventListener('scroll', updateStyles, { passive: true });
  //   window.addEventListener('resize', updateStyles);

  //   return () => {
  //     window.removeEventListener('scroll', updateStyles);
  //     window.removeEventListener('resize', updateStyles);
  //   };
  // }, [isHomePage]);

  return (
    <header className="pointer-events-none relative z-50 flex flex-col">
      <div className="order-last mt-16" />
      <div className="flex justify-center">
        <div className="pointer-events-auto fixed top-0 z-10 h-16 w-full pt-6">
          <Container className="top-[var(--header-top,theme(spacing.6))] w-full">
            <div className="relative flex gap-4">
              <div className="flex flex-1">
                <AvatarContainer>
                  <AvatarLink />
                </AvatarContainer>
              </div>
              <div className="flex flex-1 justify-end md:justify-center">
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
                <MobileNavigation className="pointer-events-auto   md:hidden" />
              </div>
              <div className="flex justify-end md:flex-1">
                <div className="pointer-events-auto" />
                <ModeToggle />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}
