<template>
  
</template>

<script>
const DEFAULT_EVENTS = [
  'load',
  'click',
  'rightclick',
  'dblclick',
  'drag',
  'dragstart',
  'dragend',
  'mouseup',
  'mousedown',
  'mouseover',
  'mouseout'
]
export default {
  name: "vue-googlemap-marker",
  data() {
    return {};
  },
  props: {
    position: {
      type: [Array, Object],
      required: true
    },
    clickable: {
      type: Boolean,
      default: true
    },
    draggable: {
      type: Boolean,
      default: false
    },
    icon: [String, Object],
    label: String,
    title: String,
    opacity: {
      type: Number,
      default: 1.0
    },
    visible: {
      type: Boolean,
      default: true
    },
    zIndex: Number,
    events: Object,
    markerList: [Array, Object],
    markerInfo: Object
  },
  mounted() {
    this.$map = this.$map || this.$parent.$map;
    if (this.$map) {
      this.createMarker();
    } else {
      this.$on("mapReady", map => {
        this.$map = map;
        this.createMarker();
      });
    }
  },
  watch: {
    markerList: {
      handler (_new, _old) {
        this.reset();
      }
    }
  },
  destroyed() {
    this.$marker.setMap(null);
    google.maps.event.clearInstanceListeners(this.$marker);
  },
  methods: {
    reset () {
      if (!this.$marker) return
      this.$marker.setMap(null);
      google.maps.event.clearInstanceListeners(this.$marker);
      this.$map = this.$map || this.$parent.$map;
      if (this.$map) {
        this.createMarker();
      } else {
        this.$on("mapReady", map => {
          this.$map = map;
          this.createMarker();
        });
      }
    },
    createMarker() {
      const options = {};
      for (let key in this.$props) {
        if (this.$props[key] !== undefined) {
          if (key === "position") {
            const position = Array.isArray(this.$props.position)
              ? { lat: this.$props.position[0], lng: this.$props.position[1] }
              : this.$props.position;
            Object.assign(options, { position });
          } else {
            Object.assign(options, { [key]: this.$props[key] });
          }
        }
      }
      this.$marker = new google.maps.Marker(options);
      this.$marker.setMap(this.$map);
      this.$watch("position", nv => {
        this.$marker.setPosition(
          Array.isArray(nv) ? { lat: nv[0], lng: nv[1] } : nv
        );
      });
      [
        "clickable",
        "draggable",
        "icon",
        "label",
        "title",
        "opacity",
        "visible",
        "zIndex"
      ].forEach(k => {
        this.$watch(k, nv => {
          this.$marker[`set${k.charAt(0).toUpperCase() + k.slice(1)}`](nv);
        });
      });
      this.$emit(`markLoad`, this.markerInfo, this.$marker);
      this.registerEvents();
    },
    registerEvents() {
      const events = DEFAULT_EVENTS;
      const _this = this;
      if (!events) return;
      events.map(eventName => {
        if (eventName) _this.$marker.addListener(eventName, function () {
          _this.$emit(`mark${eventName.charAt(0).toUpperCase() + eventName.slice(1)}`, _this.markerInfo, _this.$marker);
        });
      })
    }
  }
};
</script>