import Image from "next/image";
import Link from "next/link";
import { companies, type Company } from "~/constants/companies";
import { startups } from "~/constants/startups";

export function Startups() {
  return (
    <section className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">Founding Companies</h2>
      <div className="flex w-full flex-row flex-wrap justify-center gap-4">
        {startups.map((startup) => (
          <Company type="startups" key={startup.name} company={startup} />
        ))}
      </div>
    </section>
  );
}
export function Companies() {
  return (
    <section className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">Employed Companies</h2>
      <div className="flex w-full flex-row flex-wrap justify-center gap-4">
        {companies.map((company) => (
          <Company type="companies" key={company.name} company={company} />
        ))}
      </div>
    </section>
  );
}

function Company({
  company,
  type,
}: {
  company: Company;
  type: "startups" | "companies";
}) {
  return (
    <Link href={`/${type}/${company.id}`} className="relative h-24 w-96">
      <Image
        src={company.logo}
        alt={company.name}
        className="h-full w-full object-contain drop-shadow-[0_0px_3px_rgba(0,0,0,0.8)] dark:drop-shadow-[0_0px_3px_rgba(255,255,255,1)]"
        fill
      />
    </Link>
  );
}
