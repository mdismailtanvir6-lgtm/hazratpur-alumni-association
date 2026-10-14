import Link from "next/link";

export default function FooterLinks({ title, links }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase text-white border-l-2 border-orange-500 pl-2">
        {title}
      </h3>

      <ul className="space-y-3 text-sm">
        {links.map((item) => (
          <li key={item.name} className="border-b border-gray-800/60 pb-2">
            <Link
              href={item.href}
              className="text-muted-foreground transition-colors duration-200 hover:text-white block"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
