import { useEffect, useState } from "react"

export const useIsInViewport = ({ element }) => {
  const [isInViewport, setIsInViewport] = useState(null)
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : null
  )

  useEffect(() => {
    if (element.current) {
      setWindowHeight(window.innerHeight)
      checkIsInViewport()
      window.addEventListener("scroll", checkIsInViewport)
    }
    return () => window.removeEventListener("scroll", checkIsInViewport)
  }, [element])

  const checkIsInViewport = () => {
    var fixedHeaderHeight = (window.innerHeight / 100) * 35
    var positionInViewport = element.current.getBoundingClientRect()

    if (
      positionInViewport.top < (window.innerHeight - (window.innerHeight / 2))  &&
      positionInViewport.top + positionInViewport.height - fixedHeaderHeight > 0
    ) {
      setIsInViewport(true)
    } else {
      setIsInViewport(false)
    }
  }

  return isInViewport
}
