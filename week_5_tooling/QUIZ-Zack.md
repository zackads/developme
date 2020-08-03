# DevelopMe\_ Week 5 Quiz

Student: Zack Adlington

Student answers are styled in block quotes, e.g.:

> Student answer.

---

## 1. Getting setup with Git

What does this command do?

`git remote add origin git@github.com:develop-me/drupal1.git`

> For an initialized local repo, sets the endpoint of the 'origin' variable to the GitHub repository `drupal1` owned by `develop-me`.

Think about what each of these parts tells us:

a) `git remote add origin`

b) `git@github.com`

c) `develop-me`

d) `drupal1.git`

## 2. Committing files

Here is the state of our project directory after running `git status`:

```bash
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   hello.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	images/
	index.html
```

What commands would I run to first commit the `images` folder and `index.html` with message `"Apple"` and then, on the next commit, have `hello.html` with message `"Banana"`?

> 1. Add `images/` and `index.html` to staging by running `git add .`.
>
> 2. Remove `hello.html` from staging by running `git reset hello.html`. Only `images/` and `index.html` are now in staging; `hello.html` is in the working directory.
>
> 3. Run `git commit -m "Apple"` to commit `images/` and `index.html`.
>
> 4. Run `git add hello.html` or `git add .` to add `hello.html`.
>
> 5. Run `git commit -m "Banana"` to commit `hello.html`. (4 and 5 can also be combined using `git commit -am "Banana"`).

## 3. Reading Git messages: Oh noes #1

```bash
To github.com:develop-me/git-simple.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'git@github.com:develop-me/git-simple.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

a) What command have I just run?

> `git push` or `git push origin master`.

b) What has gone wrong?

> The HEAD of the origin `master` branch is ahead of the local repo's `master` branch. This is likely because someone else has pushed changes or merged a PR since I last ran `git pull`.

c) What should I do next?

> Run `git pull` to update the `master` branch, resolve any merge conflicts and then `git push` to push to remote.

## 4. Reading Git messages: Oh noes #2

```bash
remote: Enumerating objects: 38, done.
remote: Counting objects: 100% (38/38), done.
remote: Compressing objects: 100% (16/16), done.
remote: Total 53 (delta 26), reused 31 (delta 22), pack-reused 15
Unpacking objects: 100% (53/53), done.
From github.com:develop-me/git-simple
   6f630d7..7176d81  master            -> origin/master
 * [new branch]      addteampagetonews -> origin/addteampagetonews
   1760f80..bacdb99  projectname       -> origin/projectname
Updating 6f630d7..7176d81
error: Your local changes to the following files would be overwritten by merge:
	index.html
Please commit your changes or stash them before you merge.
Aborting
```

a) What command have I just run?

> `git pull`

b) What has gone wrong?

> I have edits in the working directory that have not been committed and conflict with the remote repo.

c) What should I do next?

> Three options:
>
> 1. I could run `git stash` to temporarily store the uncommitted local changes and then run `git pull`, which would mean `index.html` would then be 100% from remote. (Useful if I am unsure of the importance of the local version of `index.html.)
>
> 2. I could stage and commit my local changes. Running `git pull` would then result in a merge conflict on `index.html`, which I'd have to resolve. (Useful if I wanted to retain the work in my local `index.html`.)
>
> 3. I could discard local changes entirely by running `git reset --hard HEAD`. I would lose my local copy of `index.html`. (Useful if I wanted to discard the work in my local `index.html`.)
>
> I would choose which option depending on the nature of the local changes to `index.html`.

## 5. Reading Git messages: Oh noes #3

a) What command have I just run?

> git pull

b) What has gone wrong?

> There is a merge conflict in `index.html` between the HEAD position in my local repo and the remote repo.

c) What should I do next?

> Git will have edited `index.html` to identify and display exactly where the conflict exists. I need to open `index.html` in my code editor and remove/amend the conflicting lines of code. I then need to commit `index.html` to finally resolve the conflict.

```bash
remote: Enumerating objects: 9, done.
remote: Counting objects: 100% (8/8), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 5 (delta 3), reused 5 (delta 3), pack-reused 0
Unpacking objects: 100% (5/5), done.
From github.com:develop-me/git-simple
   a657ab7..d6b1aa1  master     -> origin/master
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```

## 6. Burn it all!

How do you 'throw away' all work since last commit, and revert to how the files were at that moment?

_Note: think about using [ohshitgit.com](https://ohshitgit.com/) to help you recover from Git mistakes._

> Run `git reset --hard HEAD`

## 7. (Sort of) Burn it all!

How do you 'throw away' the last commit `bbb123`, going back to the commit before last `aaa123`, but keep the files as they are (i.e. the changes as they are respresentated in commit `bbb123`), to not lose that work.

> `git checkout aaa123`

## 8. Ignore it all!

Create a `.gitignore` file that will cause Git to only track `hello.html` in my folder:

![Quiz image 8.png](https://raw.githubusercontent.com/develop-me/week-05--tooling/master/quiz/resources/08.png "Quiz question 8 image")

> `.gitignore`:

```
# Ignore everything
*

# But not hello.html
!hello.html
```

## 9. Describe the process

You're working in a team that uses the gitflow workflow.

Document the steps, and git commands, from starting a new piece of work on a new feature branch, to submitting it as a pull request like this:

```bash
# From local repository on command line
git checkout master
git pull origin master
git branch feature/branch
# do work
git status # To check on what files are where (working or staging)
git add . # To moved files from working to staging
git commit -m "Completed work on feature/branch"
git push origin feature/branch
```

> Then open GitHub, select the `feature/branch` branch and click on the `Open pull request` button. Summarise the work that has taken place, points that especially need reviewing/other team/company policy on pull requests and assign to the reviewer(s).

## 10. npm & gulp

We're starting working on a new project and want to bring in some of our favourite gulp workflow from a previous project.

What steps should we take and what commands will we need to run?

_Note: this idea is to save work starting a new project by re-using a setup you've made before_

> I'd set up an npm boilerplate package containing Gulp and the Gulp packages I'd want to use with it, such as `gulp-sass` and `gulp-concat`, in the `packages.json`. This would also contain the `gulpfile.js`. Then, when initating a new project I'd use `npm install zacks-gulp-boilerplate` to install my pre-made gulp boilerplate. I'd just need to alter the filenames in `gulpfile.js` to match this particular project and then I'd be good to go. Then I'd run `gulp watch` and get on with my work.

## 11. Git, npm & gulp

Our fresh project needs a `.gitignore` file, what should its contents be?

![Quiz image 11.png](https://raw.githubusercontent.com/develop-me/week-05--tooling/master/quiz/resources/11.png "Quiz question 11 image")

> .gitignore:

```
.Thumbs.db
my\ secret\ passwords.txt
node_modules
```

## 12. Gulp and git

Our project uses gulp tasks to compile our source sass files into a `styles.min.css` file.

In merging another developer's work we end up with these files having Git conflicts, what should we do to resolve each?:

```bash
/scss/_headings.scss
/css/styles.min.css # produced by a gulp task
about.html
```

> `_headings.scss`: Resolve the conflicts here manually and then run the gulp task that results in `styles.min.css`.
>
> `styles.min.css`: Conflicts here should have been resolved by the gulp task of minifying `_headings.scss`.
>
> `about.html`: Resolve conflicts here manually as they are unrelated to the gulp minify task.
