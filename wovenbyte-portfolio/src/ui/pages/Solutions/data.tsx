import { Monitor, Search, Smartphone } from "lucide-react";

export const solutions = [
    {
      id: 'magic-ride',
      title: 'Magic Ride',
      description: 'Revolutionizing Urban Commute with Efficiency and Ease',
      icon: <Smartphone className="text-orange-500" size={48} />,
      buttonText: 'Coming Soon',
      status: 'Upcoming',
      problem: 'In many African cities, daily commuting—especially during rush hours—has become a frustrating challenge. Workers, students, and traders spend long hours waiting, pushing through crowds, and even engaging in arguments just to find a ride. Existing ride-hailing platforms are often too expensive for the average commuter, while public transport remains overstretched, unpredictable, and inefficient.',
      solution: 'Magic Ride is a smart, people-first transportation platform designed to simplify urban mobility. We enable commuters to book scheduled shared rides in advance with drivers already heading their way. Whether it’s the early morning rush or the stressful evening return, Magic Ride eliminates uncertainty, overcrowding, and cost burden—turning daily travel into a seamless, dependable experience.',
      features: [
       
        'Book your ride hours before peak time and avoid the rush entirely.',
       
        'Ride with people going the same route—more connection, less chaos.',
        'Chat with your assigned driver and co-riders for easy coordination.',
        'Split fares fairly in a way that works for both riders and drivers.',
        'Know when your ride arrives and how close you are to your destination.'

      ]
    },
    {
      id: 'housing-tools',
      title: 'Affordable Housing Tool',
      description: 'Connecting Urban Dwellers with Suitable and Sustainable Living Spaces',
      icon: <Search className="text-orange-500" size={48} />,
      buttonText: 'Coming Soon',
      status: 'Upcoming',
      problem: 'In rapidly growing cities, finding decent, affordable housing near the city center is a tough challenge for most people. Urban dwellers—especially young professionals, civil servants, and students—are often pushed to the outskirts, enduring long commutes, inflated agent fees, and unreliable housing information. The lack of transparency and trusted access creates unnecessary stress and limits opportunity.',
      solution: 'The Affordable Housing Tool is a digital platform that makes it easy to discover verified and budget-friendly housing options close to work or city centers. Users can filter by budget, location, and commute time, explore listings virtually, and even connect directly with landlords—eliminating the need for middlemen and reducing the risk of fraud or inflated fees.',
      features: [
        'Find homes that match your budget, preferred area, and travel time to work',
        'Tour properties digitally and schedule appointments from the app.',
        'Check honest reviews and ratings from other users before making a move.',
        'Get matched with like-minded individuals to split rent and share housing near urban centers—ideal for students, NYSC corps members, and young workers with limited funds.'
      ]
    },
    {
      id: 'urban-platform',
      title: 'Urban Resource Platform',
      description: 'Your Gateway to Essential City Services—Made Simple',
      icon: <Monitor className="text-orange-500" size={48} />,
      buttonText: 'Coming Soon',
      status: 'Upcoming',
      problem: 'In many African cities, accessing basic public services like healthcare, education, and utilities can be stressful and inefficient. Residents often deal with long queues, multiple physical visits, poor communication, and fragmented service systems that waste time and cause frustration.',
      solution: 'The Urban Resource Platform is an all-in-one digital hub that streamlines how residents connect with essential services. From booking hospital appointments to accessing educational resources or paying utility bills, the platform brings everything under one roof—reducing time, improving service delivery, and enhancing city life for everyone.',
      features: [
        'One platform to reach healthcare, education, water, electricity, and more.',
        'Know what’s available and when—no more wasted trips or guesswork.',
        'Pay for utilities and services safely and quickly from your phone.',
        'Get tailored suggestions for schools, clinics, or community centers based on your location and needs.'
      ]
    }
  ];