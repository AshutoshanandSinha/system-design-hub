# Contributing to System Design Hub

Thank you for your interest in contributing to System Design Hub! This document provides guidelines for contributing to this project.

## How to Contribute

### Reporting Issues

- Use the GitHub issue tracker
- Check if the issue already exists
- Provide clear description and steps to reproduce
- Include relevant context (browser, OS, etc.)

### Suggesting Enhancements

- Open an issue with the "enhancement" label
- Describe the enhancement in detail
- Explain why it would be useful
- Provide examples if possible

### Contributing Content

We welcome contributions of:
- New system design topics
- Case studies
- Interview questions and solutions
- Resources and links
- Corrections and improvements
- Diagrams and visualizations

### Pull Request Process

1. **Fork the repository**
   ```bash
   git clone https://github.com/AshutoshanandSinha/system-design-hub.git
   cd system-design-hub
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing document structure
   - Use clear, concise language
   - Include examples where appropriate
   - Add diagrams if helpful

4. **Test locally**
   ```bash
   bundle install
   bundle exec jekyll serve
   # Visit http://localhost:4000
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: description of your changes"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**
   - Provide a clear title and description
   - Reference any related issues
   - Wait for review and address feedback

## Content Guidelines

### Writing Style

- **Clear and Concise**: Avoid jargon when possible
- **Technical Accuracy**: Ensure correctness of technical details
- **Examples**: Include real-world examples
- **Diagrams**: Use visual aids when helpful
- **Code Snippets**: Format code properly with syntax highlighting

### Document Structure

Each major topic should include:

```markdown
---
layout: default
title: Topic Name
parent: Category Name
nav_order: N
---

# Topic Name
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Introduction

[Brief overview]

## Main Content

[Detailed content with subsections]

## Real-World Examples

[Practical examples]

## Best Practices

[Recommendations]

## Common Pitfalls

[What to avoid]

## Next Steps

[Related topics]

## Additional Resources

[Links to external resources]
```

### Markdown Conventions

- Use ATX-style headers (`#` not `===`)
- Include table of contents for long documents
- Use code fences with language specification
- Include alt text for images
- Use relative links for internal navigation

### Code Examples

```python
# Always include comments
# Use realistic examples
# Show best practices

def example_function():
    """Clear docstring"""
    pass
```

### Diagrams

- Use Mermaid for simple diagrams
- Use Excalidraw or Draw.io for complex architectures
- Save source files in `/diagrams` directory
- Export as SVG or PNG

## Content Areas

### High Priority

- System design interview questions with detailed solutions
- Case studies of real-world systems
- Deep dives into specific components (databases, caches, etc.)
- Architecture patterns with examples
- Performance optimization techniques

### Medium Priority

- Additional learning resources
- Tool comparisons
- Tutorial content
- Best practices guides

### Low Priority

- Minor corrections
- Formatting improvements
- Link updates

## Code of Conduct

### Our Standards

- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards others

### Unacceptable Behavior

- Harassment or discriminatory language
- Trolling or insulting comments
- Public or private harassment
- Publishing others' private information
- Unprofessional conduct

## Review Process

1. **Initial Review**: Maintainers check for basic requirements
2. **Content Review**: Technical accuracy and completeness
3. **Feedback**: Requested changes if needed
4. **Approval**: Merged once approved
5. **Deployment**: Automatically deployed to GitHub Pages

## Getting Help

- **Questions**: Open a discussion on GitHub
- **Issues**: Use the issue tracker
- **Chat**: Join our community Discord (link in README)

## Recognition

Contributors will be recognized in:
- GitHub contributors list
- CONTRIBUTORS.md file
- Release notes (for significant contributions)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping make System Design Hub better!
