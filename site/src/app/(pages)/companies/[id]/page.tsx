import Link from "next/link";
export default async function ProjectPage({
  params,
}: {
  readonly params: Promise<{ id: string }>;
}) {
  const companyId = (await params).id;
  const company = {};
  if (!company) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Company not found</h1>
        <Link
          href="/"
          className="text-accent-foreground text-sm hover:underline"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-4">
      {/* Back Button */}
      <Link href="/" className="text-accent-foreground text-sm hover:underline">
        Back Home
      </Link>
      <div className="relative mt-8 aspect-video max-h-96 min-h-32 max-w-full grow overflow-hidden rounded-lg">
        Company Page: {companyId}
      </div>
    </main>
  );
}
