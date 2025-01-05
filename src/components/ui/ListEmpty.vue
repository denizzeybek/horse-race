<template>
  <div>
    <slot name="content">
      <div class="flex flex-col items-center mt-[10%] gap-3" :class="contentClass">
        <NoData color="black" :size="100" />
        <RText
          class="!text-r-secondary text-center [&_strong]:truncate [&_strong]:max-w-80 [&>*]:inline-flex [&_strong]:mx-1"
          as="h5"
          :innerText="message"
        ></RText>
      </div>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import NoData from '@/components/icons/NoData.vue';
import { colors } from '@/constants/colors';
import type { HtmlHTMLAttributes } from 'vue';

interface IProps {
  message?: string;
  contentClass?: HtmlHTMLAttributes['class'];
}

defineProps<IProps>();
</script>
