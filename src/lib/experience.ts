import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getExperience() {
  const filePath = path.join(process.cwd(), "src/content/experience.mdx");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);
  return data;
}