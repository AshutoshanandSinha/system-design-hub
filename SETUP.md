# Setup Guide for System Design Hub

This guide will help you set up and deploy the System Design Hub to GitHub Pages.

## Prerequisites

- Git installed
- GitHub account
- Ruby 3.x installed (for local development)
- Bundler installed (`gem install bundler`)

## Quick Start

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `system-design-hub`
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README (we have one)

### 2. Update Configuration

Edit `_config.yml` and update these fields:

```yaml
url: https://AshutoshanandSinha.github.io
baseurl: /system-design-hub

aux_links:
  "View on GitHub":
    - "//github.com/AshutoshanandSinha/system-design-hub"
```

This has already been configured with your GitHub username.

Also update in `README.md`:
- All instances have been updated with your GitHub username

### 3. Initialize Git and Push

```bash
cd system-design-hub

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: System Design Hub"

# Add remote
git remote add origin https://github.com/AshutoshanandSinha/system-design-hub.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** (in the left sidebar)
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. The site will be built automatically when you push changes

### 5. Wait for Deployment

1. Go to the **Actions** tab in your repository
2. Watch the "Deploy Jekyll site to Pages" workflow
3. Once complete (green checkmark), your site is live!
4. Visit: `https://AshutoshanandSinha.github.io/system-design-hub`

## Local Development

### Install Dependencies

```bash
cd system-design-hub

# Install Ruby gems
bundle install
```

### Run Locally

```bash
# Start Jekyll server
bundle exec jekyll serve

# Or with live reload
bundle exec jekyll serve --livereload

# Visit http://localhost:4000/system-design-hub
```

### Make Changes

1. Edit markdown files in `docs/` directory
2. Save changes
3. Browser will auto-refresh (if using --livereload)
4. Test thoroughly before pushing

## Project Structure

```
system-design-hub/
├── .github/
│   └── workflows/
│       └── pages.yml          # GitHub Actions workflow
├── docs/                      # All documentation
│   ├── index.md              # Home page
│   ├── fundamentals/         # Core concepts
│   ├── components/           # Infrastructure components
│   ├── patterns/             # Design patterns
│   ├── case-studies/         # Real-world examples
│   ├── interview-prep/       # Interview preparation
│   ├── advanced-topics/      # Advanced concepts
│   └── resources/            # Learning resources
├── _config.yml               # Jekyll configuration
├── Gemfile                   # Ruby dependencies
├── README.md                 # Repository README
├── CONTRIBUTING.md           # Contribution guidelines
├── LICENSE                   # MIT License
└── .gitignore               # Git ignore rules
```

## Adding New Content

### Add a New Page

1. Create a markdown file in the appropriate directory:

```bash
# Example: Add a new fundamental concept
touch docs/fundamentals/new-topic.md
```

2. Add frontmatter:

```markdown
---
layout: default
title: New Topic
parent: Fundamentals
nav_order: 5
---

# New Topic
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Your Content Here

Write your content...
```

3. Commit and push:

```bash
git add docs/fundamentals/new-topic.md
git commit -m "Add: New topic in fundamentals"
git push
```

### Add a New Section

1. Create a new directory and index file:

```bash
mkdir docs/new-section
touch docs/new-section/index.md
```

2. Add frontmatter with `has_children: true`:

```markdown
---
layout: default
title: New Section
nav_order: 9
has_children: true
permalink: /new-section/
---

# New Section

Overview of this section...
```

3. Add child pages:

```markdown
---
layout: default
title: Topic in New Section
parent: New Section
nav_order: 1
---

# Topic Content
```

## Customization

### Change Theme Colors

Edit `_config.yml`:

```yaml
color_scheme: dark  # Options: default, dark, light
```

### Add Custom CSS

1. Create `_sass/custom/custom.scss`
2. Add your custom styles
3. Commit and push

### Modify Navigation

Navigation is controlled by:
- `nav_order` in frontmatter (order within same level)
- `parent` in frontmatter (hierarchy)
- `has_children: true` for parent pages

## Troubleshooting

### Build Fails

1. Check the **Actions** tab for error messages
2. Common issues:
   - Invalid frontmatter syntax
   - Broken links
   - Invalid Markdown

### Local Jekyll Issues

```bash
# Clear cache and rebuild
bundle exec jekyll clean
bundle exec jekyll serve

# Update gems
bundle update
```

### Changes Not Showing

1. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Check if GitHub Actions workflow completed
3. Wait a few minutes for CDN to update

### Navigation Not Working

1. Ensure all pages have proper frontmatter
2. Check `nav_order` values are unique within same parent
3. Verify `parent` names match exactly (case-sensitive)

## Advanced Configuration

### Custom Domain

1. Buy a domain (e.g., systemdesignhub.com)
2. Add CNAME file to repository root:

```bash
echo "systemdesignhub.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

3. Configure DNS:
   - Add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add CNAME record: `AshutoshanandSinha.github.io`

4. Enable HTTPS in GitHub Pages settings

### Analytics

Add Google Analytics to `_config.yml`:

```yaml
google_analytics: UA-XXXXXXXX-X
```

### Search

Search is enabled by default in Just the Docs theme. Configure in `_config.yml`:

```yaml
search_enabled: true
search:
  heading_level: 2
  previews: 3
```

## Deployment Checklist

Before making your repository public:

- [x] Update all `YOUR_USERNAME` placeholders
- [ ] Test all links locally
- [ ] Verify navigation works
- [ ] Check all images load
- [ ] Review content for accuracy
- [ ] Add GitHub repository description
- [ ] Add topics/tags to repository
- [ ] Enable GitHub Discussions (optional)
- [ ] Enable GitHub Issues
- [ ] Star your own repo (why not? 😊)

## Maintenance

### Regular Updates

1. **Content Updates**: Add new topics, update existing content
2. **Dependency Updates**: `bundle update` periodically
3. **Link Checks**: Verify external links are still valid
4. **Community**: Respond to issues and PRs

### Monitoring

1. **GitHub Actions**: Check build status
2. **Analytics**: Monitor page views and popular content
3. **Issues**: Address bugs and feature requests

## Getting Help

- **Jekyll Docs**: https://jekyllrb.com/docs/
- **Just the Docs Theme**: https://just-the-docs.com/
- **GitHub Pages**: https://docs.github.com/en/pages

## Next Steps

1. Complete the setup steps above
2. Test the site locally
3. Push to GitHub and enable Pages
4. Start adding your own content!
5. Share with the community

---

**Questions?** Open an issue on GitHub or check the documentation links above.

**Happy learning and sharing!** 🚀
