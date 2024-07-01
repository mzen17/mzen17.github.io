<script lang="ts">
    import { base } from '$app/paths'
</script>

<div class="border-2 border-green-400 p-4 bg-gray-200">
    <h2 class="text-xl">Mike Zeng</h2>
    <h4>mzen17.jp@gmail.com</h4>
</div>

<div class="">
    <h1 class = "text-2xl mt-4">My Interests</h1>

    These are things that I am interested in, and are used as project tags.
    <h2 class="text-xl text-gray-500 mt-4">CS</h2>    
    <ul class = "ml-8 mb-2">
        <li> - Web Applications [Django, FastAPI, Svelte, React]    </li>
        <li> - Machine Learning [Pytorch, Transformers, TensorFlow] </li>
        <li> - Game Development [Unreal Engine, Unity, Godot]       </li>
        <li> - Algorithms       [Python, C++, Rust]                 </li>
    </ul>
    My primary focus is Computer Science, though there are many fields of computer science that 
    I am interested in. Mainly, I am trying to get production-ready projects and a meaningful
    success statistic. I also focus on competitive programming, mainly USACO, CodeForces, and LeetCode.

    <h2 class="text-xl text-gray-500 mt-4">Statistics</h2>    
    <ul class = "ml-8 mb-2">
        <li> - Statistic Software   [Python, R, SAS]    </li>
    </ul>
    Statistics is one of my focuses, and its something I have been studying extensively. 
    There aren't an enourmous a lot of competitions for it, so I mostly study theory and
    do Kaggle occasionally.

    <h2 class="text-xl text-gray-500 mt-4">Art</h2>
    <ul class = "ml-8 mb-2">
        <li> - 3D Modeling      [Blender, Substance Painter]    </li>
        <li> - Drawing          [PhotoShop, Clip Studio Paint]  </li>
        <li> - Video Editing    [DaVinci Resolve]               </li>
    </ul>

    I do art in my free time casually whenever I find time for it, and though my art is no where near
    production quality, I did start a 180-day journey to improve it a lot. Progress is being made
    however, that I am sure.

    <h2 class="text-xl text-gray-500 mt-4">Misc</h2>
    <ul class = "ml-8">
        <li> - Japanese [~N4]</li>
        <li> - Writing </li>
	<li> - MLBB [Mythic Glory]</li>
    </ul>

    <h1 class = "text-2xl mt-4">Projects</h1>
    <ul>
        <li><a class="text-blue-400" href="https://github.com/mzen17/Data-Engine">Data Engine</a> | A highly performant data engine written in Rust and Tauri for processing, filtering, or cleaning of mass amounts of data.</li>
        <li><a class="text-blue-400" href={base + "/"}>Personal Website </a>| A website built from scratch using SvelteKit with TailwindCSS.</li>
        <li><a class="text-blue-400" href="https://github.com/mzen17/Page-Processor">Page Processor</a> | Web-based word processor with a very niche use case of editing single-page natured documents, where page matters. </li>

    </ul>
    
    <h1 class="text-2xl mt-4">Site Links</h1>
    <ul>
        <li><a class=" text-blue-400" href={base + "/coursework"}>Coursework</a></li>
        <li><a class=" text-blue-400" href={base + "/portfolios"}>Portfolios</a></li>
    </ul>
    <h1 class = "text-2xl mt-4">Other links</h1>
    <ul>
        <li><a class=" text-blue-400" href="https://github.com/mzen17">Github</a>
    </ul>
</div>
