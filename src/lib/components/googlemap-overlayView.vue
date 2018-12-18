<template>
  
</template>
<script type="text/javascript" src="./infobox.js"></script>
<script>
const DEFAULT_EVENTS = [
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
  name: "vue-googlemap-overlayView",
  data() {
    return {};
  },
  props: {
    content: {
      default: null,
      type: String
    },
    disableAutoPan: {
      default: false,
      type: Boolean
    },
    maxWidth: {
      default: 0,
      type: Number
    },
    pixelOffset: {
      default: null,
      type: String
    },
    zIndex: {
      default: null,
      type: Number
    },
    boxStyle: {
      default: null,
      type: [Object, Array]
    },
    closeBoxMargin: {
      default: "10px 2px 2px 2px",
      type: String
    },
    closeBoxURL: {
      default: "http://www.google.com/intl/en_us/mapfiles/close.gif",
      type: String
    },
    infoBoxClearance: {
      default: null,
      type: String
    },
    isHidden: {
      default: false,
      type: Boolean
    },
    pane: {
      default: "floatPane",
      type: String
    },
    enableEventPropagation: {
      default: false,
      type: Boolean
    },
  },
  mounted() {
    this.$map = this.$map || this.$parent.$map;
    if (this.$map) {
      this.createInfoBox();
    } else {
      this.$on("mapReady", map => {
        this.$map = map;
        this.createInfoBox();
      });
    }
  },
  destroyed() {
    google.maps.event.clearInstanceListeners(this.$infoBox);
  },
  methods: {
    createInfoBox() {
      const myOptions = {
        pixelOffset: new google.maps.Size(-140, 0),
        infoBoxClearance: new google.maps.Size(1, 1)
      }
      this.$infoBox = new InfoBox(Object.assign({}, this.$props, myOptions));
      this.$emit('infoBox', this.$infoBox);
      this.registerEvents();
    },
    registerEvents() {
      const events = DEFAULT_EVENTS;
      const _this = this;
      if (!events) return;
      events.map(eventName => {
        if (eventName) _this.$marker.addListener(eventName, function () {
        });
      })
    }
  }
};
</script>