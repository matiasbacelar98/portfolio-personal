const activateScroll = htmlNode => {
  htmlNode.classList.remove('remove-scroll');
};

const removeScroll = htmlNode => {
  htmlNode.classList.add('remove-scroll');
};

export { activateScroll, removeScroll };
