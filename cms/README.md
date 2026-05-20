# Blog CMS

Edit `cms/posts.json` to manage the blog cards shown on the homepage.
You can also use the Decap CMS admin screen at `/admin` once the site is served with a compatible Git backend.

Each post supports:

```json
{
  "posts": [
    {
      "title": "Post title",
      "excerpt": "Short description shown on the card.",
      "category": "UX/UI",
      "date": "2026-05-18",
      "readTime": "4 min read",
      "url": "#contact"
    }
  ]
}
```

When the site is opened directly as a local file, some browsers block JSON loading. In that case, the homepage uses the fallback posts embedded in `script.js`. When served from a normal web server, `cms/posts.json` is used.
