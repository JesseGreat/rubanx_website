import { 
 
    Smartphone,
    Search,
    Monitor
  } from 'lucide-react';
import { Service } from '../../types';

export const services: Service[] = [
    {
      id: 'magic-ride',
      title: 'Magic Ride',
      description: 'Book scheduled rides with others going the same route, reducing delays and stress for urban commuters.',
      icon: <Smartphone className="text-orange-500" size={32} />,
      image: '/api/placeholder/400/300',
      buttonText: 'Discover Magic Ride'
    },
    {
      id: 'housing-tools',
      title: 'Affordable Housing Tools',
      description: 'Helping users find affordable housing options closer to the city with smart filtering and comprehensive listings.',
      icon: <Search className="text-orange-500" size={32} />,
      image: '/api/placeholder/400/300',
      buttonText: 'Explore Housing'
    },
    {
      id: 'urban-platform',
      title: 'Urban Resource Platform',
      description: 'A digital hub for accessing essential city services easily, from health information to educational resources.',
      icon: <Monitor className="text-orange-500" size={32} />,
      image: '/api/placeholder/400/300',
      buttonText: 'Access Services'
    }
  ];