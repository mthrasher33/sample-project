Local development docker compose up commands:
docker compose -f docker-compose-dev.yml build
docker compose -f docker-compose-dev.yml up

Production docker compose up commands:
docker compose build
docker compose up

TODO:
Create PR template for release
Enforce correct template on pr to release
Enforce
Create PR template for main
Enforce correct template on pr to main

How To:

- pull from remote without merge commit:
  git checkout new-feature # Go to the feature branch named "new-feature"
  git rebase master

# Now your feature have all the commits from master

git checkout master #Go back to master
git merge --ff-only new-feature
