export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export const authors: Author[] = [
  {
    id: "andrew-osei",
    name: "Andrew Osei",
    role: "Massage Therapist",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "lori-attah",
    name: "Lori Attah Mensah",
    role: "Pharmacist at Inter Pharmatica",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "carolyn-quaye",
    name: "Carolyn Quaye",
    role: "Nurse",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];
