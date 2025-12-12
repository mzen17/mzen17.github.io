<script>
    import FadeInBox from "$lib/FadeInBox.svelte";
</script>

<div class="px-64">
<h3 class="text-2xl">Talks</h3>
<p>Various talks I have given over the years.</p>
<FadeInBox tailwind="flex flex-col">
    <h1 class="text-lg md:text-xl mb-1 mt-8">SPARTA Group, University of Iowa</h1>
    <h2 class="text-base md:text-lg ">Towards Responsible and Transparent Website User Interactions Through Browsers</h2>
    <p class="text-sm">
    Modern web browsers create immserive experiences for a user to interact with the web. Whilst productivity and experiences improved, an emerging issue is privacy: particulary invasive tracking mechanisms. While there is ton of work on law and regulation, one of the strongest ways for prevention is with the middleman, the browser, itself. In this talk, I review recent work in analysis of browser features that are used to track, tracking techniques (3rd party cookies, first party, fingerprinting) and Machine Learning techniques to prevent them. 
    </p>
</FadeInBox>

<FadeInBox tailwind="flex flex-col">
    <h1 class="text-lg md:text-xl mb-1 mt-8">Modern Marvels 2025 [CE/ECE Senior Design Presentation Day], University of Iowa</h1>
    <h2 class="text-base md:text-lg ">Developing a Unified System for Handyman Applications</h2>
    <p class="text-sm">
A recent study by Slack found that small business owners are losing on average 96 minutes per day in productivity from context switching between different apps for managing their business. This amounts to over 3 work weeks of loss productivity annually. Handyman businesses are no exception to this. An independent handyman business can have a lot of overhead in their day-to-day operations. To run their business, a handyman needs to be able to track their customers, jobs, materials, and other costs. They also need to manage their schedules, generate quotes, dispatch subcontractors, track invoices, and many other tasks. As their business grows, the time spent having to manage overhead grows with it. This project aims to serve as an all-in-one solution for handymans to manage their life.

    </p>
</FadeInBox>


<FadeInBox tailwind="flex flex-col">
    <h1 class="text-lg md:text-xl mb-1 mt-8">Iowa JSHS 2025, Iowa State University</h1>
    <h2 class="text-base md:text-lg ">HLGraphRAG: A Graph Retrieval Augmentation System for Human-like Synthesis of Information</h2>
    <p class="text-sm">
    Modern LLMs such as OpenAI’s GPT-4 and Meta’s LLaMA 3.2 are limited by their context length of 128k tokens. This hinders their ability to function as character AI systems. These systems require the ability to recall information across large contexts, such as storing every event in a human life. Currently, Retrieval-Augmentation methods, such as LangChain, address context limitations. However, they fall short in accurately simulating human memory in question-answering tasks across multiple domains. Lately, GraphRAG was introduced, offering significant memory performance improvements for global retrieval tasks. This raises the question of how well it performs specifically in character AI systems. In this talk, I explore the performance of GraphRAG compared to other systems in the scope of character AI systems. 
    </p>
</FadeInBox>
</div>
