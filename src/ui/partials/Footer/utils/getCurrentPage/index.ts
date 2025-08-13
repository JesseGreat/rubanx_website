import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface GetCurrentPageProps {
  pathname: string;
}

export const getCurrentPage = ({ pathname }: GetCurrentPageProps): string => {
  if (pathname === '/') return 'home';
  return pathname.slice(1);
};

export const handleNavigation = (
  href: string, 
  router: AppRouterInstance, 
  pathname: string
): void => {
  const currentPage = getCurrentPage({ pathname });
  
  if (currentPage === href) {
    // Scroll to top if same page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    // Navigate to different page
    if (href === 'home') {
      router.push('/');
    } else {
      router.push(`/${href}`);
    }
  }
};