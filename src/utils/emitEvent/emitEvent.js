const emitEvent = (eventName, value = null) => {
  let event

  if (typeof window.CustomEvent === "function") {
    event = new CustomEvent(eventName, {detail: { value }});
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, true, true, { value });
  }

  document.dispatchEvent(event);
}

export default emitEvent