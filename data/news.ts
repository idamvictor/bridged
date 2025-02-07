export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  subcategory: "Top Stories" | "Local News" | "Latest News";
  image: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  readTime?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "womens-health-matters",
    title:
      "Women's Health Matters: Understanding Your Body and Empowering Your Health",
    excerpt:
      "Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.",
    content: `Mind Matters Africa highlights the importance of women's health education and empowerment. 
      The post discusses various aspects of women's health, including preventive care, 
      reproductive health, and mental wellness.`,
    category: "Health",
    subcategory: "Top Stories",
    image: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737324222/1000_F_628005942_zF7vOoa3tTs6bQPPPNVdXivtqYXh78Um_dk0fv2.jpg",
    date: "Jan 22, 2022",
    author: {
      name: "Dr. Sarah Johnson",
      role: "Women's Health Specialist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "local-festival-announcement",
    title: "Annual Cultural Festival Returns to Downtown",
    excerpt:
      "The city's beloved annual cultural festival is set to return next month, promising a vibrant celebration of local arts and cuisine.",
    content: `The downtown area is gearing up for a weekend of festivities as the Annual Cultural Festival makes its much-anticipated return. 
      This year's event promises to be bigger and better, featuring local artists, musicians, and food vendors from across the region.`,
    category: "Events",
    subcategory: "Local News",
    image: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737324222/1000_F_628005942_zF7vOoa3tTs6bQPPPNVdXivtqYXh78Um_dk0fv2.jpg",
    date: "Feb 15, 2022",
    author: {
      name: "Emma Rodriguez",
      role: "Local Events Correspondent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "tech-breakthrough",
    title: "Revolutionary AI Technology Unveiled by Tech Giant",
    excerpt:
      "A leading tech company has announced a breakthrough in AI technology, promising to transform various industries.",
    content: `In a press conference yesterday, the CEO of TechCorp unveiled their latest AI innovation, 
      which they claim will revolutionize everything from healthcare to transportation. 
      The new technology, dubbed 'AI-X', is said to be capable of processing and analyzing data at unprecedented speeds.`,
    category: "Technology",
    subcategory: "Latest News",
    image: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737324222/1000_F_628005942_zF7vOoa3tTs6bQPPPNVdXivtqYXh78Um_dk0fv2.jpg",
    date: "Mar 3, 2022",
    author: {
      name: "Alex Chen",
      role: "Tech Correspondent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "womens-health-matters-1",
    title:
      "Women's Health Matters: Understanding Your Body and Empowering Your Health",
    excerpt:
      "Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.",
    content: `Mind Matters Africa highlights the importance of women's health education and empowerment. 
      The post discusses various aspects of women's health, including preventive care, 
      reproductive health, and mental wellness.`,
    category: "Health",
    subcategory: "Top Stories",
    image: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737324222/1000_F_628005942_zF7vOoa3tTs6bQPPPNVdXivtqYXh78Um_dk0fv2.jpg",
    date: "Jan 22, 2022",
    author: {
      name: "Dr. Sarah Johnson",
      role: "Women's Health Specialist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "local-festival-announcement-1",
    title: "Annual Cultural Festival Returns to Downtown",
    excerpt:
      "The city's beloved annual cultural festival is set to return next month, promising a vibrant celebration of local arts and cuisine.",
    content: `The downtown area is gearing up for a weekend of festivities as the Annual Cultural Festival makes its much-anticipated return. 
      This year's event promises to be bigger and better, featuring local artists, musicians, and food vendors from across the region.`,
    category: "Events",
    subcategory: "Local News",
    image: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737324222/1000_F_628005942_zF7vOoa3tTs6bQPPPNVdXivtqYXh78Um_dk0fv2.jpg",
    date: "Feb 15, 2022",
    author: {
      name: "Emma Rodriguez",
      role: "Local Events Correspondent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "tech-breakthrough-1",
    title: "Revolutionary AI Technology Unveiled by Tech Giant",
    excerpt:
      "A leading tech company has announced a breakthrough in AI technology, promising to transform various industries.",
    content: `In a press conference yesterday, the CEO of TechCorp unveiled their latest AI innovation, 
      which they claim will revolutionize everything from healthcare to transportation. 
      The new technology, dubbed 'AI-X', is said to be capable of processing and analyzing data at unprecedented speeds.`,
    category: "Technology",
    subcategory: "Latest News",
    image: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737324222/1000_F_628005942_zF7vOoa3tTs6bQPPPNVdXivtqYXh78Um_dk0fv2.jpg",
    date: "Mar 3, 2022",
    author: {
      name: "Alex Chen",
      role: "Tech Correspondent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "womens-health-matters-2",
    title:
      "Women's Health Matters: Understanding Your Body and Empowering Your Health",
    excerpt:
      "Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.",
    content: `Mind Matters Africa highlights the importance of women's health education and empowerment. 
      The post discusses various aspects of women's health, including preventive care, 
      reproductive health, and mental wellness.`,
    category: "Health",
    subcategory: "Top Stories",
    image: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737324222/1000_F_628005942_zF7vOoa3tTs6bQPPPNVdXivtqYXh78Um_dk0fv2.jpg",
    date: "Jan 22, 2022",
    author: {
      name: "Dr. Sarah Johnson",
      role: "Women's Health Specialist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "local-festival-announcement-2",
    title: "Annual Cultural Festival Returns to Downtown",
    excerpt:
      "The city's beloved annual cultural festival is set to return next month, promising a vibrant celebration of local arts and cuisine.",
    content: `The downtown area is gearing up for a weekend of festivities as the Annual Cultural Festival makes its much-anticipated return. 
      This year's event promises to be bigger and better, featuring local artists, musicians, and food vendors from across the region.`,
    category: "Events",
    subcategory: "Local News",
    image: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737324222/1000_F_628005942_zF7vOoa3tTs6bQPPPNVdXivtqYXh78Um_dk0fv2.jpg",
    date: "Feb 15, 2022",
    author: {
      name: "Emma Rodriguez",
      role: "Local Events Correspondent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "tech-breakthrough-2",
    title: "Revolutionary AI Technology Unveiled by Tech Giant",
    excerpt:
      "A leading tech company has announced a breakthrough in AI technology, promising to transform various industries.",
    content: `In a press conference yesterday, the CEO of TechCorp unveiled their latest AI innovation, 
      which they claim will revolutionize everything from healthcare to transportation. 
      The new technology, dubbed 'AI-X', is said to be capable of processing and analyzing data at unprecedented speeds.`,
    category: "Technology",
    subcategory: "Latest News",
    image: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737324222/1000_F_628005942_zF7vOoa3tTs6bQPPPNVdXivtqYXh78Um_dk0fv2.jpg",
    date: "Mar 3, 2022",
    author: {
      name: "Alex Chen",
      role: "Tech Correspondent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "womens-health-matters-3",
    title:
      "Women's Health Matters: Understanding Your Body and Empowering Your Health",
    excerpt:
      "Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.",
    content: `Mind Matters Africa highlights the importance of women's health education and empowerment. 
      The post discusses various aspects of women's health, including preventive care, 
      reproductive health, and mental wellness.`,
    category: "Health",
    subcategory: "Top Stories",
    image: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737324222/1000_F_628005942_zF7vOoa3tTs6bQPPPNVdXivtqYXh78Um_dk0fv2.jpg",
    date: "Jan 22, 2022",
    author: {
      name: "Dr. Sarah Johnson",
      role: "Women's Health Specialist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "local-festival-announcement-3",
    title: "Annual Cultural Festival Returns to Downtown",
    excerpt:
      "The city's beloved annual cultural festival is set to return next month, promising a vibrant celebration of local arts and cuisine.",
    content: `The downtown area is gearing up for a weekend of festivities as the Annual Cultural Festival makes its much-anticipated return. 
      This year's event promises to be bigger and better, featuring local artists, musicians, and food vendors from across the region.`,
    category: "Events",
    subcategory: "Local News",
    image: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737324222/1000_F_628005942_zF7vOoa3tTs6bQPPPNVdXivtqYXh78Um_dk0fv2.jpg",
    date: "Feb 15, 2022",
    author: {
      name: "Emma Rodriguez",
      role: "Local Events Correspondent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "tech-breakthrough-3",
    title: "Revolutionary AI Technology Unveiled by Tech Giant",
    excerpt:
      "A leading tech company has announced a breakthrough in AI technology, promising to transform various industries.",
    content: `In a press conference yesterday, the CEO of TechCorp unveiled their latest AI innovation, 
      which they claim will revolutionize everything from healthcare to transportation. 
      The new technology, dubbed 'AI-X', is said to be capable of processing and analyzing data at unprecedented speeds.`,
    category: "Technology",
    subcategory: "Latest News",
    image: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737324222/1000_F_628005942_zF7vOoa3tTs6bQPPPNVdXivtqYXh78Um_dk0fv2.jpg",
    date: "Mar 3, 2022",
    author: {
      name: "Alex Chen",
      role: "Tech Correspondent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "womens-health-matters-4",
    title:
      "Women's Health Matters: Understanding Your Body and Empowering Your Health",
    excerpt:
      "Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.",
    content: `Mind Matters Africa highlights the importance of women's health education and empowerment. 
      The post discusses various aspects of women's health, including preventive care, 
      reproductive health, and mental wellness.`,
    category: "Health",
    subcategory: "Top Stories",
    image: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737324222/1000_F_628005942_zF7vOoa3tTs6bQPPPNVdXivtqYXh78Um_dk0fv2.jpg",
    date: "Jan 22, 2022",
    author: {
      name: "Dr. Sarah Johnson",
      role: "Women's Health Specialist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "local-festival-announcement-4",
    title: "Annual Cultural Festival Returns to Downtown",
    excerpt:
      "The city's beloved annual cultural festival is set to return next month, promising a vibrant celebration of local arts and cuisine.",
    content: `The downtown area is gearing up for a weekend of festivities as the Annual Cultural Festival makes its much-anticipated return. 
      This year's event promises to be bigger and better, featuring local artists, musicians, and food vendors from across the region.`,
    category: "Events",
    subcategory: "Local News",
    image: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737324222/1000_F_628005942_zF7vOoa3tTs6bQPPPNVdXivtqYXh78Um_dk0fv2.jpg",
    date: "Feb 15, 2022",
    author: {
      name: "Emma Rodriguez",
      role: "Local Events Correspondent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "tech-breakthrough-4",
    title: "Revolutionary AI Technology Unveiled by Tech Giant",
    excerpt:
      "A leading tech company has announced a breakthrough in AI technology, promising to transform various industries.",
    content: `In a press conference yesterday, the CEO of TechCorp unveiled their latest AI innovation, 
      which they claim will revolutionize everything from healthcare to transportation. 
      The new technology, dubbed 'AI-X', is said to be capable of processing and analyzing data at unprecedented speeds.`,
    category: "Technology",
    subcategory: "Latest News",
    image: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737324222/1000_F_628005942_zF7vOoa3tTs6bQPPPNVdXivtqYXh78Um_dk0fv2.jpg",
    date: "Mar 3, 2022",
    author: {
      name: "Alex Chen",
      role: "Tech Correspondent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  // Add more news items for each category...
];
