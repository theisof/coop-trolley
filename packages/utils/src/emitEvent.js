const emitEvent = (eventName, value = null) => {
  if (window.CustomEvent) {
    var event = new CustomEvent(eventName, {detail: { value }});
  } else {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, true, true, { value });
  }

  document.dispatchEvent(event);
}

export default emitEvent