
# dylanholm.es

## Deploying

We are using git lfs on the `master` branch, but not on the hosted `gh-pages`
branch. The way this works is by doing normal development (using git lfs) on
master, then when it is time to deploy the changes, we build, then force update
the `gh-pages` from the working copy that has the pulled lfs content. Let's look
at an example, starting from cloning this repo:

Clone the repo and download the files tracked by git-lfs:

```sh
git clone <repo-url>
git lfs install
git lfs pull
```

Then, after making some changes:

```sh
# Build the static site to the `out` directory
npm run build
npm run export

# Commit the changes including the `out` directory.
# This is commiting using lfs.
git add -A
git commit -m <message>

# Push the changes to master.
git push origin master
```

Now, we are ready to push the site built to the `out` directory to a new branch
that will not use git-lfs, as the files will need to be in the branch to be able
to be served statically.

```sh
git subtree split --prefix out -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages
```
