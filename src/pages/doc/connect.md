---
title: EpubKit Connect API Documentation
layout: ../../layouts/blog.astro
---

**EpubKit Connect** is a feature that allows you to connect your EpubKit App through HTTP API. 

When EpubKit starts, it also launches an HTTP service at http://localhost:6143. 

![](/images/epubkit-connect.png)

## API

### Save article

POST http://localhost:6143/save

Body:

- `url (required)` - URL of the article
- `html (required)` - HTML of the article
- `collectionId (required)` - Collection ID to save the article to
- `title` - Title of the article

Example:

```ts
const response = await fetch('http://localhost:6143/save', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    url: 'https://example.com/article',
    html: '<h1>Hello World</h1>',
    collectionId: 'xxxx-xxxx-xxxx-xxxx',
    title: 'Article Title',
  }),
});

```

### Get collections

GET http://localhost:6143/collections

Return:

```ts
{
  data: [
    {
      id: 'xxxx',
      title: 'Collection Name',
    },
    {
      // ...
    }
  ]
}
```

