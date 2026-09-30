export type Project = {
    title: string;
    venue: string;
    description: string;
    code: string;
    paper?: string;
    model?: string;
};

export type Artwork = {
    title: string;
    url: string;
    tags: string[];
    shape: "tall" | "square" | "wide";
};

export const projects: Project[] = [
    {
        title: "OpTM",
        venue: "CS4980 Bioinformatics",
        description: "Analysis timeline diagnosis using opioid addiction states.",
        code: "https://github.com/mzen17/OpTM",
        paper: "/papers/optm.pdf"
    },
    {
        title: "Superblob",
        venue: "CS4980 Multimedia",
        description: "Superblob is a system for expressing and capturing emergent semantics found in multimedia beyond text.",
        code: "https://github.com/mzen17/Superblob",
        paper: "/papers/superblob.pdf"
    },
    {
        title: "MNIST VAE",
        venue: "CS5430 Machine Learning",
        description: "VAE MNIST vs Langevin EM Sampling.",
        code: "https://github.com/mzen17/CS5430-Project",
        paper: "/papers/mnist-vae.pdf"
    },
    {
        title: "Startorch",
        venue: "University of Iowa DRP Spring 2026",
        description: "Yet another deep learning and numerical linear algebra library.",
        code: "https://github.com/mzen17/Startorch"
    },
    {
        title: "TrackCrawl",
        venue: "Iowa SSTFI 2025",
        description: "TrackCrawler is an optimized crawler through dynamic interactions + preference counting to understand changes in tracking in modern web applications from GDPR.",
        code: "https://github.com/mzen17/TrackCrawl",
        paper: "/papers/trackcrawl.pdf"
    },
    {
        title: "Handyman Services Application",
        venue: "Iowa Modern Marvels 2025",
        description: "A web-based, field-service app designed to assist handyman businesses: an all-in-one solution for customer management, job tracking, invoicing, and bookings.",
        code: "https://github.com/mzen17/handyman-services-application"
    },
    {
        title: "HLGraphRAG",
        venue: "Iowa JSHS 2025",
        description: "A graph retrieval augmentation system for human-like synthesis of information, evaluating GraphRAG against other retrieval methods for long-context memory in character AI systems.",
        code: "https://github.com/mzen17/Energy-Chan",
        paper: "/papers/hlgraphrag.pdf"
    },
    {
        title: "EventModel",
        venue: "Hackathon",
        description: "EventModel is a 1.2B parameter model that produces internal-state child conflicts modeled off r/parenting.",
        code: "https://github.com/mzen17/EventModel",
        model: "https://huggingface.co/mzen/EventModel-1.2B"
    }
];

export const artwork: Artwork[] = [
    { title: "Desert", url: "https://ltw-cdn.starlitex.com/world/desert.webp", tags: ["blender", "mari"], shape: "wide" },
    { title: "Volcano", url: "https://ltw-cdn.starlitex.com/world/volcano.webp", tags: ["blender"], shape: "tall" },
    { title: "Room", url: "https://ltw-cdn.starlitex.com/world/room.webp", tags: ["blender"], shape: "square" },
    { title: "Forest", url: "/Forest_Render.webp", tags: ["blender"], shape: "tall" },
    { title: "Classroom", url: "/Classroom.webp", tags: ["blender"], shape: "wide" },
    { title: "Ocean", url: "/ocean.webp", tags: ["blender"], shape: "square" },
    { title: "Tape", url: "/Tape_Render.webp", tags: ["blender"], shape: "tall" },
    { title: "Tube Heros", url: "/TubeHeros.webp", tags: ["blender"], shape: "square" },
    { title: "Forest", url: "/real_forest.webp", tags: ["blender"], shape: "wide" }
];

export type Novel = {
    title: string;
    cover: string;
};

export const novels: Novel[] = [
    { title: "From 2050 to Zero", cover: "/media/from-2050-to-zero.webp" },
    { title: "Future Light", cover: "/media/future-light.webp" },
    { title: "Waking up to Another World", cover: "/media/waking-up-to-another-world.webp" }
];
