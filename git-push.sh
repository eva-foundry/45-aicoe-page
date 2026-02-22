#!/bin/bash

# Navigate to the project directory
cd /workspaces/spark-template

# Check git status
echo "=== Git Status ==="
git status

# Add all changes
echo ""
echo "=== Adding all changes ==="
git add -A

# Commit with a descriptive message
echo ""
echo "=== Committing changes ==="
git commit -m "Complete AI Centre of Enablement Portal - Fluent UI implementation with EVA AskMe integration

- Implemented full Fluent UI React components migration
- Added multilingual support (EN/FR) with i18n
- Integrated EVA AskMe chat widget with floating button
- Created comprehensive pages: Home, Program Overview, How It Works, Services, Intake Optimization, Use Case, Roadmap, Contact
- Styled with GC Design System color palette
- Added official Government of Canada signatures and branding
- Implemented responsive navigation and routing
- Added WCAG 2.2 accessibility features
- Configured for deployment to GitHub Pages"

# Check remote
echo ""
echo "=== Current remotes ==="
git remote -v

# Add remote if it doesn't exist
if ! git remote | grep -q origin; then
    echo ""
    echo "=== Adding remote ==="
    git remote add origin https://github.com/eva-foundry/43-aicoe-page.git
fi

# Set the remote URL to ensure it's correct
echo ""
echo "=== Setting remote URL ==="
git remote set-url origin https://github.com/eva-foundry/43-aicoe-page.git

# Push to the repository
echo ""
echo "=== Pushing to GitHub ==="
git push -u origin main || git push -u origin master

echo ""
echo "=== Done! ==="
