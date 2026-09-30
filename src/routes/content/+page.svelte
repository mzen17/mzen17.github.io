<script lang="ts">
    import { artwork, novels } from '$lib/data';

    const aspect = {
        tall: 'aspect-[3/4]',
        square: 'aspect-square',
        wide: 'aspect-video'
    };
</script>

<svelte:head>
    <title>Content · Mike Zeng</title>
</svelte:head>

<h1 class="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Content</h1>
<p class="mt-3 text-lg text-slate-500 dark:text-slate-400">3D renders, novels, and videos.</p>

<section class="mt-12">
    <h2 class="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 mb-6">3D Renders</h2>
    <div class="columns-1 sm:columns-2 lg:columns-3 gap-px">
        {#each artwork as art}
            <figure class="group relative mb-px break-inside-avoid overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img src={art.url} alt={art.title} loading="lazy" class="w-full object-cover {aspect[art.shape]}" />
                <figcaption class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100 [@media(hover:none)]:opacity-100">
                    <p class="font-medium text-white">{art.title}</p>
                    <div class="mt-2 flex flex-wrap gap-1.5">
                        {#each art.tags as tag}
                            <span class="rounded bg-white/20 px-2 py-0.5 text-xs text-white backdrop-blur-sm">{tag}</span>
                        {/each}
                    </div>
                </figcaption>
            </figure>
        {/each}
    </div>
</section>

<section class="mt-20">
    <h2 class="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 mb-6">Novels</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 items-end">
        {#each novels as novel}
            <figure>
                <img src={novel.cover} alt="{novel.title} cover" loading="lazy" class="w-full shadow-sm" />
                <figcaption class="mt-3 text-sm font-medium text-slate-900 dark:text-slate-100">{novel.title}</figcaption>
            </figure>
        {/each}
    </div>
</section>

<section class="mt-20">
    <h2 class="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 mb-6">YouTube</h2>
    <a href="https://www.youtube.com/@ATHRmzen" target="_blank" rel="noopener" class="block">
        <img src="/media/youtube.webp" alt="Stills from videos on the ATHRmzen YouTube channel" loading="lazy" class="w-full" />
    </a>
    <a href="https://www.youtube.com/@ATHRmzen" target="_blank" rel="noopener" class="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">@ATHRmzen on YouTube &rarr;</a>
</section>
