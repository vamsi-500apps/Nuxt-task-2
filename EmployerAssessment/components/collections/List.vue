<template>
  <div class="px-4 sm:px-6 lg:px-8 p-5">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">
          Employer Assessments
        </h1>
     
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          @click="AddEmpData"
          type="button"
          class="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Employee
        </button>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Test Type
                </th>
                <th
                  scope="col"
                  class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Max Time
                </th>
                <th
                  scope="col"
                  class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Due Date
                </th>
                <th
                  scope="col"
                  class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Difficulty level
                </th>
                <th
                  scope="col"
                  class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Description
                </th>
                <th
                  scope="col"
                  class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Questions
                </th>
                <th
                  scope="col"
                  class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                AttemptCount
                </th>
                <th
                  scope="col"
                  class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Instructions
                </th>
                <th
                  scope="col"
                  class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Status
                </th>
                <th
                  scope="col"
                  class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Last Modified Date
                </th>
                
               
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="candidate in getTemplateData" :key="candidate">
                <td
                  class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0" 
                >
                  {{ candidate.name }}
                </td>
                <td
                  class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900"
                >
                  {{ candidate.type }}
                </td>
                <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                  {{ candidate.max_time_allowed }}
                </td>
                <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                  {{ candidate.due_date }}
                </td>
                <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                  {{ candidate.difficulty_level }}
                </td>
                <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                  {{ candidate.description }}
                </td>
                <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                  {{ candidate.questions }}
                </td>
                <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                  {{ candidate.multiple_attempts_allowed }}
                </td>
                <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                  {{ candidate.instructions }}
                </td>
                <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                  {{ candidate.status }}
                </td>
                <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                  {{ candidate.last_modified_date }}
                </td>
                <td
                  class="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
                ></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-if="is_sidebar" :key="render">
      <CollectionsAdd />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";
const is_sidebar = ref(false);
const render = ref(0);


const AddEmpData = () => {
  is_sidebar.value = true;
  render.value++;
};
//Get Call
const getOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1IjoiYzNlZTRlOWU1NTk2NDdjZDk4NGVmMzFhNjc4ODNkMmEiLCJkIjoiMTY4MDEwOCIsInIiOiJzYSIsInAiOiJmcmVlIiwiYSI6ImZpbmRlci5pbyIsImwiOiJ1czEiLCJleHAiOjE2ODMzNDkzOTB9.0V2YBlGbEMRMwE5sh1m-7WqAqfbB4_Fmqy9PX5rQoRo`,
  },
};
let getData = useAuthLazyFetch(
  "https://v7-stark-db-orm.mercury.infinity-api.net/api/assessments/?offset=0&limit=100&sort_column=id&sort_direction=desc",
  getOptions
);

let getTemplateData = getData.data._rawValue;
console.log("getTemplate",getTemplateData)

</script>
