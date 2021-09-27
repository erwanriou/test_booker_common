echo ":: COMMIT CHANGES"
git add --all
git commit -m '[Library] - update version'
echo ":: UPDATE NPM VERSION AND PUSH REPOSITORY"
npm version patch
git push
echo ":: PUBLISH TO NPM"
npm publish --access public
