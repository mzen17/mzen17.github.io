<script lang="ts">
    import { base } from '$app/paths'
    import FadeInBox from '$lib/FadeInBox.svelte';
    import TypingEffect from '$lib/TypingEffect.svelte'
</script>

<div class="flex flex-col justify-center items-center px-4">

    <div class="flex flex-col md:flex-row items-center ">
        <img src="/uh.png" alt="pfp" class="w-48 h-48 md:w-64 md:h-64 rounded-full mb-4 md:mb-0 md:mr-4" />
        <div class="flex flex-col justify-center text-center md:text-left">
            <div class="mb-0">
                <h1 class="text-xl">Hi, I'm Mike!</h1>

                I am a researcher at the University of Iowa Sentinels for Privacy-Aware and Responsible Technological Advancement (SPARTA) Lab. My interests are particularly around advertising technologies & agentic systems. Oh, I'm a freshmen CS + Math major @ University of Iowa by the way!
            </div>

            <div class="mt-2 mb-2 flex flex-wrap items-center justify-center md:justify-start gap-2">
                <a href="/resume.pdf" class="px-4 md:px-6 h-8 rounded-lg items-center justify-center flex text-white border-2 border-white hover:bg-blue-600 transition bg-black text-sm" target="_blank">RESUME</a>
                <a href="https://www.linkedin.com/in/mike-zeng-189756257/" class="px-4 md:px-6 rounded-lg py-2 text-white border-2 border-white hover:bg-blue-600 transition" target="_blank">
                    <img alt="My linkedin" class="h-8" src="/li.svg" />
                </a>
                <a href="https://github.com/mzen17" class="px-4 md:px-6 rounded-lg py-2 text-white border-2 border-white hover:bg-blue-600 transition" target="_blank">
                    <img alt="My github" class="h-8" src="/github.svg" />
                </a>
                <a href="https://blog.mzen.dev" class="px-4 md:px-6 h-8 rounded-lg items-center justify-center flex text-white border-2 border-white hover:bg-blue-600 transition bg-black text-sm" target="_blank">BLOG</a>
            </div>
        </div>
    </div>

    <h1 class="text-2xl md:text-3xl font-bold mb-8 mt-8 text-center">Core Projects</h1>

    <FadeInBox tailwind="w-full">
    <!-- Active Projects Section -->
    <div class="mb-16 w-full mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
            <a class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" href="https://ltw.misekai.net">
                <div class="aspect-video relative">
                    <video class="absolute inset-0 w-full h-full object-cover" autoplay loop muted>
                        <source src="https://ltw-cdn.starlitex.com/ltw-1mb.mp4" type="video/mp4">
                    </video>
                    <div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h3 class="text-white text-lg md:text-xl font-semibold text-center px-2">Light the World</h3>
                    </div>
                </div>
            </a>
        
            <a class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" href="https://github.com/mzen17/Energy-Chan">
                <div class="aspect-video relative bg-[url(/AXNE-DEMO.png)] bg-cover bg-center">
                    <div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h3 class="text-white text-lg md:text-xl font-semibold text-center px-2" title="Energy-Chan">Energy-Chan</h3>
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
    </FadeInBox>

    <a class="text-lg md:text-xl mb-8 text-blue-400 text-center block" href="/projects">View More Projects</a>

    <FadeInBox tailwind="flex flex-col justify-center items-center">
    
        <h1 class="text-lg md:text-xl mb-1 mt-8 text-center px-4">B.S in Mathematics and Computer Science [Completed Coursework]</h1>
        <h2 class="text-base md:text-lg text-center px-4">University of Iowa, August 2025 - June 2029</h2>
        <ul class="mt-4 mb-4 text-slate-800 w-full md:w-[60%] list-disc px-6 md:px-0">
            <li>Discrete Math, Data Structures, Computer Organization, Algorithms, Computer Engineering</li>
            <li>Operating Systems, Computer Networks, Programming Languages, Theory of Computation</li>
            <li>Multimedia Information Systems, High Performance Computing and Architecture, Distributed Systems and Algorithms</li>
            <li>Software Engineering Languages and Tools, Software Engineering Project</li>
            <li>Statistical Methods and Computing, Probability and Statistics (Calculus), Linear Regression, Linear Algebra</li>
        </ul>

    </FadeInBox>

    <h1 class="text-xl md:text-2xl font-bold mb-4 mt-8 text-center">Contact</h1>
    <p class="text-center px-4">Send an email to [mzen17.jp(at)gmail.com] or [mzeng5(at)uiowa.edu].</p>

</div>
