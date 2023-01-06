<template>
  <SidebarSection>
    <ul>
      <SidebarNavItem label="Home" icon-name="home" is-active />
      <SidebarNavItem label="Trending" icon-name="trending" />
      <SidebarNavItem label="Subscriptions" icon-name="subscriptions" />
    </ul>
  </SidebarSection>
  <SidebarSection>
    <ul>
      <SidebarNavItem label="Library" icon-name="library" />
      <SidebarNavItem label="History" icon-name="history" />
    </ul>
  </SidebarSection>
  <SidebarSection class="px-8 py-4">
    <span class="font-medium leading-5 text-sm">
      Sign in to like videos, comment, and subscribe
    </span>
    <BtnLogin class="mt-3" />
  </SidebarSection>
  <SidebarSection>
    <SidebarSectionHeading title="Best of YouTube" />
    <ul>
      <SidebarNavItem label="Music" icon-name="music" />
      <SidebarNavItem label="Gaming" icon-name="gaming" />
      <SidebarNavItem label="Movies" icon-name="movies" />
      <SidebarNavItem label="News" icon-name="news" />
      <SidebarNavItem label="Sport" icon-name="sport" />
      <SidebarNavItem label="Nature" icon-name="nature" />
    </ul>
  </SidebarSection>
  <SidebarSection>
    <ul>
      <SidebarNavItem label="Browse channels" icon-name="plus" />
    </ul>
  </SidebarSection>
  <SidebarSection>
    <ul>
      <SidebarSectionHeading title="More from YouTube" />

      <SidebarNavItem label="YouTube Premium" icon-name="youtubePremium" />
      <SidebarNavItem label="Streaming" icon-name="streaming" />
    </ul>
  </SidebarSection>
  <SidebarSection>
    <ul>
      <SidebarNavItem label="Settings" icon-name="settings" />
      <SidebarNavItem label="Report history" icon-name="reportHistory" />
      <SidebarNavItem label="Help" icon-name="help" />
      <SidebarNavItem label="Send feedback" icon-name="feedback" />
    </ul>
  </SidebarSection>
  <SidebarSection class="px-6 py-4 text-xs font-semibold space-y-4">
    <TheFooter />
  </SidebarSection>
</template>

<script>
import SidebarSection from './SidebarSection.vue';
import SidebarNavItem from './SidebarNavItem.vue';
import SidebarSectionHeading from './SidebarSectionHeading.vue';
import BtnLogin from '../header/BtnLogin.vue';
import TheFooter from '../TheFooter.vue';

export default {
  components: {
    SidebarSection,
    SidebarNavItem,
    SidebarSectionHeading,
    BtnLogin,
    TheFooter
  }
}
</script>
