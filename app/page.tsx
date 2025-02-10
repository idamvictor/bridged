import NewsCardHome from "@/components/news-card-home";
import GroupsSidebar from "@/components/groups-sidebar";

const newsArticles = [
  {
    title:
      "Kenya breaks new ground and pilots its first digital health campaign system",
    excerpt:
      "Nairobi – After five days of walking door-to-door, visiting churches and attending community gatherings...",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739220276/Kenya_twmg9r.jpg",
    date: "Dec 4, 2023",
    readTime: "5 min",
  },
  {
    title:
      "Kenya establishes a national emergency medical team (EMT) with support from World Health Organization",
    excerpt:
      "The city's beloved annual cultural festival is set to return next month, promising a vibrant celebration of local arts and cuisine...",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739220517/Kenya_EMT_ucu8jz.jpg",
    date: "Dec 3, 2023",
    readTime: "7 min",
  },
  {
    title:
      "Kenya conducts a multisectoral Intra-Action Review to improve response to ongoing mpox outbreak",
    excerpt:
      "Nairobi – Kenya’s Ministry of Health declared an Mpox outbreak on 31st July 2024 after the first case of a truck driver was detected and isolated in Taita-Taveta county...",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739220794/Mpox_20IAR_20WHO_20Kenya_20_C2_A9Micheal_20Mutisya_jitlcv.jpg",
    date: "Dec 3, 2023",
    readTime: "6 min",
  },
  {
    title: "Kenya steps up surveillance, response measures to curb mpox",
    excerpt:
      "Nairobi – Kenyan health authorities have implemented a raft of preparedness and response measures to swiftly detect and halt the spread of mpox, which was confirmed in the country on 31 July 2024...",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739220918/Mpox_20diagnostics_hmjpu9.jpg",
    date: "Dec 4, 2023",
    readTime: "5 min",
  },
  {
    title:
      "Rapid response brings relief to flood-affected communities in Kenya",
    excerpt:
      "Nairobi ‒ This year’s long rainy season, which typically lasts from March to May every year, has hit Kenya hard, with unexpected heavy rainfall and widespread flooding since mid-April...",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739221074/Video_3_de9uyn.jpg",
    date: "Dec 3, 2023",
    readTime: "7 min",
  },
  {
    title:
      "WHO Africa, UNICEF and Partners poised to advance implementation of Baby-Friendly Hospital Initiative in countries",
    excerpt:
      "Nairobi - In a concerted effort to strengthen maternal and child health services across Africa, the World Health Organization, in collaboration with the United Nations Children’s Fund (UNICEF)...",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739221279/MicrosoftTeams-image_io7hf2.jpg",
    date: "Dec 3, 2023",
    readTime: "6 min",
  },
  {
    title:
      "Three African countries pilot initiative to boost cervical and breast cancer care",
    excerpt:
      "Brazzaville/New York – An initiative to support better access to breast and cervical cancer detection, treatment and care services is being piloted in three African countries...",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739221358/e89ddd0960eee5c57ba98da220fd9ea5_mgyvdv.jpg",
    date: "Dec 4, 2023",
    readTime: "5 min",
  },
  {
    title:
      "Switch away from tobacco an economic, health boon for Kenyan farmers",
    excerpt:
      "Brazzaville – When small-scale Kenyan farmer Nancy Achieng made the switch from tobacco farming to high-iron beans just over a year ago...",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739221452/WhatsApp_20Image_202023-05-30_20at_2010.33.04_20_281_29_hixxcv.jpg",
    date: "Dec 3, 2023",
    readTime: "7 min",
  },
  {
    title: "Kenya leads global World NO-Tobacco Event",
    excerpt:
      "Migori, Kenya – The world is confronted with a global food crisis fueled by conflict, climate change and the pandemic of coronavirus disease...",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739221584/WHO_20team_20on_20the_20farm_0_wh6qjd.jpg",
    date: "Dec 3, 2023",
    readTime: "6 min",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-6xl mx-auto grid md:grid-cols-[1fr_300px] gap-6 py-6 px-4">
        <div className="space-y-6">
          <div className="bg-white rounded-lg border p-6">
            <h1 className="text-2xl font-bold mb-2">Welcome to Bridged</h1>
            <p className="text-gray-600">
              Join our community of health professionals and enthusiasts. Share
              knowledge, connect with peers, and stay updated with the latest in
              healthcare.
            </p>
          </div>

          <div className="grid gap-6">
            {newsArticles.map((article, i) => (
              <NewsCardHome key={i} {...article} />
            ))}
          </div>
        </div>

        <GroupsSidebar />
      </main>
    </div>
  );
}
