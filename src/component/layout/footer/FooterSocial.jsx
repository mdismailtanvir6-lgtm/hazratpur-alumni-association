import { socialLinks } from "@/config/layout/footer/footer.config";

export default function FooterSocial() {
  return (
    <div>
      {/* ইমেজ অনুযায়ী হেডার স্টাইল (কমলা রঙের লেফট বর্ডার) */}
      <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase text-white border-l-2 border-orange-500 pl-2">
        STAY CONNECTED
      </h3>

      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
        Follow us on social media for updates and Islamic reminders.
      </p>

      {/* Social Icons */}
      <div className="flex items-center gap-3">
        {socialLinks.map((item) => {
          const IconComponent = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="w-9 h-9 rounded-full bg-[#162244] flex items-center justify-center text-gray-300 hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              <IconComponent className="w-4 h-4" />
            </a>
          );
        })}
      </div>
    </div>
  );
}