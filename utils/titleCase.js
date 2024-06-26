/**
 * Convert a string to title case.
 * @param {String} str
 * @returns {String}
 */
function toTitleCase(str) {
  const smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i

  return str.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(
    match,
    index,
    title
  ) {
    if (
      index > 0 &&
        index + match.length !== title.length &&
        match.search(smallWords) > -1 &&
        title.charAt(index - 2) !== ':' &&
        (title.charAt(index + match.length) !== '-' ||
          title.charAt(index - 1) === '-') &&
        title.charAt(index - 1).search(/[^\s-]/) < 0
    ) {
      return match.toLowerCase()
    }

    if (match.substring(1).search(/[A-Z]|\../) > -1) {
      return match
    }

    return match.charAt(0).toUpperCase() + match.substr(1)
  })
}

/**
 * Take a string and turn it into title case.
 * @param {String} str
 * @returns {String}
 */
function titleCase(str) {
  return toTitleCase(str)
}

export default titleCase
