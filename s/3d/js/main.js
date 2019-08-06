window.onload = function() {
  var canvas = document.getElementById('c1');
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 10000);

  scene.add(camera);

  var root = new THREE.Object3D();

  scene.add(root);
  // camera.position.set(800, 15, -60);

  // camera.up = new THREE.Vector3(0,0,1);
  // camera.lookAt(new THREE.Vector3(0,0,0));

  camera.position.set(0, 15, 100);
  // camera.position.set(0, 300, 800);

  // camera.lookAt(scene.position);
  // camera.position.set(0, 15, 0);
                         
  var renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});

  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor( 0xFFFFFF, 0 );
  // renderer.antialias = true;

  canvas.appendChild(renderer.domElement);

  // camera.position.x = -20;
  // camera.position.z = 100;


  var gridXZ = new THREE.GridHelper(1000, 10);
  gridXZ.setColors( new THREE.Color(0x006600), new THREE.Color(0x006600) );
  gridXZ.position.set( 0,0,0 );
  scene.add(gridXZ);
  
  // var gridXY = new THREE.GridHelper(1000, 100);
  // gridXY.position.set( 1000,1000,0 );
  // gridXY.rotation.x = Math.PI/2;
  // gridXY.setColors( new THREE.Color(0x000066), new THREE.Color(0x000066) );
  // scene.add(gridXY);

  // var gridYZ = new THREE.GridHelper(1000, 100);
  // gridYZ.position.set( 0,1000,1000 );
  // gridYZ.rotation.z = Math.PI/2;
  // gridYZ.setColors( new THREE.Color(0x660000), new THREE.Color(0x660000) );
  // scene.add(gridYZ);

//   const color2 = 0xFFFFFF;
// const intensity2 = 1;
const light2 = new THREE.AmbientLight(0xFFFFFF, 1);
light2.position.set(0, 300, 500);
scene.add(light2);

// const light3 = new THREE.AmbientLight(0xFFFFFF, 1);
// light3.position.set(500, 100, 0);
// scene.add(light3);

// const light4 = new THREE.AmbientLight(0xFFFFFF, 1);
// light4.position.set(0, 100, -500);
// scene.add(light4);

// const light5 = new THREE.AmbientLight(0xFFFFFF, 1);
// light5.position.set(-500, 300, 0);
// scene.add(light5);

// const color = 0xff0000;
// const color = 0xffffff;
// const intensity = 100;
const light = new THREE.DirectionalLight(0xFFFFFF, 3);
light.position.set(0, 300, 500);
light.castShadow = true;
light.target.position.set(-10, 0, -10);
scene.add(light);
scene.add(light.target);

// const color3 = 0xffffff;
// const intensity3 = 6;
// const light3 = new THREE.DirectionalLight(color3, intensity3);
// light3.position.set(10, 10, 0);
// light3.target.position.set(-30, 0, 0);
// scene.add(light3);
// scene.add(light3.target);

    

//  class ColorGUIHelper {
//   constructor(object, prop) {
//     this.object = object;
//     this.prop = prop;
//   }
//   get value() {
//     return `#${this.object[this.prop].getHexString()}`;
//   }
//   set value(hexString) {
//     this.object[this.prop].set(hexString);
//   }
// }

// const gui = new dat.GUI();
// gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color');
// gui.add(light, 'intensity', 0, 10, 0.01);
// gui.add(camera.position.x, 'x', -1000, 1000);
// gui.add(camera.position.y, 'y', -100, 100);
// gui.add(camera.position.z, 'z', -100, 100);

// const gui3 = new dat.GUI();
// gui3.addColor(new ColorGUIHelper(light3, 'color'), 'value').name('color');
// gui3.add(light3, 'intensity', 0, 10, 0.01);
// gui3.add(light3.target.position, 'x', -10, 10);
// gui3.add(light3.target.position, 'z', -10, 10);
// gui3.add(light3.target.position, 'y', 0, 10);


  var meshes = [];

  var head, head1, head2, head3;


  var mtlLoader = new THREE.MTLLoader();
  var objLoader = new THREE.OBJLoader();

  var manager = new THREE.LoadingManager();
  var loader  = new THREE.ImageLoader( manager );
  var textureHead = new THREE.Texture();

  loader.load( 'model/gold_01.jpg', function ( image ) {
    textureHead.image = image;
    textureHead.needsUpdate = true;
  });

  var mapHeightHead = new THREE.TextureLoader().load( "model/gold_01.jpg" );

  // mtlLoader.setPath( 'model/' );
  objLoader.setPath( 'model/' );
    objLoader.load('ashapes_05.obj', function(object){
      // console.log(object);
      // scene.add(object);
      // object.position.x = 200;
      // object.position.y = 20;
      // mshBox = new THREE.Mesh(object);
      object.traverse( function ( child ) {
        if ( child instanceof THREE.Mesh ) {
          meshes.push(child);
        }
      });

      // head2 = meshes[0].geometry.attributes.position.array;
      head2 = meshes[0].geometry;

      // console.log(head2);

      // head2.material = new THREE.MeshPhongMaterial({map: textureHead, specular: 0xfceed2, bumpMap: mapHeightHead, bumpScale: 0.4, shininess: 100});

      // scene.add(head2);
      
      // head2.position.x = 200;
      // head2.position.y = 30;
      // head2.position.z = -100;
      
    });
    objLoader.load('ashapes_02.obj', function(object){

      object.traverse( function ( child ) {
        if ( child instanceof THREE.Mesh ) {
          meshes.push(child);
        }
      });

      // console.log(object);

      head = meshes[1];

      head1 = meshes[1].geometry;

      // var geometry = new THREE.BufferGeometry();

      // head.addAttribute('geometry', new THREE.BufferGeometry())

      // var ba = head.geometry.attributes.position.array;
      // console.log(ba);
      // console.log(head);

      // head.geometry.attributes.position.array = head2;

      

      head.material = new THREE.MeshPhongMaterial({map: textureHead, specular: 0xfceed2, bumpMap: mapHeightHead, bumpScale: 0.4, shininess: 100});

      // head.flatShading = false;

      scene.add(head);
      // object.position.y = 200;
      // object.rotation.x = 360;
      /*head.position.z = -200;
      head.position.x = 100;
      head.position.y = 30;*/
      
      head.position.x = 0;
      head.position.y = 30;
      head.position.z = -150;
    });
    objLoader.load('ashapes_08.obj', function(object){
      // console.log(object);
      // scene.add(object);
      // object.position.x = 200;
      // object.position.y = 20;
      // mshBox = new THREE.Mesh(object);
      object.traverse( function ( child ) {
        if ( child instanceof THREE.Mesh ) {
          meshes.push(child);
        }
      });

      // head2 = meshes[0].geometry.attributes.position.array;
      head3 = meshes[2].geometry;

      // head3.material = new THREE.MeshPhongMaterial({map: textureHead, specular: 0xfceed2, bumpMap: mapHeightHead, bumpScale: 0.4, shininess: 100});

      // scene.add(head3);
      
      // head3.position.x = 400;
      // head3.position.y = 30;
      // head3.position.z = 0;
    });
  // mtlLoader.load("shape_09_6.mtl", function(materials){
  //   materials.preload();
    
  //   objLoader.setMaterials(materials);
    
    

  // });


  var mouseDown = false,
      mouseX = 0,
      mouseY = 0;

  function onMouseMove(evt) {
    if (!mouseDown) {
      return;
    }
    evt.preventDefault();
    var deltaX = evt.clientX - mouseX,
        deltaY = evt.clientY - mouseY;
        mouseX = evt.clientX;
        mouseY = evt.clientY;
        rotateScene(deltaX, deltaY);
    }

    function onMouseDown(evt) {
      evt.preventDefault();
      mouseDown = true;
      mouseX = evt.clientX;
      mouseY = evt.clientY;
    }

    function onMouseUp(evt) {
      evt.preventDefault();
      mouseDown = false;
    }

    function addMouseHandler(canvas) {
      canvas.addEventListener('mousemove', function (e) {
        onMouseMove(e);
      }, false);
      canvas.addEventListener('mousedown', function (e) {
        onMouseDown(e);
      }, false);
      canvas.addEventListener('mouseup', function (e) {
        onMouseUp(e);
      }, false);
    }

    function rotateScene(deltaX, deltaY) {
      // meshes[0].rotation.y += deltaX / 100;
      // meshes[0].rotation.x += deltaY / 100;
      meshes[1].rotation.y += deltaX / 100;
      meshes[1].rotation.x += deltaY / 100;
      // meshes[2].rotation.y += deltaX / 100;
      // meshes[2].rotation.x += deltaY / 100;
    }

    addMouseHandler(document.getElementsByTagName("canvas")[0]);

    console.log(document.getElementsByTagName("canvas")[1]);


  var render = function () {
    requestAnimationFrame( render );
    // controls.update();
    renderer.render(scene, camera);

    // console.log(object);
    // console.log(head2);
  };

  render();

  // function countRabbits() {
  //   head.geometry.attributes.position.array = head2;
  //   render();
  // }

  // document.getElementById('nextBtn').onclick(function() {
  //   head.geometry.attributes.position.array = head2;
  //   render();
  // });

  // let tl = new TimelineMax({paused:true});
  let tl = new TimelineLite();

  // function tlAni(o1,o2) {
    // console.log(obj);
    // console.log(obj.attributes.position.array);
    // tl.to(obj.attributes.position.array,3,{value:1},0);
    // tl.to(o1,3,{geometry.attributes.position.array: o2.attributes.position.array},0);
    // tl.play();
    // tl.restart();
  // }

  var n = document.getElementById('nextBtn');
  var n2 = document.getElementById('prevBtn');

  // console.log(head2);

  n.addEventListener( "click" , function() {

    // var btnId = this.dataset.id;
    // var btnObj = 'head'+btnId;

// console.log(this);
// console.log(head2);

    if(this.dataset.id === '2') {
      this.dataset.id = '3';
      n2.dataset.id = '2';

      // tlAni(head,head2);

      // console.log(head.geometry);
      // console.log(head2);

      // var boundingSphereRadius = head.geometry.boundingSphere.radius;
      // var boundingSphereRadius = head.geometry.boundingSphere;
      // var boundingSphereRadius2 = head2.boundingSphere.radius;
      // console.log(boundingSphereRadius2);
      // console.log(head2.boundingSphere.radius);
      // var boundingSphereCenter = head.geometry.boundingSphere;
      // var boundingSphereX = head.geometry.boundingSphere.center.x;
      // var boundingSphereY = head.geometry.boundingSphere.center.y;
      // var boundingSphereZ = head.geometry.boundingSphere.center.z;
      // var attributesArray = head.geometry.attributes.position.array;
      // var attributesPosition = head.geometry.attributes.position.array;
      // head2.position.z = -100;
      // head2.position.x = 200;
      // head2.position.y = 30;

      meshes[1].rotation.y = -5;
      meshes[1].rotation.x = 0;

      head.geometry = head2;
      head.position.x = 180;
      head.position.y = 30;
      head.position.z = 100;

      console.log(camera);

      // tl.to(camera.position,3,{
      //   x:200,
      //   y:30,
      //   z:0
      // },0);

      tl.to(camera.rotation,3,{
        x:0,
        y:-1.5,
        z:0
      },0);

      // tl.play();

      // tl.to(boundingSphereRadius,3,{
      //   radius:head2.boundingSphere.radius
      // },0);
      // tl.to(boundingSphereCenter,3,{
      //   x:head2.boundingSphere.center.x,
      //   y:head2.boundingSphere.center.y,
      //   z:head2.boundingSphere.center.z,
      // },0);
      // tl.to(attributesPosition,3,{
      //   array:head2.attributes.position.array
      // },0);
      // tl.play();

      

      // console.log(head2.boundingSphere);
      

    } else if(this.dataset.id === '3') {
      head.geometry = head3;
    }


  });

  n2.addEventListener( "click" , function() {

    if(this.dataset.id === '2') {
      this.dataset.id = '1';
      n.dataset.id = '2';
      head.geometry = head2;
    } else if(this.dataset.id === '1') {
      head.geometry = head1;
    }


  });

  // document.getElementById('nextBtn').onclick = function() {
  // head.geometry.attributes.position.array = head2;
  //   render();
  // };
};
