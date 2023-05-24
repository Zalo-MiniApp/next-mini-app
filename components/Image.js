const ImageComponent = ({ src, ...props }) => {
  return (
    <img
      src={`https://zalo-miniapp.github.io/next-mini-app${src}`}
      {...props}
    />
  )
}

export default ImageComponent
