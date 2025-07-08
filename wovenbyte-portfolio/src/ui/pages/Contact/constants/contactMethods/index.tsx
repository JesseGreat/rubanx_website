import { Calendar, Mail, MessageCircle, Phone } from "lucide-react";

export const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "hello@wovenbyte.com",
      secondary: "General inquiries & partnerships",
      action: "mailto:hello@wovenbyte.com",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+234 800 123 4567",
      secondary: "Business hours: 9AM - 6PM WAT",
      action: "tel:+2348001234567",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      primary: "+234 800 123 4567",
      secondary: "Quick responses for urgent inquiries",
      action: "https://wa.me/2348001234567",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      primary: "Book a consultation",
      secondary: "30-min strategy session available",
      action: "#",
      color: "bg-orange-100 text-orange-600"
    }
  ];