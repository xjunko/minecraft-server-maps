/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [
        // Tunnels
        {
            x: -81,
            z: -195,
            image: "markers/minecart.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "Neko's Tunnel [In]",
            textColor: "#ffffff", 
            offsetX: 0,
            offsetY: 8,
            font: "bold 9px Verdana",
        },
        {
            x: -57,
            z: -854,
            image: "markers/minecart.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "Neko's Tunnel [Out]",
            textColor: "#ffffff", 
            offsetX: 0,
            offsetY: 8,
            font: "bold 9px Verdana",
        },

        // Places
        {
            x: 21,
            z: -151,
            image: "markers/xp.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "XP Farm",
            textColor: "#ffffff", 
            offsetX: 0,
            offsetY: 8,
            font: "bold 9px Verdana",
        },

        {
            x: 1472,
            z: -494,
            image: "markers/eyeofender.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "End Portal (1)",
            textColor: "#ffffff", 
            offsetX: 0,
            offsetY: 8,
            font: "bold 9px Verdana",
        },

        {
            x: 4731,
            z: 981,
            image: "markers/eyeofender.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "End Portal (2)",
            textColor: "#ffffff", 
            offsetX: 0,
            offsetY: 8,
            font: "bold 9px Verdana",
        },


        // Spawn | Hub
        {
            x: -72,
            z: -214,
            image: "markers/dark.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Main Spawn",
            textColor: "#ffffff", 
            offsetX: 0,
            offsetY: 8,
            font: "bold 12px Verdana",
        },

        {
            x: -77,
            z: -884,
            image: "markers/dark.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Neko's",
            textColor: "#ffffff", 
            offsetX: 0,
            offsetY: 8,
            font: "bold 12px Verdana",
        },
    ]
}
