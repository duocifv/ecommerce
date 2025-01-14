import Image, { ImageProps } from 'next/image'

interface PictureProps extends ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

const Picture = ({
  src,
  alt,
  width = 1000,
  height = 500,
  ...props
}: PictureProps) => {
  const updatedSrc = src.includes('https://cms.duocnv.top/wp-content/uploads/')
    ? src.replace(
        'https://cms.duocnv.top/wp-content/uploads/',
        'https://photo.duocnv.top/'
      )
    : src
  return (
    <Image
      {...props}
      src={updatedSrc}
      alt={alt || 'images '}
      width={width}
      height={height}
      loading={props.loading !== 'eager' ? 'lazy' : 'eager'}
      data-nimg="1"
      style={{
        color: 'transparent',
        maxWidth: '100%',
        height: 'auto',
      }}
    />
  )
}

export default Picture
