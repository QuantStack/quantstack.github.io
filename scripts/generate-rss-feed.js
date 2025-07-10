import fs from 'fs';
import RSS from 'rss';
import { blogpostsDetails } from '../src/components/blog/blogpostsDetails.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.join(__dirname, '../static');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const generateFeedFromBlogDetails = (feed, blogpostsDetails, nbOfBlogPosts) => {
    let posts = [];
    for (let i = 0; i < nbOfBlogPosts; i++) {
        const post = blogpostsDetails[i];
        posts.push({
            title: post.title,
            description: post.summary,
            date: post.date,
            authors: post.authors,
            url: post.url,
            image: post.image,
           
        })
    };

    posts.forEach((post) => {
        feed.item({
            title: post.title,
            description: post.description,
            url: post.url,
            date: post.date,
            author: post.authors,
            enclosure: {
                url: 'https://quantstack.net' + post.image,
                type: 'image/png',
                length: 0,
            },
        });
    });
    return feed;
}

const feedLast20 = new RSS({
    title: 'Recent blog posts featured by QuantStack team',
    description: 'RSS feed for QuantStack website blog page',
    feed_url: 'https://quantstack.net/rss.xml',
    site_url: 'https://quantstack.net',
    language: 'en',
});

const updatedFeedLast20 = generateFeedFromBlogDetails(feedLast20, blogpostsDetails, 20);
fs.writeFileSync(path.join(outputDir, 'rss.xml'), updatedFeedLast20.xml({ indent: true }));

const feedAll = new RSS({
    title: 'All blog posts featured by QuantStack team',
    description: 'RSS feed for QuantStack website blog page',
    feed_url: 'https://quantstack.net/rss_all.xml',
    site_url: 'https://quantstack.net',
    language: 'en',
});

const updatedFeedAll = generateFeedFromBlogDetails(feedAll, blogpostsDetails, blogpostsDetails.length)
fs.writeFileSync(path.join(outputDir, 'rss_all.xml'), updatedFeedAll.xml({ indent: true }));