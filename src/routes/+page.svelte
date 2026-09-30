<script lang="ts">
    const coursework = [
        'Discrete Math, Data Structures, Computer Organization, Algorithms, Computer Engineering',
        'Operating Systems, Computer Networks, Programming Languages, Theory of Computation',
        'Multimedia Information Systems, High Performance Computing and Architecture, Distributed Systems and Algorithms',
        'Software Engineering Languages and Tools, Software Engineering Project',
        'Statistical Methods and Computing, Probability and Statistics (Calculus), Linear Regression, Linear Algebra, Calculus III, Real Analysis'
    ];

    const teaching = [
        {
            org: 'Iowa City Math Circle',
            url: 'https://iowacitymathcircle.org/',
            date: 'July 2025 – August 2025',
            points: ['Assistant instructor for the 2025 Coding Camp']
        },
        {
            org: 'Tutor Iowa',
            url: 'https://tutor.uiowa.edu/',
            date: 'January 2024 – May 2024',
            points: ['Undergraduate Tutor for Algorithms (CS:3330)']
        },
        {
            org: 'West Computing Club',
            url: 'https://west-computing-club.github.io/',
            date: 'September 2023 – June 2025',
            points: ['Managed weekly symposiums in computer science, arranging topics ranging from OS to ML/AI']
        }
    ];

    const btn ='inline-flex items-center gap-2 h-10 px-4 rounded-md text-sm font-medium transition-colors';
    const btnOutline = `${btn} border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-slate-400 dark:hover:border-slate-500`;
</script>

<svelte:head>
    <title>Mike Zeng</title>
    <meta name="description" content="Mike Zeng — second year computer science student and researcher at the University of Iowa SPARTA Lab and Biocomputing Lab." />
</svelte:head>

<!-- Intro -->
<section class="flex flex-col-reverse md:flex-row md:items-center gap-10">
    <div class="flex-1">
        <h1 class="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Mike Zeng</h1>
        <p class="mt-2 text-lg text-slate-500 dark:text-slate-400">Researcher · CS + Math @ University of Iowa</p>
        <p class="mt-6 leading-relaxed max-w-2xl">
            I am a second year computer science student at the University of Iowa, interested in building
            and understanding safe technology. I currently do research at the <a href="https://sparta.cs.uiowa.edu/" target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 hover:underline">SPARTA Lab</a> and the <a href="https://tintin.cs.uiowa.edu" target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 hover:underline">Biocomputing
            Lab</a> at the University of Iowa. Previously, I was working at the <a href="https://hydroinformatics.tulane.edu" target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 hover:underline">Hydroinformatics Lab</a>
            and was an NSF RTG fellow for the math department.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
            <a href="/resume.pdf" target="_blank" rel="noopener" class="{btn} bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300">Resume</a>
            <a href="https://github.com/mzen17" target="_blank" rel="noopener" class={btnOutline}>
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
                GitHub
            </a>
            <a href="https://www.linkedin.com/in/mike-zeng-189756257/" target="_blank" rel="noopener" class={btnOutline}>
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>
                LinkedIn
            </a>
            <a href="https://wcms.starlitex.com/bucket/mzen-blog" target="_blank" rel="noopener" class={btnOutline}>Blog</a>
        </div>
    </div>

    <img src="/uh.png" alt="Mike Zeng" class="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border border-slate-200 dark:border-slate-800 shrink-0" />
</section>

<!-- Education -->
<section class="mt-20">
    <h2 class="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 mb-6">Education</h2>
    <div class="border-l-2 border-slate-200 dark:border-slate-800 pl-6">
        <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 class="text-lg font-medium text-slate-900 dark:text-slate-100">University of Iowa</h3>
            <span class="text-sm text-slate-500 dark:text-slate-400">August 2025 – June 2029</span>
        </div>
        <p class="text-slate-600 dark:text-slate-400">B.S. in Mathematics and Computer Science</p>

        <h4 class="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Completed Coursework</h4>
        <ul class="mt-3 space-y-2 text-sm leading-relaxed list-disc pl-5 marker:text-slate-300 dark:marker:text-slate-600">
            {#each coursework as line}
                <li>{line}</li>
            {/each}
        </ul>

        <h4 class="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Activities</h4>
        <p class="mt-3 text-sm">Association for Computing Machinery (ACM) · Putnam Team</p>
    </div>
</section>

<!-- Teaching -->
<section class="mt-20">
    <h2 class="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 mb-6">Teaching</h2>
    <div class="border-l-2 border-slate-200 dark:border-slate-800 pl-6 space-y-8">
        {#each teaching as item}
            <div>
                <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 class="text-lg font-medium text-slate-900 dark:text-slate-100">{item.org}</h3>
                    <span class="text-sm text-slate-500 dark:text-slate-400">{item.date}</span>
                </div>
                <ul class="mt-3 space-y-2 text-sm leading-relaxed list-disc pl-5 marker:text-slate-300 dark:marker:text-slate-600">
                    {#each item.points as point}
                        <li>{point}</li>
                    {/each}
                </ul>
                <a href={item.url} target="_blank" rel="noopener" class="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Website &rarr;</a>
            </div>
        {/each}
    </div>
</section>

<!-- Contact -->
<section class="mt-20">
    <h2 class="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 mb-4">Contact</h2>
    <p>Send an email to <span class="font-mono text-sm text-slate-900 dark:text-slate-100">mzen17.jp(at)gmail.com</span> or <span class="font-mono text-sm text-slate-900 dark:text-slate-100">mzeng5(at)uiowa.edu</span>.</p>
</section>
