import fs from 'fs';
import { Feed } from 'feed';
import blogpostsDetails from '../src/components/blog/blogpostsDetails.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.join(__dirname, '../static');


const generateAtomFeedFromBlogDetails = (feed, blogpostsDetails, nbOfBlogPosts) => {
    let posts = [];
    for (let i = 0; i < nbOfBlogPosts; i++) {
        const post = blogpostsDetails[i];
        posts.push({
            title: post.title,
            link: post.url,
            description: post.summary,
            date: new Date(post.date),
            authors: post.authors.split(','),
            image: post.image
        })
    };

    posts.forEach((post) => {
        feed.addItem({
            title: post.title,
            link: post.url,
            description: post.summary,
            date: new Date(post.date),
            author: post.authors,
            enclosure: {
                url: 'https://quantstack.net/' + post.image,
                type: 'image/png',
                length: 0
            }
        })
    });
    return feed;
}

const AtomFeedLast20 = new Feed({
    title: 'Recent blog posts featured by QuantStack team',
    description: 'Atom feed for QuantStack website blog page',
    feed_url: 'https://quantstack.net/atom.xml',
    site_url: 'https://quantstack.net',
    language: 'en',
});

const updatedFeedLast20 = generateAtomFeedFromBlogDetails(AtomFeedLast20, blogpostsDetails, 20);
fs.writeFileSync(path.join(outputDir, 'atom.xml'), updatedFeedLast20.atom1({ indent: true }));

/*const AtomFeedAll = new Feed({
    title: 'All blog posts featured by QuantStack team',
    description: 'Atom feed for QuantStack website blog page',
    feed_url: 'https://quantstack.net/atom_all.xml',
    site_url: 'https://quantstack.net',
    language: 'en',
});

const updatedFeedAll = generateAtomFeedFromBlogDetails(AtomFeedAll, blogpostsDetails, blogpostsDetails.length)
fs.writeFileSync(path.join(outputDir, 'atom_all.xml'), updatedFeedAll.atom1({ indent: true }));*/