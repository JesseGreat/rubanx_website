export const contactPage = {
  heading: "Start a project",
  lede: "Tell us what you need built. We reply within one working day and tell you plainly whether we are the right team for it.",
  form: {
    heading: "Send us a message",
    submitLabel: "Send message",
    sendingLabel: "Sending",
    successHeading: "Message sent",
    successBody:
      "Thank you. We have your message and will reply within one working day.",
    errorHeading: "Message not sent",
    errorBody:
      "Something went wrong at our end. Please try again, or reach us on WhatsApp.",
  },
  booking: {
    heading: "Rather talk it through?",
    body: "Book a thirty minute call at a time that suits you.",
    label: "Book a call",
    // TODO: client to supply the Cal.com or Calendly URL.
    // Set NEXT_PUBLIC_BOOKING_URL in the environment to enable this block.
    pending: "Use the form or message us on WhatsApp and we will set a time with you.",
  },
  details: {
    heading: "Company details",
  },
};

export const projectTypes = [
  "Custom web application",
  "Mobile app",
  "Business website or e-commerce",
  "Product and UI/UX design",
  "Systems integration or APIs",
  "Support, hosting and maintenance",
  "Not sure yet",
] as const;

export const budgetRanges = [
  "Under ₦2m",
  "₦2m to ₦5m",
  "₦5m to ₦15m",
  "₦15m to ₦40m",
  "Over ₦40m",
  "Not sure yet",
] as const;

export const formLabels = {
  name: "Your name",
  company: "Company",
  email: "Email address",
  phone: "Phone number",
  projectType: "What do you need built?",
  budget: "Budget range",
  message: "Tell us about the project",
  optional: "optional",
  choose: "Choose one",
};
