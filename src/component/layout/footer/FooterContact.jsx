import { contactInfo } from "@/config/layout/footer/footer.config";
import { Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";

export default function FooterContact() {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase text-white border-l-2 border-orange-500 pl-2">
        CONTACT US
      </h3>

      <div className="space-y-4 text-sm">
        {/* Phone */}
        {contactInfo?.phone && (
          <div className="flex items-center gap-3 text-muted-foreground">
            <Phone className="text-orange-500 w-4 h-4 shrink-0" />
            <span>{contactInfo.phone}</span>
          </div>
        )}

        {/* Email */}
        {contactInfo?.email && (
          <div className="flex items-center gap-3 text-muted-foreground">
            <Mail className="text-orange-500 w-4 h-4 shrink-0" />
            <a
              href={`mailto:${contactInfo.email}`}
              className="hover:text-white transition-colors"
            >
              {contactInfo.email}
            </a>
          </div>
        )}

        {/* WhatsApp Button */}
        {contactInfo?.whatsapp && (
          <a
            href={`https://wa.me/${contactInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between w-full max-w-xs px-4 py-3 bg-[#111C3A] border border-emerald-500/30 rounded-xl hover:border-emerald-500/60 transition-all duration-300 mt-2 group"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="text-emerald-500 w-6 h-6 shrink-0" />
              <div className="text-left">
                <p className="text-white font-bold text-xs tracking-wider uppercase">
                  WHATSAPP
                </p>
                <p className="text-[10px] text-gray-400">TEXT ONLY</p>
              </div>
            </div>
            <ExternalLink className="text-gray-400 group-hover:text-white w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
