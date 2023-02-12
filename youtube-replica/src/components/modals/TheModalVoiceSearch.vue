<template>
  <BaseModal title="Search with your voice" has-close-btn>
    <span class="font-medium text-m text-gray-500">
      {{ modalText }}
    </span>
    <div class="flex justify-center items-center mt-20">
      <span v-show="isListening" :class="btnAminationClasses" />
      <button :class="btnClasses" @click="toggleRecording">
        <BaseIcon name="microphone" />
      </button>
    </div>
    <div :class="hintClasses">Tap the microphone to try again</div>
  </BaseModal>
</template>

<script>
import BaseModal from '../BaseModal.vue'
import BaseIcon from '../BaseIcon.vue'

export default {
  mounted () {
    this.handleRecordingTimeout()
  },
  beforeUnmount () {
    clearTimeout(this.recordingTimeout)
  },
  components: {
    BaseModal,
    BaseIcon
  },
  data () {
    return {
      isListening: true,
      isRecording: false,
      isSilence: false,
      recordingTimeout: null
    }
  },
  computed: {
    modalText () {
      if (this.isSilence) {
        return "Didn't hear anything. Please, try again."
      } else if (this.isListening || this.isRecording) {
        return 'Listening...'
      } else {
        return 'Microphone off. Try again!'
      }
    },
    btnClasses () {
      return [
        'w-20',
        'flex',
        'items-center',
        'justify-center',
        'py-7',
        'mx-auto',
        this.isListening ? 'text-white' : 'text-black',
        this.isListening ? 'bg-red-700' : 'bg-gray-200',
        'rounded-full',
        'cursor-pointer',
        'transition-all',
        this.isListening ? 'hover:none' : 'hover:bg-gray-300',
        'z-10'
      ]
    },
    hintClasses () {
      return [
        this.isListening ? 'invisible' : 'visible',
        'mt-4',
        'text-center',
        'text-sm',
        'text-gray-500'
      ]
    },
    btnAminationClasses () {
      return [
        'absolute',
        'w-16',
        'h-16',
        'rounded-full',
        this.isRecording ? 'bg-gray-300' : 'border border-gray-200',
        'animate-ping'
      ]
    }
  },
  methods: {
    toggleRecording () {
      clearTimeout(this.recordingTimeout)

      this.isSilence = false

      if (this.isRecording) {
        this.isListening = false
        this.isRecording = false
      } else if (this.isListening) {
        this.isRecording = true
      } else {
        this.isListening = true
      }

      this.handleRecordingTimeout()
    },
    handleRecordingTimeout () {
      if (this.isListening || this.isRecording) {
        this.recordingTimeout = setTimeout(() => {
          this.isSilence = true
          this.isListening = false
          this.isRecording = false
        }, 5000)
      }
    }
  }
}
</script>
