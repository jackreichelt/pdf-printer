const whiteSpace = {
  'NUL' = 0x00, // null
  'HT'  = 0x09, // horizontal tab
  'LF'  = 0x0A, // line feed
  'FF'  = 0x0C, // form feed
  'CR'  = 0x0D, // carriage return
  'SP'  = 0x20, // space
}

const delimiters = {
  '(' = 0x28, // left parentheses
  ')' = 0x29, // right parentheses
  '<' = 0x3C, // less-than sign
  '>' = 0x3E, // greater-than sign
  '[' = 0x5B, // left square bracket
  ']' = 0x5D, // right square bracket
  '{' = 0x7B, // left curly bracket
  '}' = 0x7D, // right curly bracket
  '/' = 0x2F, // solidus
  '%' = 0x25, // percent sign
}

const pdfPrimatives = [
  'boolean', // normal boolean, true or false
  'integer', // signed integers. See Annex C of spec for range
  'real',
  'string',
  'name',
  'array',
  'dictionary',
  'stream',
  'null',
]

module.exports({
  whiteSpace,
  delimiters
})
