window.onload = function() {
// function main() {
  const canvas = document.querySelector('#c');
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(100, window.innerWidth/window.innerHeight, 0.1, 10000);
  scene.add(camera);
  // camera.position.set(800, 15, -60);
  camera.position.set(100, 15, -60);
  camera.lookAt(scene.position);
  // camera.position.set(60, 15, 0);
                         
  var renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});

  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor( 0xFFFFFF, 0 );
  // renderer.antialias = true;

document.body.appendChild( renderer.domElement );
  // canvas.appendChild( renderer.domElement );

  // camera.position.x = -20;
  // camera.position.z = 100;

  // var light = new THREE.DirectionalLight( 0xfcf9e8, 1 );
  // var light = new THREE.DirectionalLight( 0xcbc9bb, 1 );
  // scene.add(light);

  // var ambiColor = "#cbc9bb";
  // var ambientLight = new THREE.AmbientLight(ambiColor, 0.3);
  // scene.add(ambientLight);
  // const renderer = new THREE.WebGLRenderer({canvas});
  renderer.physicallyCorrectLights = true;

  // const color1 = 0xFFFFFF;
  // const intensity1 = 1;
  // const light1 = new THREE.AmbientLight(color1, intensity1);
  // scene.add(light1);

  // var grid = new THREE.GridHelper(100, 10);
  // scene.add(grid);

  // var skyBoxGeometry = new THREE.CubeGeometry( 10000, 10000, 10000 );
  // var skyBoxMaterial = new THREE.MeshBasicMaterial( { color: 0x9999ff, side: THREE.BackSide } );
  // // var skyBoxMaterial = new THREE.MeshBasicMaterial();
  // var skyBox = new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
  // // scene.add(skyBox);
  // scene.add(skyBoxGeometry);

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

const color = 0xFFFFFF;
const intensity = 6;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-100, -100, 0);
light.target.position.set(30, 0, 0);
scene.add(light);
scene.add(light.target);

const color3 = 0xFFFFFF;
const intensity3 = 6;
const light3 = new THREE.DirectionalLight(color, intensity);
light3.position.set(100, 100, 0);
light3.target.position.set(-30, 0, 0);
scene.add(light3);
scene.add(light3.target);

    

  class ColorGUIHelper {
  constructor(object, prop) {
    this.object = object;
    this.prop = prop;
  }
  get value() {
    return `#${this.object[this.prop].getHexString()}`;
  }
  set value(hexString) {
    this.object[this.prop].set(hexString);
  }
}

// const gui1 = new dat.GUI();
//   gui1.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color');
//   gui1.add(light, 'intensity', 0, 2, 0.01);

const gui = new dat.GUI();
gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color');
gui.add(light, 'intensity', 0, 10, 0.01);
gui.add(light.target.position, 'x', -100, 100);
gui.add(light.target.position, 'z', -100, 100);
gui.add(light.target.position, 'y', -100, 100);

const gui3 = new dat.GUI();
gui3.addColor(new ColorGUIHelper(light3, 'color'), 'value').name('color');
gui3.add(light3, 'intensity', 0, 10, 0.01);
gui3.add(light3.target.position, 'x', -10, 10);
gui3.add(light3.target.position, 'z', -10, 10);
gui3.add(light3.target.position, 'y', 0, 10);

  /*const color = 0xFFFFFF;
    const intensity = 5;
    const width = 12;
    const height = 4;
    const light = new THREE.RectAreaLight(color, intensity, width, height);
    light.position.set(0, 10, 0);
    light.rotation.x = THREE.Math.degToRad(-90);
    scene.add(light);

    const helper = new THREE.RectAreaLightHelper(light);
    light.add(helper);*/

  var meshes = [];

  var objLoader = new THREE.OBJLoader();

  // objLoader.load( 'model/shape_09_5.obj', function ( object ) {

  //   object.traverse( function ( child ) {
  //     if ( child instanceof THREE.Mesh ) {
  //       meshes.push(child);
  //     }
  //   });

  //   var head = meshes[0];

  //   head.position.y = 0;

  //   // console.log(head.position.x);
  //   // console.log('===');
  //   // console.log(head.position.y);
  //   // console.log('===');
  //   // console.log(head.position.z);

  //   scene.add(head);

  // });

  // var mshBox;

  var mtlLoader = new THREE.MTLLoader();

  mtlLoader.setPath( 'model/' );
  mtlLoader.load("shape_09_6.mtl", function(materials){
    materials.preload();
    console.log(materials);
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath( 'model/' );
    objLoader.load('ashapes_02.obj', function(object){
      console.log(object);
      scene.add(object);
      object.position.y = 20;
      // mshBox = new THREE.Mesh(object);
    });
    // objLoader.load('ashapes_02.obj', function(object){
    //   console.log(object);
    //   scene.add(object);
    //   object.position.x = 200;
    //   object.position.y = 20;
    //   // mshBox = new THREE.Mesh(object);
    // });
  });

  // var textureBody = new THREE.Texture();

  // var manager = new THREE.LoadingManager();
  // var loader  = new THREE.ImageLoader( manager );

  // loader.load( 'model/gold_01.jpg', function ( image ) {
  //   textureBody.image = image;
  //   textureBody.needsUpdate = true;
  // });

  // var objLoader = new THREE.OBJLoader();

  // objLoader.load( 'model/shape_02.obj', function ( object ) {

  //   console.log(object);

  //   object.traverse( function ( child )
  //   {
  //     if ( child instanceof THREE.Mesh )
  //     {
  //       meshes.push(child);
  //     }
  //   });

  //   var body = meshes[0];

  //   body.position.x = 0;
  //   body.position.y = 100;
  //   body.position.z = 0;

  //   // body.rotation.y = Math.PI/3;

  //   var mapHeightBody = new THREE.TextureLoader().load( "model/gold_01.jpg" );

  //   body.material = new THREE.MeshPhongMaterial({map: textureBody, specular: 0xffffff, bumpMap: mapHeightBody, bumpScale: 1, shininess: 25});
  //   // body.material = new THREE.MeshPhongMaterial({map: textureBody, specular: 0xffffff, bumpMap: mapHeightBody, bumpScale: 0.1, shininess: 60});

  //   // console.log('head', head);

  //   // scene.add(head);
  //   scene.add(body);

  // });

  // controls = new THREE.TrackballControls( camera );

  // controls.rotateSpeed = 3.0;
  // controls.zoomSpeed = 1.2;
  // controls.panSpeed = 0.8;

  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;

  console.log(renderer.domElement);
  console.log(controls);
  // controls.target.set(5, 50, 5);
  // controls.update();

  var render = function () {
    requestAnimationFrame( render );
    controls.update();
    renderer.render(scene, camera);
  };

  render();
};

// main();