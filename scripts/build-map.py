#!/usr/bin/env python3
"""
Regenerate public/dfw-map.png — a static map of the Dallas–Fort Worth
Metroplex stitched from OpenStreetMap raster tiles.

We serve a static image (rather than a live embed) so the service-area map
always renders: no API key, no WebGL requirement, no third-party runtime
dependency, and English labels. The ServiceArea component applies the
grayscale/dark treatment via CSS, so this stays a plain neutral map.

Usage:  python3 scripts/build-map.py
Requires: Pillow  (pip install Pillow)

Adjust XS / YS (slippy tile indices at zoom Z) to reframe the area.
"""
import io
import urllib.request
from PIL import Image

Z = 9
XS = [116, 117, 118, 119]  # west (Fort Worth) -> east (Dallas + near suburbs)
YS = [205, 206, 207]       # north (Denton/McKinney) -> south (Waxahachie)
TILE = 256
UA = "AIOHM-static-map-builder/1.0 (https://allinonehm.com; one-time static asset)"

out = Image.new("RGB", (TILE * len(XS), TILE * len(YS)), (240, 240, 240))
for ix, x in enumerate(XS):
    for iy, y in enumerate(YS):
        url = f"https://tile.openstreetmap.org/{Z}/{x}/{y}.png"
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        data = urllib.request.urlopen(req, timeout=30).read()
        tile = Image.open(io.BytesIO(data)).convert("RGB")
        out.paste(tile, (ix * TILE, iy * TILE))

out.save("public/dfw-map.png", optimize=True)
print("saved public/dfw-map.png", out.size)
