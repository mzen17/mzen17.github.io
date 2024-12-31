<script>
    import "../app.css";
    import * as THREE from 'three';
    import { onMount } from "svelte";

    /*onMount(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setAnimationLoop( animate );
        document.body.appendChild( renderer.domElement );

        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
        const cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;

        // Raycaster and mouse
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Add mousemove event listener
window.addEventListener('mousemove', (event) => {
    // Convert mouse position to normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});



    function animate() {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObject(cube);
        if (intersects.length > 0) {
        // If the mouse is hovering, change color
        cube.material.color.set(0xff0000);
    } else {
        // Reset color
        cube.material.color.set(0x00ff00);
    }
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render( scene, camera );

    }
    })*/
</script>

<div class = "flex flex-row">
    <div class="sidebar bg-purple-300 w-1/4 max-w-[250px] min-h-screen p-5">
        <h2 class="text-xl font-bold text-white mb-4">Mike Zeng</h2>
        <ul class="space-y-3">
            <li><a href="/" class="block text-white text-lg py-2 px-4 rounded hover:bg-purple-400">Home</a></li>
            <li><a href="/education" class="block text-white text-lg py-2 px-4 rounded hover:bg-purple-400">Education</a></li>
            <li><a href="/research" class="block text-white text-lg py-2 px-4 rounded hover:bg-purple-400">Research</a></li>
            <li><a href="/projects" class="block text-white text-lg py-2 px-4 rounded hover:bg-purple-400">Projects</a></li>
            <li><a href="/contact" class="block text-white text-lg py-2 px-4 rounded hover:bg-purple-400">Contact</a></li>
        </ul>
    </div>
    <div class="py-4 px-16 w-3/4">
        <slot />
        </div>
</div>