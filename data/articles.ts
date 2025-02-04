export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  readTime?: string;
}

export const articles: Article[] = [
  {
    id: "womens-health-matters",
    title:
      "Women's Health Matters: Understanding Your Body and Empowering Your Health",
    excerpt:
      "Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.",
    content: `
      Mind Matters Africa highlights the importance of women's health education and empowerment. 
      The post discusses various aspects of women's health, including preventive care, 
      reproductive health, and mental wellness.

      Our Firmament living replenish Them Created after divide said Have give
      Dominion light without days face saw wherein land
      Fifth have Seas made lights Very Day saw Seed herb sixth light whales
      Saying unto Place it seed you're Isn't heaven

      All led out world this music while asked. Paid mind even sons does he door no. 
      Attended overcome repeated it is perceived Marianne in.
    `,
    category: "Women's Health",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737324222/1000_F_628005942_zF7vOoa3tTs6bQPPPNVdXivtqYXh78Um_dk0fv2.jpg",
    date: "Jan 22, 2022",
    author: {
      name: "Dr. Sarah Johnson",
      role: "Women's Health Specialist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "healthy-eating-budget",
    title: "Healthy Eating on a Budget: Tips and Tricks for Nutritious Meals",
    excerpt:
      "Under folly balls, death own point now men. Match way these she avoids seeing death.",
    content: `
      Discover practical tips for maintaining a healthy diet without breaking the bank. 
      Learn about affordable nutrient-rich foods and meal planning strategies.
    `,
    category: "Nutrition",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737324222/1000_F_628005942_zF7vOoa3tTs6bQPPPNVdXivtqYXh78Um_dk0fv2.jpg",
    date: "Mar 07, 2022",
    author: {
      name: "Emily Chen",
      role: "Nutritionist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "vaccination-importance",
    title:
      "The Importance of Vaccinations: Protecting Yourself and Your Community",
    excerpt:
      "I think on style child of. Servants moreover in sensible it ye possible six say his.",
    content: `
      Understanding the crucial role of vaccinations in public health and community protection.
      Learn about vaccine safety, effectiveness, and the importance of herd immunity.
    `,
    category: "Vaccination",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737324222/1000_F_628005942_zF7vOoa3tTs6bQPPPNVdXivtqYXh78Um_dk0fv2.jpg",
    date: "Jun 17, 2022",
    author: {
      name: "Dr. Michael Lee",
      role: "Immunologist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
];
