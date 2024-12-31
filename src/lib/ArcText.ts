import * as THREE from 'three';
/*
This creates a dynamic object with a lot of features.
Notable features include: onhover
*/

class ArcText {
    TEXT: string;
    scene: THREE.Scene
    object: THREE.Mesh

    constructor(text: string, scene: THREE.Scene) {
        this.TEXT = text
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
        const cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        this.scene = scene;
        this.object = cube;
    }

    animate() {

    }
}



