import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { type ProjectLink } from "~/constants/projects";
import { FaGithub, FaLink, FaVideo } from "react-icons/fa6";
import { MdOutlineWebAsset, MdLibraryBooks } from "react-icons/md";

const iconMap = {
  github: FaGithub,
  link: FaLink,
  video: FaVideo,
  site: MdOutlineWebAsset,
  docs: MdLibraryBooks,
};

export default function ProjectLink({ link }: { readonly link: ProjectLink }) {
  const Icon = iconMap[link.icon];
  return (
    <Link
      key={link.name}
      href={link.url}
      target="_blank"
      className={buttonVariants({ variant: "default", size: "lg" })}
    >
      <Icon className="" />
      {link.name}
    </Link>
  );
}
