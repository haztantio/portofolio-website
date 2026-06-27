---
title: "Understanding VLAN"
description: "Why splitting one physical network into several logical ones is the first real lesson in network segmentation."
date: "2026-06-18"
tags: ["Networking"]
cover: "/images/blog/vlan.png"
slug: "understanding-vlan"
---

## One Wire, Many Networks

A VLAN (Virtual LAN) lets a single physical switch behave like several independent networks. Instead of running separate cabling for, say, the finance department and the engineering department, VLANs separate their traffic logically while sharing the same hardware.

## Tagging Traffic

When a frame crosses a trunk link between switches, it gets an 802.1Q tag identifying which VLAN it belongs to:

```bash
interface GigabitEthernet0/1
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30
```

Each VLAN ID keeps that department's broadcast domain separate from the others, even though the cable carrying it is shared.

## Why It Matters for Security

Segmenting traffic isn't just about organization — it directly limits how far an attacker can move after compromising one device. A compromised machine on the "Guest" VLAN should never be able to see traffic meant for the "Servers" VLAN, and proper VLAN design enforces exactly that boundary at the switching layer, before a firewall even gets involved.

## Conclusion

VLANs are one of the smallest configuration changes with one of the largest impacts on both network performance and security posture. Understanding them is a prerequisite for almost everything else in enterprise networking.
