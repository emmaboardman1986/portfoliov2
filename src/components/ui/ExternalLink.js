import React from 'react'

const ExternalLink = ({link, children}) => {
    return (
    <a href={link} target="_blank">{children}</a>
    )
}

export default ExternalLink