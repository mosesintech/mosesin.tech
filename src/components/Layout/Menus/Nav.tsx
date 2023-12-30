const navigation = [
  { name: "Solutions", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Docs", href: "#" },
  { name: "Company", href: "#" },
];

export default function Nav() {
  return (
    <div className="hidden ml-10 space-x-8 lg:block">
      {navigation.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-base font-medium text-white hover:text-indigo-50"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
