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
      "Kenya breaks new ground and pilots its first digital health campaign system",
    excerpt:
      "Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.",
    content: `Nairobi – After five days of walking door-to-door, visiting churches and attending community gatherings, Margaret Khasiala finally gets to rest in her home in Chekalani, Western Kenya. She is one of 4,250 community health promoters who worked to ensure up to 13 million children across Kenya received medicines to combat neglected tropical diseases. 

Margaret was also one of 110 community health promoters piloting a new digital system. Using her phone, she recorded the details of every child she gave medicines to. The data could be seen immediately at national level, making the data collecting process faster than traditional handwritten records.

This marks the first time Kenya has used a digital system for a mass public health campaign, a bold step forward in a country where health initiatives of this scale have long relied on manual data collection.`,
    category: "Health",
    subcategory: "Top Stories",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739220276/Kenya_twmg9r.jpg",
    date: "Jan 30, 2025",
    author: {
      name: "Bridged Connect",
      role: "Health Specialist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "local-festival-announcement",
    title:
      "Kenya establishes a national emergency medical team (EMT) with support from World Health Organization",
    excerpt:
      "The city's beloved annual cultural festival is set to return next month, promising a vibrant celebration of local arts and cuisine.",
    content: `Nairobi - The World Health Organization in partnership with the Kenyan Defence Forces organized and trained 30 multidisciplinary medical and paramedical officers as part of the establishment of Kenya’s first Emergency Medical Team (EMT) following WHO standards.

EMTs are health professionals that are now deployable within 72 hours to autonomously provide direct medical and surgical care to populations affected by disasters, outbreaks, and emergencies. They are deployed as a surge capacity to support the local health system, overwhelmed by a lack of human and material resources.   Civilian or military medical experts can be part of the team if they fulfill established standards to provide high-quality healthcare services to the affected population.

In the past decade, Kenya has experienced various Public Health Emergencies and disasters on a scale that often require coordinated national and sometimes international response. Flooding events, landslides, mudslides, gas explosions, terrorism and other infectious diseases such as cholera, measles, COVID-19 and influenzas occur frequently and often require the deployment of EMTs.

With the completion of this induction training today, the capacities of these officers have been built to take up the challenge of responding to the clinical component of any public health emergencies or disasters within the country and could also be deployed to support other countries within the continent. The training which lasted for 5 days featured, the overview of Public health emergencies, globally and in Kenya, typology of EMTs, building emergency medical teams, triage in emergency medical teams, management of mass casualty incidents, humanitarian setting management, EMT activation and deployments of human resources, kits and commodities, infection prevention and control.`,
    category: "Events",
    subcategory: "Local News",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739220517/Kenya_EMT_ucu8jz.jpg",
    date: "Feb 15, 2022",
    author: {
      name: "Emma Rodriguez",
      role: "Local Events Correspondent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "tech-breakthrough",
    title:
      "Kenya conducts a multisectoral Intra-Action Review to improve response to ongoing mpox outbreak",
    excerpt:
      "A leading tech company has announced a breakthrough in AI technology, promising to transform various industries.",
    content: `Nairobi – Kenya’s Ministry of Health declared an Mpox outbreak on 31st July 2024 after the first case of a truck driver was detected and isolated in Taita-Taveta county. As of 12th December 2024, 28 confirmed Mpox cases have been reported across 12 counties  with 18 (64.3%) recoveries, 9 (32.1%) admissions and one (1) death, case fatality rate (CFR) of  3.6%

To enhance the country's coordinated response, operational readiness and capacity for prompt interventions to the ongoing Mpox outbreak. The Ministry of Health with support from the WHO Emergency and Preparedness Program conducted an Intra-Action Review (IAR) to review the country's response to the outbreak and identify best practices, challenges, practical areas for immediate remediation or continued improvement. This IAR led to the development of a practical plan of action for operationalization and implementation of Mpox outbreak preparedness and response plan.

The IAR collectively assessed the existing response capacities and activities, identified milestones, documented lessons and challenges across all response pillars at national and subnational levels. Gaps were identified while best practices were harnessed for institutionalization among the outbreak counties. An action plan was developed to guide a way forward for planned actions that allocated responsibilities and timelines of implementation. The workshop had 120 participants who included 60 health experts in the cadres of county disease surveillance coordinators, vaccination logisticians, clinicians, port health officers, emergence operation centres (EOC) managers, risk and communication experts from 13 outbreak and high-risk counties of Busia, Bungoma, Nakuru, Kericho, Uasin Gishu, Taita Taveta, Machakos, Makueni, Kilifi, Kajiado, Kiambu, Nairobi and Mombasa.  

In his opening remarks, Dr. Daniel Langat, the head of division of disease surveillance and response (DDSR) in the MOH emphasized on “the need for enhancing coordinated response mechanisms at the national and county levels through the existing incident management system, adoption of existing guidelines, enhancing communication and strengthening capacities in surveillance, diagnostics and case management for effective response to the outbreak”.`,
    category: "Technology",
    subcategory: "Latest News",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739220794/Mpox_20IAR_20WHO_20Kenya_20_C2_A9Micheal_20Mutisya_jitlcv.jpg",
    date: "Mar 3, 2022",
    author: {
      name: "Bridged Connect",
      role: "Tech Correspondent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "womens-health-matters-1",
    title: "Kenya steps up surveillance, response measures to curb mpox",
    excerpt:
      "Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.",
    content: `Nairobi – Kenyan health authorities have implemented a raft of preparedness and response measures to swiftly detect and halt the spread of mpox, which was confirmed in the country on 31 July 2024.

Kenya along with Burundi, Rwanda and Uganda have confirmed cases of the clade 1b mpox variant, which was first detected in the Democratic Republic of the Congo and is believed to be more severe and transmissible. The rapid spread of clade 1b was among the factors for the declaration of the mpox outbreak a public health emergency of international concern by World Health Organization (WHO) on 14 August 2024.

Currently 14 countries in the African region are reporting cases since the start of 2024, with the Democratic Republic of the Congo accounting for around 90% of all cases. Kenya has so far recorded five mpox cases, with no deaths. Four out of the five cases were imported from neighbouring countries, while the fifth is a contact of one of these cases, meaning that there is possible community transmission in the country.

Kenya’s Ministry of Health, with support from WHO and partners, has developed an mpox national preparedness and response plan that has identified 14 high risk counties along the Northern Corridor, a busy transport route that runs from the Kenya-Uganda border to the port city of Mombasa, where rapid response teams have been deployed to intensify surveillance.`,
    category: "Health",
    subcategory: "Top Stories",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739220918/Mpox_20diagnostics_hmjpu9.jpg",
    date: "Jan 22, 2022",
    author: {
      name: "Bridged Connect",
      role: "Women's Health Specialist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "local-festival-announcement-1",
    title:
      "Rapid response brings relief to flood-affected communities in Kenya",
    excerpt:
      "The city's beloved annual cultural festival is set to return next month, promising a vibrant celebration of local arts and cuisine.",
    content: `Nairobi ‒ This year’s long rainy season, which typically lasts from March to May every year, has hit Kenya hard, with unexpected heavy rainfall and widespread flooding since mid-April. Over 286 000 people have been affected, 47 000 households displaced and 238 deaths have been reported in 37 of the country’s 47 counties.   

According to Dr Pius Mutuku, medical epidemiologist in the Ministry of Health, 14 health facilities have closed and a major water treatment plant has been affected by flooding, leading to a shortage of potable water for 3000 people. Forty-four cholera cases have been reported in Tana River County, one of the most flood-affected areas.  

The Government of Kenya has mounted a multisectoral emergency response, led by the Kenya Disaster Emergency Operations Centre in the country’s capital, Nairobi. The centre gathers information from the 33 affected counties for analysis and decision making. At the national Public Health Emergency Operations Centre, around 36 staff are monitoring and leading the health situation and response, supported by World Health Organization (WHO) and other partners such as Kenya Red Cross Society, AMREF, FHI360 and Foundation for Professional Development. The Ministry of Health has set up an incident management system team for surveillance, case management, laboratory, logistics and risk communication and community engagement to monitor and manage disease outbreaks. `,
    category: "Events",
    subcategory: "Local News",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739221074/Video_3_de9uyn.jpg",
    date: "Feb 15, 2022",
    author: {
      name: "Bridged Connect",
      role: "Local Events Correspondent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "tech-breakthrough-1",
    title:
      "WHO Africa, UNICEF and Partners poised to advance implementation of Baby-Friendly Hospital Initiative in countries",
    excerpt:
      "A leading tech company has announced a breakthrough in AI technology, promising to transform various industries.",
    content: `Nairobi - In a concerted effort to strengthen maternal and child health services across Africa, the World Health Organization, in collaboration with the United Nations Children’s Fund (UNICEF) and the United States Agency for International Development (USAID), convened a capacity-building workshop targeting healthcare professionals, policymakers, and stakeholders from ten countries (Ethiopia, Ghana, Kenya, Malawi, Nigeria, South Sudan, Tanzania, Uganda, Zambia, and Zimbabwe).

The workshop, held from 12 to 15 February 2024 in Nairobi, Kenya, focused on enhancing countries' capabilities to effectively implement the Baby-Friendly Hospital Initiative (BFHI) as an integral component of maternal and newborn health quality care strategies.

The Baby-Friendly Hospital Initiative, established by the World Health Organization (WHO) and the United Nations Children's Fund (UNICEF), aims to protect and support breastfeeding and mother-baby bonding by ensuring that maternity facilities adhere to the Ten Steps to Successful Breastfeeding.`,
    category: "Technology",
    subcategory: "Latest News",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739221279/MicrosoftTeams-image_io7hf2.jpg",
    date: "Mar 3, 2022",
    author: {
      name: "Bridged Connect",
      role: "Tech Correspondent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "womens-health-matters-2",
    title:
      "Three African countries pilot initiative to boost cervical and breast cancer care",
    excerpt:
      "Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.",
    content: `Brazzaville/New York – An initiative to support better access to breast and cervical cancer detection, treatment and care services is being piloted in three African countries.

The World Health Organization (WHO) Regional Office for Africa, with support from Roche, announced the initiative today on the sidelines of the UN General Assembly. The programme is being launched in Cote d’Ivoire, Kenya and Zimbabwe to provide cancer care services over the next three years.

Breast and cervical cancer currently constitute over half the cancer burden for women in sub-Saharan Africa. Between 60%–70% of women in African countries are diagnosed at a late stage, and only one in two women diagnosed with breast cancer in an African country will survive five years. Breast cancer five-year survival rates in high-income countries exceed 90%.

The initiative in the three countries includes health promotion, screening, early diagnosis and treatment, as well as general primary care and screening for other noncommunicable diseases. In addition, early detection services will be integrated into existing cervical cancer screening clinics to ensure both old and new systems are unified. The aim is to provide an integrated and holistic system of health care that will contribute to addressing the burden of breast and cervical cancer in the African region.`,
    category: "Health",
    subcategory: "Top Stories",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739221358/e89ddd0960eee5c57ba98da220fd9ea5_mgyvdv.jpg",
    date: "Jan 22, 2022",
    author: {
      name: "Bridged Connect",
      role: "Women's Health Specialist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "local-festival-announcement-2",
    title:
      "Switch away from tobacco an economic, health boon for Kenyan farmers",
    excerpt:
      "The city's beloved annual cultural festival is set to return next month, promising a vibrant celebration of local arts and cuisine.",
    content: `Brazzaville – When small-scale Kenyan farmer Nancy Achieng made the switch from tobacco farming to high-iron beans just over a year ago, she joined the ranks of hundreds of her peers who today are collectively earning annual net incomes six times higher than previously.

Alongside the fact that Achieng reveals that she no longer has to be embarrassed about overdue school fees, she says she and her three children are also much healthier, experiencing far fewer respiratory illnesses than when the family farmed tobacco.

The Tobacco Free Farms initiative, a joint initiative of World Health Organization (WHO), the World Food Programme (WFP), and the Food and Agriculture Organization of the United Nations (FAO), in collaboration with the Kenyan government, was launched in Migori county in Kenya in March 2022, and is now set to be extended to Zambia.

Aligning with the theme of World No Tobacco Day 2023, Grow Food, not Tobacco, the project supports farmers to make the shift from tobacco to sustainable food crops. United Nations agencies and the Kenyan government supported with training of farmers, supply of quality inputs such as seeds and fertilizers, and a ready market for the produce, through the  World Food Programme’s (WFP’s) local procurement initiatives.`,
    category: "Events",
    subcategory: "Local News",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739221452/WhatsApp_20Image_202023-05-30_20at_2010.33.04_20_281_29_hixxcv.jpg",
    date: "Feb 15, 2022",
    author: {
      name: "Bridged Connect",
      role: "Local Events Correspondent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "tech-breakthrough-2",
    title: "Kenya leads global World NO-Tobacco Event",
    excerpt:
      "A leading tech company has announced a breakthrough in AI technology, promising to transform various industries.",
    content: `Migori, Kenya – The world is confronted with a global food crisis fueled by conflict, climate change and the pandemic of coronavirus disease. A record 349 million people globally are facing acute food insecurity Meanwhile, tobacco is grown in over 124 countries, taking up 3.2 million hectares of fertile land that could be used to grow food, address food insecurity and nutrition challenges and help feed families. These resources are diverted to support the production of a crop that kills over 8 million people every year, erodes the economy and damages the environment

On World No Tobacco Day, May 31, 2023, the theme call is ‘We need food, NOT tobacco,’ a global campaign for raising awareness about alternative crop production and marketing opportunities for tobacco farmers. It is also a call to encourage farmers to grow sustainable, nutritious crops and expose the tobacco industry’s efforts to interfere with attempts to substitute tobacco growing with sustainable crops.

This year, Kenya is hosting the global commemoration of the World No Tobacco Day. Kenya was also the first country selected to roll out the Tobacco Free Farms project as a key player in the fight against the global tobacco epidemic. `,
    category: "Technology",
    subcategory: "Latest News",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739221584/WHO_20team_20on_20the_20farm_0_wh6qjd.jpg",
    date: "Mar 3, 2022",
    author: {
      name: "Bridged Connect",
      role: "Tech Correspondent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "womens-health-matters-3",
    title:
      "Beyond the numbers: the real-world impact of the malaria vaccine in Kenya",
    excerpt:
      "Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.",
    content: `Caregivers, health leaders and community health volunteers reflect on malaria vaccine implementation and how the new tool is reaching children at risk with life-saving malaria prevention

Africa’s Lake Victoria is the world’s second largest freshwater lake and its largest tropical lake. This awe-inspiring ecosystem supports a stunning variety of bird, aquatic and animal species. Unfortunately, the same ecosystem is also an ideal breeding ground for mosquitoes that carry malaria.

Malaria experts refer to the areas around the lake’s shore as Kenya’s “lake-endemic” region. Most people there have endured malaria infections, and many have suffered terrible losses, including children, malaria’s most common and vulnerable victims.

“When I was growing up, I suffered from several attacks of malaria, and I’ve seen children suffer from permanent disabilities,” says Vivienne, a mother of 5 from Chemelil market, a rural village outside Kisumu town. “My 3 oldest children suffer from frequent attacks of malaria. When that happens, they lose their appetite, suffer from fever, diarrhea, and vomiting, and become very weak.”`,
    category: "Health",
    subcategory: "Top Stories",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739221742/Kenya_uflnqn.jpg",
    date: "Jan 22, 2022",
    author: {
      name: "Bridged Connect",
      role: "Women's Health Specialist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "local-festival-announcement-3",
    title:
      "Kenya celebrates immunization as more children are reached with RTS,S",
    excerpt:
      "The city's beloved annual cultural festival is set to return next month, promising a vibrant celebration of local arts and cuisine.",
    content: `Kenya this week joins the world to commemorate the African Vaccination week (World Immunization Week) as well as the World Malaria Day on April 25, 2023.
Commemoration of these important days is key in that it reinforces the need to pay attention to immunization and prevention of disease.  AS WHO celebrates 75 years of existence and member states count milestones and lessons, Kenya can look back on its growth with determination to sustain the 90 per cent target of coverage across all 15 vaccine types it provides. Kenya since 1980, established the Kenya Expanded Programme for Immunization, KEPI, which set its pace to ensure all child diseases are prevented through immunization from birth. These include tuberculosis, pneumonia, diarrhea, polio, measles, diphtheria, whooping cough, tetanus, hepatitis, meningitis, yellow fever, malaria and cervical cancer.
In  February, Kenya launched the malaria vaccine expansion outreach to cover an additional 25 sub-counties, following successful pilot that has brought substantial reduction in severe malaria attacks, deaths and child hospital admissions.
The three-year-old pilot implemented from September 2019, made the vaccine available to children in eight counties in Western and Nyanza region of Kenya targeting 1.2 million children.`,
    category: "Events",
    subcategory: "Local News",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739222053/Mothers_20and_20their_20children_20_20at_20ANC_20clinic_20in_20Homa_20Bay_i25atg.jpg",
    date: "Feb 15, 2022",
    author: {
      name: "Bridged Connect",
      role: "Local Events Correspondent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "tech-breakthrough-3",
    title: "On the path to expanding cervical cancer screening in Kenya",
    excerpt:
      "A leading tech company has announced a breakthrough in AI technology, promising to transform various industries.",
    content: `Nairobi – Kenya piloted a community-based cervical cancer screening in 2021 using the human papillomavirus (HPV) DNA testing to explore ways of effectively scaling up this type of testing across the country. World Health Organization (WHO) recommends the HPV DNA testing as it detects the high-risk strains of the human papilloma virus unlike tests that rely on visual inspection. Seventeen per cent of the more than 10 000 women screened in the month-long pilot phase tested positive for HPV. Nearly 90% of those who tested positive received treatment.

Dr Mary Nyangasi, who heads the National Cancer Control Programme Division at Kenya’s Ministry of Health, discusses the outcome of the pilot community-based screening programme and the feasibility of rolling out HPV testing in the public sector.`,
    category: "Technology",
    subcategory: "Latest News",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739222257/For_20banner_cr9sav.jpg",
    date: "Mar 3, 2022",
    author: {
      name: "Bridged Connect",
      role: "Tech Correspondent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "womens-health-matters-4",
    title: "Helping to break mental health care barriers in Kenya",
    excerpt:
      "Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.",
    content: `Nairobi – In a previous stint as a chemistry teacher Dr Gladys Mwiti could not help but notice flagging performance among her students. She would later discover that the underachievement was largely due to unresolved trauma from poverty, domestic violence and abuse. The now retrained Kenyan psychologist is running an organization that provides mental health care. She discusses the barriers to mental health services and how to support those who need help, especially in underserved communities.

Why is access to mental health services so critical?

Access to mental health services is important because it is one of the parts that make a whole individual. We have the physical, which often gets a lot of attention, whether it is illness, hunger, or access to shelter. And we have economic health – education, employment and so on. Then we have spiritual health.

But mental health is a neglected field, and when you neglect mental health then you neglect the whole person. So, the person walks with a “limp” in life.

There has been an evolution of awareness of mental health over the years because we have come from a position where people did not realize that mental health is important. We evolved from almost nothing in training to now many universities offering psychology training.`,
    category: "Health",
    subcategory: "Top Stories",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739222444/For_20Kenya_20Q_26A_i3x7cf.jpg",
    date: "Jan 22, 2022",
    author: {
      name: "Bridged Connect",
      role: "Women's Health Specialist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "local-festival-announcement-4",
    title:
      "Kenya and WHO launch bold initiative to transform Africa’s health emergency response",
    excerpt:
      "The city's beloved annual cultural festival is set to return next month, promising a vibrant celebration of local arts and cuisine.",
    content: `Brazzaville/Nairobi, 9 July 2022 – The Government of Kenya and the World Health Organization (WHO) held a ground-breaking ceremony today in Nairobi for a WHO Health Emergency Hub, which will include a Centre of Excellence for the Health Emergency Workforce, laying the cornerstone for a wider initiative that aims to change the way the continent handles emergencies. 
The African region experiences over 100 health emergencies per year, more than any other region in the world. In recent years, much progress has been made with the efforts of countries, WHO and partners. For example, the time required to end outbreaks has plummeted from 131 days in 2017 to 45 days in 2019. 
Despite the advances, the COVID-19 pandemic has exposed huge gaps, particularly the continent’s lack of emergency responders. WHO analysis finds that fewer than 10% of countries in the African region have the workforce required to prepare, detect and respond to public health risks.`,
    category: "Events",
    subcategory: "Local News",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739222540/DG_20shakes_20with_20HE_0_rnwtwq.jpg",
    date: "Feb 15, 2022",
    author: {
      name: "Bridged Connect",
      role: "Local Events Correspondent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "tech-breakthrough-4",
    title:
      "Kenya, WHO launch bold initiative to transform Africa’s health emergency response",
    excerpt:
      "A leading tech company has announced a breakthrough in AI technology, promising to transform various industries.",
    content: `Brazzaville/Nairobi – The Government of Kenya and the World Health Organization (WHO) held a ground-breaking ceremony today in Nairobi for a WHO Health Emergency Hub, which will include a Centre of Excellence for the Health Emergency Workforce, laying the cornerstone for a wider initiative that aims to change the way the continent handles emergencies.

The African region experiences over 100 health emergencies per year, more than any other region in the world. In recent years, much progress has been made with the efforts of countries, WHO and partners. For example, the time required to end outbreaks has plummeted from 131 days in 2017 to 45 days in 2019.

Despite the advances, the COVID-19 pandemic has exposed huge gaps, particularly the continent’s lack of emergency responders. WHO analysis finds that fewer than 10% of countries in the African region have the workforce required to prepare, detect and respond to public health risks.`,
    category: "Technology",
    subcategory: "Latest News",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739222653/FEePU9FXwAcSVtc_0_j5sbaj.jpg",
    date: "Mar 3, 2022",
    author: {
      name: "Bridged Connect",
      role: "Tech Correspondent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  // Add more news items for each category...
];
