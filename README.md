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

Only allow merge commits
Open PR to develop:
Lint files,
Lint PR Title,
Lint completion tasks? <-- Idk if I like this anymore in a multi-branch strategy >
Build a test image to make sure it builds and unit tests pass  
Tag the image with the sha, build it, and allow for it to be promoted to test

Open PR to beta:
Build a test image to make sure it builds and unit tests pass

Close PR to beta:
Semantic relase a beta version
Deploy beta version
Create a github release and a tag
Run automation suite to make sure stage is good
Possibly run any other security/performance thing you want
Announce the beta release?

Open PR to main:
Build a test image to make sure it builds and unit tests pass

Close PR to main:
Build a release version
Deploy release version
Create a github release and a tag
Announce the release?
