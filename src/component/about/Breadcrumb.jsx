import Link from "next/link";

export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-3 flex justify-center">
      <ol className="inline-flex items-center space-x-2 text-xs font-medium text-primary-foreground/80 md:text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="inline-flex items-center">
              {index > 0 && (
                <span className="mx-2 text-white/50">/</span>
              )}
              {isLast || !item.href ? (
                <span
                  className="text-white font-semibold"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-white/80 hover:white transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
