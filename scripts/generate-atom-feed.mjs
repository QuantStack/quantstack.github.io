import fs from 'fs';
import { Feed } from 'feed';
import { blogpostsDetails } from '../src/components/blog/blogpostsDetails.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.join(__dirname, '../static');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const generateAtomFeedFromBlogDetails = (feed, blogpostsDetails, nbOfBlogPosts) => {
    let posts = [];
    for (let i = 0; i < nbOfBlogPosts; i++) {
        const blogpost = blogpostsDetails[i];
        posts.push({
            title: blogpost.title,
            link: blogpost.url,
            summary: blogpost.summary,
            date: new Date(blogpost.date),
            authors: blogpost.authors.split(','),
            image: blogpost.image
        })
    };

    posts.forEach((post) => {
        const imageHtml = `<img src="${post.image}" alt="Image for ${post.title}" style="max-width:100%; height:auto;" />`;
        const summaryHtml = `<p>${post.summary}</p>`;
        feed.addItem({
            title: post.title,
            id: post.link,
            link: post.link,
            date: new Date(post.date),
            author: [{ name: post.authors }],
            content: `${imageHtml}${summaryHtml}`


        });

    })
    return feed;
}
const AtomFeedLast20 = new Feed({
    title: 'Recent blog posts featured by QuantStack team',
    description: 'Atom feed for QuantStack website blog page',
    id: 'https://quantstack.net/',
    link: 'https://quantstack.net/',
    language: 'en',
    updated: new Date(),
    feedLinks: {
        atom: 'https://quantstack.net/atom.xml',
    },
    author: {
        name: 'QuantStack Team',
        link: 'https://quantstack.net',
    },
});


const updatedFeedLast20 = generateAtomFeedFromBlogDetails(AtomFeedLast20, blogpostsDetails, 20);
const xml = updatedFeedLast20.atom1();
fs.writeFileSync(path.join(outputDir, 'atom.xml'), xml);

const AtomFeedAll = new Feed({
    title: 'All blog posts featured by QuantStack team',
    description: 'Atom feed for QuantStack website blog page',
    feed_url: 'https://quantstack.net/atom_all.xml',
    site_url: 'https://quantstack.net',
    language: 'en',
});


const updatedFeedAll = generateAtomFeedFromBlogDetails(AtomFeedAll, blogpostsDetails, blogpostsDetails.length)
fs.writeFileSync(path.join(outputDir, 'atom_all.xml'), updatedFeedAll.atom1({ indent: true }));