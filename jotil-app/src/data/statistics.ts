import { ServiceStatistics, DifficultyBreakdown } from "@/types";

export const tradeLicenseStats: ServiceStatistics = {
  totalReports: 243,
  avgCompletionTime: "৮ দিন",
  avgOfficeVisits: 2.6,
  costRange: "৳১,২০০–৳২,৫০০",
  difficultyScore: 62,
  difficultyLabel: "মাঝারি জটিল",
  problems: [
    { percentage: 38, label: "তথ্য পরিষ্কার ছিল না" },
    { percentage: 31, label: "একাধিকবার অফিসে যেতে হয়েছে" },
    { percentage: 22, label: "অপ্রত্যাশিত দেরি" },
    { percentage: 18, label: "অতিরিক্ত সহায়তার প্রয়োজন হয়েছে" },
  ],
  locations: [
    { name: "কালিগঞ্জ, গাজীপুর", avgTime: "৮ দিন", avgVisits: 2.6, difficulty: 62 },
    { name: "ঢাকা", avgTime: "৬ দিন", avgVisits: 2.0, difficulty: 48 },
    { name: "চট্টগ্রাম", avgTime: "১১ দিন", avgVisits: 3.1, difficulty: 71 },
  ],
  reports: [
    {
      id: "r1",
      text: "আমার ক্ষেত্রে তিনবার অফিসে যেতে হয়েছিল। সবচেয়ে বড় সমস্যা ছিল সঠিক তথ্য আগে থেকে পরিষ্কারভাবে পাওয়া যায়নি।",
      date: "২০২৫-০৮-১৫",
    },
    {
      id: "r2",
      text: "প্রক্রিয়াটি শেষ হতে প্রায় এক সপ্তাহ সময় লেগেছে।",
      date: "২০২৫-০৭-২২",
    },
    {
      id: "r3",
      text: "অনলাইনে আবেদন করার পরেও অফিসে যেতে হয়েছে। তথ্য মেলানোর জন্য দুইবার গিয়েছি।",
      date: "২০২৫-০৯-০১",
    },
    {
      id: "r4",
      text: "প্রক্রিয়াটি তুলনামূলকভাবে সহজ ছিল, তবে দরপত্র পেতে সময় লেগেছে।",
      date: "২০২৫-০৬-১০",
    },
  ],
};

export const tradeLicenseDifficultyBreakdown: DifficultyBreakdown[] = [
  { label: "প্রক্রিয়ার সময়কাল", score: 65, maxScore: 100 },
  { label: "অফিস ভিজিট সংখ্যা", score: 58, maxScore: 100 },
  { label: "প্রক্রিয়ার স্বচ্ছতা", score: 55, maxScore: 100 },
  { label: "প্রতিবেদিত সমস্যা", score: 70, maxScore: 100 },
  { label: "সামগ্রিক ব্যবহারকারী রেটিং", score: 62, maxScore: 100 },
];
