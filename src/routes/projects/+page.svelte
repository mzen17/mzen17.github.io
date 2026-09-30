<script lang="ts">
    import ProjectList from '$lib/ProjectList.svelte';
</script>

<svelte:head>
    <title>Projects · Mike Zeng</title>
</svelte:head>

<h1 class="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Projects</h1>
<p class="mt-3 text-lg text-slate-500 dark:text-slate-400">Research and software projects.</p>

<section class="mt-12">
    <ProjectList />
</section>
