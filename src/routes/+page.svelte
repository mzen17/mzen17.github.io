<script lang="ts">
    let showcourse = false;

    function togglecourse() {
        showcourse = !showcourse;
    }
</script>

<div>
    <h2>Mike Zeng</h2>
    <h4>mzen17.jp@gmail.com</h4>

    <h1>Interests</h1>
    <h2>CS/Math</h2>
    <ul>
        <li>AMC 10/12</li>
        <li>USACO</li>
        <li>Codeforces</li>
        <li>Kaggle</li>
    </ul>

    <h2>Misc</h2>
    <ul>
        <li>3D (Modeling + Texturing + Sculpting)</li>
        <li>Drawing (2D + Animation)</li>
        <li>Japanese</li>
    </ul>

    <h1>Courses [University of Iowa]</h1>
    {#if showcourse}
    <h2>Completed [Fall 2022-Fall 2023]</h2>
    <ul>
        <li>ENGR:1300 Introduction to Computer Engineering</li>
        <li>CS:2210 Discrete Structures</li>
        <li>CS:2230 Data Structures</li>
        <li>CS:2630 Computer Organization</li>
        <li>CS:3330 Algorithms</li>
        <li>CS:3640 Introduction to Computer Networking</li>
    </ul>
    <h2>In Progress [Spring 2024]</h2>
    <ul>
        <li>STAT:2010 Statistical Methods and Computing </li>
        <li>CS:3820 Programming Language Concepts</li>
        <li>CS:4330 Theory of Computation</li>
        <li>CS:2820 Introduction to Software Development</li>
    </ul>
    {/if}
    <button on:click={togglecourse}>
    {#if showcourse}
    Hide
    {:else}
    Show
    {/if}
    </button>


    <h1>Projects</h1>
    <ul>
        <li>Data Engine | A highly performant data engine written in Rust and Tauri for processing, filtering, or cleaning of mass amounts of data.</li>
        <li>Character AI | An AI for characters, taking a different approach than most by representing humans as a dense list of actions, based off of the statement "actions speak louder than words."</li>
        <li><a href="https://ltw.pages.dev">Light the World</a> | A 3D game with Unreal Engine that relies on the character AI to create an immerse gaming experience. | Expected Completion Date: Q3 2025</li>
        <li><a href="/">Personal Website </a>| A website built from scratch using SvelteKit with TailwindCSS.</li>
        <li><a href="https://github.com/mzen17/life-manager">Life Manager</a> | A web app to help you manage your life! Powered by ReactJS, FastAPI, PostgreSQL, and Tailwindcss</li>
    </ul>

    <h1>Other links</h1>
    <ul>
        <li><a href="https://github.com/mzen17">Github</a>
        <li><a href="/portfolios">Portfolios</a></li>
        <li>WNs (does not work yet)</li>
    </ul>
</div>