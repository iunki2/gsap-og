document.addEventListener('DOMContentLoaded', function () {
  initAnimation()
})

const tl = new TimelineLite()
const svg = '#order-svg'

function initAnimation () {
  TweenLite.set('path, line, circle', {visibility: 'visible'})

  tl.from('.window *', 1, {drawSVG: 0, ease: Power3.easeIn}, 0)
    .from('.list1 *, .list2 *', 1, {drawSVG: 0, ease: Power3.easeIn}, 0)

  const listLines = document.querySelectorAll('.lines *')

  listLines.forEach((x, i) => {
    tl.from(x, 0.1, {drawSVG: 0, ease: Power3.easeIn})
  })

  const circles = document.querySelectorAll('.circles *')
  let circlesStart = tl.endTime()

  circles.forEach((x, i) => {
    tl.from(x, 0.2, {drawSVG: 0, ease: Power3.easeIn})
  })

  const dashes = document.querySelectorAll('.dashes *')

  dashes.forEach((x, i) => {
    tl.from(x, 0.1, {drawSVG: 0, ease: Power3.easeIn}, circlesStart + 0.1 * i)
  })
}
