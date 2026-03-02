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

    // Garante que o recorte de Hoje (YYYY-MM-DD) só muda na meia-noite do Brasil, e não no horário Global (UTC) da Vercel
    const today = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Sao_Paulo' });
    const publishedPosts = allPostsData.filter(post => post.date <= today);

    // Sort posts by date
    return publishedPosts.sort((a, b) => {
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
    // Garante que o recorte de Hoje (YYYY-MM-DD) só muda na meia-noite do Brasil (America/Sao_Paulo)
    const today = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Sao_Paulo' });

    return fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .filter(fileName => {
            // Filtrar slugs de posts com data no futuro para não gerar a página
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const matterResult = matter(fileContents);
            const date = matterResult.data.date || '1970-01-01';
            return date <= today;
        })
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

    // Lógica para Next / Previous post
    const allPosts = getSortedPostsData();
    const currentIndex = allPosts.findIndex((p) => p.slug === slug);

    // Como a lista está ordenada do MAIS NOVO (índice 0) para o MAIS VELHO (índice final)
    // O Post "Anterior" (cronologicamente mais antigo) estará no currentIndex + 1
    // O "Próximo" Post (cronologicamente mais novo) estará no currentIndex - 1
    const prevPost = currentIndex < allPosts.length - 1 ? { slug: allPosts[currentIndex + 1].slug, title: allPosts[currentIndex + 1].title } : null;
    const nextPost = currentIndex > 0 ? { slug: allPosts[currentIndex - 1].slug, title: allPosts[currentIndex - 1].title } : null;

    // Combine the data with the slug and contentHtml
    return {
        slug,
        contentHtml,
        nextPost,
        prevPost,
        // Default properties to make TS happy if missing
        title: matterResult.data.title || 'Sem título',
        date: matterResult.data.date || '',
        coverImage: matterResult.data.coverImage || '',
        description: matterResult.data.description || '',
        ...matterResult.data
    };
}
