import Login from '../views/Login.vue'
import MerchantDashboard from '../views/merchant/Dashboard.vue'
import ConsumerDashboard from '../views/consumer/Dashboard.vue'

const routes = [
  {
    path: '/',
    // Allow direct access to both dashboards for testing
    component: ConsumerDashboard
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/merchant',
    component: MerchantDashboard
  },
  {
    path: '/consumer',
    component: ConsumerDashboard
  }
]

export default routes