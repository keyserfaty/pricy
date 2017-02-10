export const buildName = name =>
  name
    .toLowerCase()
    .split(' ')
    .map(e => e[0].toUpperCase() + e.slice(1))
    .join(' ');

export const buildLabel = name =>
  name.toLowerCase().split(' ').join('-');

export const buildId = categories => {
  const initialCharacter = categories[0].toLowerCase();
  return initialCharacter + '-' + Math.round(Math.random() * 10000000);
};

export const handleImage = (files, cb) => {
  const reader = new window.FileReader();
  reader.readAsDataURL(files[0]);

  reader.onloadend = () => cb(reader.result);
};

