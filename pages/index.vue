<template>
  <div class="container">
    <h2>Serving: {{ domain_name }}</h2>
  </div>
</template>

<script>
export default {
  middleware: ['domain'],
  asyncData(context) {
    return {
      domain_name: context.domain_name
    }
  }
}
</script>
