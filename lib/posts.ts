import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getSortedPostsData() {
    // Check if directory exists, if not return empty array
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    // Get file names under /content/blog
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(fileName => {
            // Remove ".md" from file name to get slug
            const slug = fileName.replace(/\.md$/, '');

            // Read markdown file as string
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents);

            // Combine the data with the slug
            return {
                slug,
                // Make sure we have the expected frontmatter properties
                title: matterResult.data.title || 'Sem título',
                date: matterResult.data.date || '1970-01-01',
                coverImage: matterResult.data.coverImage || '',
                description: matterResult.data.description || '',
                ...matterResult.data
            };
        });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPostSlugs() {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(fileName => {
            return {
                params: {
                    slug: fileName.replace(/\.md$/, '')
                }
            };
        });
}

export async function getPostData(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html, { sanitize: false })
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    // Combine the data with the slug and contentHtml
    return {
        slug,
        contentHtml,
        // Default properties to make TS happy if missing
        title: matterResult.data.title || 'Sem título',
        date: matterResult.data.date || '',
        coverImage: matterResult.data.coverImage || '',
        description: matterResult.data.description || '',
        ...matterResult.data
    };
}
