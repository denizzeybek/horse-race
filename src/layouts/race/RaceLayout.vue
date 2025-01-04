<template>
  <section class="flex flex-col gap-4 my-8">
    <div class="bg-green-300 p-4">
      <slot name="hippodrome" />
    </div>

    <div class="grid gap-4 grid-cols-1 lg:grid-cols-3">
      <RCard title="Horse List">
        <template #body>
          <slot name="horse-list" />
        </template>
      </RCard>

      <RCard title="Programs">
        <template #body>
          <slot name="programs" />
        </template>
      </RCard>

      <RCard title="Results">
        <template #body>
          <slot name="results" />
        </template>
      </RCard>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
