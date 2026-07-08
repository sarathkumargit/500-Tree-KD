import { Link } from 'react-router-dom'
import Button from '../components/common/Button'

const NotFound = () => (
  <div className="max-w-md mx-auto text-center py-32">
    <h1 className="text-4xl font-semibold text-forest mb-3">404</h1>
    <p className="text-ink/70 mb-6">That page has been pruned. Let's get you back on the path.</p>
    <Link to="/"><Button>Back to Home</Button></Link>
  </div>
)

export default NotFound