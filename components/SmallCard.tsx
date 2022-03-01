import Link from "next/link";

interface SmallCardProps {
  href?: string;
  text: string;
}

export default function SmallCard({ href, text }: SmallCardProps) {
  return (
    <div className="p-4 rounded-md bg-white mb-4 flex justify-between shadow-md">
      <p className="text-lg capitalize">{text}</p>
      {href ? (
        <Link href={href}>
          <a className="block text-gray-600">Läs mer</a>
        </Link>
      ) : null}
    </div>
  );
}
