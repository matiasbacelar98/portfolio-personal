const activateScroll = htmlNode => {
  htmlNode.classList.remove('remove-scroll');
};

const removeScroll = htmlNode => {
  htmlNode.classList.add('remove-scroll');
};

// Make first letter of title prop uppercase
const formatTitle = str => {
  const firstLetterTitle = str[0].toUpperCase();
  const formattedTitle = `${firstLetterTitle}${str.substring(1)}`;
  return formattedTitle;
};

// Delete base path from url
const formatImageUrl = str => {
  return str.replace('https://res.cloudinary.com/mb-dev-98/image/upload/', '');
};

export { activateScroll, removeScroll, formatTitle, formatImageUrl };
