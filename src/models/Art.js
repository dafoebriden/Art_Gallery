export class Art {
    constructor(data) {
        this.id = data.id
        this.slug = data.slug || ''
        this.height = data.height || null
        this.width = data.width || null
        this.originalLink = data.originalLink || ''
        this.imgUrls = data.imgUrls
        this.description = data.description || ''
        this.altDescription = data.altDescription || ''
        this.attribution = data.attribution || ''
        this.color = data.color || ''
        this.admirers = data.admirers || []
        this.cached = data.cached

    }
}
const artData = {
    "id": "zkZkOcnvvSw",
    "slug": "a-painting-of-two-people-sitting-on-a-rock-by-the-ocean-zkZkOcnvvSw",
    "height": 3698,
    "width": 4881,
    "originalLink": "https://unsplash.com/photos/a-painting-of-two-people-sitting-on-a-rock-by-the-ocean-zkZkOcnvvSw",
    "imgUrls": {
        "raw": "https://images.unsplash.com/photo-1701295463174-f10485104156?ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258MjcxfGtXRDJkTUN3dnkwfHx8fHwyfHwxNzA5MTM4OTc3fA&ixlib=rb-4.0.3",
        "full": "https://images.unsplash.com/photo-1701295463174-f10485104156?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258MjcxfGtXRDJkTUN3dnkwfHx8fHwyfHwxNzA5MTM4OTc3fA&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1701295463174-f10485104156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258MjcxfGtXRDJkTUN3dnkwfHx8fHwyfHwxNzA5MTM4OTc3fA&ixlib=rb-4.0.3&q=80&w=1080",
        "small": "https://images.unsplash.com/photo-1701295463174-f10485104156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258MjcxfGtXRDJkTUN3dnkwfHx8fHwyfHwxNzA5MTM4OTc3fA&ixlib=rb-4.0.3&q=80&w=400",
        "thumb": "https://images.unsplash.com/photo-1701295463174-f10485104156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258MjcxfGtXRDJkTUN3dnkwfHx8fHwyfHwxNzA5MTM4OTc3fA&ixlib=rb-4.0.3&q=80&w=200",
        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1701295463174-f10485104156"
    },
    "description": "The Wandering Jew: Back Cover 1896 Part of a set. See all set records Henri Rivière (French, 1864–1951) published by Verneau France, 19th century Color lithograph Support: Arches wove Sheet: 34.3 x 72 cm (13 1/2 x 28 3/8 in.); Image: 23 x 60.6 cm (9 1/16 x 23 7/8 in.) Gift of John Bonebrake 2003.397.10 Catalogue raisonné: Not in Fields Edition: From the edition of 20 on Arches, signed by the artist Impression: 9/20 https://www.clevelandart.org/art/2003.397.10",
    "altDescription": null,
    "attribution": "The Cleveland Museum of Art",
    "color": "#c0a68c",
    "admirers": [],
    "cached": true
}