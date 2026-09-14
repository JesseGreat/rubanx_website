import { faqs } from "@/content/home";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { projects } from "@/content/work";

/**
 * /llms.txt: a plain summary of the site for AI assistants and AI search,
 * generated from the same content files as the pages so it never drifts.
 */
export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `Registered in Nigeria as ${site.name}, ${site.rcNumber}.`,
    `Office: ${site.addresses.office.lines.join(", ")}.`,
    `Email: ${site.email}. Phone and WhatsApp: ${site.phone}.`,
    "",
    "## Services",
    "",
    ...services.map(
      (service) =>
        `- [${service.title}](${site.url}/services/${service.slug}): ${service.summary}`,
    ),
    "",
    "## Work",
    "",
    ...projects.map(
      (project) =>
        `- [${project.name}](${site.url}/work/${project.slug}): ${project.sector}. ${project.summary}`,
    ),
    "",
    "## Company",
    "",
    `- [About](${site.url}/about): leadership, how projects are staffed and how we contract.`,
    `- [Contact](${site.url}/contact): start a project.`,
    "",
    "## Questions",
    "",
    ...faqs.flatMap((faq) => [`### ${faq.question}`, "", faq.answer, ""]),
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
