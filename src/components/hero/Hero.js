import React from "react"
import styled from "styled-components"
import Carousel from "../Carousel/Carousel"

const Hero = () => {
  const [imgList, setImgList] = useState([])
  setImgList(["Image 1", "Image 2", "Image 3"])

  return (
    <HeroWrapper>
      {imgList.length === 0 && <div>Loading...</div>}
      {imgList.length > 0 && (
        <Carousel
          imgList={imgList}
          img_width={300}
          img_height={300}
          visibleImages={3}
          duration={750}
        />
      )}
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div``

export default Hero
