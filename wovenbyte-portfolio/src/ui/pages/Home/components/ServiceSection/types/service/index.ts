import { ReactNode } from "react";

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: ReactNode;
    image: string;
    buttonText: string;
  }