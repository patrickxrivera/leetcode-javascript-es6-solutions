var customSortString = function(S, T) {
  const cache = {};
  const sCache = {};
  let output = [];

  T.split('').forEach((t) => {
    cache[t] = cache[t] ? (cache[t] += 1) : (cache[t] = 1);
  });

  for (let i = 0; i < S.length; i++) {
    curr = S[i];

    if (cache.hasOwnProperty(curr)) {
      output.push(curr.repeat(cache[curr]));
    }

    sCache[curr] = sCache[curr] ? (sCache[curr] += 1) : (sCache[curr] = 1);
  }

  for (let i = 0; i < T.length; i++) {
    if (!sCache[T[i]]) {
      output.push(T[i]);
    }
  }

  return output.join('');
};
