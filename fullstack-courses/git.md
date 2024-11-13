
# Git Course

## Installation on linux

```bash
# installation
sudo apt-get --yes install git   

# uninstallation
sudo apt-get --yes purge git
```

---

## Configuration

```bash
# List config
git config --list

# List config Local
git config --list --local

# List global user account
git config --global user.email
git config --global user.name

# List Local user account
git config --local user.email
git config --local user.name

# Change global user account
git config --global user.email "user_email"
git config --global user.name "user_name"

# Change local user account
git config --local user.email "user_email"
git config --local user.name "user_name"

# Set default editor
git config --global core.editor "notepad"
```

---

## Branch

```bash
# List branches
git branch
git branch -a

# Create a new branch
git branch new-branch

# Switch to a branch
git checkout new-branch
git checkout main

# Delete a branch
git branch -d new-branch

# Delete a branch (force)
git branch -D new-branch
```
---


## Initializing

```bash
git init
echo "# test" >> README.md
git status
git add README.md
git add *
git commit -m "first commit"
```

### Remote

```bash
# List Remotes
git remote -v

# Add a remote Without credentials
git remote add origin https://github.com/user-name/example.git

# Add a remote With credentials
git remote add origin https://user-name:user-password@github.com/user-name/example.git

# Push changes to the remote repository
git push -u origin master

# Pull updates from the remote repository
git pull
```

---

## Commits

```bash
# View commit history oneline
git log --oneline

# View commit history
git log

# Undo the last commit
git commit --amend

# Check differences between files
git diff

# Create a commit with a message
git commit -m "feature01"

# Stage and commit in one command
git commit -a -m "feature01"


# View commit history on File
git log --oneline -p index.html
```

## Merge branches

```bash
git merge <branch_name>

# Retrieve a file from a specific commit and commit changes
git checkout <commit_id> <file>
git commit -a -m "new commit"
```

## Commits Restore


```bash
# Restore To position on a specific commit:
git checkout <commit_id>

# Return to the current state:
git checkout master

# Undo a specific commit
git revert <commit_id>

# Unstage a file
git reset HEAD <file>
```

