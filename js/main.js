const tl = new TimelineMax()
const tlCity = new TimelineMax()
const maskPath = document.getElementById('maskPath')
const maskCityPath = document.getElementById('maskCityPath')
const svg = document.getElementById('svg-city')

const mainDelay = 0.5
const initAnimationDuration = 2

function initMorph () {
  tl.to(maskPath,
    1,
    {
      morphSVG: ' M 185 -64 Q 96.863 -39.891 61 50 C 25.137 139.891 31.934 294.546 134 497 C 236.066 699.454 456.317 834.754 591 860 C 725.683 885.246 928.426 930.339 1097 822 C 1265.574 713.661 1236.219 40.197 1158 -34 Q 1079.781 -108.197 185 -64 Z ',
      delay: mainDelay,
      ease: Power3.easeOut,
    }).duration(initAnimationDuration)

  tl.to(maskPath,
    1,
    {
      morphSVG: ' M 274 -121 C 160.606 -56.061 161.25 80 180 196 C 198.75 312 369 511.5 516 615 C 530.654 625.317 655.21 702.845 750.4 732.1 C 845.59 761.355 975.667 769.455 1091 742 C 1206.333 714.545 1276.667 40.788 1105 -71 C 933.333 -182.788 387.394 -185.939 274 -121 Z ',
      ease: Power4.easeOut,
      onComplete: handleMorph,
    }).duration(initAnimationDuration)

  tlCity.to(maskCityPath,
    1,
    {
      morphSVG: ' M 185 -64 Q 96.863 -39.891 61 50 C 25.137 139.891 31.934 294.546 134 497 C 236.066 699.454 456.317 834.754 591 860 C 725.683 885.246 928.426 930.339 1097 822 C 1265.574 713.661 1236.219 40.197 1158 -34 Q 1079.781 -108.197 185 -64 Z ',
      delay: mainDelay,
      ease: Power3.easeOut,
    }).duration(initAnimationDuration)

  tlCity.to(maskCityPath,
    1,
    {
      morphSVG: ' M 129 -47 Q -133.75 407 -115 523 C -96.25 639 -82 811.5 65 915 C 79.654 925.317 180.582 996.909 412 1050 Q 643.418 1103.091 1176 935 L 1155 -117 L 129 -47 Z ',
      ease: Power4.easeOut,
    }).duration(initAnimationDuration)
}

function handleMorph () {
  const tM = new TimelineMax({repeat: -1, yoyo: true})
  tM.to(maskPath, 1, {
    morphSVG: ' M 261 -62 C 180.939 -3.121 183.25 155 202 271 C 220.75 387 303 513.5 450 617 C 464.654 627.317 643.81 702.745 739 732 C 834.19 761.255 1013.909 726.424 1105 702 C 1196.091 677.576 1218.606 73.848 1103 -44 C 987.394 -161.848 341.061 -120.879 261 -62 Z ',
    ease: Power0.easeNone,
  }).timeScale(0.3)
  tM.to(maskPath, 1, {
    morphSVG: ' M 315 -86 C 229.848 -43.091 122.25 69 141 185 C 159.75 301 224 425.5 371 529 C 385.654 539.317 518.982 652.909 750.4 706 C 981.818 759.091 1000.152 753.251 1103 706 C 1205.848 658.749 1188.333 34.758 1050 -74 C 911.667 -182.758 400.152 -128.909 315 -86 Z ',
    ease: Power0.easeNone,
  }).timeScale(0.3)
}

function handleMouseMorph () {
  svg.addEventListener('mousemove', function (e) {
    const svgWidth = svg.getBBox().width,
      svgHeight = svg.getBBox().height,
      r = getOffset(svg).left - window.pageXOffset,
      i = getOffset(svg).top - window.pageYOffset,
      s = (e.clientX - r) / svgWidth,
      l = (e.clientY - i) / svgHeight,
      c = 2 * (s - .5),
      f = 2 * (l - .5),
      rotation = 10 * c,
      scaleX = 1.2 - Math.abs(.2 * c),
      scaleY = 1.1 - Math.abs(.2 * f),
      x = 50 * c,
      y = 100 * f
    TweenLite.to(maskPath, .7, {
      rotation: rotation.toFixed(2),
      scaleX: scaleX.toFixed(2),
      scaleY: scaleY.toFixed(2),
      x: x.toFixed(),
      y: y.toFixed(),
      transformOrigin: '50% 50%',
    })
  })

  svg.addEventListener('mouseleave', function (t) {
    TweenLite.to(maskPath, .7, {
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
      x: 0,
      y: 0,
      transformOrigin: '50% 50%',
    })
  })
}

document.addEventListener('DOMContentLoaded', function () {
  init()
})

function init () {
  initMorph()
  setTimeout(handleMouseMorph, initAnimationDuration * 1000)
}

function getOffset (element) {
  const bound = element.getBoundingClientRect()
  const html = document.documentElement

  return {
    top: bound.top + window.pageYOffset - html.clientTop,
    left: bound.left + window.pageXOffset - html.clientLeft,
  }
}
