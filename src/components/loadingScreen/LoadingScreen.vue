<!-- Loading.vue -->
<template>
    <div class="loading-overlay" v-if="isLoading">
      <div class="spinner"></div>
      <p> AL-MOTTHEDON...</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isLoading: {
        type: Boolean,
        default: false
      }
    }
  }
  </script>
  
  <style scoped>
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }
  .loading-overlay p{
    color: var(--white);
    margin-left:10px ;
  }
  .spinner {
    border: 8px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top: 8px solid var(--yellow);
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>