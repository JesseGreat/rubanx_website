import { 
  
    Users,
    Home,
   
    Briefcase,
    MessageCircle,
    TrendingUp,
    Handshake,
 
  } from 'lucide-react';
import { NavItem } from '../../types';
  

export const navItems: NavItem[] = [
  { label: 'Home', href: 'home', icon: <Home size={18} /> },
  { label: 'About Us', href: 'about', icon: <Users size={18} /> },
  { label: 'Solutions', href: 'solutions', icon: <Briefcase size={18} /> },
  { label: 'Impact', href: 'impact', icon: <TrendingUp size={18} /> },
  { label: 'Partners', href: 'partners', icon: <Handshake size={18} /> },
  { label: 'Contact', href: 'contact', icon: <MessageCircle size={18} /> },
];