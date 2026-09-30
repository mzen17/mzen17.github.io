<script lang="ts">
    import { projects } from '$lib/data';

    const link = 'inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each projects as project}
        <article class="flex flex-col rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6">
            <p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{project.venue}</p>
            <h3 class="mt-2 text-lg font-medium text-slate-900 dark:text-slate-100">{project.title}</h3>
            <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.description}</p>
            <div class="mt-4 flex gap-5">
                <a href={project.code} target="_blank" rel="noopener" class={link}>Code &rarr;</a>
                {#if project.paper}
                    <a href={project.paper} target="_blank" rel="noopener" class={link}>Paper &rarr;</a>
                {/if}
                {#if project.model}
                    <a href={project.model} target="_blank" rel="noopener" class={link}>Model &rarr;</a>
                {/if}
            </div>
        </article>
    {/each}
</div>
