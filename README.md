# Gooba Client Website

A static, responsive landing page for Gooba Client.

## Configure before publishing

Edit `script.js` and replace:

```js
const SITE_CONFIG = {
  name: "Gooba Client",
  version: "YOUR_VERSION",
  minecraftVersion: "YOUR_MINECRAFT_VERSION",
  downloadUrl: "YOUR_GITHUB_DIRECT_DOWNLOAD_URL",
  githubUrl: "YOUR_GITHUB_REPOSITORY_URL",
  openSource: false
};
```

### Important
- `downloadUrl` must be the direct GitHub-hosted downloadable asset URL.
- `githubUrl` must be the real repository URL.
- Do not publish placeholder values.
- Only enable `openSource` when the repository is actually public.
- Edit `FEATURES` and `FAQS` so they match Gooba's real shipped features and requirements.

## Deploy

The project is plain HTML/CSS/JavaScript. Upload the three site files to GitHub Pages, Cloudflare Pages, Vercel, or any static host.

No backend, database, authentication, payment system, or download intermediary is used.


## GitHub Pages

This is already a plain static site and can be published from the repository root.

1. Put `index.html`, `styles.css`, `script.js`, and `.nojekyll` in the root of your GitHub repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select your main branch and `/ (root)`, then save.
5. Your project site will be available at `https://USERNAME.github.io/REPOSITORY/`.

GitHub Pages supports static HTML/CSS/JavaScript directly from a repository. See the official documentation:
https://docs.github.com/en/pages/getting-started-with-github-pages

### Making the Download button work

Upload your actual `gooba-client.jar` to a GitHub Release. Then copy the **direct asset URL** into `SITE_CONFIG.downloadUrl`.

For example:

```js
downloadUrl: "https://github.com/USERNAME/REPOSITORY/releases/download/v1.0.0/gooba-client.jar"
```

Do not use the normal repository page as the download URL if you want the button to download the JAR directly.
