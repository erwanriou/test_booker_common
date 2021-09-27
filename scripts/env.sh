# CHECK IF ENV LOCAL EXIST
if
  [ ! -f .prettierrc.yml ]
then
  # CREATE NEEDED RESSOURCES
  echo "semi: false \ntrailingComma: \"none\" \narrowParens: \"avoid\" \nprintWidth: 150" > .prettierrc.yml
fi
