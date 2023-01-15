<template>
   <div class="relative ml-auto -mt-1">
		<button
			@click="toggle"
			:class="btnDotsClasses"
		 >
			 <BaseIcon name="settingsDots" class="w-4 sm:w-5 h-4 sm:h-5" />
		 </button>

			<transition
				enter-from-class="transition opacity-0 scale-90"
			 	enter-active-class="transition ease-out duration-200"
			 	enter-to-class="transform opacity-100 scale-100"
			 	leave-from-class="transform opacity-100 scale-100"
			 	leave-active-class="transition ease-in duration-100"
			 	leave-to-class="transform opacity-0 scale-90"
			>
				<div
					v-show="isOpen"
					@keyup.esc="isOpen = false"
					ref="dropdown"
					tabindex="-1"
					:class="dropdownWrapperClasses"
				>
					<section class="py-2">
						<ul>
							<VideoItemDropdownListItem
								icon-name="listDark"
								label="Add to queue"
							/>
							<VideoItemDropdownListItem
								icon-name="listDark"
								label="Add to queue"
							/>
							<VideoItemDropdownListItem
								icon-name="listDark"
								label="Add to queue"
							/>
							<VideoItemDropdownListItem
								icon-name="listDark"
								label="Add to queue"
							/>
						</ul>
					</section>
				</div>
			</transition>
	 </div>
</template>

<script>
import BaseIcon from '../BaseIcon.vue'
import VideoItemDropdownListItem from "./VideoItemDropdownListItem.vue"

export default {
	mounted() {
    window.addEventListener('click', event => {
			if (!this.$el.contains(event.target)) {
			this.isOpen = false;
			}
		})

		window.addEventListener('scroll', () => {this.isOpen = false})
  },
	components: {
		BaseIcon,
		VideoItemDropdownListItem
	},
	data() {
		return {
			isOpen: false,
			positionClasses: []
		}
	},
	methods: {
		toggle(event) {
			this.isOpen = !this.isOpen

			if(this.isOpen) {
				this.$nextTick(() => {
					this.positionClasses = this.getPositionClasses(event)
				})
			}
		},
		getPositionClasses(event) {
			return [
				this.getTopClass(event),
				this.getBottomClass(event),
				this.getRightClass(event),
				this.getLeftClass(event)
			]
		},
		getTopClass(event) {
			// get vertical coordinate relative to click
			const clickCoordinateY = event.clientY;
			// get btn height
			const btnHeigth = event.currentTarget.offsetHeight;
			// get dropdown height
			const dropdownHeight = this.$refs.dropdown.offsetHeight;

			if (window.innerHeight - clickCoordinateY < dropdownHeight) {
				return 'top-auto';
			}

			if (window.innerHeight - clickCoordinateY < dropdownHeight + btnHeigth) {
				return 'top-0';
			}

			return 'top-6.5';
		},
		getRightClass(event) {
			// get horizontal coordinate relative to click
			const clickCoordinateX = event.clientX;
			// get vertical coordinate relative to click
			const clickCoordinateY = event.clientY;
			// get dropdown width
			const dropdownWidth = this.$refs.dropdown.offsetWidth;
			// get dropdown height
			const dropdownHeight = this.$refs.dropdown.offsetHeight;
			// get btn height
			const btnHeigth = event.currentTarget.offsetHeight;

			if (window.innerWidth - clickCoordinateX > dropdownWidth) {
				return 'right-auto';
			}

			if (window.innerHeight - clickCoordinateY > dropdownHeight + btnHeigth) {
				return 'right-0';
			}

			if (window.innerHeight - clickCoordinateY > dropdownHeight) {
				return 'right-8';
			}

			return 'right-0';
		},
		getLeftClass(event) {
			// get horizontal coordinate relative to click
			const clickCoordinateX = event.clientX;
			// get vertical coordinate relative to click
			const clickCoordinateY = event.clientY;
			// get dropdown width
			const dropdownWidth = this.$refs.dropdown.offsetWidth;
			// get dropdown height
			const dropdownHeight = this.$refs.dropdown.offsetHeight;
			// get btn height
			const btnHeigth = event.currentTarget.offsetHeight;

			if (window.innerWidth - clickCoordinateX < dropdownWidth) {
				return 'left-auto';
			}

			if (window.innerHeight - clickCoordinateY > dropdownHeight + btnHeigth) {
				return 'left-auto';
			}

			if (window.innerHeight - clickCoordinateY < dropdownHeight) {
				return 'left-auto';
			}

			return 'left-8';
		},
		getBottomClass(event) {
			// get vertical coordinate relative to click
			const clickCoordinateY = event.clientY;
			// get btn height
			const btnHeigth = event.currentTarget.offsetHeight;
			// get dropdown height
			const dropdownHeight = this.$refs.dropdown.offsetHeight;

			if (window.innerHeight - clickCoordinateY < dropdownHeight) {
				return 'bottom-8';
			}

			return 'bottom-auto';
		},
	},
	watch: {
		isOpen() {
			document.body.classList.toggle('overflow-hidden')

			this.$nextTick(() => this.isOpen && this.$refs.dropdown.focus())
		}
	},
	computed: {
		btnDotsClasses() {
			return [
				'p-1',
				'text-gray-500',
				'hover:text-gray-700',
				'focus:outline-none',
				'group-hover:opacity-100',
				this.isOpen ? 'opacity-100' : 'opacity-0'
			]
		},
		dropdownWrapperClasses() {
			return [
				'w-48',
				'sm:w-52',
				'overflow-hidden',
				'absolute ',
				'bg-white ',
				'rounded-md ',
				'shadow-md ',
				'z-10',
				'focus:outline-none',
				... this.positionClasses
			]
		}
	}
}
</script>