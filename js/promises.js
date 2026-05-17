/**
 * promises.js
 * -----------
 * All promise data for the Karnataka Congress Tracker.
 * Each category has: id, icon, title, subtitle, and items[].
 *
 * Item fields:
 *   text     {string}  — promise text, verbatim from manifesto
 *   status   {string}  — "Pending" | "Fulfilled" | "In Progress" | "Evaded"
 *   link     {string}  — source URL (or "N/A")
 *   sourceName    {string}  — display name of source
 *   sourceHeading {string}  — source article headline / explanatory note
 *   updates  {Array}   — multiple source objects ({ link, sourceName, sourceHeading })
 *                        overrides link/sourceName/sourceHeading if present
 */

const PROMISES_DATA = [
  {
    id: "overarching", icon: "🌟",
    title: "Overarching Pledges & Guarantees",
    subtitle: "Brand Karnataka · Values · Implementation",
    items: [
      { text: "Sarva Janangada Shanthiya Thota - This is the commitment of Congress Party.", status: "Pending", link: "N/A" },
      { text: "Build 'BRAND KARNATAKA' and put the State at Number one position.", status: "Pending", link: "N/A" },
      { text: "Adopt the values of Public life set out by Vishvaguru Basavanna, Rashtrakavi Kuvempu, etc.", status: "Pending", link: "N/A" },
      { text: "A high power Committee for implementing the manifesto will be formed.", status: "Pending", link: "N/A" },
      {
        text: "GRUHA JYOTHI - 200 UNITS OF GRUHA JYOTHI FREE ELECTRICITY TO ALL THE HOUSES",
        status: "Fulfilled",
        updates: [
          { link: "https://www.deccanherald.com/india/karnataka/karnataka-budget-2025-key-takeaways-3436976", sourceName: "Deccan Herald", sourceHeading: "Karnataka Budget 2025: Key takeaways" }
        ]
      },
      { text: "ANNA BHAGYA - 10 KGs of food grains of their choice to every person in BPL family", status: "Fulfilled", link: "https://www.deccanherald.com/india/karnataka/karnataka-budget-2025-key-takeaways-3436976", sourceName: "Deccan Herald", sourceHeading: "Karnataka Budget 2025: Key takeaways (Note: Implemented in modified form — cash transfer instead of physical grain in some phases)" },
      { text: "GRUHA LAKSHMI - 2000 EVERY MONTH TO EACH AND EVERY WOMEN HEAD OF THE FAMILY", status: "Fulfilled", link: "https://prsindia.org/budgets/states/karnataka-budget-analysis-2024-25", sourceName: "PRS India", sourceHeading: "Karnataka Budget Analysis 2024-25" },
      { text: "YUVANIDHI - Rs.3,000/- per month for unemployed graduates & Rs.1,500/ for diploma holders.", status: "Fulfilled", link: "https://en.wikipedia.org/wiki/Yuva_Nidhi", sourceName: "Wikipedia / Govt of Karnataka", sourceHeading: "Yuva Nidhi — officially launched 12 January 2024; Rs 3,000/month for graduates and Rs 1,500 for diploma holders; administered via Seva Sindhu portal by Dept of Skill Development" },
      { text: "SHAKTI - Free travel to all women through out the state in regular KSRTC/BMTC Buses", status: "Fulfilled", link: "https://www.deccanherald.com/india/karnataka/karnataka-governments-five-guarantees-delivered-impactful-measurable-change-congress-3751180", sourceName: "Deccan Herald", sourceHeading: "Karnataka government's five guarantees delivered impactful, measurable change" }
    ]
  },
  {
    id: "admin-gov", icon: "🏛",
    title: "Administration, Governance & Law",
    subtitle: "Public Service · Police · Justice · Urban Dev",
    items: [
      { text: "To make all activities connected with procurements, developmental and infrastructural activities transparent.", status: "Pending", link: "N/A" },
      { text: "To fill up approved vacancies in all Government Departments with in one year.", status: "Evaded", link: "https://prsindia.org/budgets/states/karnataka-budget-analysis-2026-27", sourceName: "PRS India", sourceHeading: "Karnataka Budget 2026-27: Process to fill 56,432 posts initiated — but 3 years after the promise was made. The specific 'within one year' commitment (deadline: May 2024) was not met; formal recruitment only began in 2026-27" },
      { text: "To Sympathetically consider extension of OPS to the pensionable government employees who joined service since 2006", status: "In Progress", link: "https://indianexpress.com/article/cities/bangalore/karnataka-old-pension-scheme-for-13000-govt-employees-9127855/", sourceName: "Indian Express", sourceHeading: "Karnataka to implement old pension scheme for 13,000 govt employees" },
      { text: "To regularize the services of the presently working in source employees under Health & Family Welfare Department.", status: "Pending", link: "N/A" },
      { text: "Giving due weightage to the contractual and guest faculties by brining suitable amendments.", status: "Pending", link: "N/A" },
      { text: "Increase monthly salary of Anganwadi Workers to Rs. 15,000/ and retirement benefit of Rs. 3 Lakhs.", status: "Pending", link: "N/A" },
      { text: "To provide ASHA workers with a fixed monthly honorarium of Rs. 5,000/- to Rs.8,000/-", status: "Fulfilled", link: "https://www.thenewsminute.com/karnataka/asha-workers-call-off-strike-after-karnataka-govt-agrees-to-raise-honorarium", sourceName: "The News Minute", sourceHeading: "ASHA workers call off strike after Karnataka govt agrees to raise honorarium — CM announced fixed Rs 10,000/month (effective April 2025), exceeding the promised range; disbursement confirmed" },
      { text: "To enhance honorarium to Midday Meal Cooks from Rs.3,600 to Rs.6,000/-", status: "Pending", link: "N/A" },
      { text: "To abolish corruption in public works by enacting a special law.", status: "Pending", link: "N/A" },
      { text: "To ensure works begin within 90 days and settle the bills of contractors within contractual time-frame.", status: "Pending", link: "N/A" },
      { text: "To increase recruitment of women in Police Force to 33% with 1% reservation for Gender Minorities.", status: "Pending", link: "N/A" },
      { text: "To provide special allowance of Rs 5000 per month to police officials on night duty.", status: "Evaded", link: "https://www.thehindu.com/news/national/karnataka/karnataka-increases-special-duty-allowance-for-police-personnel-to-300/article69611620.ece", sourceName: "The Hindu", sourceHeading: "Karnataka increases special duty allowance for police personnel to ₹300 per duty — a fundamentally different policy from the promised ₹5,000/month, making the original target structurally unachievable" },
      { text: "To provide housing to all the police personnel within five years.", status: "Pending", link: "N/A" },
      { text: "To establish a seed fund of Rs.200 crores to create infrastructure in Cyber Crimes.", status: "Pending", link: "N/A" },
      { text: "To set up a dedicated fund of Rs 2000 crore to modernise all the existing courts.", status: "Pending", link: "N/A" },
      { text: "To reduce registration fee concerning Gift & Will on landed property within the family.", status: "Pending", link: "N/A" },
      { text: "Take decisive action including imposing a ban on organisations like Bajrang Dal, PFI.", status: "Pending", link: "N/A" },
      { text: "To set up high-speed WiFi hotspots in every Panchayath.", status: "Pending", link: "N/A" },
      { text: "Mahatma Gandhi Gram Swaraj Scheme - To invest Rs. 50 thousand crores in five years in villages.", status: "Pending", link: "N/A" },
      { text: "To extend Bengaluru's TenderSURE road model to cities with a population more than 10 Lakh.", status: "Pending", link: "N/A" },
      { text: "To construct apartments, regularise slums, provide title deeds and rename as Shramika Vasathi Samuchhaya.", status: "Pending", link: "N/A" },
      { text: "To amend Karnataka Apartment Ownership Act, 1972 to provide for conveyance of property.", status: "Pending", link: "N/A" },
      { text: "To frame rules to double the FAR for buildings in II tier cities to enterprises generating employment.", status: "Pending", link: "N/A" }
    ]
  },
  {
    id: "agriculture", icon: "🌾",
    title: "Agriculture, Farming & Irrigation",
    subtitle: "Krishi Sarvodaya · Horticulture · Dairy · Fisheries · Jeevajala",
    items: [
      { text: "Krishi Sarvodaya Nidhi - allocate Rs.1.50 lakh crores in five years for agriculture modernization.", status: "Pending", link: "N/A" },
      { text: "Implement guarantees of MSP based on Agricultural price fixation commission.", status: "Pending", link: "N/A" },
      { text: "Increase interest free soft loans to farmers from Rs. 3 lakhs to 10 lakhs and 3% upto Rs. 15 lakhs.", status: "Pending", link: "N/A" },
      { text: "To promote Agro based village industries run by rural women by investing Rs.200 crores.", status: "Pending", link: "N/A" },
      {
        text: "To repeal the anti farmer laws enacted by BJP Government.",
        status: "In Progress",
        updates: [
          { link: "https://www.thenewsminute.com/karnataka/karnataka-will-repeal-apmc-act-amendments-at-the-earliest-says-siddaramaiah", sourceName: "The News Minute", sourceHeading: "Karnataka APMC Amendment Bill, 2024 passed in Assembly (Feb 2024) — restores APMC market powers; awaiting Legislative Council passage" },
          { link: "https://thesouthfirst.com/karnataka/promises-drawn-on-water-congress-yet-to-repeal-contentious-bjp-era-laws-in-karnataka/", sourceName: "The South First", sourceHeading: "As of Dec 2025, Bill passed in Assembly but full repeal (Council passage) still pending — Congress secured Council majority Sep 2025" }
        ]
      },
      { text: "Savayava Saradaara Yojane to promote Organic farming investing Rs.2500 crores.", status: "Pending", link: "N/A" },
      { text: "A new development board \"Negila Tuditha\" with seed money of Rs.500 crores.", status: "Pending", link: "N/A" },
      { text: "Jala Chethana Andolana - 100% subsidy to drip and sprinkler irrigation.", status: "Pending", link: "N/A" },
      { text: "To reintroduce subsidy for installation of solar pump-sets with 75% subsidy.", status: "Pending", link: "N/A" },
      { text: "Form self-help group for rural agriculturist women and provide Rs.3 lakhs interest free loan.", status: "Pending", link: "N/A" },
      { text: "Create Prakruthi Vikopa Nidhi - a permanent fund with Rs.5000 crores.", status: "Pending", link: "N/A" },
      { text: "Offer reasonable compensation during drought and waive complete interest.", status: "Pending", link: "N/A" },
      { text: "To provide possession certificates to the famers of Malnad.", status: "Pending", link: "N/A" },
      { text: "To establish an Agriculture Price Commission in each revenue division.", status: "Pending", link: "N/A" },
      { text: "Assist the grape growers by providing subsidies - allotment of Rs.500 Crore.", status: "Pending", link: "N/A" },
      { text: "Special package for development of floriculture by investing Rs.500 crores.", status: "Pending", link: "N/A" },
      { text: "To create a brand for Coffee in Karnataka.", status: "Pending", link: "N/A" },
      { text: "Create \"Sericulture Stability Revolving Fund\" with Rs.2000 Crores deposit.", status: "Pending", link: "N/A" },
      { text: "To provide Rs 3 lakh interest-free loans to all silk yarn reelers.", status: "Pending", link: "N/A" },
      { text: "PUNYAKOTI NANDINI IS OURS - Protect existence of pride Nandini.", status: "Pending", link: "N/A" },
      { text: "Implement Ksheera Kranthi - Mission 1.5 Crore litres of milk production per day.", status: "Pending", link: "N/A" },
      { text: "Pashu Bhagya - loans upto Rs.3 lakhs at zero interest to dairy farmers.", status: "Pending", link: "N/A" },
      { text: "Establish Kurigahi Samvardhana Nidhi - Rs 1,000 Crore fund for sheep rearing.", status: "Pending", link: "N/A" },
      { text: "Ksheeradhare - Increase per litre milk subsidy for dairy farmers from Rs.5 to Rs.7/-.", status: "In Progress", link: "https://dairynews7x7.com/news/milk-subsidy-to-kmf-dairy-farmers-will-be-rs-7-per-lit-soon", sourceName: "DairyNews7x7", sourceHeading: "Milk subsidy to KMF dairy farmers announced at Rs 7 per litre. Note: As of December 2024, farmers awaiting ₹600+ crore in pending incentive disbursements — implementation confirmed but payment delays ongoing" },
      { text: "Ksheera Kranti Credit Cards with a credit limit of Rs.50,000.", status: "Pending", link: "N/A" },
      { text: "Runamuktha Kurigahi Yojane: Waive Loan upto Rs 1 lakh of sheep and goat rearing farmers.", status: "Pending", link: "N/A" },
      { text: "Purchase cow-dung @Rs.3/- per KG.", status: "Pending", link: "N/A" },
      { text: "Provide interest-free loans to women to buy 2 cows or buffalos.", status: "Pending", link: "N/A" },
      { text: "Matsyakranthi - projects to rise Rs 12,000 Crore Blue Economy based on income from Fisheries.", status: "Pending", link: "N/A" },
      { text: "Matysa Sarvodaya Nidhi - establish a Rs 5000 Crore fund to improve fishing sector.", status: "Pending", link: "N/A" },
      { text: "Provide interest-free loans of up to Rs 3 lakhs to fisherwomen.", status: "Pending", link: "N/A" },
      { text: "Matsya Bhagya - provide 500 litres of tax-free diesel every year for deep sea fishing.", status: "Pending", link: "N/A" },
      { text: "Mathsya Asha Kirana Yojane - Rs 6,000 lean period allowance.", status: "Pending", link: "N/A" },
      { text: "Financial assistance of Rs 10,000 to all the Nadadoni fishermen.", status: "Pending", link: "N/A" },
      { text: "Matsya Mahithi Kendra - state-of-the-art satellite mapping centre at UDUPI.", status: "Pending", link: "N/A" },
      { text: "Arrange dredging at the points of anchorages in the jetties/ports.", status: "Pending", link: "N/A" },
      { text: "Matsya Ashraya Yojane - Ensure Housing to all economically disadvantaged fishermen.", status: "Pending", link: "N/A" },
      { text: "Spend Rs. 1.5 lakh crores for irrigation in the next 5 years (2023 to 2028).", status: "Pending", link: "N/A" },
      { text: "Pursue and complete New Projects (Mekedatu, Mahadayi) & Existing projects (Upper Bhadra, Upper Krishna, etc.).", status: "In Progress", link: "https://www.ndtvprofit.com/nation/karnataka-deputy-cm-urges-central-approval-for-mekedatu-project", sourceName: "NDTV Profit", sourceHeading: "Karnataka Deputy CM Urges Central Approval For Mekedatu Project" },
      { text: "Address BJP failure to implement Mahadayi project.", status: "In Progress", link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 93: Contract for Kalasa-Bandura scheme already awarded; pursuing forest clearance from Ministry of Environment — 'scheme will be grounded once approval is obtained from the Centre'" },
      { text: "Action will be taken to obtain necessary clearances from the Union Government.", status: "In Progress", link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 93: Kalasa-Bandura contract awarded; Govt continues pursuing MoEF and NBWL clearances; 'Additional financial implications have arisen due to GoI's inaction'" },
      { text: "100% of the Mahadayi water allocated to Karnataka will be utilised.", status: "Pending", link: "N/A" },
      { text: "Rs 500 crore will be allocated in the first cabinet meeting.", status: "Pending", link: "N/A" },
      { text: "All components of Mahadayi river diversion projects shall be completed in the next 5 years.", status: "Pending", link: "N/A" },
      { text: "Priority given to drinking water, agriculture, and then to electricity generation.", status: "Pending", link: "N/A" },
      { text: "Ensure responsible and secure rehabilitation of project affected families.", status: "Pending", link: "N/A" },
      { text: "Adopt latest state-of-the-art technology for construction of Kalasa and Banduri dams.", status: "Pending", link: "N/A" },
      { text: "Undertake desilting of Thungabadra Dam on priority.", status: "Pending", link: "N/A" },
      { text: "Provide Rs. 1000 crores for cleaning all important rivers in Karnataka.", status: "Pending", link: "N/A" }
    ]
  },
  {
    id: "economy", icon: "🏭",
    title: "Economy, Industry & Infrastructure",
    subtitle: "Commerce · MSME · Tourism · Power · Transport · Mining",
    items: [
      { text: "Establish a Gold and Diamond Park of International Standard in Mangaluru.", status: "Pending", link: "N/A" },
      { text: "Border Industrial Development Board with the investment of Rs. 5000 Crs.", status: "Pending", link: "N/A" },
      { text: "Provide start-up fund of Rs. 10 crores to each constituency.", status: "Pending", link: "N/A" },
      { text: "Upgrade Tech parks in Mysuru, Mangalore, and Hubli Dharwad.", status: "In Progress", link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 370: New IT park to be established in Mangaluru by KEONICS. Para 371: Mysuru to be developed as Second IT city. Para 367: KEONICS LEAP labs (plug-and-play) in Hubballi and other tier-2 cities" },
      { text: "Reopen Brahmavar Vani Vilas Co-operative sugar factory.", status: "Pending", link: "N/A" },
      { text: "Offer SGST concessions to 2 wheeler and 3 wheeler electric vehicles.", status: "Pending", link: "N/A" },
      { text: "Create a Jean Capital of India in Bellary (Apparel park by investing Rs. 5000 Cr).", status: "Pending", link: "N/A" },
      { text: "Create a Task Force to assist exporters.", status: "Pending", link: "N/A" },
      { text: "Offer Start up subsidy upto Rs. 25 lakhs and soft loan upto Rs. One crore @ 6% interest.", status: "Pending", link: "N/A" },
      { text: "Set up a Welfare Fund worth Rs. 1,000 Crore to provide low-interest loans for MSMEs.", status: "Pending", link: "N/A" },
      { text: "Reduce stamp duty to MSME for hypothecation and equitable mortgage.", status: "Pending", link: "N/A" },
      { text: "Create a revolving fund of Rs. 5,000 crores for tourism development.", status: "Pending", link: "N/A" },
      { text: "Provide loans at 5% interest rate and taxi permit to 50 youth in each constituency.", status: "Pending", link: "N/A" },
      { text: "Provide 6% interest subvention for loans up to Rs. 5 lakh for home-stay owners.", status: "Pending", link: "N/A" },
      { text: "Give Industry Status to Hotels with more than 20 employees.", status: "Pending", link: "N/A" },
      { text: "Help small self-employed hotel/Bakery/Sweet Stall sector by offering loan up-to Rs 10 Lakhs.", status: "Pending", link: "N/A" },
      { text: "GRUHA JYOTHI - 200 units of free electricity to every house.", status: "Fulfilled", link: "https://www.deccanherald.com/india/karnataka/karnataka-budget-2025-key-takeaways-3436976", sourceName: "Deccan Herald", sourceHeading: "Karnataka Budget 2025: Key takeaways" },
      { text: "Offer 25% subsidy upto Rs. 3 lakhs for installing solar appliances for domestic use.", status: "Pending", link: "N/A" },
      { text: "Establish EV charging infrastructure with 50% exemption in SGST.", status: "Pending", link: "N/A" },
      { text: "Encourage more mega Solar Parks, to produce additional generation of 5000 MW Power.", status: "Pending", link: "N/A" },
      { text: "SHAKTI - Free travel to all women through out the state in regular KSRTC Busses.", status: "Fulfilled", link: "https://www.deccanherald.com/india/karnataka/karnataka-governments-five-guarantees-delivered-impactful-measurable-change-congress-3751180", sourceName: "Deccan Herald", sourceHeading: "Karnataka government's five guarantees delivered impactful, measurable change" },
      { text: "Increase strength of Electric Buses so that within 2 years 50% are Electricity operated.", status: "Evaded", link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 481: 4,000 electric buses being inducted under KEBP in 2026-27 — a full year after the May 2025 deadline. Fleet is nowhere near 50% electric by the committed 2-year mark; the government adopted a longer multi-year approach instead" },
      { text: "Encourage E-vehicles - compulsory installation of Charging points in apartments/Highways.", status: "Pending", link: "N/A" },
      { text: "Increase the fleet strength of BMTC to 10000 in five years.", status: "Pending", link: "N/A" },
      { text: "Increase the KSRTC fleet to 15000 Busses in five years.", status: "In Progress", link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 480: 6,596 buses provided to State Road Transport Corporations over last 3 years; 1,000 more diesel buses in 2026-27. Para 481: 4,000 additional electric buses under Karnataka Electric Bus Program (KEBP)" },
      { text: "Launch a rural minibus program in collaboration with public participation.", status: "Pending", link: "N/A" },
      { text: "Stop mining Mafia and make suitable changes to mining laws.", status: "Pending", link: "N/A" }
    ]
  },
  {
    id: "edu-health", icon: "📚",
    title: "Education, Health & Food",
    subtitle: "Schools · Healthcare · Hospitals · Anna Bhagya · Canteens",
    items: [
      { text: "ANNABHAGYA - 10 kgs of free rice supply per person.", status: "Fulfilled", link: "https://www.deccanherald.com/india/karnataka/karnataka-budget-2025-key-takeaways-3436976", sourceName: "Deccan Herald", sourceHeading: "Karnataka Budget 2025: Key takeaways" },
      {
        text: "Rejuvenate existing Indira Canteens and extend them throughout the state.",
        status: "In Progress",
        updates: [
          { link: "https://www.deccanherald.com/india/karnataka/bengaluru/indira-canteen-govt-gives-approval-to-float-fresh-tenders-1235823.html", sourceName: "Deccan Herald", sourceHeading: "Indira Canteen: Govt gives approval to float fresh tenders and create infrastructure for 50 new canteens (July 2023)" },
          { link: "https://www.deccanherald.com/india/karnataka/cm-siddaramaiah-to-strengthen-indira-canteen-network-will-inaugurate-184-more-3555823", sourceName: "Deccan Herald", sourceHeading: "CM inaugurates 9 new Indira Canteens in Mysuru; announces 184 more statewide (May 2025)" },
          { link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 316: 4 'Vidyarthi Indira Canteens' for students in Dharwad + 2 in Bengaluru — statewide extension continues" }
        ]
      },
      { text: "Fill up all the vacancies of teachers and staff in Government Schools within one year.", status: "Evaded", link: "https://prsindia.org/budgets/states/karnataka-budget-analysis-2026-27", sourceName: "PRS India", sourceHeading: "Karnataka Budget 2026-27: 15,000 teacher posts being filled in year 2026-27. However, the specific 'within one year' deadline (May 2024) was not met — formal recruitment initiated 3 years after the promise" },
      { text: "Regulate the fees in the schools and to reduce the fees of BPL Students.", status: "Pending", link: "N/A" },
      { text: "Restore true values of Bharath/Karnataka (Kuvempu, Basavanna) in text books.", status: "Fulfilled", link: "https://www.newindianexpress.com/states/karnataka/2024/Mar/06/karnataka-govt-releases-textbook-revision-report-for-2024-25", sourceName: "New Indian Express", sourceHeading: "Karnataka govt releases textbook revision report for 2024-25" },
      { text: "Establish Karnataka State Educational Financial Corporation (Rs. 2000 Crores).", status: "Pending", link: "N/A" },
      { text: "Increase the income limit from Rs. 3.5 lakhs to Rs. 5 Lakhs under RTE Act.", status: "Pending", link: "N/A" },
      { text: "Upgrade 2500 Government Schools as smart schools in the state.", status: "Pending", link: "N/A" },
      { text: "Bear college fee of 10% of government school merit students for MBBS/IIT/IIM.", status: "Pending", link: "N/A" },
      { text: "Fill up vacancies of staff and doctors in all Government Hospitals.", status: "In Progress", link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 156: '2,500 vacant posts in the Health Department will be filled up' in 2026-27" },
      { text: "Establish fully equipped trauma centre in every 100 KMs on national highways.", status: "Pending", link: "N/A" },
      {
        text: "Extend Rashtriya Swasthya Bhima Yojna to gig workers.",
        status: "In Progress",
        updates: [
          { link: "https://prsindia.org/bills/states/the-karnataka-platform-based-gig-workers-social-security-and-welfare-bill-2025", sourceName: "PRS India", sourceHeading: "The Karnataka Platform-based Gig Workers (Social Security and Welfare) Bill, 2025" }
        ]
      },
      { text: "Establish 10 Kasturba Aushadha Kendras in each Taluk.", status: "Pending", link: "N/A" },
      {
        text: "Establish Jayadeva/Kidwai/NIMHANS type Hospitals in each revenue Division.",
        status: "In Progress",
        updates: [
          { link: "https://www.thenewsminute.com/karnataka/karnataka-budget-2025-govt-allocates-rs-320-cr-to-reduce-maternal-mortality", sourceName: "The News Minute", sourceHeading: "Karnataka Budget 2025-26: NIMHANS-modelled institutes allocated Rs 100 crore each in Mysuru and Kalaburagi; Kidwai Peripheral Cancer Unit at Raichur (Rs 50 crore); buildings under construction" }
        ]
      },
      { text: "Puneeth Rajkumar Heart Health Scheme (subsidy to buy AED).", status: "Pending", link: "N/A" }
    ]
  },
  {
    id: "social-welfare", icon: "⚖",
    title: "Social Welfare & Housing",
    subtitle: "SC/ST/OBC · Minorities · Women · Workers · Elderly",
    items: [
      { text: "House to each family.", status: "In Progress", link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 12: Govt giving priority to providing houses for homeless. Para 237: New target of 1 lakh BLC houses to be sanctioned; subsidy raised for SC/ST beneficiaries" },
      { text: "Ensure all homeless families have a dwelling house within 5 years.", status: "In Progress", link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 12: Housing for homeless is government priority. Para 1721: Housing being provided to 6,257 homeless tribal families. Para 237: 1 lakh BLC houses target" },
      { text: "Waive off all Housing Loans under various Government Housing Schemes.", status: "Pending", link: "N/A" },
      { text: "Increase State Government subsidy of Rs. 3.5 lakhs to housing projects.", status: "Pending", link: "N/A" },
      { text: "Increase the ceiling and reservation from 50% to 75%.", status: "Pending", link: "N/A" },
      { text: "Release the Socio-Economic caste censes conducted by the congress government.", status: "Evaded", link: "https://thefederal.com/category/states/south/karnataka/karnataka-cabinet-approves-new-caste-census-scraps-kantharaj-report-191713", sourceName: "The Federal", sourceHeading: "Karnataka Cabinet approves new Caste Census amid internal opposition" },
      { text: "Present report of Justice Sadashiva Commission and get justice to sub-groups.", status: "Fulfilled", link: "https://www.thehindu.com/news/national/karnataka/karnataka-internal-quota-cabinet-clears-sub-classification-within-15-for-scs/article70902436.ece", sourceName: "The Hindu", sourceHeading: "Karnataka internal quota: Cabinet clears sub-classification within 15% for Scheduled Castes" },
      { text: "Provide house to all SC/ST families in the next five years.", status: "In Progress", link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 237: SC/ST housing subsidy specifically increased from Rs 2 lakh to Rs 3 lakh under BLC housing schemes; 1 lakh new houses to be sanctioned" },
      { text: "Subsidy/loan with 3% interest to 25,000 SC/ST youth under Airavata Scheme.", status: "Pending", link: "N/A" },
      { text: "Take action to fill all the backlog vacancies within one year.", status: "Pending", link: "N/A" },
      { text: "Rs. 1000 Crore Dr Bhimrao Ramji Ambedkar Entrepreneurship Fund.", status: "Pending", link: "N/A" },
      { text: "Smt. Savitri Bai Pule Education Scheme (Monthly incentives for students).", status: "Pending", link: "N/A" },
      { text: "Open Literature, cultural and Arts academy for SC/ST, Nomedic, OBC Category-I.", status: "Pending", link: "N/A" },
      { text: "100% housing/jobs for youths belonging to Pambada, Nalike, Parava, Kudbi.", status: "Pending", link: "N/A" },
      { text: "Increase Bhagya Lakshmi scheme maturity amount to Rs. 3 Lakhs for SC/ST.", status: "Pending", link: "N/A" },
      { text: "Establish 100 Aranya Kendras in tribal areas.", status: "Pending", link: "N/A" },
      { text: "Construct 50 new Ekalavya residential schools in the next five years.", status: "Pending", link: "N/A" },
      { text: "Send 100 leather-based traditional artisans abroad for better training.", status: "Pending", link: "N/A" },
      { text: "Rs 5000 crore Socio-economic welfare Fund for OBC communities.", status: "Pending", link: "N/A" },
      { text: "Establish Brahmashri Narayana Guru Development Corporation.", status: "In Progress", link: "https://www.deccanherald.com/india/karnataka/karnataka-budget-2025-key-takeaways-3436976", sourceName: "Deccan Herald", sourceHeading: "Karnataka Budget 2025: Key takeaways" },
      { text: "Establish Micro Backward Comminutes Development Corporation.", status: "Pending", link: "N/A" },
      { text: "Development Corporations for Tigala, Madiwala, Savitha, Uppara, Balija communities.", status: "Pending", link: "N/A" },
      { text: "Increase the grants to all development Corporations and Boards.", status: "In Progress", link: "https://prsindia.org/budgets/states/karnataka-budget-analysis-2026-27", sourceName: "PRS India", sourceHeading: "Karnataka Budget 2026-27: Rs 1,500 crore allocated to corporations of SC, ST, BC & Minority Welfare — a direct budget allocation increasing grants to development bodies" },
      { text: "Provide collateral-free loans up to 10 lakhs at 3% interest to 50,000 OBC entrepreneurs.", status: "Pending", link: "N/A" },
      { text: "Scholarships to 1000 SC/ST/OBC students securing PG seat at foreign universities.", status: "Pending", link: "N/A" },
      { text: "Enhance monthly fellowships to Rs 10,000 for backward class PhD students.", status: "Pending", link: "N/A" },
      { text: "Establish Tigala Development Board.", status: "Pending", link: "N/A" },
      { text: "Comprehensive plan for the total development of Category-I communities.", status: "Pending", link: "N/A" },
      { text: "Establish Alemari Budakattu Board with Rs. 1,000 crores.", status: "Pending", link: "N/A" },
      { text: "Provide Rs. 30,000 per annum to weavers with spinning wheels.", status: "Pending", link: "N/A" },
      { text: "GRUHA LAKSHMI project - Rs 2000 Every month to women head of the family.", status: "Fulfilled", link: "https://prsindia.org/budgets/states/karnataka-budget-analysis-2024-25", sourceName: "PRS India", sourceHeading: "Karnataka Budget Analysis 2024-25" },
      { text: "Support 5,000 women entrepreneurs every year.", status: "Pending", link: "N/A" },
      { text: "Increase allocation of funds to Stree Shakthi Sanghas.", status: "Pending", link: "N/A" },
      { text: "Nurture 5000 Stree Shakti micro-enterprises over 5 years.", status: "Pending", link: "N/A" },
      { text: "Provide Rs. 50 lakhs grant to Grama Panchayaths which elect women Chairperson.", status: "Pending", link: "N/A" },
      { text: "50% subsidy on buying electric scooters to ANM, Anganwadi and ASHA workers.", status: "Pending", link: "N/A" },
      { text: "Increase minority welfare allocation to Rs. 10,000 Cr.", status: "Pending", link: "N/A" },
      { text: "Allot Rs. 15 crores to start Kashmiri Culture Centre.", status: "Pending", link: "N/A" },
      { text: "Establish a Mangalamukhi Welfare Board by allotting Rs. 200 crores annually.", status: "Pending", link: "N/A" },
      { text: "Self-employment grants upto Rs. 2 lakhs to all Gender Minorities.", status: "Pending", link: "N/A" },
      { text: "Regularise all 25,000 Pourakarmikas with facilities.", status: "Pending", link: "N/A" },
      { text: "Offer Hazardous pay to Pourakarmikas.", status: "Pending", link: "N/A" },
      { text: "Insurance cover of Rs. 10 Lakh to each Pourakarmika.", status: "Pending", link: "N/A" },
      { text: "Set up Auto Drivers' Board and Taxi Drivers' Welfare Board.", status: "Pending", link: "N/A" },
      { text: "Develop hawker zones and provide financial assistance of Rs. 20,000 to street vendors.", status: "Pending", link: "N/A" },
      {
        text: "Establish a Gig Workers' Welfare Board with Rs. 3,000 Crs seed money.",
        status: "Fulfilled",
        updates: [
          { link: "https://www.thehindu.com/news/national/karnataka/karnataka-constitutes-gig-workers-welfare-board/article70555787.ece", sourceName: "The Hindu", sourceHeading: "Karnataka constitutes Gig Workers' Welfare Board" },
          { link: "https://www.thehindu.com/news/cities/bangalore/karnataka-notifies-1-welfare-fee-to-be-collected-from-aggregators-for-social-security-of-gig-workers/article70640028.ece", sourceName: "The Hindu", sourceHeading: "Karnataka notifies 1% welfare fee to be collected from aggregators for social security of gig workers" }
        ]
      },
      { text: "Create Sharavana Kumara Senior citizens welfare fund - Rs. 1,000 Crore.", status: "Pending", link: "N/A" },
      { text: "Offer free Pilgrimage to holy places once in two years.", status: "Pending", link: "N/A" },
      { text: "Increase one-time subsidy for pilgrimages to Kashi, Mathura, Kailash Mansarovar.", status: "Pending", link: "N/A" },
      { text: "Provide Rs. 3 lakhs interest-free loan to disabled women for self-employment.", status: "Pending", link: "N/A" },
      { text: "Create Rs 50 Crore \"Vidhya Deepa Nidhi\" disabled youth scholarship fund.", status: "Pending", link: "N/A" },
      { text: "Provide free bus pass and to one accompanying person.", status: "Pending", link: "N/A" },
      { text: "Set up Karnataka Institute of Speech and Hearing.", status: "Pending", link: "N/A" },
      { text: "Establish Field Marshal General Kariappa Ex-servicemen Development Board.", status: "Pending", link: "N/A" },
      { text: "Push for ONE RANK ONE PENSION for Ex-Servicemen.", status: "Pending", link: "N/A" },
      { text: "Special scheme for providing land, house to ex-servicemen.", status: "Pending", link: "N/A" },
      { text: "Establishment of a Journalist Welfare Fund with seed money of Rs. 500 Crores.", status: "Pending", link: "N/A" },
      { text: "Assist establishing Advocate Bhavans in Corporation, cities and District Headquarters.", status: "Pending", link: "N/A" },
      { text: "Create a separate Ministry to take care of the affairs of NRI Kannadigas.", status: "Pending", link: "N/A" },
      { text: "Create revolving fund of Rs. 1000 Crs for NRI setting up industries.", status: "Pending", link: "N/A" }
    ]
  },
  {
    id: "youth-sports", icon: "🎓",
    title: "Youth, Employment & Sports",
    subtitle: "Jobs · Competitive Exams · Sports University",
    items: [
      { text: "YUVANIDHI - 'Unemployment Allowance' of Rs. 3000 to graduates.", status: "Fulfilled", link: "https://en.wikipedia.org/wiki/Yuva_Nidhi", sourceName: "Wikipedia / Govt of Karnataka", sourceHeading: "Yuva Nidhi — officially launched 12 January 2024; Rs 3,000/month for graduates, Rs 1,500 for diploma holders; administered via Seva Sindhu portal" },
      { text: "Establish Bharatha Ratna CNR Fund with 500 crores corpus for scientific research.", status: "Pending", link: "N/A" },
      { text: "Provide free bus passes/train tickets to candidates taking competitive exams.", status: "Pending", link: "N/A" },
      { text: "Ensure 80% jobs in Karnataka to local people in Public and Private Sector.", status: "Pending", link: "N/A" },
      { text: "Constitute a Youth Commission.", status: "Pending", link: "N/A" },
      { text: "Allot Rs. 2000 crores per year for sports.", status: "Pending", link: "N/A" },
      { text: "Identify 1,000 budding Sports talents every year and provide financial assistance.", status: "Pending", link: "N/A" }
    ]
  },
  {
    id: "culture", icon: "🎭",
    title: "Language, Literature, Tradition & Culture",
    subtitle: "Kannada · Kuvempu · Temples · Muzrai",
    items: [
      { text: "Develop Kuppalli (Rastra Kavi Kuvempu birthplace) as a nature tourist center.", status: "Pending", link: "N/A" },
      { text: "Encourage Kannada Language in 63 Border Taluks (Rs. 200 crores).", status: "Pending", link: "N/A" },
      { text: "Start Kuvempu Sahithya Puraskara Abhiyana to promote 500 young poets.", status: "Pending", link: "N/A" },
      { text: "Set up the Aluru Venkata Rao Fund (Rs 100 Crore) to promote Kannada digitally.", status: "Pending", link: "N/A" },
      { text: "Release Rs. 100 crores to establish Basavapatha in Kudalasangama.", status: "Pending", link: "N/A" },
      { text: "Build state-of-the-art museum/theme park dedicated to Veera Madakari Nayaka.", status: "Pending", link: "N/A" },
      { text: "Create Rs 500 Crore Thayi Bhuvaneshwari Monuments Fund.", status: "Pending", link: "N/A" },
      { text: "Revive and develop Bhuvanagiri in Siddapur taluk as a tourist destination.", status: "Pending", link: "N/A" },
      { text: "Bring out all Mahakavyas of Kannada Literature in digital form in Gamaka format.", status: "Pending", link: "N/A" },
      { text: "Adi Shankaracharya Adhyayana Yojane to study Samskrith Literature.", status: "Pending", link: "N/A" },
      { text: "Aid and strengthen minority languages like Pali, Prakrit, Tulu, Konkani, etc.", status: "Pending", link: "N/A" },
      { text: "Establish Yakshagana Pradhikara with Rs. 25 Crs annual grants.", status: "Pending", link: "N/A" },
      { text: "Scheme to provide economic security to artists of Yakshagana, Kambala, etc.", status: "Pending", link: "N/A" },
      { text: "Create a freedom memorial/theme park at Belgavi.", status: "Pending", link: "N/A" },
      { text: "Set up Festival Authority of Karnataka.", status: "Pending", link: "N/A" },
      { text: "Set up Shivaram Karantha Literature Fund of Rs. 100 Crore.", status: "Pending", link: "N/A" },
      { text: "Cash prize to students who score 100% in Kannada in 10th exam.", status: "Pending", link: "N/A" },
      { text: "Publish book on Karnataka's history \"Hemmeya Beedu Namma Karunadu\".", status: "Pending", link: "N/A" },
      { text: "Da Ra Bendre Kannada Bhasha Adhyayana Puraskara Nidhi for PhDs.", status: "Pending", link: "N/A" },
      { text: "Double the money awarded to poets/authors under Rajyotsava/Pampa Awards.", status: "Pending", link: "N/A" },
      { text: "Nrupatunga Kannada Sahithya Puraskara Abhiyana.", status: "Pending", link: "N/A" },
      { text: "Establish Adhyayana Peethas in various universities.", status: "Pending", link: "N/A" },
      { text: "Increase funding to Hampi Kannada University.", status: "Pending", link: "N/A" },
      { text: "Dedicated fund \"Shasana samshodhana mattu samrakshana Nidhi\" (Rs 100 Crore).", status: "Pending", link: "N/A" },
      { text: "Rs 500 Crore Subbiah Naidu Kalabhivruddhi Nidhi for ethnic art forms.", status: "Pending", link: "N/A" },
      { text: "Organize Mega cultural festival \"Karnataka Arunodaya Samavesha\".", status: "Pending", link: "N/A" },
      { text: "Rs 30 Crore \"C Ashwath Music Fellowship Fund\".", status: "Pending", link: "N/A" },
      { text: "Rs 10,000 honorarium per month to all senior folk artists.", status: "Pending", link: "N/A" },
      { text: "Get Tulu language declared as Adhikritha Bhashe.", status: "Pending", link: "N/A" },
      { text: "Provide Rs. 1 crore grant for the development of Kodava Culture.", status: "Pending", link: "N/A" },
      { text: "Separate special Pooja Nidhi for neglected temples.", status: "Pending", link: "N/A" },
      { text: "Increase monthly grants to Muzarai temples.", status: "Pending", link: "N/A" },
      { text: "Set up a \"Dharmika Nidhi,\" fund of Rs 1,000 Crore.", status: "Pending", link: "N/A" },
      { text: "Provide Rs 5,000 honorarium to senior priests via Archaka Gowrava Nidhi Scheme.", status: "Pending", link: "N/A" },
      { text: "Increase allowances to small rural temples.", status: "Pending", link: "N/A" },
      { text: "Grant of up to Rs. 20,000 to all Grama Devathe Festivals.", status: "Pending", link: "N/A" }
    ]
  },
  {
    id: "regional", icon: "🗺",
    title: "Regional Development",
    subtitle: "Kalyana · Kitturu · Karavali · Malnad · Hale Mysuru",
    items: [
      { text: "Reserve Rs. 5,000 Crores every year for Kalyana Karnataka.", status: "In Progress", link: "https://prsindia.org/budgets/states/karnataka-budget-analysis-2024-25", sourceName: "PRS India", sourceHeading: "Karnataka Budget Analysis 2024-25" },
      { text: "Establish a textile park at Bellary with Rs. 5000 Cr.", status: "Pending", link: "N/A" },
      { text: "Special package for de-silting of Tungabhadra Dam.", status: "In Progress", link: "https://www.deccanchronicle.com/nation/current-affairs/karnataka-speeds-up-efforts-for-supplementary-project-across-tb-882837", sourceName: "Deccan Chronicle", sourceHeading: "Budget 2024-25 allocated Rs 158 crore for DPR; Deputy CM DK Shivakumar announced Navali Balancing Reservoir plan to address siltation and restore 31 TMC lost storage capacity" },
      { text: "Grant 1 crore to every gram panchayat for development.", status: "Pending", link: "N/A" },
      { text: "Establish 100 PUC and one Women's Degree College in Kalyana Karnataka.", status: "Pending", link: "N/A" },
      { text: "Fill up of all vacancies in Kalayana Karnataka Region.", status: "Pending", link: "N/A" },
      { text: "Mother and Child Special Hospital/Trauma centres in 41 Constituencies.", status: "In Progress", link: "https://medicaldialogues.in/state-news/karnataka/karnataka-budget-2025-healthcare-upgrades-medical-education-boost-here-are-the-highlights-144780", sourceName: "Medical Dialogues", sourceHeading: "Budget 2025-26: Trauma care centres formally announced at Badami and Chitradurga; Mother & Child Hospital (Rs 92 crore) in Kalaburagi; Rs 873 crore Kalyana Karnataka Comprehensive Health Scheme" },
      { text: "Build 2500 new classrooms and fill up all vacancies of teachers.", status: "In Progress", link: "https://prsindia.org/budgets/states/karnataka-budget-analysis-2026-27", sourceName: "PRS India", sourceHeading: "Karnataka Budget 2026-27: Formal process initiated to fill 15,000 teacher vacancies (teacher portion); new classroom construction not yet specifically confirmed" },
      { text: "Convert Kalaburagi-siraguppa-Ballary Highway into 6-lane \"Suvarna Heddari\".", status: "Pending", link: "N/A" },
      { text: "Grant to Kannada schools in bordering region of Maharashtra.", status: "Pending", link: "N/A" },
      { text: "Form Mahadayi Irrigation Development Corporation exclusively for the region.", status: "Pending", link: "N/A" },
      { text: "Set up 500-bed super-speciality hospitals in Karwar, Dharwad, Vijayapura.", status: "In Progress", link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 162: Super-speciality hospitals to be established at Karwar and Yadgir at Rs 100 crore each. Note: Dharwad and Vijayapura not yet confirmed in this budget." },
      { text: "Set up one 'pulses and dal procurement centre' in every district.", status: "Pending", link: "N/A" },
      { text: "6 lane all weather roads connecting Karwar port.", status: "Pending", link: "N/A" },
      { text: "Establish Brahmashri Narayana Guru Nigama with Rs. 500 Crs.", status: "Pending", link: "N/A" },
      { text: "Construct Amara Sullia Raithara Horata Bhavana.", status: "Pending", link: "N/A" },
      { text: "Reserve Rs. 100 crores to solve Yellow Leaf decease of Arecanut.", status: "Pending", link: "N/A" },
      { text: "Frame New Western Ghat Policy for Forest and Environmental protection.", status: "Pending", link: "N/A" },
      { text: "Coastal Beach Tourism Authority.", status: "Pending", link: "N/A" },
      { text: "Mangaluru internationally competitive IT centre and IT Park.", status: "In Progress", link: "https://www.deccanherald.com/india/karnataka/karnataka-budget-2025-key-takeaways-3436976", sourceName: "Deccan Herald", sourceHeading: "Budget 2025-26: KEONICS to establish Global Technology Centre (plug-and-play facility) in Mangaluru; startup ecosystem specifically expanded to Mangaluru under IT Policy 2025-30" },
      { text: "Programmes for overall development of fishermen community.", status: "In Progress", link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 74: Fisheries kit rates doubled (Rs 10,000 → Rs 20,000). Para 75: Centre of Excellence at Mangalore Fisheries College. Para 77: Fish markets in coastal districts. Para 78: Rs 20 crore for fishing roads." },
      { text: "Upgrade NHs through Shiradi, Charmadi into 6 lane NHs connecting Mangaluru.", status: "Pending", link: "N/A" },
      { text: "Develop Sasihitlu Sea Shore as International Surfing Centre.", status: "Pending", link: "N/A" },
      { text: "Provide a Permanent dredging Machine to Mangaluru Fisheries Port.", status: "Pending", link: "N/A" },
      { text: "Set up two Fish Processing Parks in coastal districts.", status: "Pending", link: "N/A" },
      { text: "Invest Rs. 5000 crores for development of Mysuru Karnataka.", status: "Pending", link: "N/A" },
      { text: "Construct new ring road to Mandya.", status: "Pending", link: "N/A" },
      { text: "Rejuvenate Mysugar Factory in Mandya.", status: "In Progress", link: "https://www.chinimandi.com/mandya-mysugar-faces-technical-issues/", sourceName: "ChiniMandi", sourceHeading: "Congress government released Rs 50 crore to revive Mysugar Factory; factory crushed 2,41,000 MT of sugarcane in the following season after years of closure" },
      { text: "Build international standard Dr. Raj Kumar Film City in Mysuru.", status: "In Progress", link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 457: Revised administrative approval accorded; scope expanded to include theme park, star hotels and restaurants; Transaction Advisor has been appointed — formal procurement step" },
      { text: "Start an exclusive Sports University in Mysuru.", status: "Pending", link: "N/A" }
    ]
  },
  {
    id: "bengaluru", icon: "🏙",
    title: "Namma Bengaluru",
    subtitle: "BBMP · Traffic · Metro · Sub-urban Rail",
    items: [
      { text: "Enact comprehensive legislation for the management of BBMP.", status: "In Progress", link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 294: Greater Bengaluru Authority and Five City Corporations formally established — constitutes comprehensive governance reform of Bengaluru's civic management" },
      { text: "Construct North South, South-east long elevated flyovers.", status: "In Progress", link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 306: North-South Corridor (Hebbal to HSR Layout) and East-West Corridor (KR Puram to Mysore Road) — 40 km of tunnel/elevated roads approved at Rs 40,000 crore; tenders invited for Phase-1. Para 307: BDA to build Elevated Road Hebbal–Mekhri at Rs 2,250 crore" },
      { text: "Get all pending metro projects completed.", status: "In Progress", link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 301-302: Namma Metro network at 96 km; 41 km of additional metro lines targeted for completion in 2026-27 alone; benefiting ~15 lakh daily commuters" },
      { text: "Establish Mega Bengaluru Planning Committee.", status: "Fulfilled", link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 294: 'The Greater Bengaluru Authority and the Five Corporations have been established' — directly constitutes the mega planning and governance body for Bengaluru" },
      { text: "Construction of tunnel roads in CBD area on PPP Model.", status: "In Progress", link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 306: North-South Corridor (17 km, Rs 17,780 crore) approved on BOOT model — tenders already invited. East-West Corridor also approved. BOOT is equivalent to PPP model." },
      { text: "Take-up on priority suburban railway project.", status: "In Progress", link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 342: Corridor-2 land acquisition complete, construction in progress. Corridor-4 land acquisition underway. Both targeted for completion Dec 2030. Rs 500 crore allocated in 2026-27." },
      { text: "Policy to develop residential/commercial infrastructure around outer ring roads.", status: "Pending", link: "N/A" },
      { text: "Rename slums as Workers' Residential Zones and give ownership titles.", status: "Pending", link: "N/A" },
      { text: "Seamless integration of Namma Metro and Public Transportation Systems.", status: "Pending", link: "N/A" },
      { text: "Constitute a 'Maha Bengaluru Samsthan'.", status: "In Progress", link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 294: Greater Bengaluru Authority (GBA) formally established with Five City Corporations — a metropolitan body serving the same purpose as the promised Samsthan" },
      { text: "Add 5000 new electric buses to BMTC's fleet.", status: "In Progress", link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 481: Karnataka Electric Bus Program (KEBP) — Rs 2,000 crore with World Bank; 4,000 electric buses to be inducted; 32 BMTC depots specifically being developed. Note: 4,000 of the promised 5,000 confirmed." },
      { text: "Introduce e-rickshaws in Bengaluru.", status: "Pending", link: "N/A" },
      { text: "Install public charging/battery swapping points at metro/bus stands.", status: "In Progress", link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 325: 1,250 Electric Vehicle charging stations to be established in public places at Rs 777 crore under PM-E drive scheme" },
      { text: "Provide free bus passes to BBMP pourakarmikas.", status: "Pending", link: "N/A" },
      { text: "Complete peripheral ring road and outer ring road projects.", status: "In Progress", link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 305: Bengaluru Business Corridor Phase-1 (73 km) — land acquisition progressing, 4-year completion target. Para 308: Nelamangala-Tavarekere-Bidadi Intermediate Ring Road under construction. ORR Silk Board-KR Puram upgraded at Rs 450 crore." },
      { text: "Approve the updated Master Plan 2042.", status: "In Progress", link: "https://finance.karnataka.gov.in/uploads/Eng%20Final%20BS%202026-27_1772786310.pdf", sourceName: "Karnataka Budget Speech 2026-27", sourceHeading: "Para 300: 'Revised Master Plan-2041 (RMP) for Bengaluru will be implemented by the end of 2027. Additionally, a Comprehensive Mobility Plan (CMP) will be prepared within six months.'" },
      { text: "Implement Karnataka Apartment Ownership Act to ensure whole property conveyance.", status: "Pending", link: "N/A" }
    ]
  }
];
