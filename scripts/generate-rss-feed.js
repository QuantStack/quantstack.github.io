const fs = require('fs');
const RSS = require('rss');
const { blogpostsDetails } = require('../src/components/blog/blogpostsDetails.js');

const feed = new RSS({
    title: 'My Custom Blog',
    description: 'RSS feed for my custom blog pages',
    feed_url: 'https://quantstack.net/rss.xml',
    site_url: 'https://quantstack.net',
    language: 'en',
});
const posts = [];
blogpostsDetails.forEach(post => {
    const imagePath = 'https://quantstack.net' + post.image;
    console.log('imagePath:', imagePath)
    posts.push({
        title: post.title,
        description: post.summary,
        date: post.date,
        authors: post.authors,
        url: post.url,
        image: post.image,
        enclosure: {
            url: 'https://quantstack.net' + post.image,
            type: 'image/png', // or 'image/png', etc.
            length: 0, // optional, but required by some validators
        },
    })
})

posts.forEach((post) => {
    feed.item({
        title: post.title,
        description: post.description,
        url: post.url,
        date: post.date,
    });
});

fs.writeFileSync('../static/rss.xml', feed.xml({ indent: true }));