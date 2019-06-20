const DIRECTION = {
  RIGHT: 'right',
  LEFT: 'left',
  TOP: 'top',
  BOTTOM: 'top'
}

const SIZES = {
  LG: '30px',
  MD: '20px',
  SM: '10px',
  XS: '5px'
}

const COLORS = {
  WHITE: '#fff',
  PRIMARY: '#12a4d5',
  SECONDARY: '#18cda6',
}

const TRIANGLES = [
  {
    direction: DIRECTION.LEFT,
    color: COLORS.WHITE,
    size: SIZES.LG,
    position: {
      top: '140px',
      right: '0'
    }
  },
  {
    direction: DIRECTION.RIGHT,
    color: COLORS.WHITE,
    size: SIZES.LG,
    position: {
      top: '140px',
      right: '0'
    }
  }
]

function getOppositePosition (direction) {
  switch (direction) {
    case DIRECTION.LEFT:
      return DIRECTION.RIGHT
    case DIRECTION.RIGHT:
      return DIRECTION.LEFT
    case DIRECTION.TOP:
      return DIRECTION.BOTTOM
    case DIRECTION.BOTTOM:
      return DIRECTION.TOP
  }

}

function createTriangle ({direction, color, size, position}) {
  const triangle = document.createElement('div')
  triangle.classList.add('tr')

  // multiple size by 1.5
  const borderSize = size.match(/\d/g).join('') * 1.5 + size.replace(/\d/g, '')

  triangle.style[`border-${getOppositePosition(direction)}`] = `${borderSize} solid ${color}`

  const perpendicularBorder = `${size} solid transparent`

  if (direction === DIRECTION.TOP || direction === DIRECTION.BOTTOM) {
    triangle.style.borderLeft = perpendicularBorder
    triangle.style.borderRight = perpendicularBorder
  } else {
    triangle.style.borderTop = perpendicularBorder
    triangle.style.borderBottom = perpendicularBorder
  }

  Object.keys(position).forEach(x => {
    triangle.style[x] = position[x]
  })

  return triangle
}

function appendTriangles () {
  const container = document.querySelector('.triangles__container')
  TRIANGLES.forEach(x => {
    container.append(createTriangle(x))
  })
}

document.addEventListener('DOMContentLoaded', function () {
  appendTriangles()
})
