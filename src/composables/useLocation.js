import { ref, onMounted } from 'vue'
import { useGeolocation } from '@vueuse/core'
import { location } from '../services/api'

export function useLocation() {
  const currentLocation = ref('正在获取位置...')
  const { coords } = useGeolocation()
  
  const fetchLocation = async () => {
    try {
      const response = await location.getCurrentLocation()
      currentLocation.value = response.data.address
    } catch (error) {
      currentLocation.value = '无法获取位置'
    }
  }

  onMounted(fetchLocation)

  return {
    currentLocation,
    coords,
    fetchLocation
  }
}