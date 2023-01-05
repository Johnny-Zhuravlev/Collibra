<template>
  <a href="#" class="mb-7 group">
    <div class="relative">
      <img :src="`https://picsum.photos/seed/image${index}/720/404`" alt="preview picture" />
      <span class="
              absolute
              top-0
              right-0
              bg-black
              text-white
              rounded
              m-1
              p-1
              transition
              opacity-0
              group-hover:opacity-100
              bg-opacity-60
            ">
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
            clip-rule="evenodd" />
        </svg>
      </span>
      <span class="
              absolute
              top-8
              right-0
              bg-black
              text-white
              rounded
              m-1
              p-1
              transition
              opacity-0
              group-hover:opacity-100
              bg-opacity-60
            ">
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
            clip-rule="evenodd" />
        </svg>
      </span>
      <span class="
              absolute
              bottom-0
              right-0
              bg-black
              text-white
              rounded-sm
              m-1
              p-1
              text-xs
              font-semibold
              transition
              group-hover:opacity-0
            ">3:37</span>
    </div>
    <div class="flex items-start mt-3">
      <img :src="`https://picsum.photos/seed/avatar${index}/68`" class="w-9 h-9 mr-3 rounded-full"
        alt="avatar of channel creator" />
      <div class="text-sm">
        <span class="font-semibold text-gray-700">Title video for example</span>
        <div class="flex items-center mt-1">
          <span>Channel label 434</span>
          <svg class="w-3.5 h-3.5 ml-1 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <div>
          <span>8k views</span>
          &middot;
          <span>2 days ago</span>
        </div>
      </div>
      <button class="
              ml-auto
              -mt-1
              p-1
              opacity-0
              group-hover:opacity-100
              text-gray-500
              hover:text-gray-700
              focus:outline-none
            ">
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd"
            d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
            clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </a>
</template>

<script>
 export default {
  props: ['index'],
 }
</script>

<style scoped>

</style>