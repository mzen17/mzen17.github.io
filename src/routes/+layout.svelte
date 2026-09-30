<script lang="ts">
    import "../app.css";
    import { page } from '$app/stores';

    const links = [
        { href: '/', label: 'Home' },
        { href: '/projects', label: 'Projects' },
        { href: '/talks', label: 'Talks' },
        { href: '/content', label: 'Content' }
    ];

    let menuOpen = false;
    $: $page.url.pathname, (menuOpen = false);
</script>

<div class="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-body antialiased">
    <header class="border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur sticky top-0 z-10">
        <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" class="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">Mike Zeng</a>

            <nav class="hidden md:flex items-center gap-8 text-sm">
                {#each links as link}
                    <a
                        href={link.href}
                        class={$page.url.pathname === link.href
                            ? 'text-slate-900 dark:text-slate-100 font-medium'
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors'}
                    >{link.label}</a>
                {/each}
            </nav>

            <button class="md:hidden p-2 -mr-2 text-slate-600 dark:text-slate-400" aria-label="Toggle menu" aria-expanded={menuOpen} on:click={() => (menuOpen = !menuOpen)}>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>

        {#if menuOpen}
            <nav class="md:hidden border-t border-slate-200 dark:border-slate-800 px-6 py-2">
                {#each links as link}
                    <a href={link.href} class="block py-2 {$page.url.pathname === link.href ? 'text-slate-900 dark:text-slate-100 font-medium' : 'text-slate-600 dark:text-slate-400'}">{link.label}</a>
                {/each}
            </nav>
        {/if}
    </header>

    <main class="flex-1 w-full max-w-5xl mx-auto px-6 py-12 md:py-16">
        <slot />
    </main>

    <footer class="border-t border-slate-200 dark:border-slate-800">
        <div class="max-w-5xl mx-auto px-6 py-6 text-sm text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row gap-2 justify-between">
            <span>&copy; {new Date().getFullYear()} Mike Zeng</span>
            <div class="flex gap-6">
                <a href="https://github.com/mzen17" target="_blank" rel="noopener" class="hover:text-slate-900 dark:hover:text-slate-100">GitHub</a>
                <a href="https://www.linkedin.com/in/mike-zeng-189756257/" target="_blank" rel="noopener" class="hover:text-slate-900 dark:hover:text-slate-100">LinkedIn</a>
                <a href="https://wcms.starlitex.com/bucket/mzen-blog" target="_blank" rel="noopener" class="hover:text-slate-900 dark:hover:text-slate-100">Blog</a>
            </div>
        </div>
    </footer>
</div>
