#!/usr/bin/env sh

pnpm run build
cd dist
git init
git checkout -b gh-pages
git add -A
git commit -m "deploy"
git push -f git@github.com:willybudiman23/my-portofolio.git gh-pages
cd -
