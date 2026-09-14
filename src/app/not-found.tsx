import { ButtonLink } from "@/components/button";
import { ArrowLink } from "@/components/primitives";

export default function NotFound() {
  return (
    <div className="shell py-24 md:py-36">
      <span aria-hidden="true" className="block h-[3px] w-10 bg-orange" />
      <h1 className="mt-6 text-h2 font-bold md:text-display">
        That page is not here.
      </h1>
      <p className="measure-lede mt-6 text-lede">
        The link may be out of date. Everything on the site is reachable from
        the pages below.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-6">
        <ButtonLink href="/">Back to the home page</ButtonLink>
        <ArrowLink href="/contact">Start a project</ArrowLink>
      </div>
    </div>
  );
}
