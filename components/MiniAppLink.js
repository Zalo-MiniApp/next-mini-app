import Link from "next/link"

const MiniAppLink = ({ href, ...props }) => {
  return (
    <Link
      href={{
        pathname: href,
        search: window.location.search,
      }}
      {...props}
    />
  )
}

export default MiniAppLink
