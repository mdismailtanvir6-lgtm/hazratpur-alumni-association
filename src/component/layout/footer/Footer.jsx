import Container from "@/component/ui/Container";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";
import FooterBottom from "./FooterBottom";

import { importantPages } from "@/config/layout/footer/footer.config";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B132B] text-gray-300 border-t border-slate-800">
      <Container className="pt-16 pb-8">
        {/* Main Grid Layout matching the footer image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          {/* Column 1: Brand Info & Description (4 Cols) */}
          <div className="lg:col-span-4">
            <FooterBrand />
          </div>

          {/* Column 2: Important Pages (3 Cols) */}
          <div className="lg:col-span-3 lg:pl-4">
            <FooterLinks title="Important Pages" links={importantPages} />
          </div>

          {/* Column 3: Contact Us (3 Cols) */}
          <div className="lg:col-span-3">
            <FooterContact />
          </div>

          {/* Column 4: Stay Connected (2 Cols) */}
          <div className="lg:col-span-2">
            <FooterSocial />
          </div>
        </div>

        {/* Bottom Copyright & Links Section */}
        <FooterBottom />
      </Container>
    </footer>
  );
}
