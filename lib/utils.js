import { whitespace, delimiters } from 'constants'

// Writes a comment into the pdf
function writeComment(buffer, comment) {
  buffer.data += delimiters['%']
  for (i = 0; i < comment.length; i++) {
    buffer.data += comment.charCodeAt(i)
  }
  buffer.data += whiteSpace['CR']
  buffer.data += whiteSpace['LF']
}
