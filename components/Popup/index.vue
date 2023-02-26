<template>
  <uni-popup
    ref="popup"
    :is-mask-click="false"
    :mask-click="false"
    type="bottom"
    :class="[hasTabBar ? 'has-tab-bar' : '']"
  >
    <view class="popup-wrapper">
      <view class="popup-header">
        <view class="popup-header-cancel" @click="handleClose">取消</view>
        <view class="popup-header-title">{{ title }}</view>
        <view class="popup-header-confirm" @click="handleConfirm">确定</view>
      </view>
      <scroll-view class="popup-body" scroll-y>
        <slot />
      </scroll-view>
    </view>
  </uni-popup>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue'
const props = defineProps({
  // 弹窗显示
  visible: {
    type: Boolean,
    default: false
  },
  hasTabBar: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['confirm', 'close', 'update:visible'])
const popup = ref()

/**
 * 打开弹窗
 */
const open = () => {
  popup.value?.open()
}

/**
 * 关闭弹窗
 */
const close = () => {
  popup.value?.close()
}

/**
 * 点击关闭
 */
const handleClose = () => {
  emit('update:visible', false)
  emit('close')
}

/**
 * 点击确定
 */
const handleConfirm = () => {
  emit('update:visible', false)
  emit('confirm')
}

onMounted(() => {
  // 监听 visible 显示弹窗
  watch(
    () => props.visible,
    val => {
      val ? open() : close()
    }
  )
})
</script>

<style lang="scss" scoped>
.uni-popup {
  :deep(uni-view[name='mask']) {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }
  // #ifdef H5
  .has-tab-bar {
    :deep(uni-view[name='content']) {
      bottom: 50px !important;
    }
  }
  // #endif
}
.popup-wrapper {
  background-color: #fff;
  padding: 16px 0;
  border-radius: 10px 10px 0 0;
  position: relative;

  .popup-header {
    display: flex;
    justify-content: space-between;
    padding: 0 45rpx;
    font-size: 36rpx;
    .popup-header-cancel {
      color: rgba(0, 0, 0, 0.5);
    }
    .popup-header-title {
      font-weight: 500;
      color: rgba(0, 0, 0, 0.9);
    }
    .popup-header-confirm {
      color: #485bf7;
    }
  }
  .popup-body {
    max-height: 60vh;
  }
}
</style>
