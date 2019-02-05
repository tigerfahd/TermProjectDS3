'use strict';

//based on Don's existing component https://github.com/donmccurdy/aframe-extras/blob/99535cd878eb36cb25cdcda4a32a40eb248c990a/src/misc/cube-env-map.js
AFRAME.registerComponent('spherical-env-map', {
  schema: {
    src:            {type:'asset',      default:''},
    format:         {type:'string',     default:'RGBFormat'}
  },
  multiple: false, //do not allow multiple instances of this component on this entity
  init: function() {
    this.loader = new THREE.TextureLoader();
    this.applyEnvMap();
    this.el.addEventListener('object3dset', this.applyEnvMap.bind(this));
  },
  //custom function
  applyEnvMap : function () {
    const Context_AF = this;
    const mesh = Context_AF.el.getObject3D('mesh');

    if ( Context_AF.data.src === '' ) {
      console.warn('No src defined in component');
    }
    else {
      Context_AF.loader.load( Context_AF.data.src.getAttribute('src'),
        function onLoad(texture) {
          texture.mapping    = THREE.EquirectangularReflectionMapping;
          texture.magFilter  = THREE.LinearFilter;
          texture.minFilter  = THREE.LinearMipMapLinearFilter;
          texture.format     = THREE[Context_AF.data.format];

          if (mesh) {
            mesh.traverse(function (node) {
              if (node.material && 'envMap' in node.material) {
                node.material.envMap = texture;
                node.material.needsUpdate = true;
              }
            });
          }
        },
        function onProgress(xmlHttpRequest) {
          //xmlHttpRequest.total (bytes), xmlHttpRequest.loaded (bytes)
        },
        function onError(message) {
          var message = (error && error.message) ? error.message : 'Failed to load spherical env map';
          console.log(message);
        }
      );
    }
  },
  // update: function () {},
  // tick: function(time, timeDelta) {},
  // tock: function(time, timeDelta) {},
  // remove: function() {},
  // pause: function() {},
  // play: function() {},
  // updateScheme: function(data) {}
});
