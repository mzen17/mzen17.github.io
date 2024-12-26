<script lang="ts">
    let showcourse = false;

    function togglecourse() {
        showcourse = !showcourse;
    }
</script>

<div class="mb-4">
<h1 class="text-2xl mb-1">Summary</h1>
Essentially, I have a BS in computer science at the University of Iowa, having satisfied all of the requirements for
a computer science major. However, I also am a student at West High School and run several clubs. I participate in academic
competitions such as USACO and AMCs, as well as having online coursework.
</div>

<div class="mb-4">
    <h1 class="text-2xl">Organizations</h1>
    <h2 class="text-xl">Advancing Towards Human Recreation Lab</h2>
    <h3 class="text-lg text-slate-600 mb-2">Lead Researcher</h3>
    AI application research in the context of human recreation.
    Developed a SOTA retrieval structure for LLMs, improving memory recall compared to prev systems by 50%. Working on reinforcement judgement system for personification of LLM output. Developing a model for real-time AI actions. DM for technical blog.

    <h2 class="text-xl mt-8">Homelab</h2>
    <h3 class="text-lg text-slate-600 mb-2">System Administrator</h3>
    Designed & maintained an HPC cluster to for server hosting & CPU/GPU compute services for SaaS products & AI inference. Dense virtualization environment running NAS, DNS/DHCP, Postgres, NGINX, Kubernates, remote workstations, OpenVPN, Red Hat Enterprise Linux.

    <h2 class="text-xl mt-8">West Computing Club</h2>
    <h3 class="text-lg text-slate-600 mb-2">Co-Founder</h3>
    Our club is dedicated to providing learning pathways to motivated students who have a strong interest in computer science.
    We typically teach concepts in computer science, ranging from artificial intelligence to operating system concepts. Additionally, we have two branches, 
    competitive coding (USACO, CodeForces, LeetCode), and Cybersecurity (picoCTF, overthewire, etc).
</div>

<div class="mb-4">
    <h1 class="text-2xl">Awards</h1>
    <ul class="mb-4 text-slate-800">
        <li>USACO Silver (Top 25% Nation)</li>
        <li>TSA TEAMS National Qualifier, State Champion</li>
        <li>Codepath TIP102 Participant</li>
    </ul>
</div>

<div>
<h1 class="text-2xl mb-1">Coursework</h1>
{#if showcourse}
<h2 class="text-xl">University of Iowa</h2>
<ul class="mb-4 text-slate-800">
    <li>ENGR:1300 Introduction to Computer Engineering</li>
    <li>CS:2210 Discrete Structures</li>
    <li>CS:2230 Data Structures</li>
    <li>CS:2630 Computer Organization</li>
    <li>CS:2820 Introduction to Software Development</li>
    <li>CS:3330 Algorithms</li>
    <li>CS:3620 Operating Systems</li>
    <li>CS:3640 Computer Networks</li>
    <li>CS:3820 Programming Language Concepts</li>
    <li>CS:4330 Theory of Computation</li>
    <li>CS:5610 High Performance Computing and Architecture (Upcoming)</li>
    <li>CS:5620 Distributed Systems and Algorithms</li>
    <li>CS:5820 Software Engineering Languages and Tools</li>
    <li>CS:5830 Software Engineering Project (Upcoming)</li>
    <li>CS:5990 Individualized Research/Programming Project (Upcoming)</li>
    <li>STAT:2010 Statistical Methods and Computing</li>
    <li>STAT:3200 Linear Regression (Upcoming)</li>
    <li>MATH:2700 Linear Algebra (Upcoming)</li>
    <li>CHIN:3101 + 3102 Chinese Year 3 (Upcoming)</li>
</ul>

<h2 class="text-xl">CodePath</h2>
<ul class="mb-4 text-slate-800">
    <li>TIP102: Intermediate Technical Interview Prep </li>
</ul>
{/if}
<button on:click={togglecourse} class="text-blue-300">
    {#if showcourse}
    Click to collaspe.
    {:else}
    Click to expand.
    {/if}
    </button>
</div>
