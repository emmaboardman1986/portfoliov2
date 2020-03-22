export const setTransform = (itemWidth, itemIndex) => {
    return `transform: translateX(-${itemWidth * itemIndex}px`;
}