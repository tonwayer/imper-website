import React, { useEffect, useState, useRef } from 'react'

import './index.css'

type Props = {
  children: React.ReactNode
}

const THRESHOLD = 15

const Hover3D = (props: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [tranStyle, setTranStyle] = useState(`perspective(500px) rotateX(0deg) rotateY(0deg)`)
  const [brightness, setBrightness] = useState(1)

  const handleHover = (e: any) => {
    const { clientX, clientY, currentTarget } = e
    const { width, height, left, top} = currentTarget.getBoundingClientRect()

    const horizontal = (clientX - left) / width
    const vertical = (clientY - top) / height
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2)
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2)
    setTranStyle(`perspective(${width}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`)
    setBrightness(1 + horizontal * vertical)
  }

  const handleLeave = (e: any) => {
    setTranStyle(`perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`)
    setBrightness(1)
  }

  return (
    <div
      ref={ref}
      className="card"
      onMouseMove={handleHover}
      onMouseLeave={handleLeave}
      style={{
        transform: tranStyle,
        filter: `brightness(${brightness})`
      }}
    >
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}

export default Hover3D
