import Image from "next/image";
import Link from "next/link";

type Company = {
  id: string;
  name: string;
  logo: string;
  url: string;
};

const companies: Company[] = [
  {
    id: "begin",
    name: "Begin Software",
    logo: "/images/companies/begin.png",
    url: "https://www.begin.com",
  },
  {
    id: "fullstack",
    name: "FullStack Academy",
    logo: "/images/companies/fullstack.png",
    url: "https://www.fullstackacademy.com",
  },
  {
    id: "codepath",
    name: "CodePath",
    logo: "/images/companies/codepath.png",
    url: "https://www.codepath.org",
  },
  {
    id: "propslab",
    name: "PropsLab",
    logo: "/images/companies/propslab.png",
    url: "https://www.propslab.io",
  },
];

export default function Companies() {
  return (
    <div className="flex w-full flex-row justify-center gap-4">
      {companies.map((company) => (
        <Company key={company.name} company={company} />
      ))}
    </div>
  );
}

function Company({ company }: { company: Company }) {
  return (
    <Link href={`/companies/${company.id}`} className="relative h-24 w-96">
      <Image
        src={company.logo}
        alt={company.name}
        className="h-full w-full object-contain drop-shadow-[0_0px_3px_rgba(0,0,0,0.8)] dark:drop-shadow-[0_0px_3px_rgba(255,255,255,1)]"
        fill
      />
    </Link>
  );
}
