""" convert.py - fucking thing to convert the fucking thing """

__author__ = "xJunko"
__discord__ = 224785877086240768

import json
from pathlib import Path
from typing import Any

# Const
HEADER_OR_SOME_SHIT: str = (
    "// This file is autogenerated by `script/convert.py`, \n"
    + "// to edit it please use the `script/markers.txt` file thanks. \n\n"
)
MARKERS_PATH: Path = Path(
    "/run/media/junko/4th/Projects/PAKB - Map Viewer/maps/scripts/markers.txt"
)
MARKERS_OUTPUT: Path = Path(
    "/run/media/junko/4th/Projects/PAKB - Map Viewer/maps/PAKB/Overworld/custom.markers.js"
)


def _retarded_float_workaround(n: str) -> None | float:
    try:
        return float(n)
    except Exception:
        return None


def main() -> int:
    print("[Script] Reading the thing!")

    data: dict[str, Any] = {"isEnabled": True, "markers": []}

    for line in MARKERS_PATH.read_text().split("\n"):
        if not line.strip() or line.startswith("#"):
            continue

        # one-pass parser fuck it.
        items: list[str] = line.split(",")  # type: ignore

        # Type hack
        for n, item in enumerate(items):
            if item.strip().replace("-", "").isnumeric():
                items[n] = int(item)  # type: ignore
            elif float_value := _retarded_float_workaround(item):
                items[n] = float_value  # type: ignore
            else:
                items[n] = item.strip()

        # Default
        print(items)
        params: dict[str, str | int] = {
            "x": items[0],
            "z": items[1],
            "text": items[2].replace(";", ","),
            "textColor": items[4],
            "offsetX": 0,
            "offsetY": 8,
            "font": f"bold {items[3]}px Verdana",
        }

        # With image
        if len(items) >= 6:
            params |= {
                "image": items[5],
                "imageScale": items[6],
                "imageAnchor": [0.5, 1],  # type: ignore
            }

        data["markers"].append(params)

    MARKERS_OUTPUT.write_text(
        HEADER_OR_SOME_SHIT + "UnminedCustomMarkers = " + json.dumps(data, indent=4)
    )

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
