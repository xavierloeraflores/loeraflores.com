import Image from "next/image";
import Link from "next/link";
import { companies, type Company } from "~/constants/companies";

export default function Companies() {
  return (
    <div className="flex w-full flex-row flex-wrap justify-center gap-4">
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
