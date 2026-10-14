// "use client";

// import Image from "next/image";
// import Link from "next/link";

// import { brandInfo, socialLinks } from "@/config/layout/footer/footer.config";

// export default function FooterBrand() {
//   return (
//     <div>
//       <Link
//         href="/"
//         onClick={() =>
//           window.scrollTo({
//             top: 0,
//             behavior: "smooth",
//           })
//         }
//       >
//         <Image
//           src={brandInfo?.logo}
//           alt="Logo"
//           width={70}
//           height={70}
//           priority
//         />
//       </Link>

//       <p className="mt-5 leading-7 text-muted-foreground">{brandInfo?.name}</p>
//       <p className="mt-5 leading-7 text-muted-foreground">
//         {brandInfo?.description}
//       </p>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";

import { brandInfo } from "@/config/layout/footer/footer.config";

export default function FooterBrand() {
  return (
    <div className="space-y-4">
      <Link
        href="/"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="inline-block"
      >
        <Image
          src={brandInfo?.logo}
          alt="Logo"
          width={60}
          height={60}
          priority
          className="object-contain rounded"
        />
      </Link>

      <h3 className="text-white text-lg font-bold leading-snug">
        {brandInfo?.name}
      </h3>

      <p className="text-sm text-gray-400 leading-relaxed text-justify">
        {brandInfo?.description}
      </p>
    </div>
  );
}
