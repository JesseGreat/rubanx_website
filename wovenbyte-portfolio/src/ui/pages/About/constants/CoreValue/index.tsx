import { 
  
    Users,
    
    Shield,
    Lightbulb,
    Heart,
    Target,
    Building,
    MapPin,
 
  } from 'lucide-react';
import { CoreValue } from '../../types';
  

export const coreValues: CoreValue[] = [
  {
    title: 'Innovation',
    description: 'We are committed to thinking ahead of the curve, constantly exploring new technologies and approaches to solve urban challenges. Our solutions are designed to be forward-thinking and adaptable.',
    icon: <Lightbulb className="text-orange-500" size={32} />
  },
  {
    title: 'Empathy',
    description: 'We design our tools with a deep understanding and compassion for our users. Our focus is on creating solutions that genuinely meet the needs and improve the daily lives of urban residents.',
    icon: <Heart className="text-orange-500" size={32} />
  },
  {
    title: 'Collaboration',
    description: 'We believe in building with people, not just for them. Our success is rooted in strong partnerships with communities, local governments, and organizations to co-create sustainable solutions.',
    icon: <Users className="text-orange-500" size={32} />
  },
  {
    title: 'Impact',
    description: 'Our ultimate measure of success is the tangible, positive change we bring to African cities. We are dedicated to delivering measurable results that improve urban mobility, housing, and access to services.',
    icon: <Target className="text-orange-500" size={32} />
  },
  {
    title: 'Integrity',
    description: 'We uphold the highest standards of trust and transparency in everything we do. Our operations are guided by ethical practices and a commitment to fairness and accountability.',
    icon: <Shield className="text-orange-500" size={32} />
  }
];   




// Additional data for the enhanced about page
export const milestones = [
  {
    year: "2023",
    title: "Company Founded",
    description: "WovenByte was established with a vision to transform African cities through technology"
  },
  {
    year: "2024",
    title: "First Solution Launch",
    description: "Launched our first urban mobility platform serving Lagos metropolitan area"
  },
  {
    year: "2025",
    title: "Expansion Phase",
    description: "Expanding our solutions to multiple Nigerian cities and exploring new markets"
  }
];



export const team = [
  {
    name: "Founder & CEO",
    role: "Visionary Leader",
    description: "Leading the charge in urban innovation across Africa",
    icon: Target
  },
  {
    name: "Engineering Team",
    role: "Tech Innovators",
    description: "Building scalable solutions for complex urban challenges",
    icon: Building
  },
  {
    name: "Urban Planners",
    role: "City Experts",
    description: "Understanding and solving real-world urban problems",
    icon: MapPin
  }
];