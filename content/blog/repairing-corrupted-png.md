---
title: "Repairing a Corrupted PNG in CTF"
description: "How PNG signatures, CRC checks, and hidden metadata can turn a 'broken' file into the flag itself."
date: "2026-06-27"
tags: ["Cybersecurity", "Forensics", "CTF"]
cover: "/images/blog/png-forensics.png"
slug: "repairing-corrupted-png"
---

## The Challenge

In this challenge I was given a single PNG file that refused to open in any image viewer. No error message, no preview — just a file that every tool treated as garbage. The first instinct in forensics challenges like this is simple: **don't trust the extension, trust the bytes.**

## Reading the Header

Every valid PNG starts with an 8-byte signature:

```bash
xxd corrupted.png | head -n 1
```

```
00000000: 8950 4e47 0d0a 1a0a 0000 000d 4948 4452  .PNG........IHDR
```

The signature was intact, which meant the damage was further inside the file — most likely in one of the chunks that follow the header.

## Walking the Chunks

A PNG file is just a sequence of chunks, each with a length, a type, data, and a CRC32 checksum. I wrote a small Python script to walk through them:

```python
import struct

with open("corrupted.png", "rb") as f:
    data = f.read()

pos = 8  # skip signature
while pos < len(data):
    length = struct.unpack(">I", data[pos:pos+4])[0]
    chunk_type = data[pos+4:pos+8].decode("ascii")
    print(chunk_type, length)
    pos += 8 + length + 4
```

Running this immediately threw an error on the second chunk — the declared length didn't match the actual chunk size. That mismatch was the corruption.

## Fixing the Chunk

Once I located the broken `IHDR` length field, I recalculated the correct width and height by comparing against a known-good PNG structure, patched the 4-byte length field, and recomputed the CRC32 for that chunk using `zlib.crc32`. After rewriting those bytes, the file opened cleanly — and the flag was hiding in plain sight as a QR code rendered in the image itself.

## Conclusion

This challenge was a good reminder that file formats are contracts. The moment any field disagrees with the data around it, that disagreement is usually exactly where the puzzle — or the vulnerability — lives. Understanding a format at the byte level turns "this file is broken" into "this file is telling me something."
