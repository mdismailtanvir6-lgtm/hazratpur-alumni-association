import Link from "next/link";
import { cacheLife } from "next/cache";
import { brandInfo } from "@/config/layout/footer/footer.config";

export default async function FooterBottom() {
  "use cache";

  cacheLife("days");

  const year = new Date().getFullYear();

  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
      <p>
        © {year}{" "}
        <Link href="/" className="hover:text-white transition-colors">
          {brandInfo.name}
        </Link>
        . All Rights Reserved.
      </p>
    </div>
  );
}
