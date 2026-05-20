export interface Award {
  id: number;
  title: string;
  year: string;
  category: string;
  description: string;
  awardedBy: string;
  image: string;
}

export const awards: Award[] = [
  {
    id: 1,
    title: "People's Choice Award – Pehraav",
    year: "22/23",
    category: "International Service",
    description: "Pehraav received the People's Choice Award for its innovative execution, international collaborations, and strong community engagement through service activities.",
    awardedBy: "RSAMDIO",
    image: "/images/awards/award1.jpg",
  },
  {
    id: 2,
    title: "Most Twin Club Agreements",
    year: "2025",
    category: "International Service",
    description: "Recognized for establishing the highest number of Twin Club Agreements in RID 3131, strengthening international collaborations and fostering meaningful global partnerships through Rotaract.",
    awardedBy: "RID 3131",
    image: "/images/awards/award2.jpg",
  },
  {
    id: 3,
    title: "Most Sister Club Agreements",
    year: "2025",
    category: "International Service",
    description: "Awarded for achieving the highest number of Sister Club Agreements in RID 3131, promoting cultural exchange, fellowship, and long-term international connections between Rotaract clubs.",
    awardedBy: "RID 3131",
    image: "/images/awards/award3.jpg",
  },
  {
    id: 4,
    title: "Best International Service Event – Pehraav 2.0",
    year: "2025",
    category: "International Service",
    description: "Pehraav 2.0 was recognized as the Best International Service Event in RID 3131 for its exceptional international collaborations, impactful service initiatives, and successful engagement with multiple national and international Rotaract districts.",
    awardedBy: "RID 3131",
    image: "/images/awards/award4.jpg",
  },
];
