<script lang="ts">
    let mode = 0;
    let modes = ["3D"]

    function set_mode( i:number ) {
        mode = i;
    }
</script>

<h1>Portfolios</h1>
<h2>A collection of work.</h2>
<p><a href="/">Return Home</a></p>
<p>TBA</p>

{#each modes as m, index (m)}
    <button on:click={() => set_mode(index)}>{m}</button>
{/each}
