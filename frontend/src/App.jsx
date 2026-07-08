import Layout from './components/layout/Layout'
import AppRoutes from './routes/AppRoutes'
import useScrollTop from './hooks/useScrollTop'

const App = () => {
  useScrollTop()
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  )
}

export default App