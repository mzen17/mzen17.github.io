<script>
    import "../app.css";
    import * as THREE from 'three';
    import { onMount } from "svelte";
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

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

    <div class="navbar bg-gradient-to-r from-purple-600 to-purple-800 w-full shadow-lg">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between h-16">
                <!-- Logo/Name and main nav items -->
                <div class="flex items-center space-x-8">
                    <h2 class="text-2xl font-bold text-white">Mike</h2>
                    <!-- Desktop navigation -->
                    <nav class="hidden md:flex space-x-1">
                        <a href="/" class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors duration-200">Home</a>
                        <a href="/projects" class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors duration-200">Projects</a>
                    </nav>
                </div>
                <!-- Mobile menu button -->
                <button class="md:hidden text-white hover:bg-purple-700 p-2 rounded-md" onclick="toggleMobileMenu()">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            
            <!-- Mobile menu -->
            <div id="mobile-menu" class="md:hidden hidden">
                <div class="px-2 pt-2 pb-3 space-y-1 bg-purple-700 rounded-md mt-2">
                    <a href="/" class="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-600">Home</a>
                    <a href="/education" class="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-600">Education</a>
                    <a href="/research" class="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-600">Research</a>
                    <a href="/projects" class="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-600">Projects</a>
                    <a href="/contact" class="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-600">Contact</a>
                </div>
            </div>
        </div>
    </div>


<div class = "flex flex-row w-full">
   

    <div class="py-4 px-16 items-center justify-center w-full">
        <slot />
        </div>
</div>

<div class="w-full bg-gradient-to-r from-purple-600 to-purple-800 h-8" />