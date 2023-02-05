<template>
  <BaseModal title="Search with your voice">
		<span class="font-medium text-lg text-black">Microphone off. Check your browser setting!</span>
		<br />
		<br />
		To search by voice, go to your browser settings and allow access to microphone
		<button :class="btnClasses">
			<BaseIcon name="microphone" />
		</button>
	</BaseModal>
</template>

<script>
import BaseModal from '../BaseModal.vue';
import BaseIcon from '../BaseIcon.vue';

export default {
	components: {
		BaseModal,
		BaseIcon
	},
	data() {
		return {
			btnClasses: [
				'w-20',
				'flex',
				'items-center',
				'justify-center',
				'py-7',
				'mt-20',
				'mx-auto',
				'text-black',
				'bg-gray-200',
				'rounded-full',
				'cursor-pointer',
				'transition-all',
				'hover:bg-gray-300'
			]
		}
	}
}
</script>
