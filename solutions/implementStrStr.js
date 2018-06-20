/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (haystack === needle) return 0;

  const subStrLength = needle.length;

  for (let i = 0; i < haystack.length; i++) {
    const subStr = haystack.slice(i, i + subStrLength);

    if (subStr === needle) return i;
  }

  return -1;
};

const haystack = 'hello',
  needle = 'll';

strStr(haystack, needle);

// For reference, KMP algorithm for linear time:

// def strStr2(self, haystack, needle):
//       """
//       :type haystack: str
//       :type needle: str
//       :rtype: int
//       """
//       def kmp(str_):
//           b, prefix = 0, [0]
//           for i in range(1, len(str_)):
//               while b > 0 and str_[i] != str_[b]:
//                   b = prefix[b - 1]
//               if str_[b] == str_[i]:
//                   b += 1
//               else:
//                   b = 0
//               prefix.append(b)
//           return prefix
//
//       str_ = kmp(needle + '#' + haystack)
//       n = len(needle)
//       if n == 0:
//           return n
//       for i in range(n + 1, len(str_)):
//           if str_[i] == n:
//               return i - 2 * n
//       return -1
