---
title: "Learning Git Reflog"
description: "What to do the moment you realize you just force-pushed over your own work."
date: "2026-06-25"
tags: ["Programming"]
cover: "/images/blog/git-reflog.png"
slug: "learning-git-reflog"
---

## The Panic Moment

Every developer eventually hits the same moment: a `git reset --hard` or a careless rebase wipes out commits that were never pushed anywhere else. The first reaction is panic. The second, better reaction is remembering that Git rarely deletes anything immediately — it just stops pointing at it.

## What Reflog Actually Tracks

`git reflog` keeps a local log of where `HEAD` has pointed over time, independent of branch history:

```bash
git reflog
```

```
a1b2c3d HEAD@{0}: reset: moving to HEAD~3
d4e5f6g HEAD@{1}: commit: add login validation
```

Each entry is a checkpoint I can jump back to, even after a "destructive" command.

## Recovering the Work

Once I find the commit hash from before the mistake, recovery is a single command:

```bash
git checkout d4e5f6g
git switch -c recovered-work
```

From there, the lost commits are alive again on a new branch, ready to be merged back in properly.

## Conclusion

Reflog doesn't replace careful git habits, but it's the safety net that turns a stressful mistake into a two-minute fix. Knowing it exists is the difference between fearing `--hard` resets and using them confidently.
