import {
  User,
  Building2,
  Compass,
  BookOpenText,
  ShieldCheck,
  Layers,
  type LucideIcon,
} from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  "individual-tax-returns": User,
  "business-tax-bas": Building2,
  "tax-planning": Compass,
  "bookkeeping-payroll": BookOpenText,
  "ato-correspondence": ShieldCheck,
  "business-structuring": Layers,
};
