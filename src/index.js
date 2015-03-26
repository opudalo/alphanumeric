export default function alphanumeric(num, res = '') {
  if (!num) return res
  var allowed = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    , random = (Math.random() * (allowed.length - 1)).toFixed()

  return alphanumeric(num-1, res + allowed[random])
}
