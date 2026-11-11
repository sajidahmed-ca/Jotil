export interface Service {
  id: string;
  name: string;
  nameBn: string;
  icon: string;
  active: boolean;
  category: string;
  shortDescription: string;
  description: string;
  descriptionBn: string;
  reportsCount: number;
  avgDays: number;
  avgVisits: number;
  costRange: string;
  costRangeBn: string;
  difficultyScore: number;
  difficultyLabel: 'Easy' | 'Moderate' | 'Hard';
  topProblems: Problem[];
  officialSteps: string[];
  communityReality: string[];
  regionalComparison: Region[];
  experiences: Experience[];
  officialInfo: OfficialInfo;
}

export interface Problem {
  label: string;
  labelBn: string;
  percentage: number;
}

export interface Region {
  name: string;
  nameBn: string;
  difficulty: number;
  avgCost: string;
  avgVisits: number;
  avgDays: number;
}

export interface Experience {
  id: number;
  region: string;
  regionBn: string;
  date: string;
  cost: number;
  visits: number;
  clarityScore: number;
  difficultyScore: number;
  problems: string[];
  comment: string;
  dateBn: string;
}

export interface OfficialInfo {
  requiredDocs: string[];
  requiredDocsBn: string[];
  steps: string[];
  stepsBn: string[];
  fee: string;
  feeBn: string;
  processingTime: string;
  processingTimeBn: string;
}

export const services: Service[] = [
  {
    id: 'trade-license',
    name: 'Trade License',
    nameBn: 'ট্রেড লাইসেন্স',
    icon: 'FileText',
    active: true,
    category: 'Business',
    shortDescription: 'Obtain or renew a trade license for your business.',
    description: 'Obtain or renew a trade license for your business from the local municipality.',
    descriptionBn: 'স্থানীয় পৌরসভা থেকে আপনার ব্যবসার জন্য ট্রেড লাইসেন্স অর্জন বা নবীকরণ করুন।',
    reportsCount: 243,
    avgDays: 8,
    avgVisits: 2.6,
    costRange: 'BDT 1,200 – BDT 2,500',
    costRangeBn: '৳১,২০০ – ৳২,৫০০',
    difficultyScore: 62,
    difficultyLabel: 'Moderate',
    topProblems: [
      { label: 'Long waiting time at office', labelBn: 'অফিসে দীর্ঘ অপেক্ষার সময়', percentage: 78 },
      { label: 'Unclear document requirements', labelBn: 'অস্পষ্ট নথির প্রয়োজনীয়তা', percentage: 65 },
      { label: 'Hidden additional fees', labelBn: 'লুকানো অতিরিক্ত ফি', percentage: 58 },
      { label: 'Staff unhelpful or absent', labelBn: 'কর্মচারী সহায়ক নন বা অনুপস্থিত', percentage: 45 },
      { label: 'Need multiple visits', labelBn: 'একাধিক পরিদর্শনের প্রয়োজন', percentage: 41 },
      { label: 'Application delayed without reason', labelBn: 'কারণ ছাড়াই আবেদন বিলম্বিত', percentage: 37 },
    ],
    officialSteps: [
      'Gather required documents (NID, TIN, trade details)',
      'Visit the local municipality office',
      'Submit application with prescribed fees',
      'Wait for verification (3–7 days)',
      'Collect your trade license',
    ],
    communityReality: [
      'Most people need 2–3 visits due to unclear document requirements',
      'Hidden fees are common — staff may ask for "processing charges" not on the official list',
      'Waiting times can exceed 2–3 hours at busy municipality offices',
      'Online application portals often have outdated information',
      'Rural offices tend to be faster but less transparent about fees',
    ],
    regionalComparison: [
      { name: 'Dhaka', nameBn: 'ঢাকা', difficulty: 68, avgCost: 'BDT 2,100', avgVisits: 3.0, avgDays: 9 },
      { name: 'Chattogram', nameBn: 'চট্টগ্রাম', difficulty: 63, avgCost: 'BDT 1,800', avgVisits: 2.8, avgDays: 8 },
      { name: 'Gazipur', nameBn: 'গাজীপুর', difficulty: 65, avgCost: 'BDT 1,900', avgVisits: 2.9, avgDays: 8 },
      { name: 'Sylhet', nameBn: 'সিলেট', difficulty: 56, avgCost: 'BDT 1,500', avgVisits: 2.3, avgDays: 7 },
    ],
    experiences: [
      {
        id: 1, region: 'Dhaka', regionBn: 'ঢাকা', date: '2026-08-10', dateBn: '১০ আগস্ট, ২০২৬',
        cost: 2200, visits: 3, clarityScore: 3, difficultyScore: 72,
        problems: ['Long wait', 'Hidden fees'],
        comment: 'Had to visit 3 times. First visit they said missing a document, second time they asked for additional fee not listed anywhere. Very frustrating experience.',
      },
      {
        id: 2, region: 'Chattogram', regionBn: 'চট্টগ্রাম', date: '2026-07-25', dateBn: '২৫ জুলাই, ২০২৬',
        cost: 1800, visits: 2, clarityScore: 4, difficultyScore: 55,
        problems: ['Unclear requirements'],
        comment: 'Reasonably smooth. Only issue was the document checklist was outdated on the website. In person, they were helpful.',
      },
      {
        id: 3, region: 'Gazipur', regionBn: 'গাজীপুর', date: '2026-08-01', dateBn: '১ আগস্ট, ২০২৬',
        cost: 1900, visits: 3, clarityScore: 2, difficultyScore: 65,
        problems: ['Long wait', 'Multiple visits', 'Staff unhelpful'],
        comment: 'Very chaotic. No clear queue system. Staff told me to come back tomorrow without giving a specific reason.',
      },
      {
        id: 4, region: 'Sylhet', regionBn: 'সিলেট', date: '2026-07-18', dateBn: '১৮ জুলাই, ২০২৬',
        cost: 1400, visits: 2, clarityScore: 4, difficultyScore: 48,
        problems: ['Unclear requirements'],
        comment: 'Not bad overall. The online form was helpful but some fields were confusing. In-person experience was decent.',
      },
      {
        id: 5, region: 'Dhaka', regionBn: 'ঢাকা', date: '2026-08-15', dateBn: '১৫ আগস্ট, ২০২৬',
        cost: 2500, visits: 4, clarityScore: 2, difficultyScore: 80,
        problems: ['Long wait', 'Hidden fees', 'Multiple visits', 'Staff unhelpful'],
        comment: 'Worst experience. The office was overcrowded. Each time I visited, they asked for something different. Felt like there is no standard process.',
      },
    ],
    officialInfo: {
      requiredDocs: [
        'National ID Card (NID)',
        'TIN Certificate',
        'Trade details & business address',
        'Tax clearance (if renewal)',
      ],
      requiredDocsBn: [
        'জাতীয় পরিচয়পত্র (NID)',
        'টিআইএন সার্টিফিকেট',
        'ব্যবসার বিবরণ ও ঠিকানা',
        'ট্যাক্স ক্লিয়ারেন্স (নবীকরণের ক্ষেত্রে)',
      ],
      steps: [
        'Gather required documents',
        'Visit the local municipality office',
        'Submit application with fees',
        'Wait for verification (3–7 days)',
        'Collect your trade license',
      ],
      stepsBn: [
        'প্রয়োজনীয় নথি সংগ্রহ করুন',
        'স্থানীয় পৌরসভা অফিসে যান',
        'ফি সহ আবেদন জমা দিন',
        'যাচাইয়ের জন্য অপেক্ষা করুন (৩-৭ দিন)',
        'আপনার ট্রেড লাইসেন্স সংগ্রহ করুন',
      ],
      fee: 'BDT 800 – BDT 1,500 (varies by trade type & area)',
      feeBn: '৳৮০০ – ৳১,৫০০ (ব্যবসার ধরন ও এলাকার উপর নির্ভরশীল)',
      processingTime: '3–7 working days',
      processingTimeBn: '৩-৭ কার্যদিবস',
    },
  },
  {
    id: 'passport',
    name: 'Passport',
    nameBn: 'পাসপোর্ট',
    icon: 'BookOpen',
    active: true,
    category: 'Identity',
    shortDescription: 'Apply for a new passport or renew an existing one.',
    description: 'Apply for a new passport or renew your existing one through the Department of Immigration & Passports.',
    descriptionBn: 'নতুন পাসপোর্টের জন্য আবেদন করুন বা বিদ্যমান পাসপোর্ট নবীকরণ করুন।',
    reportsCount: 389,
    avgDays: 14,
    avgVisits: 3.2,
    costRange: 'BDT 3,000 – BDT 8,050',
    costRangeBn: '৳৩,০০০ – ৳৮,০৫০',
    difficultyScore: 74,
    difficultyLabel: 'Hard',
    topProblems: [
      { label: 'Online system crashes frequently', labelBn: 'অনলাইন সিস্টেম ঘন ঘন ক্র্যাশ করে', percentage: 82 },
      { label: 'Long processing delays', labelBn: 'দীর্ঘ প্রক্রিয়াকরণ বিলম্ব', percentage: 73 },
      { label: 'Unclear appointment scheduling', labelBn: 'অস্পষ্ট অ্যাপয়েন্টমেন্ট শিডিউলিং', percentage: 61 },
      { label: 'Biometric capture issues', labelBn: 'বায়োমেট্রিক ক্যাপচার সমস্যা', percentage: 52 },
      { label: 'Need multiple office visits', labelBn: 'একাধিক অফিস পরিদর্শনের প্রয়োজন', percentage: 48 },
      { label: 'Passport delivered with errors', labelBn: 'ভুলসহ পাসপোর্ট প্রদান', percentage: 29 },
    ],
    officialSteps: [
      'Fill out the online application form at passport.gov.bd',
      'Pay the prescribed fee via mobile banking or bank',
      'Attend biometric appointment at the passport office',
      'Submit original documents for verification',
      'Collect passport after processing (7–21 days)',
    ],
    communityReality: [
      'Online portal often crashes — try during off-peak hours (early morning)',
      'Appointment slots fill up within minutes of release — be ready at midnight',
      'At the office, expect 3–5 hour waits even with an appointment',
      'Documents may be rejected for minor formatting issues',
      'Premium express service costs significantly more but saves weeks',
    ],
    regionalComparison: [
      { name: 'Dhaka', nameBn: 'ঢাকা', difficulty: 80, avgCost: 'BDT 5,500', avgVisits: 3.5, avgDays: 16 },
      { name: 'Chattogram', nameBn: 'চট্টগ্রাম', difficulty: 72, avgCost: 'BDT 4,800', avgVisits: 3.0, avgDays: 14 },
      { name: 'Gazipur', nameBn: 'গাজীপুর', difficulty: 75, avgCost: 'BDT 5,200', avgVisits: 3.3, avgDays: 15 },
      { name: 'Sylhet', nameBn: 'সিলেট', difficulty: 68, avgCost: 'BDT 4,200', avgVisits: 2.8, avgDays: 12 },
    ],
    experiences: [
      {
        id: 1, region: 'Dhaka', regionBn: 'ঢাকা', date: '2026-08-12', dateBn: '১২ আগস্ট, ২০২৬',
        cost: 5500, visits: 3, clarityScore: 2, difficultyScore: 78,
        problems: ['Online system crash', 'Long wait', 'Multiple visits'],
        comment: 'The online portal crashed 5 times before I could submit. Got an appointment for 3 weeks later. At the office, waited 4 hours despite having an appointment.',
      },
      {
        id: 2, region: 'Chattogram', regionBn: 'চট্টগ্রাম', date: '2026-07-20', dateBn: '২০ জুলাই, ২০২৬',
        cost: 4800, visits: 2, clarityScore: 3, difficultyScore: 65,
        problems: ['Long wait'],
        comment: 'Better than Dhaka. Booked appointment online successfully. Wait time was about 2 hours. Passport arrived in 12 days.',
      },
      {
        id: 3, region: 'Gazipur', regionBn: 'গাজীপুর', date: '2026-08-05', dateBn: '৫ আগস্ট, ২০২৬',
        cost: 5200, visits: 4, clarityScore: 2, difficultyScore: 82,
        problems: ['Online system crash', 'Multiple visits', 'Document issues'],
        comment: 'Submitted application twice because the first one "got lost" in the system. Had to visit 4 times total. Took 18 days to receive.',
      },
      {
        id: 4, region: 'Sylhet', regionBn: 'সিলেট', date: '2026-07-28', dateBn: '২৮ জুলাই, ২০২৬',
        cost: 4200, visits: 2, clarityScore: 4, difficultyScore: 52,
        problems: ['Unclear requirements'],
        comment: 'Smoothest experience I have heard of. Online system worked on first try. Office staff were professional. Got passport in 10 days.',
      },
      {
        id: 5, region: 'Dhaka', regionBn: 'ঢাকা', date: '2026-08-18', dateBn: '১৮ আগস্ট, ২০২৬',
        cost: 8050, visits: 3, clarityScore: 3, difficultyScore: 70,
        problems: ['Long wait', 'High cost'],
        comment: 'Paid for express service to speed things up. Still took 9 days. The regular service reportedly takes 3+ weeks right now.',
      },
    ],
    officialInfo: {
      requiredDocs: [
        'National ID Card (NID)',
        'Birth Certificate (if applying for first time)',
        'Old passport (for renewal)',
        'Bank payment slip',
      ],
      requiredDocsBn: [
        'জাতীয় পরিচয়পত্র (NID)',
        'জন্ম নিবন্ধন (প্রথমবারের জন্য)',
        'পুরাতন পাসপোর্ট (নবীকরণের জন্য)',
        'ব্যাংক পেমেন্ট স্লিপ',
      ],
      steps: [
        'Fill out the online application at passport.gov.bd',
        'Pay the fee via mobile banking',
        'Attend biometric appointment at passport office',
        'Submit original documents for verification',
        'Collect passport after processing',
      ],
      stepsBn: [
        'passport.gov.bd-এ অনলাইন আবেদন পূরণ করুন',
        'মোবাইল ব্যাংকিংয়ের মাধ্যমে ফি পরিশোধ করুন',
        'পাসপোর্ট অফিসে বায়োমেট্রিক অ্যাপয়েন্টমেন্টে যোগাযোগ করুন',
        'যাচাইয়ের জন্য মূল নথি জমা দিন',
        'প্রক্রিয়াকরণের পরে পাসপোর্ট সংগ্রহ করুন',
      ],
      fee: 'BDT 3,000 (regular) – BDT 8,050 (express)',
      feeBn: '৳৩,০০০ (রেগুলার) – ৳৮,০৫০ (এক্সপ্রেস)',
      processingTime: '7–21 working days (depending on service type)',
      processingTimeBn: '৭-২১ কার্যদিবস (সেবার ধরনের উপর নির্ভরশীল)',
    },
  },
  {
    id: 'nid',
    name: 'NID Services',
    nameBn: 'জাতীয় পরিচয়পত্র (NID)',
    icon: 'IdCard',
    active: true,
    category: 'Identity',
    shortDescription: 'Apply for or correct your National Identity Card.',
    description: 'Apply for a new National ID card, correct existing information, or get a smart card replacement.',
    descriptionBn: 'আপনার জাতীয় পরিচয়পত্রের জন্য আবেদন করুন বা সংশোধন করুন।',
    reportsCount: 512,
    avgDays: 21,
    avgVisits: 3.8,
    costRange: 'BDT 0 – BDT 500',
    costRangeBn: '৳০ – ৳৫০০',
    difficultyScore: 69,
    difficultyLabel: 'Moderate',
    topProblems: [
      { label: 'Extremely long wait for card delivery', labelBn: 'কার্ড ডেলিভারির জন্য অত্যন্ত দীর্ঘ অপেক্ষা', percentage: 85 },
      { label: 'Information errors on printed card', labelBn: 'মুদ্রিত কার্ডে তথ্য ত্রুটি', percentage: 67 },
      { label: 'Online appointment impossible to get', labelBn: 'অনলাইন অ্যাপয়েন্টমেন্ট পাওয়া যায় না', percentage: 63 },
      { label: 'Need to visit multiple offices', labelBn: 'একাধিক অফিসে পরিদর্শনের প্রয়োজন', percentage: 54 },
      { label: 'Unclear correction process', labelBn: 'অস্পষ্ট সংশোধন প্রক্রিয়া', percentage: 47 },
      { label: 'Biometric data not captured properly', labelBn: 'বায়োমেট্রিক তথ্য সঠিকভাবে সংগ্রহ হয়নি', percentage: 31 },
    ],
    officialSteps: [
      'Register online at mirsus.gov.bd or visit local union council',
      'Submit required documents and biometric data',
      'Wait for data verification (2–4 weeks)',
      'Receive SMS notification when card is ready',
      'Collect smart NID card from the designated office',
    ],
    communityReality: [
      'Online registration portal frequently goes down or shows server errors',
      'Even with registration, getting a biometric appointment can take months',
      'Cards often arrive with spelling errors — correction requires starting over',
      'Rural offices may not have functioning biometric equipment',
      'Some people report waiting 6+ months without receiving their card',
    ],
    regionalComparison: [
      { name: 'Dhaka', nameBn: 'ঢাকা', difficulty: 74, avgCost: 'BDT 200', avgVisits: 4.0, avgDays: 24 },
      { name: 'Chattogram', nameBn: 'চট্টগ্রাম', difficulty: 70, avgCost: 'BDT 150', avgVisits: 3.5, avgDays: 22 },
      { name: 'Gazipur', nameBn: 'গাজীপুর', difficulty: 72, avgCost: 'BDT 200', avgVisits: 3.8, avgDays: 23 },
      { name: 'Sylhet', nameBn: 'সিলেট', difficulty: 65, avgCost: 'BDT 100', avgVisits: 3.2, avgDays: 18 },
    ],
    experiences: [
      {
        id: 1, region: 'Dhaka', regionBn: 'ঢাকা', date: '2026-08-08', dateBn: '৮ আগস্ট, ২০২৬',
        cost: 200, visits: 4, clarityScore: 2, difficultyScore: 78,
        problems: ['Long delivery wait', 'Multiple visits', 'Online issues'],
        comment: 'Applied online in March. Still waiting for my card in August. Visited the office 4 times and each time they say "next week".',
      },
      {
        id: 2, region: 'Chattogram', regionBn: 'চট্টগ্রাম', date: '2026-07-30', dateBn: '৩০ জুলাই, ২০২৬',
        cost: 150, visits: 3, clarityScore: 3, difficultyScore: 68,
        problems: ['Information errors', 'Multiple visits'],
        comment: 'Card arrived after 3 weeks but my father\'s name was misspelled. Now I need to apply for correction — which starts the whole process over.',
      },
      {
        id: 3, region: 'Gazipur', regionBn: 'গাজীপুর', date: '2026-08-14', dateBn: '১৪ আগস্ট, ২০২৬',
        cost: 0, visits: 5, clarityScore: 2, difficultyScore: 85,
        problems: ['Online issues', 'Multiple visits', 'Long wait'],
        comment: 'The most frustrating government service I have experienced. Online portal does not work on mobile. Office staff say different things each visit.',
      },
      {
        id: 4, region: 'Sylhet', regionBn: 'সিলেট', date: '2026-07-15', dateBn: '১৫ জুলাই, ২০২৬',
        cost: 100, visits: 2, clarityScore: 4, difficultyScore: 50,
        problems: ['Unclear requirements'],
        comment: 'Actually not too bad. Got my card in about 2 weeks. The local office was organized and helpful. Maybe I was lucky.',
      },
      {
        id: 5, region: 'Dhaka', regionBn: 'ঢাকা', date: '2026-08-20', dateBn: '২০ আগস্ট, ২০২৬',
        cost: 500, visits: 3, clarityScore: 3, difficultyScore: 72,
        problems: ['High cost', 'Unclear process'],
        comment: 'Applied for smart card replacement. Officially free, but had to pay "service charges" at the office. Card took 5 weeks.',
      },
    ],
    officialInfo: {
      requiredDocs: [
        'Birth Certificate',
        'Parents\' NID copies',
        'Recent passport-size photograph',
        'Proof of address (utility bill)',
      ],
      requiredDocsBn: [
        'জন্ম নিবন্ধন',
        'বাবা-মায়ের NID কপি',
        'সাম্প্রতিক পাসপোর্ট সাইজ ছবি',
        'ঠিকানার প্রমাণ (বিদ্যুৎ বিল)',
      ],
      steps: [
        'Register online at mirsus.gov.bd',
        'Visit local union council for document verification',
        'Submit biometric data at the designated center',
        'Wait for data verification',
        'Collect smart NID card',
      ],
      stepsBn: [
        'mirusus.gov.bd-এ অনলাইনে নিবন্ধন করুন',
        'নথি যাচাইয়ের জন্য স্থানীয় ইউনিয়ন পরিষদে যান',
        'নির্ধারিত কেন্দ্রে বায়োমেট্রিক তথ্য জমা দিন',
        'তথ্য যাচাইয়ের জন্য অপেক্ষা করুন',
        'স্মার্ট NID কার্ড সংগ্রহ করুন',
      ],
      fee: 'Free (smart card replacement may have small fees)',
      feeBn: 'বিনামূল্যে (স্মার্ট কার্ড প্রতিস্থাপনে সামান্য ফি থাকতে পারে)',
      processingTime: '2–4 weeks',
      processingTimeBn: '২-৪ সপ্তাহ',
    },
  },
  {
    id: 'driving-license',
    name: 'Driving License',
    nameBn: 'ড্রাইভিং লাইসেন্স',
    icon: 'Car',
    active: true,
    category: 'Transport',
    shortDescription: 'Apply for a new driving license or renew an existing one.',
    description: 'Apply for a learner\'s permit, professional driving license, or renew your existing license through BRTA.',
    descriptionBn: 'নতুন ড্রাইভিং লাইসেন্সের জন্য আবেদন করুন বা নবীকরণ করুন।',
    reportsCount: 347,
    avgDays: 30,
    avgVisits: 4.1,
    costRange: 'BDT 1,500 – BDT 5,500',
    costRangeBn: '৳১,৫০০ – ৳৫,৫০০',
    difficultyScore: 78,
    difficultyLabel: 'Hard',
    topProblems: [
      { label: 'Written and practical test scheduling chaos', labelBn: 'লিখিত ও প্র্যাকটিক্যাল পরীক্ষার শিডিউলিংয়ে গোলযোগ', percentage: 84 },
      { label: 'Long delays between application stages', labelBn: 'আবেদন পর্যায়ের মধ্যে দীর্ঘ বিলম্ব', percentage: 76 },
      { label: 'Medical certificate complications', labelBn: 'মেডিকেল সার্টিফিকেট জটিলতা', percentage: 59 },
      { label: 'Corruption and middlemen pressure', labelBn: 'দুর্নীতি ও দালালের চাপ', percentage: 53 },
      { label: 'License renewal process is confusing', labelBn: 'লাইসেন্স নবীকরণ প্রক্রিয়া বিভ্রান্তিকর', percentage: 46 },
      { label: 'Online portal has limited functionality', labelBn: 'অনলাইন পোর্টালের সীমিত কার্যকারিতা', percentage: 42 },
    ],
    officialSteps: [
      'Submit online application at brta.gov.bd',
      'Get medical fitness certificate from approved hospital',
      'Pay fees at designated bank',
      'Attend written examination at BRTA office',
      'Pass practical driving test',
      'Collect license after processing (7–14 days)',
    ],
    communityReality: [
      'Online application is just the first step — expect 4–6 office visits total',
      'Written test dates are given 2–3 months in advance',
      'Medical certificate must be from a BRTA-approved hospital (list is unclear)',
      'Practical test requires your own vehicle or a rented one at extra cost',
      'Many people report being approached by middlemen offering to "expedite" for a fee',
    ],
    regionalComparison: [
      { name: 'Dhaka', nameBn: 'ঢাকা', difficulty: 82, avgCost: 'BDT 4,200', avgVisits: 4.5, avgDays: 35 },
      { name: 'Chattogram', nameBn: 'চট্টগ্রাম', difficulty: 76, avgCost: 'BDT 3,500', avgVisits: 4.0, avgDays: 30 },
      { name: 'Gazipur', nameBn: 'গাজীপুর', difficulty: 79, avgCost: 'BDT 3,800', avgVisits: 4.2, avgDays: 32 },
      { name: 'Sylhet', nameBn: 'সিলেট', difficulty: 72, avgCost: 'BDT 3,000', avgVisits: 3.8, avgDays: 28 },
    ],
    experiences: [
      {
        id: 1, region: 'Dhaka', regionBn: 'ঢাকা', date: '2026-08-06', dateBn: '৬ আগস্ট, ২০২৬',
        cost: 4200, visits: 5, clarityScore: 2, difficultyScore: 85,
        problems: ['Long wait', 'Multiple visits', 'Corruption'],
        comment: 'Took 2 months from start to finish. Written test was scheduled 6 weeks out. At the office, someone offered to "help" for extra BDT 2,000.',
      },
      {
        id: 2, region: 'Chattogram', regionBn: 'চট্টগ্রাম', date: '2026-07-22', dateBn: '২২ জুলাই, ২০২৬',
        cost: 3500, visits: 4, clarityScore: 3, difficultyScore: 72,
        problems: ['Long processing', 'Unclear requirements'],
        comment: 'The BRTA office was relatively organized. Main issue was figuring out which hospital does the medical certificate. Took about 4 weeks total.',
      },
      {
        id: 3, region: 'Gazipur', regionBn: 'গাজীপুর', date: '2026-08-11', dateBn: '১১ আগস্ট, ২০২৬',
        cost: 3800, visits: 4, clarityScore: 2, difficultyScore: 78,
        problems: ['Long wait', 'Medical issues', 'Corruption'],
        comment: 'Medical certificate was rejected first time because the hospital was "not on the approved list". Had to redo it at a different hospital.',
      },
      {
        id: 4, region: 'Sylhet', regionBn: 'সিলেট', date: '2026-07-10', dateBn: '১০ জুলাই, ২০২৬',
        cost: 3000, visits: 3, clarityScore: 4, difficultyScore: 60,
        problems: ['Long wait'],
        comment: 'Relatively smooth process. Got my learner\'s permit in 2 weeks. Professional license took longer but was straightforward.',
      },
      {
        id: 5, region: 'Dhaka', regionBn: 'ঢাকা', date: '2026-08-19', dateBn: '১৯ আগস্ট, ২০২৬',
        cost: 5500, visits: 5, clarityScore: 2, difficultyScore: 88,
        problems: ['Corruption', 'Multiple visits', 'Long wait', 'Online issues'],
        comment: 'Nightmare experience. Online portal would not accept my photos. Had to visit the office 5 times. Final straw was being told to come back "next week" 3 weeks in a row.',
      },
    ],
    officialInfo: {
      requiredDocs: [
        'National ID Card (NID)',
        'Medical fitness certificate',
        'Passport-size photographs',
        'Existing license (for renewal)',
      ],
      requiredDocsBn: [
        'জাতীয় পরিচয়পত্র (NID)',
        'চিকিৎসা ফিটনেস সার্টিফিকেট',
        'পাসপোর্ট সাইজ ছবি',
        'বিদ্যমান লাইসেন্স (নবীকরণের জন্য)',
      ],
      steps: [
        'Submit online application at brta.gov.bd',
        'Get medical fitness certificate',
        'Pay fees at designated bank',
        'Attend written examination',
        'Pass practical driving test',
        'Collect license after processing',
      ],
      stepsBn: [
        'brta.gov.bd-এ অনলাইনে আবেদন জমা দিন',
        'চিকিৎসা ফিটনেস সার্টিফিকেট নিন',
        'নির্ধারিত ব্যাংকে ফি পরিশোধ করুন',
        'লিখিত পরীক্ষায় অংশ নিন',
        'প্র্যাকটিক্যাল ড্রাইভিং পরীক্ষায় উত্তীর্ণ হন',
        'প্রক্রিয়াকরণের পরে লাইসেন্স সংগ্রহ করুন',
      ],
      fee: 'BDT 1,500 (learner) – BDT 5,500 (professional)',
      feeBn: '৳১,৫০০ (শিক্ষার্থী) – ৳৫,৫০০ (পেশাদার)',
      processingTime: '7–14 working days (after passing tests)',
      processingTimeBn: '৭-১৪ কার্যদিবস (পরীক্ষায় উত্তীর্ণ হওয়ার পরে)',
    },
  },
  {
    id: 'birth-certificate',
    name: 'Birth Certificate',
    nameBn: 'জন্ম নিবন্ধন',
    icon: 'Baby',
    active: true,
    category: 'Identity',
    shortDescription: 'Register a new birth or obtain a copy of your certificate.',
    description: 'Register a new birth, obtain a copy, or correct information on your birth certificate through the local registrar.',
    descriptionBn: 'নতুন জন্ম নিবন্ধন করুন বা জন্ম নিবন্ধনের কপি সংগ্রহ করুন।',
    reportsCount: 198,
    avgDays: 12,
    avgVisits: 2.4,
    costRange: 'BDT 0 – BDT 300',
    costRangeBn: '৳০ – ৳৩০০',
    difficultyScore: 45,
    difficultyLabel: 'Easy',
    topProblems: [
      { label: 'Slow processing at registrar office', labelBn: 'রেজিস্ট্রার অফিসে ধীর প্রক্রিয়াকরণ', percentage: 62 },
      { label: 'Missing or incorrect records', labelBn: 'অনুপস্থিত বা ভুল রেকর্ড', percentage: 55 },
      { label: 'Difficulty proving parentage', labelBn: 'বংশপরিচয় প্রমাণে কঠিন', percentage: 48 },
      { label: 'Online system not available in rural areas', labelBn: 'গ্রামীণ এলাকায় অনলাইন সিস্টেম পাওয়া যায় না', percentage: 41 },
      { label: 'Staff demand unofficial fees', labelBn: 'কর্মচারীরা অননুষ্ঠিত ফি দাবি করে', percentage: 35 },
      { label: 'Need to travel to distant office', labelBn: 'দূরবর্তী অফিসে ভ্রমণ করতে হয়', percentage: 28 },
    ],
    officialSteps: [
      'Visit the local Union Council or City Corporation office',
      'Submit application with supporting documents',
      'Provide witness testimony if needed',
      'Wait for registration (3–7 working days)',
      'Collect birth certificate',
    ],
    communityReality: [
      'For newborns, registration should happen within 45 days — many miss this deadline',
      'Older citizens getting certificates for the first time face extra hurdles',
      'Rural offices may be open only certain days of the week',
      'The online system for urban areas works but is unfamiliar to many',
      'Correction requests can take months due to "verification" delays',
    ],
    regionalComparison: [
      { name: 'Dhaka', nameBn: 'ঢাকা', difficulty: 50, avgCost: 'BDT 150', avgVisits: 2.5, avgDays: 14 },
      { name: 'Chattogram', nameBn: 'চট্টগ্রাম', difficulty: 48, avgCost: 'BDT 120', avgVisits: 2.3, avgDays: 12 },
      { name: 'Gazipur', nameBn: 'গাজীপুর', difficulty: 47, avgCost: 'BDT 130', avgVisits: 2.4, avgDays: 13 },
      { name: 'Sylhet', nameBn: 'সিলেট', difficulty: 42, avgCost: 'BDT 100', avgVisits: 2.2, avgDays: 10 },
    ],
    experiences: [
      {
        id: 1, region: 'Dhaka', regionBn: 'ঢাকা', date: '2026-08-09', dateBn: '৯ আগস্ট, ২০২৬',
        cost: 150, visits: 2, clarityScore: 4, difficultyScore: 45,
        problems: ['Slow processing'],
        comment: 'Registered my newborn\'s birth. Took 2 visits because the first time the office was closed. Otherwise smooth.',
      },
      {
        id: 2, region: 'Chattogram', regionBn: 'চট্টগ্রাম', date: '2026-07-28', dateBn: '২৮ জুলাই, ২০২৬',
        cost: 120, visits: 3, clarityScore: 3, difficultyScore: 55,
        problems: ['Missing records', 'Multiple visits'],
        comment: 'Needed a copy of my own birth certificate. Records from 1995 were incomplete. Had to provide witness statements.',
      },
      {
        id: 3, region: 'Gazipur', regionBn: 'গাজীপুর', date: '2026-08-03', dateBn: '৩ আগস্ট, ২০২৬',
        cost: 0, visits: 2, clarityScore: 4, difficultyScore: 38,
        problems: ['Unclear requirements'],
        comment: 'Free service as expected. Staff were helpful. Just had to wait a few days for processing. No complaints.',
      },
      {
        id: 4, region: 'Sylhet', regionBn: 'সিলেট', date: '2026-07-19', dateBn: '১৯ জুলাই, ২০২৬',
        cost: 100, visits: 2, clarityScore: 3, difficultyScore: 42,
        problems: ['Rural office access'],
        comment: 'Had to travel 30km to the nearest registration office. No transport options available on short notice.',
      },
      {
        id: 5, region: 'Dhaka', regionBn: 'ঢাকা', date: '2026-08-16', dateBn: '১৬ আগস্ট, ২০২৬',
        cost: 300, visits: 3, clarityScore: 2, difficultyScore: 58,
        problems: ['Information errors', 'Staff fees'],
        comment: 'Corrected a spelling error on my certificate. Simple fix but they charged BDT 300 "processing fee" and it took 3 weeks.',
      },
    ],
    officialInfo: {
      requiredDocs: [
        'Hospital birth notification (for newborns)',
        'Parents\' NID cards',
        'Witness statements (if delayed registration)',
        'Affidavit (for corrections)',
      ],
      requiredDocsBn: [
        'হাসপাতালের জন্ম বিজ্ঞপ্তি (নবজাতকদের জন্য)',
        'বাবা-মায়ের NID কার্ড',
        'সাক্ষী বিবৃতি (বিলম্বিত নিবন্ধনের জন্য)',
        'শপথপত্র (সংশোধনের জন্য)',
      ],
      steps: [
        'Visit the local Union Council or City Corporation',
        'Submit application with supporting documents',
        'Provide witness testimony if needed',
        'Wait for registration (3–7 days)',
        'Collect birth certificate',
      ],
      stepsBn: [
        'স্থানীয় ইউনিয়ন পরিষদ বা সিটি কর্পোরেশনে যান',
        'সহায়ক নথি সহ আবেদন জমা দিন',
        'প্রয়োজনে সাক্ষী বিবৃতি প্রদান করুন',
        'নিবন্ধনের জন্য অপেক্ষা করুন (৩-৭ দিন)',
        'জন্ম নিবন্ধন সংগ্রহ করুন',
      ],
      fee: 'Free (new registration); BDT 50–100 (copies/corrections)',
      feeBn: 'বিনামূল্যে (নতুন নিবন্ধন); ৳৫০-১০০ (কপি/সংশোধন)',
      processingTime: '3–7 working days',
      processingTimeBn: '৩-৭ কার্যদিবস',
    },
  },
  {
    id: 'land-mutation',
    name: 'Land Mutation',
    nameBn: 'জমির মিউটেশন',
    icon: 'Map',
    active: true,
    category: 'Property',
    shortDescription: 'Transfer land ownership records through mutation process.',
    description: 'Transfer land ownership records through the mutation (Namjari) process at the local Land Registry office.',
    descriptionBn: 'মিউটেশন প্রক্রিয়ার মাধ্যমে জমির মালিকানা হস্তান্তর করুন।',
    reportsCount: 890,
    avgDays: 45,
    avgVisits: 5.0,
    costRange: 'BDT 2,000 – BDT 15,000',
    costRangeBn: '৳২,০০০ – ৳১৫,০০০',
    difficultyScore: 92,
    difficultyLabel: 'Hard',
    topProblems: [
      { label: 'Extreme bureaucratic delays', labelBn: 'অত্যধিক আমলাতান্ত্রিক বিলম্ব', percentage: 91 },
      { label: 'Corruption and bribery at multiple stages', labelBn: 'একাধিক পর্যায়ে দুর্নীতি ও ঘুষি', percentage: 87 },
      { label: 'Requires extensive documentation', labelBn: 'বিস্তৃত ডকুমেন্টেশন প্রয়োজন', percentage: 72 },
      { label: 'Need to visit multiple government offices', labelBn: 'একাধিক সরকারি অফিসে পরিদর্শন প্রয়োজন', percentage: 68 },
      { label: 'Legal complexity of inheritance cases', labelBn: 'উত্তরাধিকার মামলার আইনি জটিলতা', percentage: 58 },
      { label: 'No clear fee structure published', labelBn: 'কোনো স্পষ্ট ফি কাঠামো প্রকাশিত নেই', percentage: 52 },
    ],
    officialSteps: [
      'Obtain the "Namjari" application form from the Land Registry office',
      'Gather all required land ownership documents',
      'Pay the prescribed mutation fee at the government treasury',
      'Submit application with all documents and fee receipt',
      'Wait for verification and land surveyor inspection',
      'Receive updated land records (30–60 working days)',
    ],
    communityReality: [
      'This is widely considered one of the most difficult government services in Bangladesh',
      'Multiple office visits (average 5+) are standard, not the exception',
      'Bribes at various stages can push actual costs well beyond official fees',
      'Inheritance cases require additional legal documentation and court involvement',
      'The process can take 3–6 months in practice despite official 30-day targets',
      'Many citizens hire "dalals" (brokers) to navigate the system, adding significant cost',
    ],
    regionalComparison: [
      { name: 'Dhaka', nameBn: 'ঢাকা', difficulty: 95, avgCost: 'BDT 12,000', avgVisits: 5.5, avgDays: 52 },
      { name: 'Chattogram', nameBn: 'চট্টগ্রাম', difficulty: 90, avgCost: 'BDT 10,000', avgVisits: 5.0, avgDays: 48 },
      { name: 'Gazipur', nameBn: 'গাজীপুর', difficulty: 93, avgCost: 'BDT 11,000', avgVisits: 5.2, avgDays: 50 },
      { name: 'Sylhet', nameBn: 'সিলেট', difficulty: 88, avgCost: 'BDT 8,500', avgVisits: 4.5, avgDays: 42 },
    ],
    experiences: [
      {
        id: 1, region: 'Dhaka', regionBn: 'ঢাকা', date: '2026-08-13', dateBn: '১৩ আগস্ট, ২০২৬',
        cost: 12000, visits: 6, clarityScore: 1, difficultyScore: 95,
        problems: ['Extreme delays', 'Corruption', 'Multiple visits', 'Unclear fees'],
        comment: 'Inherited property from my father. The process took 5 months and cost BDT 12,000 officially plus at least BDT 8,000 in unofficial payments. The system is designed to be confusing.',
      },
      {
        id: 2, region: 'Chattogram', regionBn: 'চট্টগ্রাম', date: '2026-07-14', dateBn: '১৪ জুলাই, ২০২৬',
        cost: 10000, visits: 5, clarityScore: 2, difficultyScore: 88,
        problems: ['Corruption', 'Long wait', 'Complex documentation'],
        comment: 'Sold a piece of land. Mutation should have been simple but they kept asking for additional documents not on any published list. Suspect it was deliberate.',
      },
      {
        id: 3, region: 'Gazipur', regionBn: 'গাজীপুর', date: '2026-08-02', dateBn: '২ আগস্ট, ২০২৬',
        cost: 11000, visits: 5, clarityScore: 1, difficultyScore: 92,
        problems: ['Corruption', 'Multiple visits', 'Legal complexity'],
        comment: 'My uncle\'s inheritance case required a court order before the land office would even accept the application. 4 months and still not done.',
      },
      {
        id: 4, region: 'Sylhet', regionBn: 'সিলেট', date: '2026-07-21', dateBn: '২১ জুলাই, ২০২৬',
        cost: 8500, visits: 4, clarityScore: 2, difficultyScore: 82,
        problems: ['Long wait', 'Unclear fees'],
        comment: 'Hired a broker (dalal) for BDT 3,000 on top of official fees. Even with help, it took 3 months. Without a broker, I cannot imagine how anyone manages.',
      },
      {
        id: 5, region: 'Dhaka', regionBn: 'ঢাকা', date: '2026-08-17', dateBn: '১৭ আগস্ট, ২০২৬',
        cost: 15000, visits: 7, clarityScore: 1, difficultyScore: 98,
        problems: ['Corruption', 'Extreme delays', 'Complex docs', 'Multiple visits'],
        comment: 'The most corrupt process I have ever encountered. Every office visit revealed a new requirement. Staff openly hinted at "service charges" to speed things up.',
      },
    ],
    officialInfo: {
      requiredDocs: [
        'Land ownership deed (Sale deed / gift deed)',
        'Previous tax payment receipts',
        'Mutation application form',
        'NID copies of buyer and seller',
        'Witness statements',
      ],
      requiredDocsBn: [
        'জমির মালিকানা দলিল',
        'পূর্ববর্তী কর প্রদানের রসিদ',
        'মিউটেশন আবেদন ফর্ম',
        'ক্রেতা ও বিক্রেতার NID কপি',
        'সাক্ষী বিবৃতি',
      ],
      steps: [
        'Obtain application form from Land Registry office',
        'Gather all required documents',
        'Pay mutation fee at government treasury',
        'Submit application with documents and receipt',
        'Wait for verification and inspection',
        'Receive updated land records',
      ],
      stepsBn: [
        'ভূমি রেজিস্ট্রি অফিস থেকে আবেদন ফর্ম সংগ্রহ করুন',
        'সমস্ত প্রয়োজনীয় নথি সংগ্রহ করুন',
        'সরকারি ট্রেজারিতে মিউটেশন ফি পরিশোধ করুন',
        'নথি ও রসিদ সহ আবেদন জমা দিন',
        'যাচাই ও পরিদর্শনের জন্য অপেক্ষা করুন',
        'আপডেটেড জমির রেকর্ড সংগ্রহ করুন',
      ],
      fee: 'Varies widely — officially BDT 500–5,000 depending on land value',
      feeBn: 'ব্যাপকভাবে পরিবর্তিত — আনুষ্ঠানিকভাবে ৳৫০০-৫,০০০ (জমির মূল্যের উপর নির্ভরশীল)',
      processingTime: '30–60 working days',
      processingTimeBn: '৩০-৬০ কার্যদিবস',
    },
  },
  { id: 'police-clearance', name: 'Police Clearance', nameBn: 'পুলিশ ক্লিয়ারেন্স', icon: 'ShieldCheck', active: false,
    category: 'Identity',
    shortDescription: 'Obtain a police clearance certificate for various purposes.',
    description: 'Obtain a police clearance certificate for various purposes.',
    descriptionBn: 'বিভিন্ন উদ্দেশ্যে পুলিশ ক্লিয়ারেন্স সার্টিফিকেট সংগ্রহ করুন।',
    reportsCount: 0, avgDays: 0, avgVisits: 0, costRange: '', costRangeBn: '',
    difficultyScore: 0, difficultyLabel: 'Easy',
    topProblems: [], officialSteps: [], communityReality: [], regionalComparison: [], experiences: [],
    officialInfo: { requiredDocs: [], requiredDocsBn: [], steps: [], stepsBn: [], fee: '', feeBn: '', processingTime: '', processingTimeBn: '' },
  },
  { id: 'tin-certificate', name: 'TIN Certificate', nameBn: 'টিআইএন সার্টিফিকেট', icon: 'Award', active: false,
    category: 'Business',
    shortDescription: 'Apply for or renew your Tax Identification Number.',
    description: 'Apply for or renew your Tax Identification Number.',
    descriptionBn: 'আপনার ট্যাক্স আইডেন্টিফিকেশন নম্বরের জন্য আবেদন করুন বা নবীকরণ করুন।',
    reportsCount: 0, avgDays: 0, avgVisits: 0, costRange: '', costRangeBn: '',
    difficultyScore: 0, difficultyLabel: 'Easy',
    topProblems: [], officialSteps: [], communityReality: [], regionalComparison: [], experiences: [],
    officialInfo: { requiredDocs: [], requiredDocsBn: [], steps: [], stepsBn: [], fee: '', feeBn: '', processingTime: '', processingTimeBn: '' },
  },
];

export const bangladeshDivisions = [
  { name: 'Dhaka', nameBn: 'ঢাকা', districts: ['Dhaka', 'Faridpur', 'Gazipur', 'Gopalganj', 'Kishoreganj', 'Madaripur', 'Manikganj', 'Munshiganj', 'Narayanganj', 'Narsingdi', 'Rajbari', 'Shariatpur', 'Tangail'] },
  { name: 'Chattogram', nameBn: 'চট্টগ্রাম', districts: ['Chattogram', 'Bandarban', 'Brahmanbaria', 'Chandpur', 'Comilla', 'Cox\'s Bazar', 'Feni', 'Khagrachhari', 'Lakshmipur', 'Noakhali', 'Rangamati'] },
  { name: 'Rajshahi', nameBn: 'রাজশাহী', districts: ['Rajshahi', 'Bogura', 'Chapainawabganj', 'Joypurhat', 'Naogaon', 'Natore', 'Pabna', 'Sirajganj'] },
  { name: 'Khulna', nameBn: 'খুলনা', districts: ['Khulna', 'Bagerhat', 'Chuadanga', 'Jashore', 'Jhenaidah', 'Kushtia', 'Magura', 'Meherpur', 'Narail', 'Satkhira'] },
  { name: 'Barishal', nameBn: 'বরিশাল', districts: ['Barishal', 'Barguna', 'Bhola', 'Jhalakathi', 'Patuakhali', 'Pirojpur'] },
  { name: 'Sylhet', nameBn: 'সিলেট', districts: ['Sylhet', 'Habiganj', 'Moulvibazar', 'Sunamganj'] },
  { name: 'Rangpur', nameBn: 'রংপুর', districts: ['Rangpur', 'Dinajpur', 'Gaibandha', 'Kurigram', 'Lalmonirhat', 'Nilphamari', 'Panchagarh', 'Thakurgaon'] },
  { name: 'Mymensingh', nameBn: 'ময়মনসিংহ', districts: ['Mymensingh', 'Jamalpur', 'Netrakona', 'Sherpur'] },
];

export const problemOptions = [
  { value: 'unclear-docs', label: 'Unclear Documents', labelBn: 'অস্পষ্ট নথি' },
  { value: 'multiple-visits', label: 'Multiple Visits', labelBn: 'একাধিক পরিদর্শন' },
  { value: 'unexpected-delays', label: 'Unexpected Delays', labelBn: 'অপ্রত্যাশিত বিলম্ব' },
  { value: 'extra-fees', label: 'Extra Fees', labelBn: 'অতিরিক্ত ফি' },
  { value: 'unhelpful-staff', label: 'Unhelpful Staff', labelBn: 'অসহায় কর্মচারী' },
  { value: 'online-issue', label: 'Online System Issue', labelBn: 'অনলাইন সিস্টেম সমস্যা' },
  { value: 'corruption', label: 'Corruption / Bribery', labelBn: 'দুর্নীতি / ঘুষি' },
  { value: 'complex-docs', label: 'Complex Documentation', labelBn: 'জটিল ডকুমেন্টেশন' },
];

export const CORE_SERVICES = ['trade-license', 'passport', 'nid', 'driving-license', 'birth-certificate', 'land-mutation'] as const;

export type CoreServiceId = typeof CORE_SERVICES[number];
