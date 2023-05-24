import dynamic from "next/dynamic"
import "../styles/globals.css"
import Layout from "../layouts/layout"
import fetchCategories from "../utils/categoryProvider"

const NoSSRLayout = dynamic(() => Promise.resolve(Layout), {
  ssr: false,
})

function Ecommerce({ Component, pageProps, categories }) {
  return (
    <NoSSRLayout categories={categories}>
      <Component {...pageProps} />
    </NoSSRLayout>
  )
}

Ecommerce.getInitialProps = async () => {
  const categories = await fetchCategories()
  return {
    categories,
  }
}

export default Ecommerce
