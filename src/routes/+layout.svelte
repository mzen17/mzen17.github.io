<script>
    import "../app.css";
</script>

<div class = "flex flex-row">
    <div class="sidebar bg-purple-300 w-1/4 max-w-[250px] min-h-screen p-5">
        <h2 class="text-xl font-bold text-white mb-4">Mike Zeng</h2>
        <ul class="space-y-3">
            <li><a href="/" class="block text-white text-lg py-2 px-4 rounded hover:bg-purple-400">Home</a></li>
            <li><a href="/research" class="block text-white text-lg py-2 px-4 rounded hover:bg-purple-400">Research</a></li>
            <li><a href="/education" class="block text-white text-lg py-2 px-4 rounded hover:bg-purple-400">Education</a></li>
            <li><a href="/projects" class="block text-white text-lg py-2 px-4 rounded hover:bg-purple-400">Projects</a></li>
            <li><a href="/contact" class="block text-white text-lg py-2 px-4 rounded hover:bg-purple-400">Contact</a></li>
        </ul>
    </div>

    <div class="py-4 px-16 w-3/4">
    <slot />
    </div>
</div>