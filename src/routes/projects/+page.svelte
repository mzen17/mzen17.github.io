<script lang="ts">
    import FadeInBox from "$lib/FadeInBox.svelte";

    let data = [
        {
            url: "https://github.com/mzen17/handyman-services-application",
            title: "Handyman Services Application",
            img: "https://github.com/mzen17/handyman-services-application/blob/dev/Screenshot%202025-09-16%20192424.png?raw=true",
            description: "The Handyman Services Application (HSA) is a web-based, field-service app designed to assist handyman businesses. The app is an all-in-one solution for a handyman to manage everyday tasks such as customer management, job tracking, invoicing, and bookings.",
            tags: ["django", "angular", "celery", "redis", "2025"]
        },
        {
            url: "https://gist.github.com/mzen17/0fda82381c1f09f746ec1d94e4fa76fc",
            title: "Homelab",
            img: "/Datacenter.png",
            description: "Write-up detailing my home server setup that I use to run selfhosted applications, specs, experiences, etc.",
            tags: ["hardware", "linux", "vm", "2025"]
        },    
        {
            url: "https://github.com/mzen17/StarCMS",
            title: "WriterCMS",
            img: "https://raw.githubusercontent.com/mzen17/Page-Processor/refs/heads/main/demos/reader.png",
            description: "A powerful, easy, extensible selfhosted content management system. Currently being used for blog site.",
            tags: ["fastapi", "js", "fullstack", "2024"]
        },
        {
            url: "https://github.com/mzen17/Shards-of-the-Grid",
            title: "Shards of the Grid",
            img: "https://github.com/user-attachments/assets/211a1915-21a7-4e43-bdd3-cdbac9906730",
            description: "A web-based, grid adventure MORPG built with SaaS principles for UIowa Masters Capstone project.",
            tags: ["rails", "js", "openai", "2024"]
        },    
        {
            url: "https://github.com/mzen17/HonyakuBot",
            title: "HonyakuBot",
            img: "https://raw.githubusercontent.com/mzen17/HonyakuBot/refs/heads/main/gallery/answer.jpg",
            description: "A game designed to train human beings for translation like an AI. Large datasets with semantic analysis to judge accuracy.",
            tags: ["python", "similarity", "NLP", "2023"]
        },        
        {
            url: "https://github.com/mzen17/cookiemonster/",
            title: "Cookie Monster",
            img: "https://raw.githubusercontent.com/mzen17/cookiemonster/refs/heads/main/CookieGraphData.png",
            description: "A web scrapper for understanding cookies. This is the codebase for our paper about GDPR policies and its affect on cookie use.",
            tags: ["research", "networks", "internet", "2023"]
        },
        {
            url: "https://github.com/mzen17/ShooterGame-Unity",
            title: "Shooter Game",
            img: "https://raw.githubusercontent.com/mzen17/ShooterGame-Unity/refs/heads/master/ShooterGame.png",
            description: "A build of a shooter game made in Unity with player turns and movement, a unity feature testing experiement.",
            tags: ["unity3d", "C#", "art", "2022"]
        },      
        {
            url: "https://github.com/mzen17/ping-traceroute",
            title: "Ping & Traceroute",
            img: "https://raw.githubusercontent.com/mzen17/ping-traceroute/refs/heads/main/ping.png",
            description: "A generic implementation of ping and traceroutes in python using socketes and dpkt packet for my networks class.",
            tags: ["python", "networks", "routers", "2022"]
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

<h1 class="text-3xl font-bold mb-8">Core Projects</h1>
<!-- Active Projects Section -->
<div class="mb-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <a class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" href="https://ltw.misekai.net">
            <div class="aspect-video relative">
                <video class="absolute inset-0 w-full h-full object-cover" autoplay loop muted>
                    <source src="https://ltw-cdn.starlitex.com/ltw-1mb.mp4" type="video/mp4">
                </video>
                <div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                    <h3 class="text-white text-xl font-semibold">Light the World</h3>
                </div>
            </div>
        </a>
        
        <a class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" href="https://github.com/mzen17/Energy-Chan">
            <div class="aspect-video relative bg-[url(/AXNE-DEMO.png)] bg-cover bg-center">
                <div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                    <h3 class="text-white text-xl font-semibold" title="Energy-Chan">Energy-Chan</h3>
                </div>
            </div>
        </a>

        <a class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" href="https://github.com/mzen17/ESN-Personal-Analysis">
            <div class="aspect-video relative bg-[url(https://raw.githubusercontent.com/mzen17/ESN-Personal-Analysis/refs/heads/main/report/images/interface.png)] bg-cover bg-center">
        
                <div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                    <h3 class="text-white text-xl font-semibold">Superblob</h3>
                </div>
            </div>
        </a>

    </div>
</div>

<h1 class="text-3xl font-bold mb-8">Selected Projects</h1>

<!-- Projects Section -->
<div class="space-y-8 mb-16 flex flex-col justify-center items-center">
    {#each data as project}
    <FadeInBox tailwind="bg-white rounded-2xl shadow-lg hover:shadow-xl lg:w-[80%] transition-all duration-300 overflow-hidden">
        <div class="md:flex">
            <div class="md:w-1/3">
                <img src={project.img} alt={project.title} class="w-full h-64 md:h-full object-cover">
            </div>
            <div class="md:w-2/3 p-8">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-2xl font-bold text-gray-800">{project.title}</h2>
                    <a href={project.url} class="ml-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                        View
                        <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
                </div>
                <p class="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                <div class="flex flex-wrap gap-2">
                    {#each project.tags as tag}
                    <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">{tag}</span>
                    {/each}
                </div>
            </div>
        </div>
    </FadeInBox>
    {/each}
</div>
<h1 class="text-3xl font-bold mb-8">3D Artwork Gallery</h1>

<!-- Gallery Section -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
    {#each portdata as artwork}

    <FadeInBox tailwind="group relative overflow-hidden transition-all duration-300">
        <div class="aspect-square relative">
            <img src={artwork.url} alt={artwork.title} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 class="text-white text-lg font-semibold mb-2">{artwork.title}</h3>
                <div class="flex flex-wrap gap-1">
                    {#each artwork.tags as tag}
                    <span class="px-2 py-1 bg-white bg-opacity-20 text-white text-xs rounded">{tag}</span>
                    {/each}
                </div>
            </div>
        </div>
    </FadeInBox>
    {/each}
</div>
