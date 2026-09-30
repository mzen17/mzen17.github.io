<script lang="ts">
    const talks = [
        {
            venue: 'SPARTA Group, University of Iowa',
            title: 'Towards Responsible and Transparent Website User Interactions Through Browsers',
            abstract: 'Modern web browsers create immersive experiences for a user to interact with the web. While productivity and experiences have improved, an emerging issue is privacy: particularly invasive tracking mechanisms. While there is a ton of work on law and regulation, one of the strongest ways for prevention is with the middleman, the browser, itself. In this talk, I review recent work in analysis of browser features that are used to track, tracking techniques (3rd party cookies, first party, fingerprinting) and Machine Learning techniques to prevent them.'
        },
        {
            venue: 'Modern Marvels 2025 [CE/ECE Senior Design Presentation Day], University of Iowa',
            title: 'Developing a Unified System for Handyman Applications',
            abstract: 'A recent study by Slack found that small business owners are losing on average 96 minutes per day in productivity from context switching between different apps for managing their business. This amounts to over 3 work weeks of lost productivity annually. Handyman businesses are no exception to this. An independent handyman business can have a lot of overhead in their day-to-day operations. To run their business, a handyman needs to be able to track their customers, jobs, materials, and other costs. They also need to manage their schedules, generate quotes, dispatch subcontractors, track invoices, and many other tasks. As their business grows, the time spent having to manage overhead grows with it. This project aims to serve as an all-in-one solution for handymen to manage their life.'
        },
        {
            venue: 'Iowa JSHS 2025, Iowa State University',
            title: 'HLGraphRAG: A Graph Retrieval Augmentation System for Human-like Synthesis of Information',
            abstract: 'Modern LLMs such as OpenAI’s GPT-4 and Meta’s LLaMA 3.2 are limited by their context length of 128k tokens. This hinders their ability to function as character AI systems. These systems require the ability to recall information across large contexts, such as storing every event in a human life. Currently, Retrieval-Augmentation methods, such as LangChain, address context limitations. However, they fall short in accurately simulating human memory in question-answering tasks across multiple domains. Lately, GraphRAG was introduced, offering significant memory performance improvements for global retrieval tasks. This raises the question of how well it performs specifically in character AI systems. In this talk, I explore the performance of GraphRAG compared to other systems in the scope of character AI systems.'
        }
    ];
</script>

<svelte:head>
    <title>Talks · Mike Zeng</title>
</svelte:head>

<h1 class="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Talks</h1>
<p class="mt-3 text-lg text-slate-500 dark:text-slate-400">Various talks I have given over the years.</p>

<div class="mt-12 max-w-3xl divide-y divide-slate-200 dark:divide-slate-800">
    {#each talks as talk}
        <article class="py-8 first:pt-0">
            <p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{talk.venue}</p>
            <h2 class="mt-2 text-xl font-medium leading-snug text-slate-900 dark:text-slate-100">{talk.title}</h2>
            <p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{talk.abstract}</p>
        </article>
    {/each}
</div>
