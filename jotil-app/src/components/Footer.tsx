import Link from "next/link";

const footerLinks = {
  services: [
    { label: "ট্রেড লাইসেন্স", href: "/services/trade-license" },
    { label: "পাসপোর্ট", href: "#" },
    { label: "জাতীয় পরিচয়পত্র", href: "#" },
    { label: "ড্রাইভিং লাইসেন্স", href: "#" },
  ],
  about: [
    { label: "আমাদের সম্পর্কে", href: "/about" },
    { label: "প্রাইভেসি", href: "#" },
    { label: "শর্তাবলী", href: "#" },
    { label: "যোগাযোগ", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-sm">J</span>
              </div>
              <span className="text-xl font-bold tracking-tight">JOTIL</span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed max-w-md">
              Jotil সাধারণ মানুষের বাস্তব অভিজ্ঞতার মাধ্যমে সরকারি সেবার প্রকৃত
              চিত্র তুলে ধরে। আমরা বিশ্বাস করি, তথ্যভিত্তিক পর্যবেক্ষণ সেবা
              উন্নয়নে সহায়ক।
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-white/90">সেবাসমূহ</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-white/90">সংক্রান্ত</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="bg-white/5 rounded-lg p-4 mb-6">
            <p className="text-xs text-white/50 leading-relaxed">
              <strong className="text-white/70">দায়মুক্তি:</strong> Jotil
              ব্যবহারকারীদের দেওয়া অভিজ্ঞতার তথ্য aggregate করে প্রদর্শন করে।
              কোনো ব্যক্তির বিরুদ্ধে অভিযোগ বা অপরাধ প্রমাণ করার উদ্দেশ্যে এই
              platform ব্যবহার করা হয় না।
            </p>
          </div>
          <p className="text-xs text-white/40 text-center">
            © {new Date().getFullYear()} Jotil। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
}
