window.onload = function() {
  var canvas = document.getElementById('world');  //определяем родительский блок
  var scene = new THREE.Scene();  //добавляем сцену
  var camera = new THREE.PerspectiveCamera(30, window.innerWidth/window.innerHeight, 0.1, 10000);  //добавляем камеру
  camera.position.set(0, 15, 0);  //задаем позицию камеры

  scene.add(camera);  //добавляем камеру на сцену

  var renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});  //добавляем рендер
  renderer.setSize( window.innerWidth, window.innerHeight );  //ширина, высота поля
  renderer.setClearColor( 0xFFFFFF, 0 );  //цвет фона с прозрачным каналом

  canvas.appendChild(renderer.domElement);  //добаляем canvas на страницу

  /*====== Добавляем сетку ======*/
  var gridXZ = new THREE.GridHelper(1000, 10);
  gridXZ.setColors( new THREE.Color(0x006600), new THREE.Color(0x006600) );
  gridXZ.position.set( 0,0,0 );
  scene.add(gridXZ);
  /*=============================*/

  /*====== Добавляем свет ======*/
  const al = new THREE.AmbientLight(0xffffff, 1);
  al.position.set(0, 300, 500);
  scene.add(al);

  const dl = new THREE.DirectionalLight(0xFFFFFF, 3);
  dl.position.set(0, 300, 500);
  dl.castShadow = true;
  scene.add(dl);
  /*=============================*/

  var meshes = [];
  var obj1, obj2, obj3, obj4;
  var objLoader = new THREE.OBJLoader();
  var manager = new THREE.LoadingManager();
  var loader  = new THREE.ImageLoader( manager );
  var textureHead = new THREE.Texture();

  loader.load( 'model/gold_01.jpg', function ( image ) {
    textureHead.image = image;
    textureHead.needsUpdate = true;
  });

  var mapHeightHead = new THREE.TextureLoader().load( "model/gold_01.jpg" );

  objLoader.load('model/ashapes_02.obj', function(object){

    object.traverse( function ( child ) {
      if ( child instanceof THREE.Mesh ) {
        meshes.push(child);
      }
    });

    obj1 = meshes[0];

    // head1 = meshes[1].geometry;

    obj1.material = new THREE.MeshPhongMaterial({map: textureHead, specular: 0xfceed2, bumpMap: mapHeightHead, bumpScale: 4, shininess: 100});

    scene.add(obj1);
      
    obj1.position.x = 0;
    obj1.position.y = 30;
    obj1.position.z = -250;

    // obj1.rotation.y = -2*Math.PI;
  });

  objLoader.load('model/ashapes_03.obj', function(object){

    object.traverse( function ( child ) {
      if ( child instanceof THREE.Mesh ) {
        meshes.push(child);
      }
    });

    obj2 = meshes[1];

    // head1 = meshes[1].geometry;

    obj2.material = new THREE.MeshPhongMaterial({map: textureHead, specular: 0xfceed2, bumpMap: mapHeightHead, bumpScale: 4, shininess: 100});

    scene.add(obj2);
      
    obj2.position.x = 240;
    obj2.position.y = 30;
    obj2.position.z = 0;
  });

  objLoader.load('model/ashapes_07.obj', function(object){

    object.traverse( function ( child ) {
      if ( child instanceof THREE.Mesh ) {
        meshes.push(child);
      }
    });

    obj3 = meshes[2];

    // head1 = meshes[1].geometry;

    obj3.material = new THREE.MeshPhongMaterial({map: textureHead, specular: 0xfceed2, bumpMap: mapHeightHead, bumpScale: 4, shininess: 100});

    scene.add(obj3);
      
    obj3.position.x = 0;
    obj3.position.y = 10;
    obj3.position.z = 100;
  });

  objLoader.load('model/ashapes_08.obj', function(object){

    object.traverse( function ( child ) {
      if ( child instanceof THREE.Mesh ) {
        meshes.push(child);
      }
    });

    obj4 = meshes[3];

    // head1 = meshes[1].geometry;

    obj4.material = new THREE.MeshPhongMaterial({map: textureHead, specular: 0xfceed2, bumpMap: mapHeightHead, bumpScale: 4, shininess: 100});

    scene.add(obj4);
      
    obj4.position.x = -150;
    obj4.position.y = 15;
    obj4.position.z = 0;
  });

  var mouseDown = false,
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
    tlE.kill();
    
    if(elemId.dataset.id == '1') {
      obj1.rotation.y += deltaX / 100;
      console.log(deltaX / 100);
    } else if(elemId.dataset.id == '2') {
      obj2.rotation.y += deltaX / 100;
    } else if(elemId.dataset.id == '3') {
      obj3.rotation.y += deltaX / 100;
    } else if(elemId.dataset.id == '4') {
      obj4.rotation.y += deltaX / 100;
    }
    // tlE.duration( 5 ).play();
    tlE.to(obj1.rotation, 1, {y:-2*Math.PI, ease: Power0.easeNone, force3D: true, repeat:-1}, 0);
    tlE.play();
  }

  addMouseHandler(document.getElementsByTagName("canvas")[0]);

  // console.log(camera.rotation);

  // var controls = new THREE.OrbitControls( camera, obj1 );

  var render = function () {
    requestAnimationFrame( render );
    // controls.update();
    renderer.render(scene, camera);
  };

  render();

  // var tl = new TimelineLite();
  var tl = new TimelineMax();
  var tlE = new TimelineMax();
  var nN = document.getElementById('nextBtn');
  var nP = document.getElementById('prevBtn');

  var elemId = document.getElementById('world');

  // tl.to(obj1.rotation, 1, {y:0.00001, yoyo:true});

  setTimeout(function() {
        // tl.to(obj1.rotation, 10, {y:20, repeat:30, yoyo:true});
        tlE.to(obj1.rotation, 10, {y:-2*Math.PI, ease: Power0.easeNone, force3D: true, repeat:-1}, 0);
        tlE.to(obj2.rotation, 10, {y:-2*Math.PI, ease: Power0.easeNone, force3D: true, repeat:-1}, 0);
        tlE.to(obj3.rotation, 10, {y:-2*Math.PI, ease: Power0.easeNone, force3D: true, repeat:-1}, 0);
        tlE.to(obj4.rotation, 10, {y:-2*Math.PI, ease: Power0.easeNone, force3D: true, repeat:-1}, 0);
        console.log('Ok - 5');
      }, 5000);

  // animate();

  // function animate() {
  //   requestAnimationFrame(animate);

  //   renderer.render(scene, camera);
  // }

  nN.addEventListener( "click" , function() {

    if(elemId.dataset.id === '1') {

      elemId.dataset.id = '2';

      tl.add( TweenLite.to(camera.rotation, 3, {y:-0.5*Math.PI}) );

    } else if(elemId.dataset.id === '2') {

      elemId.dataset.id = '3';

      if(camera.rotation.y < 0) {
        tl.add( TweenLite.to(camera.rotation, 3, {y:-1*Math.PI}) );
      } else {
        tl.add( TweenLite.to(camera.rotation, 3, {y:1*Math.PI}) );
      }
    
    } else if(elemId.dataset.id === '3') {

      elemId.dataset.id = '4';

      if(camera.rotation.y < 0) {
        tl.add( TweenLite.to(camera.rotation, 3, {y:-1.5*Math.PI}) );
      } else {
        tl.add( TweenLite.to(camera.rotation, 3, {y:0.5*Math.PI}) );
      }
    
    } else if(elemId.dataset.id === '4') {

      elemId.dataset.id = '1';

      if(camera.rotation.y < 0) {
        tl.add( TweenLite.to(camera.rotation, 3, {y:-2*Math.PI}) );
      } else {
        tl.add( TweenLite.to(camera.rotation, 3, {y:0*Math.PI}) );
      }

      setTimeout(function() {
        camera.rotation.y = 0;
        tl.kill();
      }, 3100);
    
    }

    tl.play();

  });

  nP.addEventListener( "click" , function() {

    if(elemId.dataset.id === '1') {

      elemId.dataset.id = '4';

      tl.add( TweenLite.to(camera.rotation, 3, {y:0.5*Math.PI}) );

    } else if(elemId.dataset.id === '4') {

      elemId.dataset.id = '3';

      if(camera.rotation.y > 0) {
        tl.add( TweenLite.to(camera.rotation, 3, {y:1*Math.PI}) );
      } else {
        tl.add( TweenLite.to(camera.rotation, 3, {y:-1*Math.PI}) );
      }
    
    } else if(elemId.dataset.id === '3') {

      elemId.dataset.id = '2';

      if(camera.rotation.y > 0) {
        tl.add( TweenLite.to(camera.rotation, 3, {y:1.5*Math.PI}) );
      } else {
        tl.add( TweenLite.to(camera.rotation, 3, {y:-0.5*Math.PI}) );
      }
    
    } else if(elemId.dataset.id === '2') {

      elemId.dataset.id = '1';

      if(camera.rotation.y > 0) {
        tl.add( TweenLite.to(camera.rotation, 3, {y:2*Math.PI}) );
      } else {
        tl.add( TweenLite.to(camera.rotation, 3, {y:0}) );
      }

      setTimeout(function() {
        camera.rotation.y = 0;
        tl.kill();
      }, 3100);
    
    }

    tl.play();

  });
  
}