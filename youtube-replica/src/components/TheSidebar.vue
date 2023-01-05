<template>
  <aside
    class="hidden xl:block w-60 max-h-screen overflow-auto pb-12 fixed top-14 bg-white z-20"
  >
    <section class="py-2 border-b border-gray-700">
      <ul>
        <SidebarNavItem
          label="Home"
          icon-name="home"
          is-active
        />
        <SidebarNavItem
          label="Trending"
          icon-name="trending"
        />
        <SidebarNavItem
          label="Subscriptions"
          icon-name="subscriptions"
        />
      </ul>
    </section>
    <section class="py-2 border-b border-gray-700">
      <ul>
        <SidebarNavItem
          label="Library"
          icon-name="library"
        />
        <SidebarNavItem
          label="History"
          icon-name="history"
        />
      </ul>
    </section>
    <section class="px-8 py-4 font-medium leading-5 border-b border-gray-700">
      <span class="text-sm">Sign in to like videos, comment, and subscribe</span>
      <BtnLogin class="mt-3" />
    </section>
    <section class="py-2 border-b border-gray-700">
      <h4 class="mb-3 px-6 pt-2 uppercase text-sm font-semibold">
        Best of YouTube
      </h4>
      <ul>
        <SidebarNavItem
          label="Music"
          icon-name="music"
        />
        <SidebarNavItem
          label="Gaming"
          icon-name="gaming"
        />
        <SidebarNavItem
          label="Movies"
          icon-name="movies"
        />
        <SidebarNavItem
          label="News"
          icon-name="news"
        />
        <SidebarNavItem
          label="Sport"
          icon-name="sport"
        />
        <SidebarNavItem
          label="Nature"
          icon-name="nature"
        />
      </ul>
    </section>
    <section class="py-2 border-b border-gray-700">
      <ul>
        <SidebarNavItem
          label="Browse channels"
          icon-name="plus"
        />
      </ul>
    </section>
    <section class="py-2 border-b border-gray-700">
      <ul>
        <h4 class="px-6 pt-2 mb-3 text-sm uppercase font-semibold">
          More from YouTube
        </h4>
        <SidebarNavItem
          label="YouTube Premium"
          icon-name="youtubePremium"
        />
        <SidebarNavItem
          label="Streaming"
          icon-name="streaming"
        />
      </ul>
    </section>
    <section class="py-2 border-b border-gray-700">
      <ul>
        <SidebarNavItem
          label="Settings"
          icon-name="settings"
        />
        <SidebarNavItem
          label="Report history"
          icon-name="reportHistory"
        />
        <SidebarNavItem
          label="Help"
          icon-name="help"
        />
        <SidebarNavItem
          label="Send feedback"
          icon-name="feedback"
        />
      </ul>
    </section>
    <section class="px-6 py-4 text-xs font-semibold space-y-4">
      <div>
        <a href="#" class="mr-2">About</a>
        <a href="#" class="mr-2">Press</a>
        <a href="#" class="mr-2">Copyright</a>
        <a href="#" class="mr-2">Contact us</a>
        <a href="#" class="mr-2">Creators</a>
        <a href="#" class="mr-2">Advertise</a>
        <a href="#" class="mr-2">Developers</a>
      </div>
      <div>
        <a href="#" class="mr-2">Terms</a>
        <a href="#" class="mr-2">Privacy</a>
        <a href="#" class="mr-2">Policy & Safety</a>
        <a href="#" class="mr-2">How YouTube works</a>
        <a href="#" class="mr-2">Test new features</a>
      </div>
      <div class="font-normal text-gray-500">&copy; 2022 Google LLC</div>
    </section>
  </aside>
</template>

<script>
import SidebarNavItem from './sidebar/SidebarNavItem.vue';
import BtnLogin from './header/BtnLogin.vue';

export default {
  components: {
    SidebarNavItem,
    BtnLogin
  }
}
</script>