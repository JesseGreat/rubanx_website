// import { Smartphone, Search, Monitor } from "lucide-react";
import { Service } from "../../types";

export const services: Service[] = [
  {
    id: "magic-ride",
    title: "Magic Ride",
    description:
      "Book scheduled rides with others going the same route, reducing delays and stress for urban commuters.",
    // icon: <Smartphone className="text-orange-500" size={32} />,
    image:
      "https://cdn.pixabay.com/photo/2019/07/28/12/33/auto-4368663_1280.jpg",
    buttonText: "Discover Magic Ride",
  },
  {
    id: "housing-tools",
    title: "Affordable Housing Tools",
    description:
      "Connecting house seekers directly to the landlord breaking the agent trauma problem",
    // icon: <Search className="text-orange-500" size={32} />,
    image:
      "https://cdn.pixabay.com/photo/2023/11/06/02/21/kitchen-8368672_1280.jpg",
    buttonText: "Explore Housing",
  },
  {
    id: "urban-platform",
    title: "Urban Resource Platform",
    description:
      "A digital hub for accessing essential city services easily, from health information to educational resources.",
    // icon: <Monitor className="text-orange-500" size={32} />,
    image:
      "https://cdn.pixabay.com/photo/2024/07/14/13/46/ai-generated-8894582_960_720.jpg",
    buttonText: "Access Services",
  },
];
