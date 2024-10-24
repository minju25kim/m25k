---

- title: "How to Build a Simple Markdown Renderer in JavaScript"
- date: 2024-10-24
- author: "Minju Kim"
- tags: [JavaScript, Markdown, Web Development]

---

# How to Build a Simple Markdown Renderer in JavaScript

In this tutorial, we’ll walk through how to build a simple Markdown renderer in JavaScript using the `marked` library. Markdown is a lightweight markup language, and it's widely used for writing documentation, blogs, and even README files. Let's dive in!

---

## What You'll Learn:

- How to fetch Markdown files using `fetch()`
- How to render Markdown content in the browser using `marked`
- How to structure your HTML and JavaScript for a Markdown blog

---

## Step 1: Set Up Your Project

First, create a simple HTML file that will act as the base for your Markdown renderer. Here’s a basic structure for your `index.html` file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Markdown Renderer</title>
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
</head>
<body>
    <h1>Markdown Blog</h1>
    <div id="md-list"></div> <!-- List of Markdown files -->
    <div id="content"></div> <!-- Markdown content will be rendered here -->
    <script src="renderList.js"></script>
</body>
</html>
```
