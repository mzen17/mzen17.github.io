<script lang="ts">
    let data = [
        {
            url: "https://github.com/mzen17/Page-Processor",
            title: "Page Processor",
            img: "https://raw.githubusercontent.com/mzen17/Page-Processor/refs/heads/main/demos/WriterDEMO.png",
            description: "Web-based word processor for editing single-page natured writing (blogs, WNs, etc)",
            tags: ["fastapi", "js", "fullstack", "2024"]
        },            
        {
            url: "https://github.com/mzen17/HonyakuBot",
            title: "HonyakuBot",
            img: "https://raw.githubusercontent.com/mzen17/HonyakuBot/refs/heads/main/gallery/answer.jpg",
            description: "A game designed to train human beings for translation like an AI. Large datasets with semantic analysis to judge accuracy.",
            tags: ["python", "similarity", "NLP", "2023"]
        },
        {
            url: "https://github.com/mzen17/ThreeJS-Donut",
            title: "ThreeJS Donut",
            img: "https://raw.githubusercontent.com/mzen17/ThreeJS-Donut/refs/heads/main/threejs-demo-snapshot.png",
            description: "A frontend site that I made while learning threeJS, inspired by Andrew Price's Blender donut tutorial series.",
            tags: ["threejs", "react", "frontend", "2022"]
        },
        {
            url: "https://github.com/mzen17/Data-Engine",
            title: "Data Engine",
            img: "https://raw.githubusercontent.com/mzen17/Data-Engine/refs/heads/main/data_engine-demo.png",
            description: "High performance data processing engine for processing large volumes of data.",
            tags: ["tauri", "rust", "svelte", "2023"]
        },    
        {
            url: "https://github.com/mzen17/Life-Manager",
            title: "Life Manager",
            img: "https://raw.githubusercontent.com/mzen17/Life-Manager/refs/heads/main/lm-demo.png",
            description: "A web app to help you manage your life. Keep tasks easy and simple with a full frontend to manage your assignments. ",
            tags: ["fastapi", "react", "fullstack", "2022"]
        },        
        {
            url: "https://github.com/mzen17/Character-Neural-Engine",
            title: "(Old) Neural Engine",
            img: "https://raw.githubusercontent.com/mzen17/Character-Neural-Engine/refs/heads/main/cne.png",
            description: "An engine allowing for human-like capabilities for NPC characters in games via an API.",
            tags: ["fastapi", "react", "openai", "2023"]
        }
    ];

    let portdata = [
        {
            title: "Desert",
            url: "https://ltw-cdn.starlitex.com/world/desert.webp",
            tags: ["blender", "mari"]
        },
        {
            title: "Volcano",
            url: "https://ltw-cdn.starlitex.com/world/volcano.webp",
            tags: ["blender"]
        },
        {
            title:"Room",
            url:"https://ltw-cdn.starlitex.com/world/room.webp",
            tags: ["blender"]
        },
        {
            title:"Forest",
            url:"/Forest_Render.webp",
            tags: ["blender"]
        },
        {
            title:"Classroom",
            url:"/Classroom.webp",
            tags: ["blender"]
        },
        {
            title:"Ocean",
            url:"/ocean.webp",
            tags: ["blender"]
        },
        {
            title:"Tape",
            url:"/Tape_Render.webp",
            tags: ["blender"]
        },
        {
            title:"Tube Heros",
            url:"/TubeHeros.webp",
            tags: ["blender"]
        },
        {
            title:"Forest",
            url:"/real_forest.webp",
            tags: ["blender"]
        }
    ]
</script>
<h1 class="text-2xl mb-5">Active Projects</h1>
<div class="mb-10 flex flex-row">
    <a class="bg-green-400 w-96 h-64 mr-10 flex relative" href="https://ltw.pages.dev">
        <video class="absolute top-0 left-0 w-full h-full object-cover" autoplay loop muted>
            <source src="https://ltw-cdn.starlitex.com/ltw-1mb.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <p class="my-auto mx-auto text-white z-10">Light the World</p>
    </a>
    <div class="bg-[url(/AXNE.png)] w-96 h-64 flex relative">
        <div class="absolute top-0 left-0 w-full h-full object-cover bg-black bg-opacity-60"></div>

        <p class="my-auto mx-auto text-white z-10", title="Advancing Towards Human Recreation">ATHR Project</p>
    </div>
</div>
<h1 class="text-2xl mb-5">Selected Projects</h1>

<div class="flex flex-row overflow-x-scroll mb-10">
    {#each data as shard}
    <a class="w-[450px] h-96 bg-purple-200 rounded-xl p-4 align-items flex flex-col mr-8" href={shard.url}>
        <h1 class="text-xl mx-auto mb-2">{shard.title}</h1>
        <img src={shard.img} alt={shard.title} class="h-full w-96 object-cover mb-2">
        <p class="flex mx-auto mb-2 text-center h-48 overflow-scroll">
            {shard.description}
        </p>
        <div class="flex mx-auto my-auto w-[200px] h-[50px] overflow-scroll">
            {#each shard.tags as tag}
            <span class="bg-green-700 text-white text-sm px-3 rounded-md mr-2">{tag}</span>
            {/each}
        </div>
    </a>
    {/each}
</div>


<h1 class="text-2xl mb-5">Selected 3D Work</h1>
<div class="flex flex-row overflow-x-scroll mb-10">
    {#each portdata as shard}
    <div class="min-w-[350px] bg-purple-200 rounded-xl p-4 align-items flex flex-col">
        <h1 class="text-lg mx-auto mb-2">{shard.title}</h1>
        <img src={shard.url} alt={shard.title} class="h-full w-96 object-cover mb-2">

    </div>
    {/each}
</div>
