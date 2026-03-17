import Image from "next/image";

const Footer = () => {
  const footerLinks = {
    main: [
      { text: "About us", href: "#" },
      { text: "Available Properties", href: "#" },
      { text: "Contact Us", href: "#" },
    ],
    legal: [
      { text: "Privacy & Cookies Policies", href: "#" },
      { text: "Terms & Conditions", href: "#" },
      { text: "Manage Cookies", href: "#" },
    ],
  };

  return (
    <footer className="bg-midnight text-white/60 py-8 md:py-12 border-t border-white/5">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4 max-w-sm">
            <a href="#" className="mb-4 sm:mb-6 block">
              <Image
                src="/uptown-logo.png"
                alt="Uptown Logo"
                width={140}
                height={46}
                className="brightness-0 invert"
              />
            </a>
            <p className="text-xs sm:text-sm leading-loose">
              Navi Mumbai&apos;s leading Proptech company. Transforming real
              estate sales through innovation and strategic market insights.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h4 className="font-bold text-base sm:text-lg text-[#EFEBDF] mb-4 sm:mb-6">
                Menu
              </h4>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                {footerLinks.main.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-all transform hover:translate-x-1 inline-block"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg text-[#EFEBDF] mb-4 sm:mb-6">
                Legal
              </h4>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                {footerLinks.legal.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-all transform hover:translate-x-1 inline-block"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold text-base sm:text-lg text-[#EFEBDF] mb-4 sm:mb-6">
                Contact
              </h4>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                <li>
                  <a
                    href="tel:1234567890"
                    className="hover:text-white transition-colors"
                  >
                    1234567890
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@uptown.com"
                    className="hover:text-white transition-colors"
                  >
                    info@uptown.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t border-white/10 flex flex-col gap-2 md:flex-row justify-between items-center text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] opacity-40">
          <p>Designed by Avista.</p>
          <p>&copy; Uptown Properties 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
