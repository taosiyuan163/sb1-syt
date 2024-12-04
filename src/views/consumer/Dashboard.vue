`<template>
  <div class="consumer-dashboard">
    <PageHeader title="商易通">
      <LocationBar 
        :location="currentLocation"
        @pick-location="showLocationPicker"
      />
      <SearchBar @search="onSearch" />
    </PageHeader>

    <main class="p-4">
      <!-- Content will be added here -->
      <p>消费者主页</p>
    </main>
  </div>
</template>

<script setup>
import PageHeader from '../../components/common/PageHeader.vue'
import LocationBar from '../../components/common/LocationBar.vue'
import SearchBar from '../../components/common/SearchBar.vue'
import { useLocation } from '../../composables/useLocation'

const { currentLocation } = useLocation()

const showLocationPicker = () => {
  // TODO: Implement location picker
}

const onSearch = (value) => {
  // TODO: Implement search functionality
}
</script>`