document.addEventListener('DOMContentLoaded', function () {
  initAnimation()
})

const tl = new TimelineLite()

function initAnimation () {
  TweenLite.set('#order-svg path, #order-svg line, #order-svg circle', {visibility: 'visible'})
  tl.from('#order-svg path, #order-svg line, #order-svg circle', 2, {drawSVG: 0, ease: Power3.easeIn})
}
