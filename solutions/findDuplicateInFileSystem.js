const findDuplicate = (paths) => {
  let cache = {};
  let result = [];

  paths.forEach((p) => {
    const [dir, ...files] = p.split(' ');

    files.forEach((file) => {
      let [name, content] = file.split('(');
      content = content.slice(0, content.length - 1);

      const path = `${dir}/${name}`;

      if (cache[content]) {
        cache[content].count += 1;
        cache[content].files.push(path);
      } else {
        cache[content] = {
          count: 1,
          files: [path]
        };
      }
    });
  });

  for (content in cache) {
    const { count, files } = cache[content];

    if (count > 1) {
      result.push(files);
    }
  }

  return result;
};
