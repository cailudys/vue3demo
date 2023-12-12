<template>
  <Form :model="localFormData">
    <FormItem label="名称">
      <Input v-model="localFormData.title" />
    </FormItem>
    <FormItem label="标签">
      <Select v-model="localFormData.tags">
        <SelectOption value="tag1">标签一 </SelectOption>
      </Select>
    </FormItem>
  </Form>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Form, FormItem, Input, Select, SelectOption } from 'ant-design-vue'

const emit = defineEmits(['update:formdata'])
const props = defineProps<{
  formdata: {
    title: string
    tags: string[]
  }
}>()

const localFormData = computed({
  get: () => props.formdata,
  // set: (newValue) => emit('update:formdata', newValue)
  set: (newValue) => console.log('23333')
})
</script>
