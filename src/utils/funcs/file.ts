import slugify from 'slugify';

export const trueFile = (file: File) => {
  const { name, type } = file;

  let newName = name;

  const index = newName.lastIndexOf('.');
  const extension = newName.substring(index + 1);
  newName = newName.substring(0, index);

  newName = slugify(newName, { locale: 'vi', lower: true });

  newName = newName.replace(/[^\w\s]/g, '-');
  newName = slugify(newName, { strict: true });

  const _file = new File([file], `${newName}.${extension}`, { type });

  return _file;
};
