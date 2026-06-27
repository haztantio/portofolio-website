---
title: "Linux Permissions Explained"
description: "Understanding chmod, ownership, and the permission bits — from beginner reading to practical day-to-day usage."
date: "2026-06-20"
tags: ["Linux"]
cover: "/images/blog/linux-permissions.png"
slug: "linux-permission-explained"
---

## Why Permissions Matter

Every file and directory on a Linux system carries three pieces of information that decide who can do what: an **owner**, a **group**, and a set of **permission bits**. Getting comfortable reading these is one of the first real milestones in understanding Linux as more than "a terminal that looks scary."

## Reading the Output

Running `ls -l` on any file shows something like:

```bash
-rwxr-xr-- 1 adam staff 4096 Jun 20 09:12 deploy.sh
```

That string breaks down into four parts: the file type, the owner's permissions, the group's permissions, and everyone else's permissions — each made of `r` (read), `w` (write), and `x` (execute).

## The Octal Shortcut

Instead of typing letters, most people use octal numbers, where each permission has a value: read = 4, write = 2, execute = 1. Adding them together gives a single digit per role:

```bash
chmod 754 deploy.sh
```

That command means: owner can read/write/execute (7), group can read/execute (5), others can only read (4). Once the addition becomes second nature, permissions stop feeling like magic numbers.

## Ownership Matters Too

Permissions are meaningless without knowing *who* they apply to. `chown` changes the owner, and `chgrp` changes the group:

```bash
sudo chown adam:staff deploy.sh
```

This is especially important on shared servers, where a script being "executable" doesn't help if the wrong user owns it.

## A Practical Habit

When I'm unsure why a script "permission denied"s, my checklist is always the same: check the bits with `ls -l`, check the owner, and only then reach for `chmod`. Most permission issues are solved in under a minute once you stop guessing and start reading what the system is already telling you.

## Conclusion

Permissions are one of the few Linux concepts where the command line genuinely explains itself once you know how to read it. It's a small piece of literacy that pays off every single day you work in a terminal.
