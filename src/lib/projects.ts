import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export function getProjects() {
  const filenames = fs.readdirSync(projectsDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(".mdx", ""),
      ...data,
    };
  });
}

export function getFeaturedProjects() {
  return getProjects().filter((p: any) => p.featured === true);
}

export function getProjectBySlug(slug: string) {
  const filePath = path.join(projectsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...data,
  };
}