<template>
  <div class="container">
    <h2>Domain {{ domain_name }} not found</h2>
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
