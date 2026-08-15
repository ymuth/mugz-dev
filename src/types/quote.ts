export type QuoteForm = {
  name: string;
  business?: string;
  email: string;
  phone?: string;
  service: "essentials" | "custom" | "not-sure";
  needs: string[];
  website?: string;
  message: string;
  budget?: string;
};